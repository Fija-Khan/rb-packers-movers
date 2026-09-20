from rest_framework import serializers

from .models import Enquiry, EnquiryFile


class EnquiryFileSerializer(serializers.ModelSerializer):

    file = serializers.SerializerMethodField()

    class Meta:
        model = EnquiryFile
        fields = ["id", "file", "uploaded_at"]

    def get_file(self, obj):

        if not obj.file:
            return None

        return obj.file.url


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