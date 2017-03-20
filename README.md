# Link Share API Documentation

### To register a new user:

```
POST /users
```
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
### To get All Users
```
GET /users
```
Required params:
* none

#### Example
```
[
  {
    "id": 1,
    "name": "John Bob",
    "email": "Linkis@icloud.com"
  },
  {
    "id": 2,
    "name": "Emma Swan",
    "email": "ovae@hotmail.com"
  },
  {
    "id": 3,
    "name": "george washington",
    "email": "alekg@gmail.com"
  },
  {
    "id": 4,
    "name": "Archie Artemis",
    "email": "artem@outlook.com"
  },
  {
    "id": 5,
    "name": "Superman",
    "email": "superman@gmail.com"
  }
  ```

### To receive access token of a user.
```
POST /login
```
  Required params:
  * email
  * password

#### Example
```
{
  "user": 5,
  "token": "e1QiLCsSDFFJhbGciasdfasdfOiJIUzI1NiJ9.eyJpZCI6NdsssdSwiZW1haWwiOiJzdXBlcm1hbkBnbWFpbC5jb20ifQ.raLRVv5abE7eNA_f7rJnA9WxkrggSeExy2LD9PASKgU"
}
```

### To create a post on a link.
```
POST /createlink
```

Required Params:
* title (link title)
* body (link descrition/body)

#### Example
```
{
  "id": 4,
  "title": "I love this linkshare app!",
  "body": "text area that can fit up to 650 characters.",
  "users_id": 5,
  "updatedAt": "2017-03-20T19:07:40.830Z",
  "createdAt": "2017-03-20T19:07:40.830Z"
}
```

### To create a comment on a link.
```
POST /comment/:linkid
```
Required Params:
* comment

#### Example
```
{
  "id": 2,
  "comment": "Ya, i also like this app!",
  "link_id": "4",
  "users_id": 5,
  "updatedAt": "2017-03-20T19:09:42.574Z",
  "createdAt": "2017-03-20T19:09:42.574Z"
}
```
