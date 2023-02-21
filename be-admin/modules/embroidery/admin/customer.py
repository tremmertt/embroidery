from django.contrib import admin, messages
from import_export.admin import ImportExportModelAdmin
from modules.embroidery.models.customer import Customer
# from modules.embroidery.tabulars.order import OrderTabularInline

@admin.register(Customer)
class CustomerAdmin(ImportExportModelAdmin, admin.ModelAdmin):

    list_display = [
        # "id",
        "name",
        "email",
        "address",
        "phone_number",
        "company",
        "updated_at",
    ]
    # actions = ['test','check_jwt']
    # inlines = (OrderTabularInline,)
    # search_fields = ("name", "email")
 
    # @admin.action(description='Test')
    # def test(self, request, queryset): 
    #     for query in queryset:
    #         try:
    #             auth_token = query.encode_auth_token()
    #             print('auth_token', auth_token)
    #             info = query.decode_auth_token(auth_token)
    #             print('info', info)
    #         except Exception as err:
    #             print(err)  

    # @admin.action(description='check_jwt')
    # def check_jwt(self, request, queryset): 
    #     for query in queryset:
    #         try:
    #             auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjgyNjA1MzIsImlhdCI6MTY2ODI2MDUwNywic3ViIjoiZDhiYTNiNTAtYWJjOC00NzViLWEyMTAtNjExZTc2YjlkYTBhIn0.XCPd-hgr9jhNIo9jcN-PX6nQQfsqmOffo8wzh8PTykI'
    #             print('auth_token', auth_token)
    #             info = query.decode_auth_token(auth_token)
    #             print('info', info)
    #         except Exception as err:
    #             print(err)  
