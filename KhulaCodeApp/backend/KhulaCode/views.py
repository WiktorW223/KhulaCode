from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse,FileResponse
from django.db import IntegrityError 
from django.template import loader
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.models import User
from .serializers import  ProfileSerializer, RegisterSerializer, TokenSerializer, LessonSerializer, CurriculumSerializer, LessonListSerializer,StudentSerializer
from .models import Profile, Lesson , Activity, Video, Choice, ActivityProgress,VideoProgress, Video
from rest_framework_simplejwt.views import TokenObtainPairView
FRONTEND_URL = "http://localhost:5173"

class Index(APIView):
    None



# @permission_classes([IsAdminUser])
@api_view(["GET"])
def get_all_students(request):
    students = Profile.objects.filter()
    serializer = StudentSerializer(students,many=True)
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_profile_info(request):
    user = request.user
    profile = get_object_or_404(Profile,user=user)
    serializer = ProfileSerializer(profile)

    
    return Response({"profile_data":serializer.data})

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_most_recent(request):
    # if not request.user.is_authenticated:
    #     return Response({"error":"not authenticated"})
    user = request.user    
    lessons = Lesson.objects.all()
    for lesson in lessons:
        items = sorted((list(lesson.activities.all())+list(lesson.videos.all())),key=lambda item:item.order)
        for item in items:
            if isinstance(item,Video):
                completed = VideoProgress.objects.filter(video=item,user=user,completed=True).exists()
            else:
                completed = ActivityProgress.objects.filter(activity=item,user=user, completed=True).exists()
            if not completed:
                return Response({"unit":lesson.unit,"number":lesson.number,"order":item.order})
    
    return Response({"message":"all lessons completed"})



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_activity(request,lesson_id):
    activity = get_object_or_404(Activity,lesson_id=lesson_id)
    return Response({"question": activity.question})

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def mark_activity_complete(request,lesson_id,id):
    # if not request.user.is_authenticated:
    #     return Response({"error":"not authenticated"})
    user = request.user
    choice_order = request.data.get("choice_order")
    if choice_order is None:
        return Response(
            {"detail": "choice_order is required"},
            status=status.HTTP_400_BAD_REQUEST,
        )
    activity = get_object_or_404(Activity, lesson_id=lesson_id, pk=id)
    choice = get_object_or_404(Choice, activity=activity, order=choice_order)
    profile = get_object_or_404(Profile, user=user)

    progress, created = ActivityProgress.objects.get_or_create(
        user=user,
        activity=activity,
        defaults={"completed": choice.is_correct},
    )

    was_completed = progress.completed
    amount_xp=0
    awarded_xp = False
    if choice.is_correct and not was_completed:
        progress.completed = True
        progress.save(update_fields=["completed"])

    if choice.is_correct and not was_completed:
        profile.xp += profile.get_xp("activity",False)
        profile.save(update_fields=["xp"])
        awarded_xp = True
        amount_xp = profile.get_xp("activity",False)
    elif choice.is_correct and created:
        profile.xp += profile.get_xp("activity",True)
        profile.save(update_fields=["xp"])
        awarded_xp = True
        amount_xp = profile.get_xp("activity",True)
    

    message = "Correct! Good job!" if choice.is_correct else "Not quite, try again."
    return Response(
        {
            "message": message,
            "correct": choice.is_correct,
            "xp_awarded": awarded_xp,
            "amount_xp":amount_xp,
            "completed": progress.completed,
            "choice_order": choice.order,
            "activity_order": activity.order,
        }
    )
    

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def mark_video_complete(request,lesson_id,id):
    # if not request.user.is_authenticated:
    #     return Response({"error":"not authenticated"})
    user = request.user
    
    video = get_object_or_404(Video, lesson_id=lesson_id, pk=id)
    profile = get_object_or_404(Profile, user=user)
    progress, created = VideoProgress.objects.get_or_create(
        user=user,
        video=video,
        defaults={"completed": True},
    )
    amount_xp = 0
    if created:
        profile.xp += profile.get_xp("video",False)
        profile.save(update_fields=["xp"])
        amount_xp = profile.get_xp("video",False)
    elif not progress.completed:
        progress.completed=True
        progress.save(update_fields=["completed"])
    return Response({"detail":"video completed","created":created,"completed":progress.completed,"amount_xp":amount_xp})




@api_view(["POST"])
# @permission_classes([IsAdminUser])
def make_lesson(request):
    data = request.data
    content = data.get("content", [])
    lesson = Lesson.objects.create(
        title=data.get("title", ""),
        description=data.get("description", ""),
        unit=data.get("unit", 0),
        number=data.get("number", 0),
    )

    for item in content:
        item_type = item.get("type")

        if item_type == "video":
            Video.objects.create(
                lesson=lesson,
                title=item.get("title", ""),
                video_url=item.get("video_url", ""),
                order=item.get("order", 0),
            )
        elif item_type == "activity":
            activity = Activity.objects.create(
                lesson=lesson,
                title=item.get("title", ""),
                question=item.get("question", ""),
                order=item.get("order", 0),

            )

            for index, obj in enumerate(item.get("choices", []), start=1):
                Choice.objects.create(
                    activity=activity,
                    text=obj.get("text", ""),
                    order=obj.get("order", index),
                    is_correct=obj.get("is_correct", obj.get("isCorrect", False)),
                )

    return Response({"detail":"lesson created"})


    


# @api_view(["GET"])
# @permission_classes([IsAuthenticated])
# def get_lesson_video(request,lesson_num):
#     lesson = get_object_or_404(Lesson, pk=lesson_num)
#     return FileResponse(lesson.video_url.open(),content_type = "video/mp4")



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_num_lesson_unit(request,unit):
    count = Lesson.objects.filter(unit=unit).count()
    return Response({"num":{count}})

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_many_lessons(request,unit):
    if unit==00:
        lessons = Lesson.objects.all()
        serializer = CurriculumSerializer(lessons,many=True,context={"request":request})
    else:
        lessons = Lesson.objects.filter(unit=unit)
        serializer = LessonListSerializer(lessons,many=True,context={"request":request})
    return Response(serializer.data)


class LessonDetailView(APIView):
    permission_classes=[IsAuthenticated]
    def get(self,request,unit,lesson_num):

        lesson = get_object_or_404(Lesson, number=lesson_num,unit=unit)
        serializer = LessonSerializer(lesson, context={"request":request})
        return Response(serializer.data)


class Register(APIView):
    
    def post(self,request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = serializer.save()
                return Response({"message":"Successful Registration"}, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({"username":["A user with this username already exists"]},status=400)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TokenView(TokenObtainPairView):
    serializer_class = TokenSerializer
        
class ForgotPassword(APIView):
    def post(self,request):
        username = request.data.get("username")
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({"detail":'If this username exists, a reset link was created.'})
        token = default_token_generator.make_token(user)
        reset_url = f"{FRONTEND_URL}/reset-password/{user.pk}/{token}"
        #when khulacode email made
        # send_mail(
        #     "Reset your password",
        #     f"Click here: {reset_url}",
        #     "noreply@yourapp.com",
        #     [user.email],
        # )
        return Response({"detail":'If this username exists, a reset link was created.',"url": reset_url})

class ResetPassword(APIView):
    def post(self, request):
        user_id = request.data.get("user_id")
        new_password = request.data.get("new_password")
        token = request.data.get("token")

        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return Response({"detail":"invalid request or token 1"}, status=400)

        if not default_token_generator.check_token(user,token):
            return Response({"detail":"invalid request or token"},status=400)
        user.set_password(new_password)
        user.save()
        return Response({"detail":"password reset successfully"})
        
