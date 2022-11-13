import argparse
import base64
import sys
import json
import hashlib
import os
import re
import socket
import sys
import requests

file_dir = os.path.dirname(os.path.realpath(__file__))
root_dir = os.path.abspath(file_dir + "/..")
sys.path.append(os.path.normpath(root_dir))

from googleapiclient.discovery import build
from modules.embroidery.models.google.client_google_service import ClientConfigBuilder
from google_auth_oauthlib.flow import InstalledAppFlow
from oauthlib.oauth2.rfc6749.errors import InvalidGrantError

_DEFAULT_CLIENT_ID_GOOGLE = '411290441939-9pg6b53lulsu1m4d126427e99qurrgku.apps.googleusercontent.com'
_DEFAULT_CLIENT_SECRET_GOOGLE = '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'
_SCOPE = [
    'openid', 
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
]
_REDIRECT_URI = 'http://localhost:3000/login-success'

class AccountGoogleService(object):
    @staticmethod
    def get_link_auth_google():
        """Retrieve and display the url auth."""
        client_config = ClientConfigBuilder(
            client_type=ClientConfigBuilder.CLIENT_TYPE_WEB,
            client_id=_DEFAULT_CLIENT_ID_GOOGLE,
            client_secret=_DEFAULT_CLIENT_SECRET_GOOGLE,
        )

        flow = InstalledAppFlow.from_client_config(client_config.Build(), scopes=_SCOPE)
        flow.redirect_uri = _REDIRECT_URI
        state = hashlib.sha256(os.urandom(1024)).hexdigest() 
        
        print("state:", state)
        auth_url, state = flow.authorization_url(
            access_type="offline",
            state=state,
            include_granted_scopes="true",
            prompt="consent",
        )
        return auth_url, state

    @staticmethod
    def get_config_auth_google(state="", code="", scope=""):
        """Retrieve and display the access and refresh token."""
        if state != "" and code != "":
            scopes = requests.utils.unquote(scope).split(" ")
            client_config = ClientConfigBuilder(
                client_type=ClientConfigBuilder.CLIENT_TYPE_WEB,
                client_id=_DEFAULT_CLIENT_ID_GOOGLE,
                client_secret=_DEFAULT_CLIENT_SECRET_GOOGLE,
            )

            flow = InstalledAppFlow.from_client_config(
                client_config.Build(), scopes=scopes
            )
            flow.redirect_uri = _REDIRECT_URI 
            auth_url, state = flow.authorization_url(
                access_type="offline",
                state=state,
                include_granted_scopes="true",
                prompt="consent",
            )
            try:
                flow.fetch_token(code=code)
            except InvalidGrantError as ex:
                print("Authentication has failed: %s" % ex)
                return None

            config_auth = {
                "CLIENT_ID": _DEFAULT_CLIENT_ID_GOOGLE,
                "CLIENT_SECRET": _DEFAULT_CLIENT_SECRET_GOOGLE,
                "CODE": code,
                "ACCESS_TOKEN": flow.credentials.token,
                "REFRESH_TOKEN": flow.credentials.refresh_token,
                "SCOPES": _SCOPE,
            }
 
            return config_auth, flow.credentials
        else:
            return None

    @staticmethod
    def get_user_info(credentials):
        user_info_service = build('oauth2', 'v2', credentials=credentials)
        user_info = user_info_service.userinfo().get().execute()
        return user_info