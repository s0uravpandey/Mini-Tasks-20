# Generated by Django 3.0.6 on 2020-06-14 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogreq', '0006_auto_20200614_1537'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogreq',
            name='date_rec',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
