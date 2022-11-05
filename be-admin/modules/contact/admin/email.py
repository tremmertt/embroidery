from gettext import ngettext
from django import forms
from django.contrib import admin, messages
from modules.contact.models.email import Mailer, MailerEmail, Email
from modules.embroidery.models.customer import Customer
from django.utils.html import mark_safe    

class MailerEmailForm(forms.ModelForm):
    class Meta:
        widgets = {
            "name": forms.TextInput(attrs={"size": 35, "align":"center"}),
            "meta_data": forms.TextInput(attrs={"size": 25, "align":"center"}), 
            "total_item": forms.TextInput(attrs={"size": 5, "align":"center"}), 
            "total": forms.TextInput(attrs={"size": 5, "align":"center"}), 
            "invoice_status": forms.TextInput(attrs={"size": 10, "align":"center"}), 
            "payment_method": forms.TextInput(attrs={"size": 10, "align":"center"}), 
        }

class MailerEmailTabularInline(admin.TabularInline):
    model = MailerEmail
    form = MailerEmailForm
    extra = 0

    fields = [
        "receiver",
        "name",
        "email",
        "phone_number",
    ]

    readonly_fields =  [
        "name",
        "email",
        "phone_number",
    ]

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'receiver':  
            kwargs['queryset'] = Customer.objects.exclude(email="")
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def name(self, obj):
        return obj.receiver.name
    
    def email(self, obj):
        print(obj.receiver.name)
        print(obj.receiver.email)
        return obj.receiver.email
    
    def phone_number(self, obj):
        return obj.receiver.phone_number

    # def has_delete_permission(self, request, obj=None):
    #     # Disable delete
    #     return False

@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    inlines = (
        MailerEmailTabularInline,
    )
    list_display = ['title', 'sender', 'receiver', 'has_attach_receipt' ,'is_sent', 'sent_at']
    fields = ['sender', 'title', 'content', 'footer', 'order','has_attach_receipt' ,'is_sent', 'title_preview','content_preview','footer_preview']
    readonly_fields = ['is_sent', 'title_preview','content_preview','footer_preview',]
    actions = ['send_email']

    def title_preview(self, obj):
        return mark_safe(obj.title)

    def content_email(self, obj):
        return mark_safe(obj.content)

    def content_preview(self, obj):
        if obj.content:
            obj.update_mapping_template_content()
            return mark_safe(obj.content)
        return ""

    def footer_preview(self, obj):
        if obj.footer:
            obj.update_mapping_template_footer()
            return mark_safe(obj.footer)
        return ""

    footer_preview.short_description = "Footer Preview"
    footer_preview.allow_tags = True

    def receiver(self, obj):
        emails = MailerEmail.objects.filter(mail__id__exact=obj.id)
        list_receiver_email = [ e.receiver.email for e in emails]
        return list_receiver_email if list_receiver_email else ''

    @admin.action(description='Send email')
    def send_email(self, request, queryset):
        try:
            for query in queryset:
                try:
                    query.send_email(request)
                except Exception as err:
                    print(err)


            self.message_user(request, ngettext(
                '%d email sent successfully.',
                '%d emails sent successfully.',
                len(queryset),
            ) % len(queryset), messages.SUCCESS)
        except:
            self.message_user(request, ngettext(
                '%d email sent failed.',
                '%d emails sent failed.',
                len(queryset),
            ) % len(queryset), messages.ERROR)

    
@admin.register(Mailer)
class MailerAdmin(admin.ModelAdmin):
    list_display = ['name','mail',  'total_send', 'total_receive']

    def total_send(self, obj):
        emails = Email.objects.filter(sender__id__exact=obj.id)
        return len(emails) if emails else 0
    
    def total_receive(self, obj):
        emails = MailerEmail.objects.filter(receiver__id__exact=obj.id)
        return len(emails) if emails else 0