import os

from cloudinary_storage.storage import MediaCloudinaryStorage


class EnquiryMediaCloudinaryStorage(MediaCloudinaryStorage):

    VIDEO_EXTENSIONS = {
        ".mp4",
        ".mov",
        ".avi",
        ".mkv",
        ".webm",
        ".m4v",
        ".3gp",
        ".3g2",
        ".wmv",
        ".mpeg",
        ".mpg",
        ".ogv",
    }

    def _get_resource_type(self, name):
        name_lower = name.lower()

        # Video files are stored inside enquiries/videos/
        if "/videos/" in name_lower:
            return "video"

        extension = os.path.splitext(name_lower)[1]

        if extension in self.VIDEO_EXTENSIONS:
            return "video"

        return "image"

    def _upload(self, name, content):
        extension = os.path.splitext(name)[1].lower()

        if extension in self.VIDEO_EXTENSIONS:
            # Keep videos in a separate folder so the resource type
            # can still be identified after Cloudinary removes the extension.
            name = name.replace(
                "enquiries/",
                "enquiries/videos/",
                1
            )

        return super()._upload(name, content)