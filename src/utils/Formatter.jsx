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
