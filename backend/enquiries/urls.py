from django.urls import path
from .views import EnquiryCreateView


urlpatterns = [
    path("create/", EnquiryCreateView.as_view(), name="create-enquiry"),
]