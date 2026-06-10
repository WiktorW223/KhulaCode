from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from django.db.models import ForeignKey
from django.contrib.auth import authenticate
from .models import Profile,Lesson, Choice, Activity, Video, ActivityProgress, VideoProgress
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# class TestSerializer(serializers.Serializer):
#     msg = serializers.CharField()

class TokenSerializer(TokenObtainPairSerializer):
    username_field = "username"

    def validate(self, attrs):
        username = attrs.get("username")
        password = attrs.get("password")

        user = authenticate(
            request=self.context.get("request"),
            username=username,
            password=password,
        )

        if user is None:
            raise serializers.ValidationError(
                {"non_field_errors": ["invalid username or password"]}
            )

        refresh = self.get_token(user)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }
          
class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
         model = Choice
         fields="__all__"

class ActivitySerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    choices = ChoiceSerializer(many=True,read_only=True)
    completed = serializers.SerializerMethodField()
    class Meta:
          model = Activity
          fields = "__all__"
    def get_type(self,obj):
         return "activity"
    def get_completed(self,obj):
         request = self.context.get("request")
         if not request or not request.user.is_authenticated:
              return False
         return ActivityProgress.objects.filter(user=request.user,activity=obj,completed=True).exists()

class VideoSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    completed = serializers.SerializerMethodField()
    class Meta:
          model = Video
          fields = "__all__"
    def get_type(self,obj):
         return "video"
    def get_completed(self,obj):
         request = self.context.get("request")
         if not request or not request.user.is_authenticated:
              return False
         return VideoProgress.objects.filter(user=request.user,video=obj,completed=True).exists()

class LessonListSerializer(serializers.ModelSerializer):
    num_lesson = serializers.SerializerMethodField()
    class Meta:
         model = Lesson
         fields = ["id","unit","number","title","num_lesson"]
    def get_num_lesson(self,obj):
        
        return Lesson.objects.filter(unit=obj.unit).count()

class CurriculumActivitySerializer(serializers.ModelSerializer):
    completed = serializers.SerializerMethodField()
    type = serializers.SerializerMethodField()

    class Meta:
        model = Activity
        fields = ["title","order","completed","type","id"]
    def get_type(self,obj):
         return "activity"
    def get_completed(self,obj):
        request= self.context.get("request")
        if not request or not request.user.is_authenticated:
            return False
        return ActivityProgress.objects.filter(user=request.user,activity=obj,completed=True).exists()
         

class CurriculumVideoSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    completed = serializers.SerializerMethodField()
    class Meta:
        model = Video
        fields = ["title","order","completed","type","id"]
    def get_type(self,obj):
         return "video"
    def get_completed(self,obj):
        request =self.context.get("request")
        if not request or not request.user.is_authenticated:
            return False
        return VideoProgress.objects.filter(video=obj,user=request.user,completed=True).exists()
    

class CurriculumSerializer(serializers.ModelSerializer):
    completed = serializers.SerializerMethodField()
    activities = CurriculumActivitySerializer(many=True,read_only=True)
    videos = CurriculumVideoSerializer(many=True,read_only=True)
    class Meta:
         model = Lesson
         fields = ["id","unit","number","title","completed","activities","videos"]
    def get_completed(self,obj):
        request = self.context.get("request")
        if not request or not request.user.is_authenticated:
            return False
        activity_ids = list(obj.activities.values_list("id", flat=True))
        video_ids = list(obj.videos.values_list("id", flat=True))
        total_items = len(activity_ids) + len(video_ids)

        if total_items == 0:
            return False

        completed_activities = ActivityProgress.objects.filter(
            user=request.user,
            activity_id__in=activity_ids,
            completed=True,
        ).count()
        completed_videos = VideoProgress.objects.filter(
            user=request.user,
            video_id__in=video_ids,
            completed=True,
        ).count()

        return completed_activities + completed_videos == total_items
         

class LessonSerializer(serializers.ModelSerializer):
    total_number = serializers.SerializerMethodField()
    activities = ActivitySerializer(many=True,read_only=True)
    videos = VideoSerializer(many=True, read_only=True)
    completed = serializers.SerializerMethodField()

    class Meta:
          model =Lesson
          fields="__all__"

    def get_total_number(self, obj):
        return Lesson.objects.count()

    def get_completed(self, obj):
        request = self.context.get("request")
        if not request or not request.user.is_authenticated:
            return False

        activity_ids = list(obj.activities.values_list("id", flat=True))
        video_ids = list(obj.videos.values_list("id", flat=True))
        total_items = len(activity_ids) + len(video_ids)

        if total_items == 0:
            return False

        completed_activities = ActivityProgress.objects.filter(
            user=request.user,
            activity_id__in=activity_ids,
            completed=True,
        ).count()
        completed_videos = VideoProgress.objects.filter(
            user=request.user,
            video_id__in=video_ids,
            completed=True,
        ).count()

        return completed_activities + completed_videos == total_items
    


class StudentSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source="user.first_name",read_only=True)
    last_name = serializers.CharField(source="user.last_name",read_only = True)
    percentage = serializers.SerializerMethodField()
    date_joined = serializers.CharField(source="user.date_joined",read_only=True)
    img = serializers.SerializerMethodField()
    class Meta:
        model = Profile
        fields = ["first_name","last_name","percentage","date_joined","img"]
    
    def get_lessons_completed(self,obj):
        user = obj.user
        lessons = Lesson.objects.prefetch_related("activities","videos").all()
        count =0
        for lesson in lessons:
            lesson_completed = True
            items = sorted(list(lesson.videos.all())+list(lesson.activities.all()),key=lambda item:item.order)
            if not items:
                continue
            for item in items:
                if isinstance(item,Video):
                    completed = VideoProgress.objects.filter(video=item,user=user,completed=True).exists()
                else:
                    completed = ActivityProgress.objects.filter(activity=item,user=user,completed=True).exists()
                if not completed:
                    lesson_completed = False
                    break
            if lesson_completed:
                count+=1
        return count
    def get_percentage(self,obj):
        count = self.get_lessons_completed(obj)
        total = Lesson.objects.count()
        return round(count/total *100)
    def get_img(self,obj):
        count = self.get_lessons_completed(obj)
        
        if count<5:
            return "http://127.0.0.1:8000/media/pfp/pfp1.png"
        elif count<8:
            return "http://127.0.0.1:8000/media/pfp/pfp2.png"
        elif count <13:
            return "http://127.0.0.1:8000/media/pfp/pfp3.png"
        elif count<17:
            return "http://127.0.0.1:8000/media/pfp/pfp4.png"
        elif count <21:
            return "http://127.0.0.1:8000/media/pfp/pfp5.png"
        else:
            return "http://127.0.0.1:8000/media/pfp/pfp6.png"




class ProfileSerializer(serializers.ModelSerializer):
    tag = serializers.SerializerMethodField()
    img = serializers.SerializerMethodField()
    lessons_completed = serializers.SerializerMethodField()
    last_unit = serializers.SerializerMethodField()
    percentage = serializers.SerializerMethodField()
    area = serializers.SerializerMethodField()
    first_name = serializers.CharField(source="user.first_name",read_only=True)
    last_name = serializers.CharField(source="user.last_name",read_only = True)
    class Meta:
        model = Profile
        fields = ["xp","img","tag","first_name","last_name","percentage","lessons_completed","last_unit","area"] #"__all__" #["email","password","username","display_name","date_of_birth","xp","img",]
    
    def get_lessons_completed(self,obj):
        if hasattr(self,"_lesson_count_cache"):
            return self._lesson_count_cache
        user = obj.user    
        lessons = Lesson.objects.prefetch_related("activities","videos").all()
        count =0
        for lesson in lessons:
            lesson_completed = True
            items = sorted(list(lesson.videos.all())+list(lesson.activities.all()),key=lambda item:item.order)
            if not items:
                continue
            for item in items:
                if isinstance(item,Video):
                    completed = VideoProgress.objects.filter(video=item,user=user,completed=True).exists()
                else:
                    completed = ActivityProgress.objects.filter(activity=item,user=user,completed=True).exists()
                if not completed:
                    lesson_completed = False
                    break
            if lesson_completed:
                count+=1
        self._lesson_count_cache = count
        return count
    
    def get_last_unit(self,obj):
        if hasattr(self,"_last_unit"):
            return self._last_unit
        user = obj.user    
        lessons = Lesson.objects.prefetch_related("activities","videos").all()
        count =0
        for lesson in lessons:
            lesson_completed = True
            items = sorted(list(lesson.videos.all())+list(lesson.activities.all()),key=lambda item:item.order)
            if not items:
                continue
            for item in items:
                if isinstance(item,Video):
                    completed = VideoProgress.objects.filter(video=item,user=user,completed=True).exists()
                else:
                    completed = ActivityProgress.objects.filter(activity=item,user=user,completed=True).exists()
                if not completed:
                    lesson_completed = False
                    self._last_unit = lesson.unit
                    return lesson.unit
            if lesson_completed:
                count+=1
        return "complete"
        
    
    def get_percentage(self,obj):
        count = self.get_lessons_completed(obj)
        total = Lesson.objects.count()
        return round(count/total *100)
    def get_area(self,obj):
        count = self.get_lessons_completed(obj)
        if count<2:
            return "http://127.0.0.1:8000/media/areas/zero.png"
        elif count<5:
            return "http://127.0.0.1:8000/media/areas/seq.png"
        elif count<8:
            return "http://127.0.0.1:8000/media/areas/dec.png"
        elif count <13:
            return "http://127.0.0.1:8000/media/areas/loop.png"
        elif count<17:
            return "http://127.0.0.1:8000/media/areas/var.png"
        elif count <21:
            return "http://127.0.0.1:8000/media/areas/challenge.png"
        else:
            return "http://127.0.0.1:8000/media/areas/done.png"
    def get_tag(self,obj):
        count = self.get_lessons_completed(obj)
        
        if count<5:
            return "Jungle Explorer"
        elif count<8:
            return "Path Finder"
        elif count <13:
            return "Code Tracker"
        elif count<17:
            return "Cyber Adventurer"
        elif count <21:
            return "Logic Warrior"
        else:
            return "Cyber Jungle Hero"
    def get_img(self,obj):
        count = self.get_lessons_completed(obj)
        
        if count<5:
            return "http://127.0.0.1:8000/media/pfp/pfp1.png"
        elif count<8:
            return "http://127.0.0.1:8000/media/pfp/pfp2.png"
        elif count <13:
            return "http://127.0.0.1:8000/media/pfp/pfp3.png"
        elif count<17:
            return "http://127.0.0.1:8000/media/pfp/pfp4.png"
        elif count <21:
            return "http://127.0.0.1:8000/media/pfp/pfp5.png"
        else:
            return "http://127.0.0.1:8000/media/pfp/pfp6.png"

class RegisterSerializer(serializers.Serializer):
    profile = ProfileSerializer(read_only = True)
    username = serializers.CharField(
        max_length=150,
        validators=[UniqueValidator(queryset=User.objects.all())],
    )
    password = serializers.CharField(write_only = True)
    first_name = serializers.CharField(required=True)#required= True
    last_name = serializers.CharField(required=True)

    def create(self, validated_data):
            user = User.objects.create_user(
                username = validated_data["username"],
                first_name = validated_data["first_name"],
                last_name = validated_data["last_name"],
                password = validated_data["password"])
            return user 
