# Generated by Django 4.2.7 on 2023-12-24 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_alter_image_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='text',
            field=models.TextField(max_length=2000),
        ),
    ]
