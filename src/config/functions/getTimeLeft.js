export default function getTimeLeft() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to midnight

    const timeLeftInMillis = midnight - now;
    const hours = Math.floor(timeLeftInMillis / 3600000);
    const minutes = Math.floor((timeLeftInMillis % 3600000) / 60000);
    const seconds = Math.floor((timeLeftInMillis % 60000) / 1000);

    return `${hours}:${minutes}:${seconds}`;
}
