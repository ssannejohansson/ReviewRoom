
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import {
    firebaseConfig
} from "./firebase-config.js";
import {
    renderHeader,
    isFormVisible,
    renderShowList,
    renderError,
    renderReviewCount,
    renderStars,
    renderReviewCard
} from "./ui.js";

/* ----------------------
FIREBASE SETUP
---------------------- */

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* ----------------------
CONSTANTS
---------------------- */

const API = "https://assessment3.onrender.com";

/* ----------------------
DOM ELEMENTS
---------------------- */

const viewLogin = document.getElementById("login-view");
const viewHome = document.getElementById("home-view");
const viewDetail = document.getElementById("view-detail");
const viewWriteReview = document.getElementById("write-review-view");
const viewAddShow = document.getElementById("add-show-view");
const viewProfile = document.getElementById("profile-view");
const navbar = document.getElementById("navbar");
const navUser = document.getElementById("nav-user");
const loginError = document.getElementById("login-error");
const showList = document.getElementById("shows-list");
const showError = document.getElementById("shows-error");
const addShowNavItem = document.getElementById("add-show-nav-item");

/* ----------------------
SHOW / HIDE VIEWS
---------------------- */

const showView = (view) => {
    viewLogin.classList.add("hidden");
    viewHome.classList.add("hidden");
    viewDetail.classList.add("hidden");
    viewWriteReview.classList.add("hidden");
    viewAddShow.classList.add("hidden");
    viewProfile.classList.add("hidden");

    view.classList.remove("hidden");
};

/* ----------------------
AUTH STATE
---------------------- */

onAuthStateChanged(auth, async (user) => {
    navUser.textContent = renderHeader(user);

    if (user) {
        navbar.classList.remove("hidden");
        addShowNavItem.classList.toggle("hidden", !isFormVisible(user));
        showView(viewHome);
        await loadShows();
    } else {
        navbar.classList.add("hidden");
        showView(viewLogin);
    }
});

/* ----------------------
LOGIN
---------------------- */

document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Stops the page from relaoding on form submit

    // Grab values from input fields.
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Firebase signs the user in
        await signInWithEmailAndPassword(auth, email, password);
        loginError.classList.add("hidden");
    } catch (err) {
        // Show error message if login fails
        loginError.textContent = renderError(err.message);
        loginError.classList.remove("hidden");
    }
});

/* ----------------------
LOGOUT
---------------------- */

const handleLogout = async () => {
    await signOut(auth);
};

document.getElementById("logout-btn").addEventListener("click", handleLogout);
document.getElementById("logout-btn-mobile").addEventListener("click", handleLogout);

/* ----------------------
HOME NAVIGATION
---------------------- */

document.getElementById("home-link").addEventListener("click", (e) => {
    e.preventDefault();
    showView(viewHome);
});

document.getElementById("nav-logo").addEventListener("click", (e) => {
    e.preventDefault();
    showView(viewHome);
});

document.getElementById("shows-link").addEventListener("click", (e) => {
    e.preventDefault();
    showView(viewHome);
    document.getElementById("shows-list").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("explore-btn").addEventListener("click", () => {
    document.getElementById("shows-list").scrollIntoView({ behavior: "smooth" });
});

/* ----------------------
HAMBURGER MENU (MOBILE)
---------------------- */
document.getElementById("hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
});

/* ----------------------
LOAD SHOWS
---------------------- */

const loadShows = async () => {
    const loading = document.getElementById("loading-message");

    // Show loading message while fetching
    loading.classList.remove("hidden");
    showList.innerHTML = "";

    try {
        // GET /shows is public - no token needed
        const res = await fetch(`${API}/shows`, {
            credentials: "include",
        });

        const data = await res.json();

        loading.classList.add("hidden");

        // Render the show cards into the DOM
        showList.innerHTML = renderShowList(data);
        renderHeroBg(data);

        // attach click to each card after rendering
        document.querySelectorAll(".show-card").forEach((card) => {
            card.addEventListener("click", () => loadShowDetail(card.dataset.id));
        });

    } catch (err) {
        loading.classList.add("hidden");
        // Show error message if fetch fails
        showError.textContent = renderError(err.message);
        showError.classList.remove("hidden");
    }
};

/* ----------------------
HERO BACKGROUND COLLAGE
---------------------- */
const renderHeroBg = (shows) => {
    const bg = document.querySelector(".hero-bg");
    if (!bg) return;

    const picks = shows.filter(s => s.imageUrl).slice(-6); // take last 6 with images
    bg.innerHTML = picks.map(s => `<img src="${s.imageUrl}" alt="${s.title}">`).join("");
}

/* ----------------------
LOAD SHOW DETAIL
---------------------- */

const loadShowDetail = async (id) => {
    try {
        // GET /shows/:id is public, no token needed
        const res = await fetch(`${API}/shows/${id}`, {
            credentials: "include",
        });
        const show = await res.json();

        // Calculate average rating from reviews
        const avgRating = show.reviews?.length > 0
            ? show.reviews.reduce((sum, r) => sum + r.rating, 0) / show.reviews.length
            : 0;

        // Populate the detail view with show data
        document.getElementById("detail-poster").src = show.imageUrl;
        document.getElementById("detail-poster").alt = show.title;
        document.getElementById("breadcrumb-title").textContent = show.title;
        document.getElementById("detail-title").textContent = show.title;
        document.getElementById("detail-genre").textContent = show.genre;
        document.getElementById("detail-year").textContent = show.year;
        document.getElementById("detail-stars").textContent = renderStars(avgRating);
        document.getElementById("detail-review-count").textContent =
            `(${renderReviewCount(show.reviews?.length ?? 0)})`;
        document.getElementById("detail-description").textContent = show.description;

        // Render review cards
        document.getElementById("review-list").innerHTML =
            show.reviews?.length > 0
                ? show.reviews.map(renderReviewCard).join("")
                : "<p class='no-content'>No reviews yet. Be the first!</p>";

        // Store the show ID and name for the write review view
        document.getElementById("add-review-btn").dataset.id = id;
        document.getElementById("review-show-name").textContent = show.title;

        // Show write-review-btn only when logged in
        const writeReviewBtn = document.getElementById("write-review-btn");
        writeReviewBtn.classList.toggle("hidden", !auth.currentUser);

        // Reset to reviews tab
        activateTab("reviews");

        showView(viewDetail);
    } catch (err) {
        showError.textContent = renderError(err.message);
        showError.classList.remove("hidden");
    }
};

/* ----------------------
TABS
---------------------- */

const activateTab = (tabName) => {
    document.querySelectorAll(".tab").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
    });
    document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.add("hidden");
    });
    document.getElementById(`tab-${tabName}`).classList.remove("hidden");
};

