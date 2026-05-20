# Group Assignment 3: Build and Secure a Tested REST API

**Course:** Testing and Authentication  
**Groups:** 1–3 students  
**Time:** 7 days  
**Submission:** GitHub repo link

---

## Overview

Build a small but complete REST API that is tested, authenticated, and automatically verified by a CI pipeline. This covers: TDD, unit and integration testing, GitHub Actions, Firebase or Auth0, and security best practices.

---

## What You Are Building

A **Gym Review API** with the following routes:

| Method | Route | Access |
|--------|-------|--------|
| GET | `/gyms` | Public |
| GET | `/gyms/:id` | Public |
| POST | `/gyms` | Protected (must be logged in) |
| POST | `/gyms/:id/reviews` | Protected (must be logged in) |
| GET | `/profile` | Protected (must be logged in) |

> You choose the database (PostgreSQL, MongoDB, or even an in-memory array). The focus is on **testing and authentication**, not database design.

---

## Requirements

### 1. Project Setup

- One shared GitHub repository with a clear folder structure (e.g. `backend/` and `client/`)
- A `README.md` explaining how to install, run, and test the project
- A `.env.example` showing which environment variables are needed — **no secrets in the code**
- Dependencies installed via `package.json`

---

### 2. Authentication

Choose **one** option and implement it consistently:

**Option A: Auth0 with `express-openid-connect`**
- Use session-based authentication
- Protect POST routes and `/profile` with `requiresAuth()`
- Set `errorOnRequiredAuth: true` so protected routes return `401` instead of redirecting

**Option B: Firebase with `firebase-admin`**
- Use token-based authentication
- Protect POST routes with your `verifyToken` middleware
- Client sends a bearer token in the `Authorization` header

**Either way:**
- Unauthenticated requests to protected routes must return `401 Unauthorized`
- Authenticated requests must return the correct data
- The frontend must include a working **login and logout button**
- Users should only see protected content when logged in

---

### 3. Testing

Write tests at two levels:

#### Unit Tests (Vitest)

Write at least **5 unit tests** that check your UI or utility logic in isolation. Use the fake component pattern — no real network calls.

Suggested tests:
- Shows a "not logged in" message when there is no user
- Shows the user's name when logged in
- Hides the protected form when not logged in
- Shows a list of gyms when data is passed in
- Shows an error message when the gym list is empty

#### Integration Tests (Vitest + `node:http`)

Write at least **5 integration tests** that test how multiple parts of your app work together.

Suggested tests:
- `GET /gyms` returns `200` and an array
- `GET /gyms/:id` returns `404` for an unknown ID
- `POST /gyms` without a token returns `401`
- `POST /gyms` with a valid session/token returns `201`
- `POST /gyms/:id/reviews` without a token returns `401`

---

### 4. GitHub Actions Pipeline

Create `.github/workflows/test.yml` that:

- Triggers on every push and pull request to `main`
- Installs dependencies
- Runs all your tests
- Shows a pass or fail result in the GitHub Actions tab
- Uses **GitHub Secrets** for any sensitive values — never hardcode them

```yaml
name: Run tests

on:
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [22.x]

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies
        run: npm install
        working-directory: ./backend
      - name: Run tests
        run: npm test
        working-directory: ./backend
        env:
          SECRET: ${{ secrets.SECRET }}
          CLIENT_ID: ${{ secrets.CLIENT_ID }}
          ISSUER: ${{ secrets.ISSUER }}
```

---

### 5. Security Checklist

Before submitting, confirm each point in your written reflection:

- [ ] No secrets or API keys are committed to the repository
- [ ] All sensitive values are in `.env` and listed in `.env.example`
- [ ] Protected routes return `401` for unauthenticated requests (verified by tests)
- [ ] CORS is configured to only allow your frontend origin — **no wildcard `*`**, specify the port
- [ ] Tokens are **not** stored in `localStorage`
- [ ] `withCredentials: true` (or equivalent) is used on all authenticated frontend requests

---

## Suggested 7-Day Plan

| Day | Focus |
|-----|-------|
| 1 | Set up the repo, agree on folder structure, choose Auth0 or Firebase, write the first failing test together |
| 2 | Build the public routes (`GET /gyms`, `GET /gyms/:id`), write integration tests for them |
| 3 | Add authentication middleware, protect the POST routes, write the 401 tests |
| 4 | Write unit tests for the frontend/UI logic |
| 5 | Set up the GitHub Actions pipeline, make sure it passes, add a screenshot to the README |
| 6 | Security review — go through the checklist and fix anything missing |
| 7 | Write the reflection, clean up the README, add screenshots of passing tests, final check |

