from django.contrib import admin
from .models import Enquiry, EnquiryFile


class EnquiryFileInline(admin.TabularInline):
    model = EnquiryFile
    extra = 0


@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "phone",
        "pickup_pin",
        "drop_pin",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "created_at",
    )

    search_fields = (
        "name",
        "phone",
        "pickup_pin",
        "drop_pin",
    )

    readonly_fields = (
        "created_at",
    )

    inlines = [
        EnquiryFileInline,
    ]