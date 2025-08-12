export function welcome() {
    const container = document.createElement("div");
    container.classList.add("welcome-login");

    container.innerHTML = `
        <h2>Welcome Back!</h2>
        <p>Yay! You're back! Thanks for shopping with us.</p>
        <form id="loginForm">
            <label>Email address</label>
            <input type="email" id="email" placeholder="Enter your email" required>

            <label>Password</label>
            <input type="password" id="password" placeholder="Enter your password" required>

            <div class="options">
                <label><input type="checkbox" id="remember"> Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">LOG IN</button>
        </form>
        <p>Not registered yet? <a href="#">Create an Account</a></p>
    `;

    // Lógica del formulario
    container.querySelector("#loginForm").addEventListener("submit", e => {
        e.preventDefault();
        const email = container.querySelector("#email").value.trim();
        const password = container.querySelector("#password").value.trim();

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        alert(`Welcome back, ${email}!`);
    });

    return container;
}
