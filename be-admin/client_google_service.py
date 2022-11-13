import argparse
import json
import hashlib
import re
import socket
import os
import sys

file_dir = os.path.dirname(os.path.realpath(__file__))
root_dir = os.path.abspath(file_dir + "/..")
sys.path.append(os.path.normpath(root_dir))
 
from google_auth_oauthlib.flow import InstalledAppFlow
from oauthlib.oauth2.rfc6749.errors import InvalidGrantError

DEFAULT_AUTH_URI = "https://accounts.google.com/o/oauth2/auth"
DEFAULT_TOKEN_URI = "https://accounts.google.com/o/oauth2/token"
CLIENT_TYPE_WEB = "web"


class ClientConfigBuilder(object):
    """Helper class used to build a client config dict used in the OAuth 2.0 flow."""

    _DEFAULT_AUTH_URI = DEFAULT_AUTH_URI
    _DEFAULT_TOKEN_URI = DEFAULT_TOKEN_URI
    CLIENT_TYPE_WEB = CLIENT_TYPE_WEB

    def __init__(
        self,
        client_type=None,
        client_id=None,
        client_secret=None,
        auth_uri=_DEFAULT_AUTH_URI,
        token_uri=_DEFAULT_TOKEN_URI,
    ):
        self.client_type = client_type
        self.client_id = client_id
        self.client_secret = client_secret
        self.auth_uri = auth_uri
        self.token_uri = token_uri

    def Build(self):
        """Builds a client config dictionary used in the OAuth 2.0 flow."""
        if all(
            (
                self.client_type,
                self.client_id,
                self.client_secret,
                self.auth_uri,
                self.token_uri,
            )
        ):
            client_config = {
                self.client_type: {
                    "client_id": self.client_id,
                    "client_secret": self.client_secret,
                    "auth_uri": self.auth_uri,
                    "token_uri": self.token_uri,
                }
            }
        else:
            raise ValueError("Required field is missing.")

        return client_config
