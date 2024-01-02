export default function getDate() {
    const now = new Date();
    const
        dd = now.getDay(),
        mm = now.getMonth() + 1,
        yy = now.getFullYear();

    return `${dd}.${mm}.${yy}`;

}