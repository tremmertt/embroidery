from mailbox import MH
from modules.django_mailbox.transports.generic import GenericFileMailbox


class MHTransport(GenericFileMailbox):
    _variant = MH
