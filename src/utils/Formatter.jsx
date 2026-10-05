const USERNAME_PATTERN = /^[a-zA-Z0-9._-]+$/;
const LASTNAME_FIRSTNAME_MAX = 50;
const LASTNAME_FIRSTNAME_PATTERN = /^[\p{L} '.-]+$/u;
const DIGIT_PATTERN = /\d/;

export function formatEnum(value) {
    if (!value) return "";
    return value
        .toLowerCase()
        .split("_")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function formatSalaryRange(min, max) {
    if (min == null || max == null) return "";

    const format = (value) =>
        value.toLocaleString("en-PH", {
            style: "currency",
            currency: "PHP",
            maximumFractionDigits: 0,
        });

    return `${format(min)} - ${format(max)}`;
}

export function formatDate(dateString) {
    if (!dateString) return "No interview yet";
    return new Date(dateString).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}
export function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function validatePassword(password){
    return /[0-9!@#$%^&*(),.?":{}|<>]/.test(passwordInput);

}
export function validateUsername(value) {
    const username = value.trim();

    if (username.length === 0) {
        return "Must include a username";
    }

    if (username.length < 3 || username.length > 50) {
        return "Username must be between 3 and 50 characters";
    }

    if (!USERNAME_PATTERN.test(username)) {
        return "Username can only contain letters, numbers, dots, hyphens, or underscores";
    }

    return "";
}


export function validateName(value) {
    const lastname = value.trim();

    if (lastname.length === 0) {
        return "Must include a lastname";
    }

    if (lastname.length > LASTNAME_FIRSTNAME_MAX) {
        return "Last name cannot exceed 50 characters";
    }

    if (DIGIT_PATTERN.test(lastname)) {
        return "Last name cannot contain numbers";
    }

    if (!LASTNAME_FIRSTNAME_PATTERN.test(lastname)) {
        return "Last name can only contain letters, spaces, apostrophes, dots, or hyphens";
    }

    return "";
}

