from django.db import models

class Tweet(models.Model):
    tweetID = models.BigIntegerField()
    tweet = models.CharField(max_length=500)
    publishDateTime = models.DateTimeField()
    lastUpdateDateTime = models.DateTimeField(default=None, blank=True, null=True)
    mainHighway = models.CharField(max_length=30, default=None, blank=True, null=True)
    geoname = models.CharField(max_length=30, default=None, blank=True, null=True)
    score = models.FloatField(default=1)

    def __str__(self):
        return self.name