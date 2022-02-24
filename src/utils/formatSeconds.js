export const toHHMMSS = (seconds) => {
    var date = new Date(0);
    date.setSeconds(seconds); // specify value for SECONDS here
    return date.toISOString().substr(11, 8);
}
export const toMinutes = (seconds) => {
    return Math.ceil(seconds / 60);
}