# User
## Login
#### POST  v1/login
Login a user
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**username**|string|true|{}|
|**password**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": {
    "token": "JWT token",
    "uuid": "unique identifier"
  }
}
```
##### 400
```json
{
  "success": false,
  "data": "Missing required value : password in body"
}
```
###### source: user.authentication.login
---
## Register
#### POST  v1/register
Register a user
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**username**|string|true|{}|
|**password**|string|true|{}|
|**email**|string|true|{}|
#### Returns
##### 400
```json
{
  "success": false,
  "data": "Missing required value : email in body"
}
```
###### source: user.authentication.register
---
## Public Profile
#### GET  v1/user/profile/:username
Get the public profile of a user  
Be careful, timestamps are in UTC 0 and to be converted to the user's timezone in the front end
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**username**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": {
    "id": "unique identifier",
    "username": "test3",
    "avatar": "URL to the avatar /v1/avatar/uuid",
    "description": "test bio",
    "socials": {
      "instagram": "aizydev",
      "twitter": "aizydev",
      "website": "https://aizy.dev"
    },
    "followers": 0,
    "following": 0,
    "dev": true,
    "onSale": [
      {
        "_id": "unique identifier",
        "name": "Test Bot SDK",
        "author": {
          "_id": "unique identifier",
          "username": "test3",
          "avatar": "URL to the avatar /v1/avatar/uuid",
          "followers": 0
        },
        "subscribers": [],
        "price": 100,
        "crypto": "BTC",
        "status": "active",
        "likes": 0,
        "tags": [
          "TagId1"
        ],
        "uuid": "unique identifier",
        "createdAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
        "updatedAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
        "__v": 1,
        "avatar": "URL to the avatar"
      }
    ],
    "member_since": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
    "following_requester": false
  }
}
```
###### source: user.authentication.profile
---
## Contact Us
#### POST  v1/contact
Send a message to the support team
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**email**|string|true|{}|
|**message**|string|true|{"length":[0,3700]}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "contact success"
}
```
###### source: user.authentication.contactUs
---
## Get Banner
#### GET  v1/banner/:username
Get the banner of a user
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**username**|string|true|{}|
#### Returns
###### source: user.authentication.getBanner
---
## Get user's Followed (no tests !)
#### GET  v1/user/followed/:userId
Get the users followed by the user
#### Payload
No payload
#### Returns
###### source: user.authentication.getFollowed
---
## Get user's Followers (no tests !)
#### GET  v1/user/followers/:userId
Get the users following the user
#### Payload
No payload
#### Returns
###### source: user.authentication.getFollowers
---
## Search Profile
#### POST  v1/users/search
Search for a user
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**filters**|any|false|{}|
|**sort**|any|false|{"default":["-createdAt"]}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": [
    {
      "_id": "unique identifier",
      "username": "test",
      "subscriptions": [],
      "liked": [
        "BotId1"
      ],
      "JwtValidity": "JWT token validity"
    },
    {
      "_id": "unique identifier",
      "username": "test2",
      "subscriptions": [],
      "liked": [],
      "JwtValidity": "JWT token validity"
    }
  ],
  "page": 1,
  "limit": 10
}
```
###### source: user.authentication.searchProfile
---
## Search through pages (no tests !)
#### POST  v1/pages/search
Search for a specific page
#### Payload
No payload
#### Returns
###### source: user.authentication.searchPage
---
## Generate OTP (no tests !)
#### POST  v1/otp/generate
Generate and send via email an OTP
#### Payload
No payload
#### Returns
###### source: user.authentication.generateOTP
---
## Verify OTP (no tests !)
#### POST  v1/otp/verify
Verify an OTP code received by email
#### Payload
No payload
#### Returns
###### source: user.authentication.verifyOTP
---
## Send password reset email (no tests !)
#### POST  v1/password/reset/send
Generate and send via email an OTP to reset the password
#### Payload
No payload
#### Returns
###### source: user.authentication.sendPasswordResetEmail
---
## Reset Password (no tests !)
#### POST  v1/password/reset
Reset the password of a user
#### Payload
No payload
#### Returns
###### source: user.authentication.resetPassword
---
## Is Dev (no tests !)
#### GET  v1/user/isDev
Check if the user is a developer
#### Payload
No payload
#### Returns
###### source: user.UserController.isDev
---
## Get private Profile
#### GET  v1/user/profile
Get the profile the logged in user.
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": {
    "notifications": {
      "total": 0,
      "not_seen": 0
    }
  }
}
```
###### source: user.UserController.profile
---
## Edit Profile
#### PATCH  v1/user/editprofile
Edit the connected user's profile
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**username**|string|false|{}|
|**bio**|string|false|{}|
|**website**|string|false|{}|
|**twitter**|string|false|{}|
|**instagram**|string|false|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "User successfully updated"
}
```
###### source: user.UserController.editProfile
---
## Change Password
#### PATCH  v1/user/changePassword
Change the connected user's password
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**password**|string|true|{}|
|**newpassword**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "password change success"
}
```
##### 400
```json
{
  "success": false,
  "data": "password change failed"
}
```
###### source: user.UserController.changePassword
---
## Link Exchange
#### POST  v1/user/exchange/link
Link an exchange to the connected user's account
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**exchange**|string|true|{}|
|**apiKeys**|any|true|{}|
#### Returns
##### 400
```json
{
  "success": false,
  "data": "operation failed"
}
```
###### source: user.UserController.linkExchange
---
## Become Dev
#### POST  v1/user/dev
Become a developer
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Become dev success"
}
```
###### source: user.UserController.becomeDev
---
## Upload Avatar
#### POST  v1/user/avatar
Upload an avatar for the connected user
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Upload avatar success"
}
```
###### source: user.UserController.postAvatar
---
## Get Avatar
#### GET  v1/avatar/:uuid
Get user's avatar
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**uuid**|string|true|{}|
#### Returns
###### source: user.UserController.getAvatar
---
## Get Subscriptions
#### GET  v1/user/subscriptions
Get the connected user's subscribed bots
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": []
}
```
###### source: user.UserController.getSubscriptions
---
## Follow/Unfollow User
#### POST  v1/user/follow/:userId
Follow/Unfollow a user
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**userId**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "unfollow success"
}
```
###### source: user.UserController.followUser
---
## Get Followed
#### GET  v1/user/followed
Get the users followed by the connected user
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": []
}
```
###### source: user.UserController.getFollowed
---
## Get Followers
#### GET  v1/user/followers
Get the users following the connected user
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": []
}
```
###### source: user.UserController.getFollowers
---
## Popular Users
#### GET  v1/user/popular
Get the most popular users that are followed by the most users
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": [
    {
      "_id": "unique identifier",
      "username": "test",
      "avatar": "URL to the avatar /v1/avatar/uuid",
      "bots": 1
    },
    {
      "_id": "unique identifier",
      "username": "test2",
      "avatar": "URL to the avatar",
      "bots": 0
    }
  ]
}
```
###### source: user.UserController.popularUsers
---
## Upload Banner
#### POST  v1/user/banner
Upload a banner for the connected user
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": "uploadBanner success"
}
```
###### source: user.UserController.postBanner
---
# Bots
## Get all bots
#### POST  v1/bot/list
Get all bots with filters and sorting.  
Filters can be any field of the bot model.  
Sort can be any field of the bot model.  
```[[A, B], [x, y]] -> { $and: [ {$or: [A, B]}, { $or: [x, y]} ] }```  
Bot fields: _id, uuid, name, author, avatar, description, subscribers, price, crypto, stats, openTrades, closedTrades, status, files, likes, tags, createdAt, updatedAt.
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**filters**|undefined|false|{}|
|**sort**|undefined|false|{"default":["-createdAt"]}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": [
    {
      "_id": "unique identifier",
      "name": "Test Bot",
      "author": {
        "_id": "unique identifier",
        "username": "test",
        "avatar": "URL to the avatar",
        "followers": 0
      },
      "subscribers": [],
      "price": 100,
      "crypto": "BTC",
      "status": "active",
      "likes": 0,
      "tags": [
        "TagId1"
      ],
      "uuid": "unique identifier",
      "createdAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "updatedAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "__v": 0,
      "avatar": "URL to the avatar"
    }
  ],
  "page": 1,
  "limit": 10,
  "elements": 2
}
```
###### source: bots.BotsControllerPublic.list
---
## Get popular bots
#### GET  v1/bot/popular
Get the 12 most popular bots based on the number of likes
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": [
    {
      "stats": {
        "totalGain": 0,
        "tradeCount": 0,
        "avgGain": 0,
        "avgLoss": 0,
        "longWinrate": 0,
        "shortWinrate": 0,
        "bestTrade": 0,
        "worstTrade": 0,
        "drawdown": 0,
        "longCount": 0,
        "shortCount": 0,
        "shortWin": 0,
        "longWin": 0,
        "allTimeHigh": 0,
        "allTimeLow": 0,
        "profitFactor": 0
      },
      "_id": "unique identifier",
      "name": "Test Bot",
      "author": {
        "_id": "unique identifier",
        "username": "test",
        "avatar": "URL to the avatar",
        "followers": 0
      },
      "description": "A bot for testing",
      "subscribers": [],
      "price": 100,
      "crypto": "BTC",
      "openTrades": [],
      "closedTrades": [],
      "status": "active",
      "likes": 1,
      "tags": [
        "TagId1"
      ],
      "uuid": "unique identifier",
      "createdAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "updatedAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "__v": 2,
      "files": "playground.py",
      "avatar": "URL to the avatar"
    },
    {
      "stats": {
        "totalGain": 0,
        "tradeCount": 0,
        "avgGain": 0,
        "avgLoss": 0,
        "longWinrate": 0,
        "shortWinrate": 0,
        "bestTrade": 0,
        "worstTrade": 0,
        "drawdown": 0,
        "longCount": 0,
        "shortCount": 0,
        "shortWin": 0,
        "longWin": 0,
        "allTimeHigh": 0,
        "allTimeLow": 0,
        "profitFactor": 0
      },
      "_id": "unique identifier",
      "name": "Test Bot 2",
      "author": {
        "_id": "unique identifier",
        "username": "test",
        "avatar": "URL to the avatar",
        "followers": 0
      },
      "description": "A bot for testing",
      "subscribers": [],
      "price": 100,
      "crypto": "BTC",
      "openTrades": [],
      "closedTrades": [],
      "status": "pending",
      "likes": 0,
      "tags": [
        "TagId1"
      ],
      "uuid": "unique identifier",
      "createdAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "updatedAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "__v": 0,
      "avatar": "URL to the avatar"
    }
  ]
}
```
###### source: bots.BotsControllerPublic.popular
---
## Get bot perfs
#### GET  v1/bot/perfs/:uuid
Get the trading performance of a bot
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": {
    "stats": {
      "totalGain": 0,
      "tradeCount": 0,
      "avgGain": 0,
      "avgLoss": 0,
      "longWinrate": 0,
      "shortWinrate": 0,
      "bestTrade": 0,
      "worstTrade": 0,
      "drawdown": 0,
      "longCount": 0,
      "shortCount": 0,
      "shortWin": 0,
      "longWin": 0,
      "allTimeHigh": 0,
      "allTimeLow": 0,
      "profitFactor": 0
    },
    "_id": "unique identifier",
    "name": "Test Bot",
    "author": {
      "_id": "unique identifier",
      "username": "test",
      "avatar": "URL to the avatar",
      "followers": 0
    },
    "description": "A bot for testing",
    "subscribers": [],
    "price": 100,
    "crypto": "BTC",
    "openTrades": [],
    "closedTrades": [],
    "status": "active",
    "likes": 1,
    "tags": [
      "TagId1"
    ],
    "uuid": "unique identifier",
    "createdAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
    "updatedAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
    "__v": 2,
    "files": "playground.py",
    "avatar": "URL to the avatar",
    "liked": true
  }
}
```
###### source: bots.BotsControllerPublic.getPerfs
---
## Get bot open trades
#### GET  v1/bot/trades/:uuid
Get the open trades associated with a bot by its UUID
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**uuid**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": []
}
```
##### 404
```json
{
  "success": false,
  "data": "bot not found"
}
```
###### source: bots.BotsControllerPublic.getTrades
---
## Delete trade (no tests !)
#### DELETE  v1/bot/trade/:uuid
Delete a trade from a bot, to be used by the SDK
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerPublic.deleteTrade
---
## Popular tags
#### GET  v1/bot/tags/popular
Get the 12 most popular tags with the bots associated with them
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": [
    {
      "_id": "unique identifier",
      "name": "new",
      "count": 2,
      "__v": 0,
      "bots": [
        {
          "uuid": "unique identifier",
          "avatar": "URL to the avatar"
        },
        {
          "uuid": "unique identifier",
          "avatar": "URL to the avatar"
        }
      ]
    }
  ]
}
```
###### source: bots.BotsControllerPublic.popularTags
---
## Get subscribers (no tests !)
#### GET  v1/sdk/subscribers/:uuid
Get the subscribers of a bot
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerPublic.getSubscribers
---
## Get bot avatar (no tests !)
#### GET  v1/bot/avatar/:uuid
Get the avatar of a bot
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerPublic.getAvatar
---
## Get user's liked bots (no tests !)
#### GET  v1/user/liked/:userId
Get the liked bots of the logged in user
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerPublic.userLikedBots
---
## Get tags
#### POST  v1/tags/search
Search through existing tags
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**filters**|undefined|false|{}|
|**sort**|undefined|false|{"default":["-createdAt"]}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": [
    {
      "_id": "unique identifier",
      "name": "new",
      "count": 2,
      "__v": 0
    }
  ],
  "page": 1,
  "limit": 10
}
```
###### source: bots.BotsControllerPublic.searchTags
---
## Get bots price range (no tests !)
#### GET  v1/bot/prices
Get the price range of the bots
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerPublic.getPrices
---
## Create bot
#### POST  v1/user/bot/create
Create a bot
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**name**|string|true|{"trim":true,"length":[3,50]}|
|**description**|string|true|{"trim":true,"length":[10,500]}|
|**price**|number|true|{}|
|**crypto**|string|true|{"oneOf":["BTC","ETH","USDT"]}|
|**tags**|any|false|{}|
#### Returns
##### 201
```json
{
  "success": true,
  "data": {
    "uuid": "unique identifier"
  }
}
```
###### source: bots.BotsControllerProtected.create
---
## Edit bot (no tests !)
#### PUT  v1/user/bot/edit/:botId
Edit a bot
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerProtected.edit
---
## Upload bot
#### POST  v1/user/bot/:botId/upload
Upload a bot.
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": {
    "field": "File successfully uploaded"
  }
}
```
##### 400
```json
{
  "success": false,
  "data": "Invalid file type. Only .py files are allowed."
}
```
##### 404
```json
{
  "success": false,
  "data": "bot not found"
}
```
###### source: bots.BotsControllerProtected.upload
---
## Set bot state
#### POST  v1/user/bot/state/:uuid
Set the state of a bot to active or stopped
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**uuid**|string|true|{}|
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**state**|string|true|{"oneOf":["active","stopped"]}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Bot successfully updated"
}
```
##### 404
```json
{
  "success": false,
  "data": "Bot not found"
}
```
###### source: bots.BotsControllerProtected.setState
---
## Delete bot
#### DELETE  v1/user/bot/delete/:uuid
Delete a bot
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**uuid**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Bot successfully updated"
}
```
##### 404
```json
{
  "success": false,
  "data": "Bot not found"
}
```
###### source: bots.BotsControllerProtected.deleteBot
---
## Upload bot avatar (no tests !)
#### POST  v1/bot/avatar/:uuid
Upload the avatar of a bot
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerProtected.postAvatar
---
## Subscribe
#### POST  v1/bot/subscribe/:uuid
Subscribe to a bot
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**uuid**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Bot success"
}
```
##### 400
```json
{
  "success": false,
  "data": "Invalid operation : user already subscribed to this bot"
}
```
##### 404
```json
{
  "success": false,
  "data": "Bot not found"
}
```
###### source: bots.BotsControllerProtected.subscribe
---
## Unsubscribe
#### POST  v1/bot/unsubscribe/:uuid
Unsubscribe from a bot
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**uuid**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Bot success"
}
```
##### 400
```json
{
  "success": false,
  "data": "Invalid operation : user hasn't subscribed to this bot"
}
```
##### 404
```json
{
  "success": false,
  "data": "Bot not found"
}
```
###### source: bots.BotsControllerProtected.unsubscribe
---
## Like/Unlike bot (no tests !)
#### POST  v1/bot/like/:uuid
Like or unlike a bot
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerProtected.likeBot
---
## Inventory (no tests !)
#### POST  v1/user/inventory
Get the inventory of the logged in user with filters and sorting. Filters can be any field of the bot model. Sort can be any field of the bot model.[[A, B], [x, y]] => { $and: [ {$or: [A, B]}, { $or: [x, y]} ] }
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerProtected.inventory
---
## Get liked bots
#### GET  v1/bot/liked
Get the liked bots of the logged in user
#### Payload
No payload
#### Returns
##### 200
```json
{
  "success": true,
  "data": [
    {
      "_id": "unique identifier",
      "name": "Test Bot",
      "author": {
        "_id": "unique identifier",
        "username": "test",
        "avatar": "URL to the avatar",
        "followers": 0
      },
      "subscribers": [],
      "price": 100,
      "crypto": "BTC",
      "status": "active",
      "likes": 1,
      "tags": [
        "TagId1"
      ],
      "uuid": "unique identifier",
      "createdAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "updatedAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "__v": 2,
      "avatar": "URL to the avatar"
    }
  ]
}
```
###### source: bots.BotsControllerProtected.liked
---
## Get followed bots (no tests !)
#### GET  v1/bot/followed
Get the followed bots of the logged in user
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerProtected.followed
---
## Get bot logs (no tests !)
#### GET  v1/bot/:uuid/logs
Get the logs of a bot
#### Payload
No payload
#### Returns
###### source: bots.BotsControllerProtected.getLogs
---
# Notification
## Create a notification
#### POST  v1/notification
Create a notification!
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**title**|string|true|{}|
|**description**|string|true|{}|
|**userIds**|any|true|{}|
#### Returns
##### 201
```json
{
  "success": true,
  "data": {
    "notificationId": "tH6xcJYEXuUpDns_MDVzG",
    "url": ""
  }
}
```
##### 400
```json
{
  "success": false,
  "data": "Missing required value : userIds in body"
}
```
###### source: notification.NotificationController.create
---
## Delete a notification
#### DELETE  v1/notification/:notificationId
Delete a notification
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**notificationId**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Notification am_lwB7qmRW8yqObDb-rR successfully deleted"
}
```
###### source: notification.NotificationController.delete
---
## Get notifications
#### GET  v1/notification/list/:userId
Get notifications
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**userId**|string|true|{}|
##### query
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**limit**|number|false|{}|
|**skip**|number|false|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": []
}
```
###### source: notification.NotificationController.get
---
## Patch notifications
#### PATCH  v1/notification/seen
Patch notifications
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**notificationsId**|any|false|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": [
    {
      "_id": "unique identifier",
      "title": "testNotif",
      "description": "descriptionNotif",
      "url": "",
      "userIds": [
        null
      ],
      "seen": true,
      "createdAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "updatedAt": "timestamp in YYYY-MM-DDTHH:MM:SSZ format",
      "__v": 0
    }
  ]
}
```
##### 400
```json
{
  "success": false,
  "data": "Notifications  not found failed"
}
```
###### source: notification.NotificationController.patch
---
# Sdk
## SDK Set bot state
#### POST  v1/bot/state/:uuid
Set the state of a bot to active, stopped, paused, error, deleted or pending
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**uuid**|string|true|{}|
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**state**|string|true|{"oneOf":["active","stopped","paused","error","deleted","pending"]}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Bot successfully updated"
}
```
##### 400
```json
{
  "success": false,
  "data": "Invalid value : '&quot;invalid&quot;' is not one of [active,stopped,paused,error,deleted,pending] for field 'state' in body"
}
```
##### 404
```json
{
  "success": false,
  "data": "Bot not found"
}
```
###### source: sdk.SDKController.setState
---
## SDK Add trade
#### POST  v1/bot/trade/:uuid
Add a trade to a bot, to be used by the SDK
#### Payload
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**trade_uuid**|string|true|{}|
|**side**|string|true|{"oneOf":["long","short"]}|
|**size**|number|true|{}|
|**price**|number|true|{}|
|**type**|string|true|{"oneOf":["open","close"]}|
|**symbol**|string|true|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Bot successfully updated"
}
```
##### 400
```json
{
  "success": false,
  "data": "Missing required value : trade_uuid in body"
}
```
##### 404
```json
{
  "success": false,
  "data": "Bot not found"
}
```
###### source: sdk.SDKController.addTrade
---
## SDK Edit trade
#### PUT  v1/bot/trade/:uuid
Edit a trade associated with a bot
#### Payload
##### params
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**uuid**|string|true|{}|
##### body
|Field|Type|Required|Additional informations|
|---|:-:|:-:|---|
|**side**|string|false|{"oneOf":["long","short"]}|
|**size**|number|false|{}|
|**openPrice**|number|false|{}|
|**closePrice**|number|false|{}|
|**type**|string|false|{"oneOf":["open","close"]}|
|**roe**|number|false|{}|
|**pfGain**|number|false|{}|
#### Returns
##### 200
```json
{
  "success": true,
  "data": "Trade successfully updated"
}
```
##### 400
```json
{
  "success": false,
  "data": "Bad request : {{ source }} body"
}
```
##### 404
```json
{
  "success": false,
  "data": "Trade not found"
}
```
###### source: sdk.SDKController.editTrade
---
# Admin
## Login (no tests !)
#### POST  v1/employees/login
Login as an admin
#### Payload
No payload
#### Returns
###### source: admin.AdminsAuth.login
---
## Register (no tests !)
#### POST  v1/employees/register
Register a new admin
#### Payload
No payload
#### Returns
###### source: admin.Admins.register
---
