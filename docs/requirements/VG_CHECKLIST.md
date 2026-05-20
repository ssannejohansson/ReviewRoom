# TV Show Review API - VG Checklist

## Phase 1: Project Setup & Structure

- [x] Repository created with clear folder structure (`backend/`, `frontend/`)
- [x] `.env.example` created with all required variables (no secrets committed)
- [x] `README.md` updated with project description
- [x] `package.json` created for backend with all dependencies
- [x] `tsconfig.json` configured for TypeScript
- [x] `vitest.config.ts` configured for testing
- [x] Backend entry point (`src/index.ts`) created
- [x] Express app (`src/app.ts`) created with middleware setup
- [x] CORS configured to specific frontend origin (not wildcard `*`)
- [x] `.gitignore` updated to exclude `.env`, `node_modules/`, `dist/`

## Phase 2: Firebase Authentication Setup

- [x] Firebase Admin SDK initialized in middleware
- [x] `verifyToken` middleware created in `src/middleware/auth.ts`
- [x] Middleware returns `401` for missing/invalid tokens
- [x] Bearer token extraction implemented
- [x] JWT token verification implemented
- [x] User ID extracted from verified token and attached to request
- [x] Integration test confirms `401` on protected routes without token
- [x] Integration test confirms protected routes work with valid token

## Phase 3: API Routes (Backend)

### Public Routes

- [x] `GET /tv-shows` route created (returns array)
- [x] `GET /tv-shows/:id` route created (returns 200 or 404)
- [x] Integration test: `GET /tv-shows` returns 200 and array
- [x] Integration test: `GET /tv-shows/:id` returns 404 for unknown ID

### Protected Routes (POST)

- [x] `POST /shows` route created with `verifyToken` middleware
- [x] Integration test: `POST /shows` without token returns 401
- [x] Integration test: `POST /shows` with valid token returns 201
- [x] `POST /shows/:id/reviews` route created with `verifyToken` middleware
- [x] Integration test: `POST /shows/:id/reviews` without token returns 401
- [x] Integration test: `POST /shows/:id/reviews` with valid token returns 201
- [x] Request body validation implemented (required fields check)

### Protected Routes (GET)

- [x] `GET /profile` route created with `verifyToken` middleware
- [x] Returns user info when authenticated
- [x] Integration test: `GET /profile` without token returns 401

## Phase 4: Database/Data Service

- [x] `src/services/tv-shows.service.ts` created with in-memory data
- [x] Service methods: `getAllShows()`, `getShowById()`, `createShow()`, `addReview()`
- [x] TV show data structure includes: id, title, description, genre, reviews, createdAt, createdBy
- [x] Review data structure includes: id, rating, comment, author, createdAt
- [x] Service properly tracks `createdBy` user ID for each show/review

## Phase 5: Controllers & Routes

- [x] `src/controllers/tv-shows.controller.ts` created
- [x] Each controller method has clear documentation
- [x] `src/routes/tv-shows.ts` created with all route definitions
- [x] Routes properly apply `verifyToken` middleware to protected endpoints
- [x] Error handling returns appropriate HTTP status codes
- [x] Unauthenticated requests return exactly `401 Unauthorized`

## Phase 6: Frontend Setup (Basic)

- [x] `frontend/` folder structure created
- [x] `package.json` created for frontend
- [x] HTML/JavaScript app setup complete
- [x] Login component created (index.html login form)
- [x] Logout functionality implemented
- [x] User authentication state managed (onAuthStateChanged)
- [x] Protected content only visible when logged in
- [x] Tokens used in Authorization header (Bearer token sent on protected routes)
- [x] All authenticated requests use `Authorization: Bearer <token>`
- [x] Frontend correctly configured to backend URL (API hardcoded to localhost:3000)

## Phase 7: Unit Tests (At Least 5)

- [x] Test: Shows "not logged in" message when no user
- [x] Test: Shows user's name when logged in
- [x] Test: Hides protected form when not logged in
- [x] Test: Shows list of TV shows when data passed in
- [x] Test: Shows error message when show list is empty
- [x] Unit tests use Vitest with proper isolation
- [x] No real network calls in unit tests

## Phase 8: Integration Tests (At Least 5 + 3 Auth-specific)

- [x] Integration test: `GET /tv-shows` returns `200` and array
- [x] Integration test: `GET /tv-shows/:id` returns `404` for unknown ID
- [x] Integration test: `POST /shows` without token returns `401`
- [x] Integration test: `POST /shows` with valid token returns `201`
- [x] Integration test: `POST /shows/:id/reviews` without token returns `401`
- [x] Integration test: `POST /shows/:id/reviews` with valid token returns `201`
- [x] Integration test: `GET /profile` without token returns `401`
- [x] Integration test: `GET /profile` with token returns user data
- [x] All tests use Vitest + `node:http` for real HTTP calls
- [x] Test names are descriptive and test success/failure cases

## Phase 9: Security Checklist (VG Requirement)

- [x] No secrets or API keys in repository — TMDB API key moved to `.env` / `TMDB_API_KEY` env var; `update-posters.mjs` now reads from `process.env.TMDB_API_KEY`
- [x] All sensitive values in `.env` and listed in `.env.example`
- [x] Protected routes return `401` for unauthenticated requests (verified by tests)
- [x] CORS configured with specific frontend origin (not `*`)
- [x] Tokens NOT stored in `localStorage` (use sessionStorage/memory)
- [x] `withCredentials: true` equivalent used on all authenticated frontend requests
- [x] Firebase credentials passed via environment variables
- [x] Firebase service account key file `.gitignore`d

