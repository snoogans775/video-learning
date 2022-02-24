export default () => {
    const sessionName = process.env.NODE_ENV == 'production' ? 'sessionId' : 'PHPSESSID';
    const cookies = document.cookie.split(';');
    const splitCookies = cookies.map( cookie => cookie.split('=') );
    const sessionCookie = splitCookies.find( cookie => cookie[0].trim() == sessionName );
    return sessionCookie[1];
}