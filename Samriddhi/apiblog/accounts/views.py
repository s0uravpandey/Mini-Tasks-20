from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser,MultiPartParser,FormParser
from .models import AccountModel
from .serializers import AccountSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response

class RegistrationView(APIView):
    parser_classes = [JSONParser]
    def get(self,request):
        query = request.user.accountmodel
        serializer = AccountSerializer(query,many=True)
        return Response(serializer.data,status=200)
    def post(self,request):
        try:
            dicti = {
                'username' : request.data['username'],
                'first_name' : request.data['first_name'],
                'last_name' : request.data['last_name']
            }
            try:
                user = User(**dicti)
                user.set_password(request.data['password'])
                user.save()
                user_det = User.objects.filter(username= request.data['username'])[0].id
                request.data['user'] = user_det[0].id
                serializer = AccountSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response({
                        'message':'Succesfully Registerd'
                    },status=201)
                else:
                    user_det.delete()
                    return Response({
                        'message' :'Registration Failed!',
                        'payload': serializer.errors
                    },status=400)
            except:
                return Response({
                    'message':'User Already Exists!'
                },status=400)
        except:
            return Response({
                'message':'Enter All the Data'
            },status=400)

class ProfileView(APIView):
    parser_classes = [JSONParser]
    permission_classes= [IsAuthenticated]
    def get(self,request):
        query = request.user.accountmodel
        serializer = AccountSerializer(query,many=True)
        return Response(serializer.data,status=200)

