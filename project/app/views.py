from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from . import models
from . import serializers


# Create your views here.
class UserLogin(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        # Аутентификация пользователя
        user = authenticate(username=username, password=password)
        if user is not None:
            # Генерация токенов
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': str(user.id)
            }, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


class UserRegister(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        if User.objects.filter(username=username).exists():
            return Response({"error": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)

        # Создание нового пользователя
        user = User.objects.create(
            username=username,
            password=make_password(password)
        )

        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user_id': str(user.id)
        }, status=status.HTTP_201_CREATED)


class ItemsViewSet(viewsets.ModelViewSet):
    queryset = models.Items.objects.all()
    serializer_class = serializers.ItemSerializer


class GamesViewSet(viewsets.ModelViewSet):
    queryset = models.Games.objects.all()
    serializer_class = serializers.GameSerializer


class TypesViewSet(generics.ListCreateAPIView):
    queryset = models.Types.objects.all()
    serializer_class = serializers.TypeSerializer


class OptionsViewSet(generics.ListCreateAPIView):
    queryset = models.Options.objects.all()
    serializer_class = serializers.OptionSerializer


class LotsViewSet(viewsets.ModelViewSet):
    queryset = models.Lots.objects.all()
    serializer_class = serializers.LotSerializer

    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated,])
    def my_lots(self, request):
        print(request.user)
        # Фильтруем лоты по текущему пользователю
        lots = models.Lots.objects.filter(user_id=request.user.id)
        # Сериализуем и возвращаем отфильтрованные лоты
        serializer = serializers.LotSerializer(lots, many=True)
        return Response(serializer.data)


class PaymentsHistoryViewSet(generics.ListCreateAPIView):
    queryset = models.PaymentsHistory.objects.all()
    serializer_class = serializers.PaymentSerializer


