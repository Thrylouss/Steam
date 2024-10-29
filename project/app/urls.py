from django.urls import path, re_path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework.routers import SimpleRouter
from rest_framework_simplejwt import views as jwt_views

from . import views

schema_view = get_schema_view(
    openapi.Info(
        title="Project API",
        default_version="v1",
    ),
    public=True,
)


router = SimpleRouter()
router.register("games", views.GamesViewSet, basename="games")
router.register("items", views.ItemsViewSet, basename="items")
router.register("lots", views.LotsViewSet, basename="lots")

urlpatterns = [
    re_path(
        r"^swagger(?P<format>\.json|\.yaml)$",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    re_path(
        r"^swagger/$",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),

    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', views.UserRegister.as_view(), name='token_register'),
    path('api/login/', views.UserLogin.as_view(), name='token_login'),

    path('payment-history/', views.PaymentsHistoryViewSet.as_view(), name='payment-history'),
    path('types/', views.TypesViewSet.as_view(), name='types'),
    path('options/', views.OptionsViewSet.as_view(), name='options'),

    path("", include(router.urls)),
]
