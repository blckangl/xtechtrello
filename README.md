This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## XTECH TRELLO APP TEST

```bash
npm run dev
# or
yarn dev
```

 Open [https://xtechtrello.vercel.app](https://xtechtrello.vercel.app) with your browser to see the result. 


# REST API 

## Create a new User

` POST /api/users`

```bash
{
    "name":"foulen ben foulen",
    "email":"foulen@gmail.com",
    "avatar":"https://randomuser.me/api/portraits/men/10.jpg",
    "password":"123456"
}
```
## Get all users

` GET /api/users`

## Create a new Board

` POST /api/boards`

```bash
{
   "title":"Telescopes 101",
   "description":"The beauty of astronomy is that anybody can do it. From the tiniest baby to the most."
}
```
## Get latest boards

` GET /api/boards`

## Create a new BoardSection

` POST /api/sections`

```bash
{
    "title":"Finished Tasks",
    "id":"614d0b76a2cdbe9d86f5e048" //board id
}
```
## Create a new Task

` POST /api/sections`

```bash
{
        "title":"Task one",
        "description": "An important task .",
        "picture":"",
        "types":["Development","Design"],
        "id":"614d557fff88ca4272d9f6c3" //task id
      }
      ...
      TaskType = "Development" | "Design" | "Audio" | "Other";
```

### Response

 

    { success: boolean; body?: any; error?: any; }
