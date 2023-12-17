from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from home import views
from . import views
from django.contrib.auth.views import LogoutView
# from home1 import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.login, name='login'),
    path('social-auth/', include('social_django.urls', namespace='social')),
    path('', views.index, name='index'),
    path('index1/', views.index1, name='index1'),
    path('logout/', LogoutView.as_view(), name='logout'),
    # path('index/',views.index, name='index'),  

]

# 
#     #