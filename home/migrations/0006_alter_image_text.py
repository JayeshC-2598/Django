# Generated by Django 4.2.7 on 2023-12-24 07:05

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_alter_image_text_alter_image_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='text',
            field=ckeditor.fields.RichTextField(),
        ),
    ]
