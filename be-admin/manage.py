#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "embroidery_admin.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()

# APP_NAME=Django
# APP_ENV=development
# APP_SECRET_KEY=TremertIuDuy
# APP_DEBUG=true
# APP_URL=http://localhost

# DATABASE_DRIVER=postgresql
# DATABASE_HOST=localhost
# DATABASE_PORT=5433
# DATABASE_NAME=stg_emboridery
# DATABASE_USER=postgres
# DATABASE_PASSWORD=qwer1234

# EMAIL_BACKEND='django.core.mail.backends.smtp.EmailBackend'
# EMAIL_HOST='smtp.gmail.com'
# EMAIL_PORT=587
# EMAIL_USE_TLS=True