## Phase 10: GitHub Actions Pipeline

- [x] `.github/workflows/` directory created
- [x] `.github/workflows/test.yml` created
- [x] Pipeline triggers on `push` and `pull_request` to `main`
- [x] Pipeline uses Node.js matrix (22.x)
- [x] `npm install` runs in correct directory (./backend)
- [x] `npm test` runs and passes
- [x] All secrets stored in GitHub Secrets (FIREBASE_PROJECT_ID, etc.)
- [x] No hardcoded credentials in workflow file
- [x] Workflow shows clear pass/fail status in GitHub Actions tab
- [ ] Screenshot of passing pipeline added to README

## Phase 11: Documentation & README

- [x] README explains project purpose (TV Show Review API)
- [x] Installation instructions: `npm install`, `npm run dev`
- [x] Test instructions: `npm test`
- [x] Environment setup instructions for Firebase
- [x] List of all routes (public and protected)
- [x] Authentication flow explanation
- [x] How to run tests locally
- [x] Link to GitHub Actions workflow
- [x] Screenshot of passing tests locally
- [ ] Screenshot of passing GitHub Actions pipeline
- [x] Explanation of security decisions (not just what, but why)
- [x] Team members listed (or indication of solo work) — solo project, noted in README

## Phase 12: Code Quality (For VG)

- [x] Tests are well-named (describe what they test, not just `test 1`)
- [x] Test structure clear: arrange, act, assert
- [x] Tests cover both success AND failure cases
- [x] Protected route tests specifically verify `401` response
- [x] Error messages are helpful and consistent
- [x] No console.log() spam (proper logging)
- [x] Code follows consistent naming conventions
- [x] Type safety: TypeScript strict mode enabled
- [x] No `any` types without justification (`(req as any).user` is a justified workaround for attaching Firebase decoded token to the Express request)

## Phase 13: Final Verification

- [x] All tests pass locally (`npm test`) — 27/27 passing
- [x] Backend builds without errors (`npm run build`) — fixed `tsconfig.json` missing `"moduleResolution": "node"`
- [ ] Frontend starts without errors (`npm run dev`)
- [ ] Manual API testing: can GET /tv-shows publicly
- [ ] Manual API testing: GET protected route without token returns 401
- [ ] Manual API testing: GET protected route with token works
- [ ] Frontend login flow works end-to-end
- [ ] Frontend displays protected content only when logged in
- [ ] GitHub Actions pipeline passes on latest push
- [ ] Repository is public (or shared with teacher)
- [ ] No secrets visible in any commit history

## Grading Criteria for VG

### Tests (VG: Well structured, cover success & failure)

- [x] At least 5 unit tests written and passing
- [x] At least 5 integration tests written and passing
- [x] Test names clearly describe what they test
- [x] Tests include both success and failure scenarios
- [x] Protected route tests explicitly verify `401` responses

### Authentication (VG: Fully integrated with clear choices)

- [x] Firebase authentication fully implemented (client-side and server-side)
- [x] Middleware clearly documented
- [ ] Group can explain implementation choices

### API (VG: Returns correct status codes)

- [x] `GET /tv-shows` returns `200`
- [x] `GET /tv-shows/:id` returns `404` for missing show
- [x] `POST /tv-shows` without token returns `401`
- [x] `POST /tv-shows` with token returns `201`
- [x] `POST /tv-shows/:id/reviews` without token returns `401`
- [x] All error responses consistent

### Pipeline (VG: Clear report/summary)

- [x] GitHub Actions pipeline created and working
- [x] Pipeline runs on every push
- [x] Test results visible in Actions tab
- [ ] Screenshot shows passing status

### Security (VG: Deliberate choices explained)

- [x] No secrets in repository — TMDB key moved to `.env`, Firebase key already in `.env`
- [ ] `.env.example` complete and accurate
- [x] CORS properly restricted
- [x] Tokens handled securely (Bearer token sent in Authorization header)
- [x] Security decisions explained in README (why, not just what)
- [x] Protected routes return `401` for unauthenticated requests (verified by tests)

### Frontend (VG: Handles loading & errors gracefully)

- [x] Login button works and authenticates
- [x] Logout button works and clears auth
- [x] Protected content only visible when logged in
- [x] Loading states displayed during requests
- [x] Error messages shown to user
- [x] `withCredentials: true` (or equivalent) on all auth requests

### Documentation (VG: Clear understanding demonstrated)

- [x] README explains full setup and testing
- [x] Architecture decisions documented
- [x] Screenshots of passing tests included
- [ ] Screenshots of passing GitHub Actions included
- [x] Security reasoning documented

---

## Notes for Success (VG)

- Quality > Quantity: Write 5 excellent tests, not 10 mediocre ones
- Test naming: Use `it('should return 401 when POST /gyms without token')` not `it('test1')`
- Security: Document WHY decisions were made (e.g., "We use sessionStorage because localStorage persists after browser close")
- Explain: Be prepared to explain every security choice and test case
- Screenshots: Include proof of passing tests locally AND in GitHub Actions
- Consistency: All error responses, logging, and code style should be consistent
