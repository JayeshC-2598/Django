from django.contrib import admin
from .models import Contact,Image# Register your models here.
admin.site.register(Contact)
@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['id','photo','date','text']

