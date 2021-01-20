import * as usersApi from './user-api'

export async function signUp(userData){
    try {
        const token = await usersApi.signUp(userData);
        localStorage.setItem('token', token)
        return getUser();
    } catch {
        throw new Error('Invalid Sign Up');
    }
}
export async function login(credentials) {
    try {
        const token = await usersApi.login(credentials);
        localStorage.setItem('token', token);
        return getUser();
    } catch {
        throw new Error('Bad Credentials');
    }
}

export function logOut() {
    localStorage.removeItem('token');
}



export function getToken() {
    const token = localStorage.getItem('token')
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));

    if (payload.exp < Date.now() /1000){
        localStorage.removeItem('token');
        return null;
    }
    return token
}

export function getUser() {
    const token = getToken();

    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

//testing token, not needed in app
export function checkToken() {
    return usersApi.checkToken().then(dateStr => new Date(dateStr));
    // alert('clicked');
}