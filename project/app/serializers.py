from rest_framework import serializers
from django.contrib.auth.models import User
from . import models


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = ('id', 'username', 'password')


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Games
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    game_id = GameSerializer()

    class Meta:
        model = models.Items
        fields = '__all__'


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Types
        fields = '__all__'


class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Options
        fields = '__all__'


class LotSerializer(serializers.ModelSerializer):
    item_id = ItemSerializer()

    class Meta:
        model = models.Lots
        fields = '__all__'


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PaymentsHistory
        fields = '__all__'

