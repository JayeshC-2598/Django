from django.http import HttpResponse
from django.shortcuts import render
from .models import Contact,Image
from .forms import ImageForm
from django.contrib import messages
# Create your views here.

def home(request):
    messages.success(request, "welcome to Blog")
    if request.method == "POST":
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    form = ImageForm()
    img = Image.objects.all()
    return render(request, 'home.html', {'form': form, 'img': img})


def contact(request):
    messages.success(request, "welcome to contact")
    if request.method == "POST":

        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        phone = request.POST.get('phone', '')
        content = request.POST.get('content', '')

        if len(name) < 5 or len(email) < 3 or len(phone) < 10 or len(content) < 4:
            messages.error(request, "please fill form correctly")
        else:
            contact = Contact(name=name, email=email, phone=phone, content=content)
            contact.save()
            messages.success(request, "form submitted sucessfully!!")




    return render(request, "contact.html")


def about(request):
    messages.success(request, "welcome to about")
    return render(request,'about.html')

def addPost(request):
    messages.success(request, "welcome to addpost")
    if request.method == "POST":
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    form = ImageForm()
    img = Image.objects.all()
    return render(request, 'addpost.html', {'form': form, 'img': img})

def search(request):
    if request.method=='GET':
        q=request.GET.get('query')
        #img=Image.objects.all()
        img=Image.objects.filter(text__icontains=q)
        return render(request,"search.html",{'img':img})
    else:
        print("no info to show")

