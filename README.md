# Nodejs-Express-MongoDB

A minimal REST API with Express and Mongoose that provides CRUD operations for a `users` collection in MongoDB.

## Features

- Create, list, fetch, update (partial) and delete users
- Mongoose schema with `firstName`, `lastName` (required) and `registeredTime` (defaults to now)
- Permissive CORS headers for local frontend development
- JSON error responses

## API

| Method | Path | Description |
| --- | --- | --- |
| GET | `/` | Health check |
| GET | `/user` | List all users |
| GET | `/user/:id` | Get one user |
| POST | `/user` | Create a user (`{ "firstName": "...", "lastName": "..." }`) |
| PATCH | `/user/:id` | Update fields of a user |
| DELETE | `/user/:id` | Delete a user |

## Tech stack

- Node.js with Express 4.16
- Mongoose 5.13
- nodemon 1.19 (development)

## Getting started

Requires Node.js and a MongoDB instance running locally on the default port.

```bash
git clone https://github.com/rajkumar30598/Nodejs-Express-MongoDB.git
cd Nodejs-Express-MongoDB
npm install
npm start          # runs: nodemon server.js
```

The server listens on http://localhost:3000 and connects to `mongodb://localhost:27017/sampleDB` (set in `server.js`). No environment variables are required.

Example:

```bash
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Ada","lastName":"Lovelace"}'
```
