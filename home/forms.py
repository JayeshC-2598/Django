from django import forms
from .models import Contact
from .models import Image

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone', 'content']




class ImageForm(forms.ModelForm):
    class Meta:
        model=Image
        fields='__all__'