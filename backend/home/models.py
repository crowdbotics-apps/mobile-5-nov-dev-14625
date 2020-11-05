from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(
        max_length=150,
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class GGG(models.Model):
    "Generated Model"
    bvcgfdgfdghfytf = models.BigIntegerField()
    jhguguigjggjhgkjghkjhgk = models.BigIntegerField()
    bvcbcb = models.ForeignKey(
        "home.CustomText",
        on_delete=models.CASCADE,
        related_name="ggg_bvcbcb",
    )
    bvhgfhg = models.ManyToManyField(
        "home.HomePage",
        related_name="ggg_bvhgfhg",
    )
    hgfhfhg = models.GenericIPAddressField(
        protocol="IPv6",
        unpack_ipv4=False,
    )
