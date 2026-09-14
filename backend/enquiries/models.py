from django.db import models


class Enquiry(models.Model):

    STATUS_CHOICES = [
        ("New", "New"),
        ("Contacted", "Contacted"),
        ("Completed", "Completed"),
    ]

    name = models.CharField(max_length=100)

    phone = models.CharField(max_length=15)

    pickup_pin = models.CharField(max_length=6)

    drop_pin = models.CharField(max_length=6)

    pickup_floor = models.CharField(
        max_length=50,
        blank=True
    )

    drop_floor = models.CharField(
        max_length=50,
        blank=True
    )

    lift_available = models.CharField(
        max_length=10,
        blank=True
    )

    items = models.TextField(
        blank=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="New"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.name} - {self.phone}"


class EnquiryFile(models.Model):

    enquiry = models.ForeignKey(
        Enquiry,
        on_delete=models.CASCADE,
        related_name="files"
    )

    file = models.FileField(
        upload_to="enquiries/"
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.enquiry.name} - {self.file.name}"