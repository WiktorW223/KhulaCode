from django.test import TestCase
from rest_framework.test import APIClient, APITestCase
from .models import Lesson,Choice,Activity,Video,User
from .serializers import ActivitySerializer

# Create your tests here.

class ViewLesson(TestCase):
    def setUp(self):
        self.client = APIClient()
        user =User.objects.create_user(username="tester",password="123")
        self.client.force_authenticate(user=user)
        lesson = Lesson.objects.create(description="first lesson",number=1,unit=1,title="FirstLesson")
        Video.objects.create(lesson=lesson, order=1,title=lesson.title,video_url="")
        activity = Activity.objects.create(title="FirstActivity",order=1,question="How are you?",lesson=lesson)
    def test_created_lesson(self):
        response = self.client.get("/lesson/1/1/")
        self.assertEqual(response.status_code,200)
        self.assertEqual(response.data[0]["total_number"],1)
        self.assertEqual(response.data[0]["completed"],False)

class ActivitySerializerTest(TestCase):
    def test_serializer_response(self):
        self.client = APIClient()
        lesson = Lesson.objects.create(description="first lesson",number=1,unit=1,title="FirstLesson")
        activity = Activity.objects.create(title="FirstActivity",order=1,question="How are you?",lesson=lesson)
        serializer = ActivitySerializer(activity)
        self.assertEqual(serializer.data["type"],"activity")
        self.assertEqual(serializer.data["completed"],False)

class TestRegisterAndSignIn(TestCase):
    def test_register(self):
        self.client = APIClient()
        response = self.client.post("/register/",{"first_name":"John","last_name":"Doe","username":"JohnD","password":"JD123"})
        self.assertEqual(response.status_code,201)
        self.assertEqual(User.objects.count(),1)

          

    def test_sign_in(self):
        self.client = APIClient()
        user = User.objects.create_user(first_name="Tester",last_name="Test",username="TT",password="TT123")
        response = self.client.post("/login/",{"username":"TT","password":"TT123"})
        self.assertEqual(response.status_code,200)

    




        

