from django.apps import AppConfig


class KhulaCodeConfig(AppConfig):
    name = 'KhulaCode'



    def ready(self):
        import KhulaCode.signals