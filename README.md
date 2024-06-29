# Swiftclipz Backend

The backend for Swiftclipz, a user-friendly web app designed to help you save and organize clips from various online sources.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization using Json Web Tokens (JWT).
- RESTful API for managing clips (create, read, update, delete).
- MongoDB database integration for storing clip data.
- Efficient and scalable architecture.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn
- MongoDB instance (local or cloud-based)

### Installation

1. Clone the repository:
   `git clone https://github.com/yourusername/swiftclipz-backend-v1.git
cd swiftclipz-backend-v1`
2. Install Dependencies:

   `npm install`

### Configuration

1. Create a .env file in the root directory and add the following environment variables:

   ```bash
   PORT = 5000
   MONGODB_URI = your_mongodb_connection_string
   FIREBASE_API_KEY = your_firebase_api_key
   FIREBASE_AUTH_DOMAIN = your_firebase_auth_domain
   FIREBASE_PROJECT_ID = your_firebase_project_id
   FIREBASE_STORAGE_BUCKET = your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID = your_firebase_messaging_sender_id
   FIREBASE_APP_ID = your_firebase_app_id

   ```

### Running the application

1. Start the server:
   `npm install`