---

## Grading Criteria

### Not Passed (IG)
- Tests are missing, broken, or do not run
- Protected routes do not return `401` for unauthenticated requests
- No GitHub Actions pipeline, or pipeline is not connected to the tests
- Authentication is not implemented or does not protect routes correctly
- Secrets are committed to the repository
- `.env.example` or `README.md` is missing
- The frontend has no login/logout functionality or does not connect to the API

### Passed (G)
- At least 5 working unit tests and 5 working integration tests
- Protected routes correctly return `401` for unauthenticated requests
- A working GitHub Actions pipeline that runs tests on push
- Authentication implemented with Firebase or Auth0
- No secrets in the repository
- A complete `.env.example` and a clear `README.md`
- The frontend includes a working login/logout button and displays protected content only when logged in

### Well Passed (VG)
- Tests are well named, well structured, and cover both success and failure cases
- Protected routes return `401` and are verified by clearly named tests
- The pipeline includes a clear test report or summary in the GitHub Actions output
- Authentication is fully integrated and the group can explain their implementation choices
- No secrets in the repository and sensitive values are handled deliberately
- A complete `.env.example` and a clear `README.md` with explanation of **why** each security decision was made — not just what was done
- The frontend handles loading states and errors gracefully, and uses `withCredentials: true` or equivalent on all authenticated requests

---

---

# Final Assignment: Deploying a Full-Stack Application with Docker & Cloud Services

**Course:** Full-stack Development & Production Deployment  
**Groups:** 1–3 students  
**Time:** May 19 – June 4  
**Presentation:** June 4  
**Submission:** GitHub repo link + deployed URL

---

## Overview

Take your REST API to production. You will:

- Containerize your application with Docker
- Deploy it to a cloud service
- Connect the frontend to your backend, both in the cloud

---

## What You Are Building

### Option A: Continue a Previous Project

If continuing from the Gym Review API (Module 3), you already have a working full-stack app with authentication. Your tasks are:

- Write Dockerfiles for backend and frontend
- Deploy both to cloud platforms (e.g. Render for backend, Vercel for frontend)
- Ensure authentication, CORS, and all routes work correctly in production
- Update your tests to verify production-ready behavior

### Option B: Start a New Project

