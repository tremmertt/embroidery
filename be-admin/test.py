from google_account import AccountGoogleService

# url = AccountGoogleService.get_link_auth_google()
# print(url)
 
from urllib import parse

url = 'http://localhost:3000/login-success?state=Test&code=4%2F0AfgeXvsJWUzF5n64fxGuQfQRQZP29Z1MYZwKw6-68fUX1DoYBoSda32Zcv7UTjR28Nzc8g&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=consent'
par = parse.parse_qs(parse.urlparse(url).query)


print(par)
config, credentials = AccountGoogleService.get_config_auth_google(
    state=par['state'][0],
    code=par['code'][0],
    scope=' '.join([
        'openid', 
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ])
)
print(config)

user_info = AccountGoogleService.get_user_info(credentials)
print('user_info', user_info)