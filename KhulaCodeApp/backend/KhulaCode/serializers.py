from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from django.db.models import ForeignKey
from django.contrib.auth import authenticate
from .models import Profile,Lesson,School,Choice, Activity, Video, ActivityProgress, VideoProgress
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# class TestSerializer(serializers.Serializer):
#     msg = serializers.CharField()



class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = "__all__"

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
    date_joined = serializers.DateTimeField(source="user.date_joined",read_only=True,format="%Y-%m-%d")
    img = serializers.SerializerMethodField()
    class Meta:
        model = Profile
        fields = ["first_name","last_name","percentage","date_joined","img","xp"]
    
    def get_last_unit(self,obj):
        if hasattr(self,"_last_unit"):
            return self._last_unit
        user = obj.user    
        lessons = sorted(list(Lesson.objects.prefetch_related("activities","videos").all()),key=lambda x:x.unit)
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
    def get_lessons_completed(self,obj):
        user = obj.user
        lessons = sorted(list(Lesson.objects.prefetch_related("activities","videos").all()),key=lambda x:x.unit)
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
            if lesson_completed:
                count+=1
        self._lesson_count_cache = count
        return count
    def get_percentage(self,obj):
        count = self.get_lessons_completed(obj)
        total = Lesson.objects.count()
        if total==0:
            return 0
        return round(count/total *100)
    def get_img(self,obj):
        unit = self.get_last_unit(obj)
        if unit == "complete":
            return "http://127.0.0.1:8000/media/pfp/pfp6.png"
        elif unit==0:
            return "http://127.0.0.1:8000/media/pfp/pfp0.png"
        elif unit==1:
            return "http://127.0.0.1:8000/media/pfp/pfp1.png"
        elif unit==2:
            return "http://127.0.0.1:8000/media/pfp/pfp2.png"
        elif unit==3:
            return "http://127.0.0.1:8000/media/pfp/pfp3.png"
        elif unit==4:
            return "http://127.0.0.1:8000/media/pfp/pfp4.png"
        elif unit==5:
            return "http://127.0.0.1:8000/media/pfp/pfp5.png"


class TagSerializer(serializers.ModelSerializer):
    tag = serializers.SerializerMethodField()
    class Meta:
        model = Profile
        fields =["tag"]
    
    def get_last_unit(self,obj):
        if hasattr(self,"_last_unit"):
            return self._last_unit
        user = obj.user    
        lessons = sorted(list(Lesson.objects.prefetch_related("activities","videos").all()),key=lambda x:x.unit)
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

    def get_tag(self,obj):
        unit = self.get_last_unit(obj)
        if unit == "complete":
            return "Cyber Jungle Hero"
        elif unit==0:
            return "Beginner"
        elif unit==1:
            return "Jungle Explorer"
        elif unit==2:
            return "Path Finder"
        elif unit==3:
            return "Code Tracker"
        elif unit==4:
            return "Cyber Adventurer"
        elif unit==5:
            return "Logic Warrior"


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
        fields = ["xp","img","tag","first_name","last_name","percentage","lessons_completed","last_unit","area","is_teacher"] #"__all__" #["email","password","username","display_name","date_of_birth","xp","img",]
    
    def get_lessons_completed(self,obj):
        user = obj.user    
        lessons = list(sorted(Lesson.objects.prefetch_related("activities","videos").all(),key=lambda x:x.unit))
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
            if lesson_completed:
                count+=1
        self._lesson_count_cache = count
        return count
    
    def get_last_unit(self,obj):
        user = obj.user    
        lessons = sorted(list(Lesson.objects.prefetch_related("activities","videos").all()),key=lambda x:x.unit)
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
        if total==0:
            return 0
        return round(count/total *100)
    def get_area(self,obj):
        unit = self.get_last_unit(obj)
        if unit == "complete":
            return "http://127.0.0.1:8000/media/areas/done.png"
        elif unit==0:
            return "http://127.0.0.1:8000/media/areas/zero.png"
        elif unit==1:
            return "http://127.0.0.1:8000/media/areas/seq.png"
        elif unit==2:
            return "http://127.0.0.1:8000/media/areas/dec.png"
        elif unit ==3:
            return "http://127.0.0.1:8000/media/areas/loop.png"
        elif unit==4:
            return "http://127.0.0.1:8000/media/areas/var.png"
        elif unit ==5:
            return "http://127.0.0.1:8000/media/areas/challenge.png"
    def get_tag(self,obj):
        unit = self.get_last_unit(obj)
        if unit == "complete":
            return "Cyber Jungle Hero"
        elif unit==0:
            return "Beginner"
        elif unit==1:
            return "Jungle Explorer"
        elif unit==2:
            return "Path Finder"
        elif unit==3:
            return "Code Tracker"
        elif unit==4:
            return "Cyber Adventurer"
        elif unit==5:
            return "Logic Warrior"
    def get_img(self,obj):
        unit = self.get_last_unit(obj)
        if unit == "complete":
            return "http://127.0.0.1:8000/media/pfp/pfp6.png"
        elif unit==0:
            return "http://127.0.0.1:8000/media/pfp/pfp0.png"
        elif unit==1:
            return "http://127.0.0.1:8000/media/pfp/pfp1.png"
        elif unit==2:
            return "http://127.0.0.1:8000/media/pfp/pfp2.png"
        elif unit==3:
            return "http://127.0.0.1:8000/media/pfp/pfp3.png"
        elif unit==4:
            return "http://127.0.0.1:8000/media/pfp/pfp4.png"
        elif unit==5:
            return "http://127.0.0.1:8000/media/pfp/pfp5.png"

class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(
        max_length=150,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(write_only = True)
    first_name = serializers.CharField(required=True)#required= True
    last_name = serializers.CharField(required=True)
    school = serializers.PrimaryKeyRelatedField(queryset=School.objects.all(),required=True)

    def create(self, validated_data):
            school = validated_data.pop("school")
            user = User.objects.create_user(
                username = validated_data["username"],
                first_name = validated_data["first_name"],
                last_name = validated_data["last_name"],
                password = validated_data["password"])
            Profile.objects.create(user=user,school=school)
            return user 
            
