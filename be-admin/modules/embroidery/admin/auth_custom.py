# # coding: utf-8

# from django.contrib import admin
# from django.contrib.auth.models import Group, User
# from django.contrib.auth.admin import GroupAdmin, UserAdmin
# from django.utils.translation import gettext_lazy as _, ngettext_lazy


# class CustomUserAdmin(UserAdmin):
#     fieldsets = (
#         (None, {'fields': ('username', 'password')}),
#         (_('Personal info'), {'fields': ('first_name', 'last_name', 'email')}),
#         (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
#                                        'groups',)}),
#         (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
#     )


# class CustomGroupAdmin(GroupAdmin):
#     def formfield_for_manytomany(self, db_field, request=None, **kwargs):
#         if db_field.name == 'permissions':
#             qs = kwargs.get('queryset', db_field.remote_field.model.objects)
#             qs = qs.exclude(codename__in=(
#                 'add_permission',
#                 'change_permission',
#                 'delete_permission',

#                 'add_contenttype',
#                 'change_contenttype',
#                 'delete_contenttype',

#                 'add_session',
#                 'delete_session',
#                 'change_session',

#                 'add_logentry',
#                 'change_logentry',
#                 'delete_logentry',
#             ))
#             # Avoid a major performance hit resolving permission names which
#             # triggers a content_type load:
#             kwargs['queryset'] = qs.select_related('content_type')
#         return super(GroupAdmin, self).formfield_for_manytomany(
#             db_field, request=request, **kwargs)


# admin.site.unregister(User)
# admin.site.unregister(Group)
# admin.site.register(User, CustomUserAdmin)
# admin.site.register(Group, CustomGroupAdmin)