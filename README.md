# Social Network API

## Description

A robust backend API designed for a social network, allowing users to share thoughts, react to friends’ thoughts, and manage a friend list.

## Technologies 

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

### 1. Clone the repository:

   git clone https://github.com/JuanFranciscoGrillo/social-network_API.git

### 2. Navigate to the project directory:

   cd social-network_API

### 3. Install dependencies:

   npm install

### 4. Set up your environment variables:
   - Create a `.env` file in the root of your directory.
   - Add `MONGODB_URI=mongodb://localhost/social-network-api`.

## Usage

To start the application, run the following command:

npm start


## Endpoints

### User Routes

- **GET** all users: `/api/users`
- **GET** a user by ID: `/api/users/:id`
- **POST** a new user: `/api/users`
- **PUT** to update a user by ID: `/api/users/:id`
- **DELETE** a user by ID: `/api/users/:id`
- **POST** to add a friend: `/api/users/:userId/friends/:friendId`
- **DELETE** to remove a friend: `/api/users/:userId/friends/:friendId`

### Thought Routes

- **GET** all thoughts: `/api/thoughts`
- **GET** a thought by ID: `/api/thoughts/:id`
- **POST** a new thought: `/api/thoughts`
- **PUT** to update a thought by ID: `/api/thoughts/:id`
- **DELETE** a thought by ID: `/api/thoughts/:id`
- **POST** to add a reaction: `/api/thoughts/:thoughtId/reactions`
- **DELETE** to remove a reaction: `/api/thoughts/:thoughtId/reactions/:reactionId`

NOTE: 10/12/23: I defined the endpoint but i havent test them yet. Ill finish the project by the end of the day.
