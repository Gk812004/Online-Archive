from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages 
from django.contrib.auth import authenticate
from django.utils.decorators import method_decorator
from django.views import View

# Create your views here.
# def login(request):
#     return render(request, 'login.html')
@login_required
def index(request):
    return render(request, 'index.html')

def login(request):
    email = None  # initialize email variable with a default value
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        user = authenticate(username=email, password=password)

        messages.success(request, "Your account is successfully created")


        if user is not None:
            return redirect("/")
        else:
            return render(request, "login.html")

    return render(request , "login.html")

def index1(request):
    context = {}
    branch = request.POST.get('branch')
    semester = request.POST.get('semester')
    context['branch'] = branch
    context['semester'] = int(semester)
    return render(request, 'index1.html', context)



def logout_view(request):
    return redirect('login')