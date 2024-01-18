export default function getDaysSinceStart() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const startOfYear = new Date(currentYear, 0, 1);
    return Math.floor((currentDate - startOfYear) / (24 * 60 * 60 * 1000));
}