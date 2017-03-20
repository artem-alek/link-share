# Link Share API Documentation

### To register a new user:

```/users```
  Required params:
  * name
  * email
  * password

#### Example
```
{
  "id": 5,
  "name": "Superman",
  "email": "superman@gmail.com"
}
```
### To receive access token of a user.
```/login``` To receive token for user.
  Required params:
  * email
  * password

#### Example
```
{
  "user": 5,
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiZW1haWwiOiJzdXBlcm1hbkBnbWFpbC5jb20ifQ.raLRVv5abE7eNA_f7rJnA9WxkrggSeExy2LD9PASKgU"
}
```
