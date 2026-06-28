from rest_framework.test import APITestCase
from rest_framework import status
from .models import Lesson, Activity, Video, User, ActivityProgress, VideoProgress
from .serializers import ActivitySerializer
from django.urls import reverse

# Create your tests here.

class ViewLesson(APITestCase):
    def setUp(self):
        user =User.objects.create_user(username="tester",password="123")
        self.client.force_authenticate(user=user)
        lesson = Lesson.objects.create(description="first lesson",number=1,unit=1,title="FirstLesson")
        Video.objects.create(lesson=lesson, order=1,title=lesson.title,video_url="")
        activity = Activity.objects.create(title="FirstActivity",order=1,question="How are you?",lesson=lesson)
    def test_created_lesson(self):
        response = self.client.get(reverse("lesson",args=[1,1]))
        self.assertEqual(response.status_code,200)
        self.assertEqual(response.data["total_number"],1)
        self.assertEqual(response.data["completed"],False)

class ActivitySerializerTest(APITestCase):
    def test_serializer_response(self):
        lesson = Lesson.objects.create(description="first lesson",number=1,unit=1,title="FirstLesson")
        activity = Activity.objects.create(title="FirstActivity",order=1,question="How are you?",lesson=lesson)
        serializer = ActivitySerializer(activity)
        self.assertEqual(serializer.data["type"],"activity")
        self.assertEqual(serializer.data["completed"],False)

class TestRegisterAndSignIn(APITestCase):
    def test_register(self):
        response = self.client.post(reverse("register"),{"first_name":"John","last_name":"Doe","username":"JohnD","password":"JD123"},format="json")
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(),1)

    def test_sign_in(self):
        User.objects.create_user(first_name="Tester",last_name="Test",username="TT",password="TT123")
        response = self.client.post(reverse("login"),{"username":"TT","password":"TT123"},format="json")
        self.assertEqual(response.status_code,200)
    
    def test_faulty_sign_in(self):
        response = self.client.post(reverse("login"),{"username":"T","password":"3"},format="json")
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)

    def test_faulty_register(self):
        response = self.client.post(reverse("register"),{"first_name":"","last_name":"","username":"","password":""},format="json")
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(),0)
    
    def test_reset_password(self):
        user = User.objects.create_user(first_name="Tester",last_name="McTest",username="TT",password="oldpass")
        self.client.force_authenticate(user=user)
        response = self.client.post(reverse("forgot-password"),{"username":"TT","password":"TT123"})
        self.assertEqual(response.status_code,status.HTTP_403_FORBIDDEN)
        user.profile.is_teacher = True
        self.assertTrue(user.check_password("oldpass"))
        response = self.client.post(reverse("forgot-password"),{"username":"notexist","password":"TT123"})
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        response = self.client.post(reverse("forgot-password"),{"username":"TT","password":"TT123"})
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        response = self.client.post(reverse("login"),{"username":"TT","password":"TT123"})
        self.assertEqual(response.status_code,status.HTTP_200_OK)

    def test_admin_privilege(self):
        user = User.objects.create_user(first_name="Tester",last_name="McTest",username="TT",password="oldpass")
        self.client.force_authenticate(user=user)
        user.profile.is_teacher = True
        response = self.client.get(reverse("all-students"))
        self.assertEqual(response.status_code,status.HTTP_200_OK)
    def test_authorized_view(self):
        response = self.client.get(reverse("curriculum"))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        user = User.objects.create_user(first_name="Tester",last_name="McTest",username="TT",password="pass")
        response = self.client.get(reverse("curriculum"))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.client.force_authenticate(user=user)
        response = self.client.get(reverse("curriculum"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class ProgressTesting(APITestCase):
    def create_lesson_with_items(self, unit, number):
        lesson = Lesson.objects.create(
            description=f"lesson {unit}-{number}",
            number=number,
            unit=unit,
            title=f"Lesson {unit}-{number}",
        )
        Activity.objects.create(title="Activity", order=1, question="How are you?", lesson=lesson)
        Video.objects.create(lesson=lesson, order=2, title="Video", video_url="")
        return lesson
    
    def test_completed_progress(self):
        user = User.objects.create_user(first_name="Tester",last_name="Test",username="TT",password="TT123")
        self.client.force_authenticate(user=user)

        for unit in range(1, 6):
            for number in range(1, 6):
                self.create_lesson_with_items(unit, number)

        lessons = Lesson.objects.prefetch_related("activities","videos").all()
        for lesson in lessons:
            activity = list(lesson.activities.all())[0]
            video = list(lesson.videos.all())[0]
            ActivityProgress.objects.create(activity=activity,completed=True,user=user)
            VideoProgress.objects.create(video=video,completed=True,user=user)
        response = self.client.get(reverse("get_info",args=[0]))
        profile_data = response.data["profile_data"]
        self.assertEqual(profile_data["percentage"],100)
        self.assertEqual(profile_data["tag"],"Cyber Jungle Hero")
        self.assertEqual(profile_data["area"],"http://127.0.0.1:8000/media/areas/done.png")
    
    def test_unordered_lesson_completion(self):
        user = User.objects.create_user(first_name="Tester",last_name="Test",username="TT",password="TT123")
        self.client.force_authenticate(user=user)
        for unit in range(1, 6):
            for number in range(1, 6):
                self.create_lesson_with_items(unit, number)
        lesson1 =Lesson.objects.get(unit=3,number=1)
        activity = list(lesson1.activities.all())[0]
        video = list(lesson1.videos.all())[0]
        ActivityProgress.objects.create(activity=activity,completed=True,user=user)
        VideoProgress.objects.create(video=video,completed=True,user=user)
        lesson2 =Lesson.objects.get(unit=2,number=3)
        activity = list(lesson2.activities.all())[0]
        video = list(lesson2.videos.all())[0]
        ActivityProgress.objects.create(activity=activity,completed=True,user=user)
        VideoProgress.objects.create(video=video,completed=True,user=user)

        response = self.client.get(reverse("get_info",args=[0]))
        profile_data = response.data["profile_data"]
        response1=self.client.get(reverse("lesson",args=[3,1]))
        response2=self.client.get(reverse("lesson",args=[2,3]))
        self.assertEqual(profile_data["lessons_completed"],2)
        self.assertEqual(response1.data["completed"],True)
        self.assertEqual(response2.data["completed"],True)