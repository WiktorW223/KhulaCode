from django.db import models
from django.contrib.auth.models import User
from django.db.models import ForeignKey

# Create your models here.

# class Achievements(models.Model):
#     title = models.CharField(max_length=50)
#     needed_xp = models.IntegerField()
    

class Profile(models.Model):
    #date_of_birth = models.DateTimeField("date of birth")
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name="profile") 
    xp = models.IntegerField(default=0)
    is_teacher=models.BooleanField(default=False)

    def __str__(self):
        return f"Name: {self.user.username}" 
    def get_xp(self,item,first):
         
         if item=="video":
                return 200
         elif item=="activity":
              if first:
                  return 450
              else:
                  return 300

    

class Lesson(models.Model):
    description = models.CharField(max_length=500)
    completed = models.BooleanField(default=False)
    title = models.CharField(max_length=100)
    unit = models.IntegerField(default=0)
    number = models.IntegerField(default=0)
    
    class Meta:
        ordering=["unit", "number", "id"]

class Activity(models.Model):
    lesson = ForeignKey(Lesson,on_delete=models.CASCADE, related_name="activities")
    title = models.CharField(max_length=100, default="", blank=True)
    question = models.CharField(max_length=500)
    order = models.IntegerField(default=0)

class Choice(models.Model):
    activity = ForeignKey(Activity, on_delete=models.CASCADE, related_name="choices")
    text = models.CharField(max_length=500)
    order = models.IntegerField(default=0)
    is_correct = models.BooleanField(default=False)

class Video(models.Model):
    lesson = ForeignKey(Lesson,on_delete=models.CASCADE, related_name="videos")
    title = models.CharField(max_length=100, default="", blank=True)
    video_url = models.CharField(max_length=500)
    order = models.IntegerField(default=0)

class VideoProgress(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE, related_name="video_progress")
    video = models.ForeignKey(Video,on_delete=models.CASCADE,related_name="video")
    completed = models.BooleanField(default=False)
    class Meta:
        unique_together = ["user","video"]
class ActivityProgress(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE, related_name="activity_progress")
    activity = models.ForeignKey(Activity,on_delete=models.CASCADE,related_name="activity")
    completed = models.BooleanField(default=False)
    class Meta:
        unique_together = ["user","activity"]