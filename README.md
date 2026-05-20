# Review Room - TV Show Review API

Review Room is a TV show review API and frontend built for a testing and authentication assignment. The project focuses on clean route design, Firebase authentication, unit tests, integration tests, and a simple CI pipeline.

## Overview

The backend is built with Express, TypeScript, and Firebase Admin SDK. The frontend is a small vanilla JavaScript app that signs users in with Firebase Auth, fetches public show data, and sends authenticated requests with Bearer tokens.

The API exposes these routes:

- `GET /shows` - public
- `GET /shows/:id` - public
- `GET /profile` - protected
- `POST /shows` - protected
- `POST /shows/:id/reviews` - protected

## Deployed URLs

| Service  | URL |
|----------|-----|
| Backend  | `https://assesssment3.onrender.com` |
| Frontend | `https://reviewroom.vercel.app` |

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/ssannejohansson/ReviewRoom.git
cd ReviewRoom
```

### 2. Install dependencies

Install the backend dependencies:

```bash
cd backend
npm install
```

Install the frontend dependencies:

```bash
cd ../frontend
npm install
```

### 3. Configure environment variables

Use the example files as a template:

- `backend/.env.example`
- `frontend/.env.example`

For the backend, make sure the following values are configured:

- `PORT=3000`
- `CORS_ORIGIN=http://localhost:5500`
- `DATABASE_URL=postgresql://your-username@localhost:5432/reviewroom`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_PRIVATE_KEY`
- `FIREBASE_CLIENT_EMAIL`

For the frontend, the Firebase web config is defined in `frontend/src/firebase-config.js`. The values shown there are the public Firebase project settings used by the browser app.

### 4. Run the project locally

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npx serve src -l 5500
```

Then open the frontend in your browser and use the login form to authenticate.

Before running locally for the first time, run the database migration and seed:

```bash
cd backend
npx prisma migrate dev
npx prisma db seed
```

### 5. Run with Docker

Make sure Docker Desktop is running, then from the project root:

```bash
docker-compose up --build
```

This starts three containers: the backend (port 3000), the frontend via nginx (port 5500), and a PostgreSQL database (port 5433).

On first run, apply the migration and seed the database:

```bash
docker-compose exec backend npx prisma migrate deploy
docker-compose exec backend npx prisma db seed
```

Then open:
- Frontend: http://localhost:5500
- API: http://localhost:3000/shows

## Testing

### Run tests locally

Run the backend test suite:

```bash
cd backend
npm test
```

Run the backend build check:

```bash
npm run build
```

Run the frontend unit tests:

```bash
cd ../frontend
npm test
```

### Screenshots

**Passing tests locally**

![Passing tests locally](docs/screenshot-tests-local.png)

**Passing GitHub Actions pipeline**

![Passing GitHub Actions pipeline](docs/screenshot-pipeline.png)

## Authentication

This project uses Firebase authentication.

- The frontend signs users in with Firebase Auth.
- After login, the frontend requests an ID token from Firebase.
- Protected requests send that token in the `Authorization: Bearer <token>` header.
- The backend uses Firebase Admin SDK and the `verifyToken` middleware to validate the token.
- Protected routes return `401 Unauthorized` when the token is missing or invalid.

Firebase was chosen because it gives a clear token-based flow between browser and server, which makes the authentication logic easy to test and explain.

## Security Decisions

The project follows the security checklist from the assignment:

- No secrets are committed to the repository. Sensitive backend values belong in `backend/.env`, and the example file shows what is needed.
- The frontend Firebase web config is public client configuration, not a private secret. The sensitive Firebase Admin values stay on the backend.
- CORS is restricted to the frontend origin instead of using `*`. This prevents random websites from making cross-origin requests to the API during development.
- Tokens are not stored in `localStorage`. The app relies on Firebase Auth state and requests fresh ID tokens when needed, which avoids long-lived browser storage for auth tokens.
- Authenticated requests use the `Authorization: Bearer <token>` header so the backend can verify the caller before allowing protected actions.
- All frontend fetch calls include `credentials: "include"`, which is the equivalent of `withCredentials: true`. This ensures cookies and credentials are sent with cross-origin requests, which is required for CORS to work correctly with authenticated sessions.
- The Firebase service account private values are kept out of source control and handled through environment variables or GitHub Secrets.

Why these choices matter:

- They keep the auth flow explicit and easy to test.
- They reduce the chance of leaking credentials in the repo.
- They keep the frontend and backend loosely coupled, which is useful for testing and CI.

## Deployment Reflections

**Why did you choose this deployment platform?**

I choose Render for the backend because it seemed easy to set up with Node and PostgreSQL in the same place. I used Vercel for the frontend since it was presented for us.

**What challenges did you face with Docker?**

The only challenge i faced was some trouble with ESM modules and extensions at imports to make sure Prisma generated correct during the build. 

**How did you handle environment variables and secrets in production?**

I stored sensitive values (like Firebase credentials and db url)in Render Env and Github Secrets. 

**What would you do differently with one more week?**

I would improve validation on protected routes, like checking that ratings are between 1-5. I would also add user registration instead of only using a demo account. 

**How did you ensure authentication works after deployment?**

I added the deployed frontend URL to Firebase Authorized Domains and updated the backend CORS settings. The frontend also requests a new Firebase token for protected routes, so authentication works the same in production as locally. 

## Reflections

Implementation choices:

- PostgreSQL with Prisma was used as the database. This gives the app real persistence across restarts and deploys, and makes the docker-compose setup more realistic.
- The backend uses small route handlers and straightforward validation so the tests can target behavior directly.
- The frontend stays intentionally simple: login, logout, public show API and protected create/review actions.

What was challenging:

- Route ordering in Express matters. Static routes like `/profile` must be placed carefully so they are not shadowed by dynamic routes like `/:id`.
- Keeping the frontend and backend auth flow aligned required consistent handling of Firebase state and Bearer tokens.
- The biggest tradeoff was balancing simplicity for the assignment with enough structure to keep the code readable and testable.

What would implement next:

- I would add input validation on the backend (e.g. reject reviews with a rating outside 1–5, or shows missing required fields) to make the API more robust.
- I would add more granular error handling on the frontend so each view shows its own error message rather than sharing a single error element.
- I would add a registration flow so new users can sign up directly in the app rather than relying on a pre-created demo account.
- I would implement search and filtering on the shows list so users can find a specific show without scrolling through the entire grid.

This is a solo project.

## Project Status

The repository includes:

- Backend integration tests for public and protected routes
- Frontend unit tests for UI logic
- A GitHub Actions workflow for automated test runs



