const API_URL = "http://localhost:8080";

export class ApiError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}

async function readBody(response) {
    const text = await response.text();

    if (!text) {
        return null;
    }

    try {
        return JSON.parse(text);
    } catch {
        return null;
    }
}

async function request(path, payload) {
    const response = await fetch(`${API_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const body = await readBody(response);

    if (!response.ok) {
        throw new ApiError(
            response.status,
            body?.message || `Request failed with status: ${response.status}`
        );
    }

    return body;
}

export function register({ username, email, firstname, lastname, password }) {
    return request("/api/users/register", { username, email, firstname, lastname, password });
}

export function login({ email, password }) {
    return request("/api/auth/login", { email, password });
}