from django.shortcuts import render

# Create your views here.

def base(request ):
    return render(request, 'blog/post_list.html', {})

def post_list(request, pk ):
    print(pk)
    return render(request, 'blog/post_list.html', {})