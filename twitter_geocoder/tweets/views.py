from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Tweet
from .serializers import *

# Create your views here.
@api_view(['GET'])
def tweets_list(request, province):
    try:
        tweets = Tweet.objects.filter(province=province)
    except Tweet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = TweetSerializer(tweets, context={'request': request}, many=True)

        return Response(serializer.data)

@api_view(['GET'])
def tweets_detail(request, province, pk):
    try:
        tweet = Tweet.objects.get(pk=pk)
        if tweet.province != province:
            raise Tweet.DoesNotExist
        
    except Tweet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = TweetSerializer(tweet, context={'request': request})

        return Response(serializer.data)