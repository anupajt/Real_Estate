from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = request.data

        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        password2 = data.get('password2')

        if not name or not email or not password or not password2:
            return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        if password != password2:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

        if len(password) < 6:
            return Response({'error': 'Password must be at least 6 characters'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(name=name, email=email, password=password)
        user.save()

        # Generate tokens for the user
        refresh = RefreshToken.for_user(user)

        return Response({
            'success': 'User created successfully',
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }, status=status.HTTP_201_CREATED)


# from django.contrib.auth import get_user_model
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework import permissions
#
# User = get_user_model()
#
# class SignupView(APIView):
#     permission_classes = (permissions.AllowAny, )
#
#     def post(self, request, format=None):  # Corrected method name
#         data = self.request.data
#
#         name = data.get('name')
#         email = data.get('email')
#         password = data.get('password')
#         password2 = data.get('password2')
#
#         if password == password2:
#             if User.objects.filter(email=email).exists():
#                 return Response({'error': 'Email already exists'})
#             else:
#                 if len(password) < 6:
#                     return Response({'error': 'Password must be at least 6 characters'})
#                 else:
#                     user = User.objects.create_user(name=name, email=email, password=password)
#                     user.save()
#                     return Response({'success': 'User created successfully'})
#         else:
#             return Response({'error': 'Passwords do not match'})
#