document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => activateTab(btn.dataset.tab));
});

document.getElementById("back-btn").addEventListener("click", () => {
    // Go back to home without reloading
    showView(viewHome);
});

/* ----------------------
WRITE REVIEW
---------------------- */

document.getElementById("write-review-btn").addEventListener("click", () => {
    resetStarPicker();
    showView(viewWriteReview);
});

document.getElementById("back-from-review-btn").addEventListener("click", () => {
    showView(viewDetail);
});

const resetStarPicker = () => {
    document.getElementById("review-rating").value = "";
    document.querySelectorAll(".star").forEach((s) => s.classList.remove("active"));
    const ratingError = document.getElementById("rating-error");
    ratingError.textContent = "";
    ratingError.classList.add("hidden");
};

document.querySelectorAll(".star").forEach((star) => {
    star.addEventListener("click", () => {
        const value = parseInt(star.dataset.value);
        document.getElementById("review-rating").value = value;
        // Highlight all stars up to and including the clicked one
        document.querySelectorAll(".star").forEach((s) => {
            s.classList.toggle("active", parseInt(s.dataset.value) <= value);
        });
    });
});

document.getElementById("add-review-btn").addEventListener("click", async () => {
    // Grab the show ID stored on the button
    const id = document.getElementById("add-review-btn").dataset.id;
    const rating = document.getElementById("review-rating").value;
    const title = document.getElementById("review-title-input").value;
    const comment = document.getElementById("review-body").value;

    const ratingError = document.getElementById("rating-error");
    if (!rating) {
        ratingError.textContent = "Please select a star rating.";
        ratingError.classList.remove("hidden");
        return;
    }
    ratingError.classList.add("hidden");

    // Grab the current firebase user and their token
    const user = auth.currentUser;
    const token = await user.getIdToken();

    try {
        // POST /shows/:id/reviews is protected, send bearer token
        await fetch(`${API}/shows/${id}/reviews`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ rating: Number(rating), title, comment }),
        });

        // Clear the form and go back to the detail view
        document.getElementById("review-body").value = "";
        document.getElementById("review-title-input").value = "";
        resetStarPicker();
        await loadShowDetail(id);
    } catch (err) {
        showError.textContent = renderError(err.message);
        showError.classList.remove("hidden");
    }
});

/* ----------------------
ADD SHOW
---------------------- */

document.getElementById("add-show-link").addEventListener("click", (e) => {
    e.preventDefault();
    showView(viewAddShow);
});

document.getElementById("back-from-add-show-btn").addEventListener("click", () => {
    showView(viewHome);
});

document.getElementById("add-show-btn").addEventListener("click", async () => {
    // Grab the current firebase user and their token
    const user = auth.currentUser;
    const token = await user.getIdToken();

    const title = document.getElementById("show-title").value;
    const genre = document.getElementById("show-genre").value;
    const year = document.getElementById("show-year").value;
    const imageUrl = document.getElementById("show-image-url").value;
    const description = document.getElementById("show-description").value;

    try {
        // POST /shows is protected, send bearer token in header
        await fetch(`${API}/shows`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // required for protected routes.
            },
            body: JSON.stringify({ title, genre, year: Number(year), imageUrl, description }),
        });

        // Clear the form and go back to home
        document.getElementById("show-title").value = "";
        document.getElementById("show-genre").value = "";
        document.getElementById("show-year").value = "";
        document.getElementById("show-image-url").value = "";
        document.getElementById("show-description").value = "";
        showView(viewHome);
        await loadShows();
    } catch (err) {
        showError.textContent = renderError(err.message);
        showError.classList.remove("hidden");
    }
});

/* ----------------------
PROFILE
---------------------- */

document.getElementById("profile-link").addEventListener("click", async (e) => {
    e.preventDefault();
    // Grab the current firebase user and their token
    const user = auth.currentUser;
    const token = await user.getIdToken();

    try {
        // GET /profile is protected, send bearer token
        const res = await fetch(`${API}/profile`, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        document.getElementById("profile-avatar").textContent =
            data.email.charAt(0).toUpperCase();
        document.getElementById("profile-email").textContent = data.email;
        document.getElementById("profile-uid").textContent = data.uid;

        showView(viewProfile);
    } catch (err) {
        showError.textContent = renderError(err.message);
        showError.classList.remove("hidden");
    }
});

document.getElementById("back-from-profile-btn").addEventListener("click", () => {
    showView(viewHome);
});
