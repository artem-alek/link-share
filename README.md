###Link Share API Documentation

##Routes:

```/users``` To register a new user.
  Required params:
    * name
    * email
    * password

#example
```{
  "id": 5,
  "name": "Superman",
  "email": "superman@gmail.com"
}


```/login``` To receive token for user.
  Required params:
    * email
    * password

#example
```
{
  "user": 5,
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiZW1haWwiOiJzdXBlcm1hbkBnbWFpbC5jb20ifQ.raLRVv5abE7eNA_f7rJnA9WxkrggSeExy2LD9PASKgU"
}
```