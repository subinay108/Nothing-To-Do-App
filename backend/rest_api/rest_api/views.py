from django.http import HttpResponse,JsonResponse

def home_page(request):
    print('home page requested')
    friends = ['subinay', 'ankita', 'sankarsan']
    # return HttpResponse('<h1>This is home page</h1>')
    return JsonResponse(friends, safe=False)