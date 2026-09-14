from rest_framework import serializers
from .models import Enquiry, EnquiryFile


class EnquiryFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = EnquiryFile
        fields = ["id", "file", "uploaded_at"]


class EnquirySerializer(serializers.ModelSerializer):

    files = EnquiryFileSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Enquiry
        fields = [
            "id",
            "name",
            "phone",
            "pickup_pin",
            "drop_pin",
            "pickup_floor",
            "drop_floor",
            "lift_available",
            "items",
            "status",
            "created_at",
            "files",
        ]