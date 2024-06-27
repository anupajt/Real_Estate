# from rest_framework import serializers
# from .models import UserAccount
#
# class UserAccountSerializer(serializers.ModelSerializer):
#     password2 = serializers.CharField(write_only=True)
#
#     class Meta:
#         model = UserAccount
#         fields = ('name', 'email', 'password', 'password2')
#         extra_kwargs = {'password': {'write_only': True}}
#
#     def create(self, validated_data):
#         password = validated_data.pop('password')
#         password2 = validated_data.pop('password2')
#         if password != password2:
#             raise serializers.ValidationError({"password": "Passwords must match."})
#         user = UserAccount(
#             name=validated_data['name'],
#             email=validated_data['email']
#         )
#         user.set_password(password)
#         user.save()
#         return user
