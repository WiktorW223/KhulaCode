from django.urls import path
from . import views
from .views import Register, ForgotPassword, ResetPassword, TokenView, LessonDetailView,get_profile_info, get_many_lessons, make_lesson, mark_activity_complete,mark_video_complete,get_most_recent,get_num_lesson_unit,get_all_students
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenRefreshView
from .serializers import TokenSerializer



urlpatterns = [
path("", views.Index.as_view(),name="index"),
#path("test/",views.Test,name="test"),
path("register/", Register.as_view(),name="register"),
path("login/",TokenView.as_view(), name="login"),
path("token/refresh/",TokenRefreshView.as_view(),name="token_refresh"),
path("forgot-password/",ForgotPassword.as_view(),name="forgot-password"),
path("reset-password/",ResetPassword.as_view(),name="reset-password"),
path("lessons/<int:unit>/",get_many_lessons,name="get_many_lessons"),
path("lesson/<int:unit>/<int:lesson_num>/",LessonDetailView.as_view(),name="lesson"),
path("activity/<int:lesson_id>/<int:id>/attempt/",mark_activity_complete,name="activity_complete"),
path("video/<int:lesson_id>/<int:id>/attempt/",mark_video_complete,name="video_complete"),
# path("lesson/video/<int:lesson_num>",get_lesson_video,name="get_lesson_video"),
# path("lesson/<int:lesson_num>/activity/",),
path("make-lesson/",make_lesson,name="make-lesson"),
path("get-last/",get_most_recent,name="get_most_recent"),
path("get-info/<int:check>/",get_profile_info,name="get_info"),
path("num-lesson-unit/<int:unit>/",get_num_lesson_unit,name="get_num_lessons"),
path("get-all-student",get_all_students,name="get_all_students")

]
