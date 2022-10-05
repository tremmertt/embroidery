from gettext import ngettext
from django.contrib import admin, messages
from modules.contact.models.email import Mailer, MailerEmail, Email
# Register your models here.

class MailerEmailTabularInline(admin.TabularInline):
    model = MailerEmail
    extra = 0

@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    inlines = (
        MailerEmailTabularInline,
    )
    list_display = ['title', 'content', 'sender', 'receiver', 'is_sent', 'updated_at']
    actions = ['send_email']

    def receiver(self, obj):
        emails = MailerEmail.objects.filter(mail__id__exact=obj.id)
        list_receiver_email = [ e.receiver.mail for e in emails]
        return list_receiver_email if list_receiver_email else ''

    @admin.action(description='Send email')
    def send_email(self, request, queryset):
        try:
            for query in queryset:
                query.send_email(request)

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