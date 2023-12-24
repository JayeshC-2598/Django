from django.db import models
from ckeditor.fields import RichTextField


class Contact(models.Model):
    sno=models.AutoField(primary_key=True)
    name=models.CharField(max_length=255)
    phone=models.CharField(max_length=13)
    email=models.CharField(max_length=100)
    content=models.TextField()
    timeStamp=models.DateTimeField(auto_now_add=True,blank=True)

    def __str__(self):
        return 'Message from :'+self.name

class Image(models.Model):
    title=models.CharField(max_length=1000)
    photo=models.ImageField(upload_to="myimage")
    text=models.TextField(max_length=2000)
    date=models.DateTimeField(auto_now_add=True)
    name=models.CharField(max_length=200)
    slug=models.CharField(max_length=200)

    def __str__(self):
        return 'Message from :'+self.name