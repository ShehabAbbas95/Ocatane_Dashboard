# Octane Dashboard

A modern dashboard application built with React and Redux Toolkit.

## Features

- Modern and intuitive user interface
- Order Managment with sorting, filtering, and pagination
- User Managment with sorting, filtering, and pagination
- RESTful API integration with JSON Server
- Custom theming and styling

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

- Using HTTPS:

```bash
git clone https://github.com/ShehabAbbas95/Ocatane_Dashboard.git
```

- Using SSH:

  ```
  git clone git@github.com:ShehabAbbas95/Ocatane_Dashboard.git
  ```

2. Navigate to the project directory:
   `bash cd Ocatane_Dashboard`
3. Install dependencies:
   `bash npm install`
4. Open another terminal on the project directory and start the backend server: `npx json-server db.json `

5. Start the development server:
   `bash npm start `
   The application will open in your default web browser at `http://localhost:5173/`.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`
Previews the production build locally.
This command should be run after `npm run build`.

### `npx json-server db.json`
Starts the mock backend server.
The server will run on [http://localhost:3000](http://localhost:3000).
This provides the REST API endpoints for the application.

### `npm run lint`
Runs the linter to check for code style issues and potential errors.
