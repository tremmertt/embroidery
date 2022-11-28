
import bcrypt

passwd = b'1234' 

salt = bcrypt.gensalt(10)
hashed = b'$2b$10$wZHAYIpOVzu5W1jc/XUmv.RU6KaGgBToqex5jd6SfaRfhkdtN9rwW'

if bcrypt.checkpw(passwd, hashed):
    print("match")
else:
    print("does not match")