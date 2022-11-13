from django.apps import AppConfig


class SimpleApp(AppConfig):
    name = "modules.simpleui"

    def ready(self):
        try:
            import django

            version = django.get_version()
            if int(version.split(".")[0]) >= 3:
                from django.conf import settings

                for index, item in enumerate(settings.MIDDLEWARE):
                    if item == "django.middleware.clickjacking.XFrameOptionsMiddleware":
                        settings.MIDDLEWARE.pop(index)

        except Exception as e:
            pass
        pass
