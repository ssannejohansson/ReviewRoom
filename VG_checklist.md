# VG Checklist — Final Assignment: Docker & Cloud Deployment

/* ------------------------------------------
PROJECT SETUP & REPOSITORY
--------------------------------------------- */

- [x] Folder structure: `/backend`, `/frontend`, `/docker` (or docker files in root)
- [ ] `README.md` includes: install instructions, how to run locally, how to run with Docker
- [ ] `README.md` includes deployed URLs (backend and frontend)
- [x] `.env.example` lists all environment variables — no secrets in the repo

/* ------------------------------------------
DOCKER & CONTAINERIZATION
--------------------------------------------- */

- [x] `Dockerfile` written for backend
- [x] `Dockerfile` written for frontend (if separate)
- [x] App runs without relying on locally installed Node.js
- [x] `node_modules` NOT included in Docker image (`.dockerignore`)
- [x] `.env` files NOT included in Docker image
- [x] `docker build` and `docker run` produce a working app

VG extras:
- [x] `docker-compose.yml` orchestrates backend + frontend (+ optional database)
- [x] Multi-stage build used to keep image size small

/* ------------------------------------------
DEPLOYMENT
--------------------------------------------- */

- [x] Backend deployed and publicly accessible via URL
- [x] Frontend deployed and publicly accessible via URL
- [x] Deployed backend uses HTTPS
- [x] All API routes work correctly from the cloud backend

/* ------------------------------------------
AUTHENTICATION IN PRODUCTION
--------------------------------------------- */

- [x] Login and logout work on the deployed app
- [x] Firebase redirect URIs updated to deployed URLs (not localhost)
- [x] CORS restricted to the deployed frontend URL (not `*`)
- [x] Tokens NOT stored in `localStorage` — use cookies or secure session storage
- [x] `withCredentials: true` used on all authenticated frontend requests

/* ------------------------------------------
TESTING
--------------------------------------------- */

- [x] All existing unit tests still pass
- [x] All existing integration tests still pass
- [x] At least 2 new tests added that verify production-like behavior
  - e.g. deployed API returns correct CORS headers
  - e.g. Docker container starts correctly and responds to requests
- [x] All tests pass in the CI pipeline

/* ------------------------------------------
GITHUB ACTIONS PIPELINE
--------------------------------------------- */

- [x] Pipeline triggers on push to `main`
- [x] Pipeline installs dependencies and runs all tests
- [x] All secrets stored in GitHub Secrets, not hardcoded
- [x] Pipeline shows clear pass/fail result

VG extra:
- [ ] Pipeline automatically deploys to cloud on push

/* ------------------------------------------
FRONTEND (PRODUCTION)
--------------------------------------------- */

- [x] Frontend connected to deployed backend URL (not localhost)
- [ ] Loading states handled gracefully
- [ ] Error states handled gracefully

/* ------------------------------------------
SECURITY (PRODUCTION FOCUS)
--------------------------------------------- */

- [x] No secrets committed to the repo
- [x] All sensitive values in `.env` and GitHub Secrets
- [x] CORS restricted to deployed frontend URL
- [x] Tokens never in `localStorage`
- [x] `withCredentials: true` on all authenticated requests
- [x] Docker image does not contain `.env` or `node_modules`
- [x] Authentication callbacks use deployed URL, not `localhost`

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

- [x] Live demo: app running locally with Docker
- [x] Live demo: app running on deployed cloud URL
- [x] Live demo: login and accessing protected content
- [ ] Can explain deployment choices and trade-offs
- [ ] GitHub repo with updated README ready to share
