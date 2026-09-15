from django.contrib import admin
from django.utils.html import format_html

from .models import Enquiry, EnquiryFile


class EnquiryFileInline(admin.TabularInline):
    model = EnquiryFile
    extra = 0
    readonly_fields = ("file_preview", "uploaded_at")

    fields = (
        "file",
        "file_preview",
        "uploaded_at",
    )

    def file_preview(self, obj):
        if not obj.file:
            return "-"

        file_url = obj.file.url
        file_name = obj.file.name.lower()

        # Image preview
        if file_name.endswith(
            (".jpg", ".jpeg", ".png", ".gif", ".webp")
        ):
            return format_html(
                '<a href="{}" target="_blank">'
                '<img src="{}" width="120" height="90" '
                'style="object-fit: cover; border-radius: 6px;" />'
                "</a>",
                file_url,
                file_url,
            )

        # Video / other file
        return format_html(
            '<a href="{}" target="_blank">📁 View / Open File</a>',
            file_url,
        )

    file_preview.short_description = "Preview"


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
