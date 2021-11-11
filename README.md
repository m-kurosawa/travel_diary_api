# travel_dialy_api

The API using for travel diary.

## Status code
Status code is basicaly 200 when request is completed.
If caused errer, Status code is returned 400-404 with error message.

## Usage
### Users
#### user_list
- Purpose: request users list.
- Endpoint: /api/users
- Method: GET
- Query: None
- Body: None
- Return: [{"id": int, "username": String, "createdAt": Timestamp}]

#### user_info
- Purpose: request a user information.
- Endpoint: /api/user/:username
- Method: GET
- Qurey: None
- Body: None
- Return: {"id": int, "username": String, "createdAt": Timestamp}

#### user_create
- Purpose: create a user.
- Endpoint: /api/user
- Method: POST
- Query: None
- Body: {username: String}
- Return: {"id": int, "username": String, "createdAt": Timestamp}

### Diaries
#### diaries_list
- Purpose: request diaries list.
- Endpoint: /api/diaries
- Method: GET
- Query: None
- Body: None
- Return: [{"id": int, "userId": int, "diary": Text, "updatedAt": Timestamp, "createdAt": Timestamp}]

#### diary by user
- Purpose: request diaries list by a user.
- Endpoint: /api/diaries/:username
- Method: GET
- Query: None
- Body: None
- Return: [{"id": int, "userId": int, "diary": Text, "updatedAt": Timestamp, "createdAt": Timestamp}]

#### create_diary
- Purpose: create diary.
- Endpoint: /api/diary
- Method: POST
- Query: None
- Body: {"userId": int, "diary": Text}
- Return: [{"id": int, "userId": int, "diary": Text, "updatedAt": Timestamp, "createdAt": Timestamp}] * all diaries are returned (just the user).

#### modify_diary
- Purpose: change diary(comment).
- Endpoint: /api/diary
- Method: PUT
- Query: None
- Body: {"id": int, "diary": Text} *id is diaries id
- Return: [{"id": int, "userId": int, "diary": Text, "updatedAt": Timestamp, "createdAt": Timestamp}] * all diaries are returned (just the user).

#### delete_diary
- Purpose: delete diary(comment).
- Endpoint: /api/diary
- Method: DELETE
- Query: None
- Body: {"id": int} *id is diaries id
- Return: "del"

## Future
### Users
- change user name
- delete user
- password and authorisation

### Diaries
- travel date
- travel transfer
- tagging place

### Other API
- travel transfer sheet and calculater
- photo storage
- travel cost sheet