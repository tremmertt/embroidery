from mailbox import MMDF
from modules.django_mailbox.transports.generic import GenericFileMailbox


class MMDFTransport(GenericFileMailbox):
    _variant = MMDF
