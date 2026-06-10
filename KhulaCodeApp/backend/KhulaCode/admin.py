from django.contrib import admin
from .models import Profile,Video,Lesson,Activity,Choice

# Register your models here.

admin.site.register(Video)
admin.site.register(Lesson)
admin.site.register(Activity)
admin.site.register(Choice)
admin.site.register(Profile)


