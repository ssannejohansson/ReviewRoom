# VG Checklist — Final Assignment: Docker & Cloud Deployment

/* ------------------------------------------
PROJECT SETUP & REPOSITORY
--------------------------------------------- */

- [ ] Folder structure: `/backend`, `/frontend`, `/docker` (or docker files in root)
- [ ] `README.md` includes: install instructions, how to run locally, how to run with Docker
- [ ] `README.md` includes deployed URLs (backend and frontend)
- [ ] `.env.example` lists all environment variables — no secrets in the repo

/* ------------------------------------------
DOCKER & CONTAINERIZATION
--------------------------------------------- */

- [ ] `Dockerfile` written for backend
- [ ] `Dockerfile` written for frontend (if separate)
- [ ] App runs without relying on locally installed Node.js
- [ ] `node_modules` NOT included in Docker image (`.dockerignore`)
- [ ] `.env` files NOT included in Docker image
- [ ] `docker build` and `docker run` produce a working app

VG extras:
- [ ] `docker-compose.yml` orchestrates backend + frontend (+ optional database)
- [ ] Multi-stage build used to keep image size small

/* ------------------------------------------
DEPLOYMENT
--------------------------------------------- */

- [ ] Backend deployed and publicly accessible via URL
- [ ] Frontend deployed and publicly accessible via URL
- [ ] Deployed backend uses HTTPS
- [ ] All API routes work correctly from the cloud backend

/* ------------------------------------------
AUTHENTICATION IN PRODUCTION
--------------------------------------------- */

- [ ] Login and logout work on the deployed app
- [ ] Firebase redirect URIs updated to deployed URLs (not localhost)
- [ ] CORS restricted to the deployed frontend URL (not `*`)
- [ ] Tokens NOT stored in `localStorage` — use cookies or secure session storage
- [ ] `withCredentials: true` used on all authenticated frontend requests

/* ------------------------------------------
TESTING
--------------------------------------------- */

- [ ] All existing unit tests still pass
- [ ] All existing integration tests still pass
- [ ] At least 2 new tests added that verify production-like behavior
  - e.g. deployed API returns correct CORS headers
  - e.g. Docker container starts correctly and responds to requests
- [ ] All tests pass in the CI pipeline

/* ------------------------------------------
GITHUB ACTIONS PIPELINE
--------------------------------------------- */

- [ ] Pipeline triggers on push to `main`
- [ ] Pipeline installs dependencies and runs all tests
- [ ] All secrets stored in GitHub Secrets, not hardcoded
- [ ] Pipeline shows clear pass/fail result

VG extra:
- [ ] Pipeline automatically deploys to cloud on push

/* ------------------------------------------
FRONTEND (PRODUCTION)
--------------------------------------------- */

- [ ] Frontend connected to deployed backend URL (not localhost)
- [ ] Loading states handled gracefully
- [ ] Error states handled gracefully

/* ------------------------------------------
SECURITY (PRODUCTION FOCUS)
--------------------------------------------- */

- [ ] No secrets committed to the repo
- [ ] All sensitive values in `.env` and GitHub Secrets
- [ ] CORS restricted to deployed frontend URL
- [ ] Tokens never in `localStorage`
- [ ] `withCredentials: true` on all authenticated requests
- [ ] Docker image does not contain `.env` or `node_modules`
- [ ] Authentication callbacks use deployed URL, not `localhost`

/* ------------------------------------------
README & REFLECTION
--------------------------------------------- */

- [ ] Deployed URLs listed (backend and frontend)
- [ ] Docker instructions: how to build and run
- [ ] Security decisions explained with reasoning (the WHY, not just the what)
- [ ] Answered: Why did you choose this deployment platform?
- [ ] Answered: What challenges did you face with Docker?
- [ ] Answered: How did you handle environment variables and secrets in production?
- [ ] Answered: What would you do differently with one more week?
- [ ] Answered: How did you ensure authentication works after deployment?

/* ------------------------------------------
PRESENTATION (June 4)
--------------------------------------------- */

- [ ] Live demo: app running locally with Docker
- [ ] Live demo: app running on deployed cloud URL
- [ ] Live demo: login and accessing protected content
- [ ] Can explain deployment choices and trade-offs
- [ ] GitHub repo with updated README ready to share
