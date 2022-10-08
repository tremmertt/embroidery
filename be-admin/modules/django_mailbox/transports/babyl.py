from mailbox import Babyl
from modules.django_mailbox.transports.generic import GenericFileMailbox


class BabylTransport(GenericFileMailbox):
    _variant = Babyl
