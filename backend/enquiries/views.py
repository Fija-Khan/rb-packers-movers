from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Enquiry, EnquiryFile
from .serializers import EnquirySerializer


class EnquiryCreateView(APIView):

    parser_classes = [
        MultiPartParser,
        FormParser,
    ]

    def post(self, request):

        enquiry_data = {
            "name": request.data.get("name"),
            "phone": request.data.get("phone"),
            "pickup_pin": request.data.get("pickup_pin"),
            "drop_pin": request.data.get("drop_pin"),
            "pickup_floor": request.data.get("pickup_floor", ""),
            "drop_floor": request.data.get("drop_floor", ""),
            "lift_available": request.data.get("lift_available", ""),
            "items": request.data.get("items", ""),
        }

        serializer = EnquirySerializer(data=enquiry_data)

        if serializer.is_valid():

            enquiry = serializer.save()

            uploaded_files = request.FILES.getlist("files")

            for uploaded_file in uploaded_files:
                EnquiryFile.objects.create(
                    enquiry=enquiry,
                    file=uploaded_file
                )

            return Response(
                EnquirySerializer(enquiry).data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )