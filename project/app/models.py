from django.contrib.auth.models import User, AbstractUser
from django.db import models


# Create your models here
class Games(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='games')

    def __str__(self):
        return self.name


class Types(models.Model):
    label = models.CharField(max_length=100)
    TYPE_CHOICES = (
        ('select', 'Select'),
        ('checkbox', 'Checkbox'),
    )
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    game = models.ForeignKey(Games, on_delete=models.CASCADE)

    def __str__(self):
        return self.label


class Options(models.Model):
    label = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    type = models.ForeignKey(Types, on_delete=models.CASCADE)

    def __str__(self):
        return self.label


class Items(models.Model):
    game_id = models.ForeignKey(Games, on_delete=models.CASCADE)
    icon = models.ImageField(upload_to='items')
    name = models.CharField(max_length=100)
    description = models.TextField()
    options = models.ManyToManyField(Options)

    def __str__(self):
        return self.name


class Lots(models.Model):
    item_id = models.ForeignKey(Items, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.IntegerField()
    sold_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.item_id.name


class PaymentsHistory(models.Model):
    value = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user_id.username