Build a new full-stack app from scratch (backend + frontend + authentication), or choose a project from [this list of CRUD app ideas](https://codingzap.com/crud-app-ideas/).

You must still implement authentication, Dockerize, and deploy the application.

---

## Recommended Platforms

| Component | Recommended | Alternatives |
|-----------|-------------|--------------|
| Frontend (React) | Vercel | Netlify, Cloudflare Pages, DigitalOcean App Platform |
| Backend (Express) | Render | Railway, Fly.io, Heroku, DigitalOcean App Platform |
| Database (PostgreSQL) | Render PostgreSQL | Railway, Supabase, MongoDB Atlas |

> You are not required to use Vercel and Render. If you explore alternatives, you must still meet all requirements.

---

## Requirements

### 1. Project Setup & Repository

Folder structure:
```
/backend    – Node.js/Express API
/frontend   – Your frontend code
/docker     – Dockerfiles or docker-compose (optional but recommended)
```

`README.md` must include:
- How to install, run locally, and test the project
- How to build and run with Docker
- The deployed URLs (backend and frontend)
- Your group's reflections (see below)

---

### 2. Docker & Containerization

- Write a `Dockerfile` for your backend (and frontend if separate)
- Optionally use `docker-compose.yml` to run both services together
- The containerized app must run **without** relying on locally installed Node.js
- Do **not** include `node_modules` or secrets in the Docker image

---

### 3. Deployment to a Cloud Service

Your deployed app must:
- Be publicly accessible via a URL
- Have working authentication (login/logout)
- Return correct API responses from the cloud backend

---

### 4. Authentication in Production

- Use the same auth provider as before (Auth0 or Firebase), or choose another
- Ensure redirect URIs and CORS are configured for your **deployed URLs**
- Do **not** store tokens in `localStorage` — use cookies with `httpOnly` or session storage with secure flags
- Set `withCredentials: true` (or equivalent) on all authenticated frontend requests

---

### 5. Testing

- Run your existing unit and integration tests
- Add **at least two new tests** that verify production-like behavior (e.g. that the deployed API returns CORS headers, or that the Docker container starts correctly)
- All tests must pass in your CI pipeline

---

### 6. GitHub Actions Pipeline

Update or create `.github/workflows/deploy.yml` that:

- Triggers on push to `main`
- Installs dependencies
- Runs all tests
- (Optional/advanced) Automatically deploys to your cloud provider using secrets

---

### 7. Security Checklist (Production Focus)

Verify and explain each point in your README:

- [ ] No secrets are committed — all are in `.env` or GitHub Secrets
- [ ] CORS is restricted to your frontend's deployed URL (not `*`)
- [ ] Tokens are never stored in `localStorage` — cookies or secure session storage only
- [ ] `withCredentials: true` is used on all authenticated frontend requests
- [ ] Docker image does not contain `.env` files or host `node_modules`
- [ ] The deployed backend uses HTTPS (most platforms provide this automatically)
- [ ] Authentication callbacks use the deployed URL, not `localhost`

---

## Suggested 2-Week Plan (May 19 – June 4)

| Date | Focus |
|------|-------|
| May 19 | Decide Option A or B. Set up Vercel + Render accounts. Write Dockerfile for backend. |
| May 20 | Test backend locally with Docker. Add docker-compose if desired. |
| May 21 | Deploy backend to Render. Verify API works (e.g. `GET /gyms`). |
| May 22 | Build or adapt frontend. Connect it to your deployed backend URL (not localhost). |
| May 23 | Implement login/logout in production. Fix CORS and redirect URIs. |
| May 26 | Run all tests against deployed API. Add new deployment-related tests. |
| May 27 | Update GitHub Actions pipeline. Ensure tests pass on push. |
| May 28 | Security review. Check that no secrets are in the repo or Docker image. |
| May 29 | Write/update README with deployment URLs, Docker instructions, reflections. |
| June 2 | Dry run presentation. Fix any last-minute issues. |
| June 3 | Final testing: Docker, local, and deployed. |
| June 4 | **Presentations** |

---

## Alternative Platforms

| Platform | Best For | Free Tier | Docker Support |
|----------|----------|-----------|----------------|
| Railway | Full-stack apps with databases | $5 monthly credit | ✅ Yes |
| Fly.io | Globally distributed container apps | Pay-as-you-go | ✅ Yes |
| Netlify | Serverless + AI-assisted development | Generous free tier | ⚠️ Limited |
| DigitalOcean App Platform | Cost-effective hybrid PaaS | 3 static apps free | ✅ Yes |
| Coolify | Open-source self-hosted | Free (self-hosted) | ✅ Yes |

---

## Presentation (June 4)

Prepare a **5–7 minute live demo** showing:

1. Your app running locally with Docker
2. Your app running on the deployed cloud URL
3. Logging in and accessing protected content

Also bring:
- Your GitHub repository with updated README
- A brief explanation of your deployment choices and any challenges

---

## Grading Criteria

### Not Passed (IG)
- No Dockerfile, or Docker image does not run
- No deployed URL, or deployed app does not work
- Authentication fails in production (e.g. redirects to localhost)
- Tests are broken or not run in CI
- Secrets are visible in the repository
- No frontend connection to the deployed backend

### Passed (G)
- Dockerfile works — `docker build` and `docker run` produce a working app
- Backend and frontend are deployed and publicly accessible
- Authentication works in production (login/logout)
- Existing tests pass, and at least two new tests are added
- CI pipeline runs all tests successfully
- README includes deployed URLs and basic Docker instructions

### Passed with Distinction (VG)
- Uses `docker-compose` to orchestrate backend + frontend + optional database
- Deployment pipeline is automated (GitHub Actions deploys to cloud on push)
- Container is optimized (multi-stage build, small image size)
- Frontend handles loading and error states gracefully in production
- Security decisions are thoroughly explained in README **with reasoning** (e.g. why `localStorage` is avoided, how CORS is locked down)
- The group can clearly explain trade-offs and alternatives during the presentation

---

## Reflection Questions for README

Answer these in your README:

1. Why did you choose this deployment platform? What alternatives did you consider?
2. What challenges did you face with Docker? How did you solve them?
3. How did you handle environment variables and secrets in production vs locally?
4. What would you do differently if you had one more week?
5. How did you ensure that authentication still works after deployment?