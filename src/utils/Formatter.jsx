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
