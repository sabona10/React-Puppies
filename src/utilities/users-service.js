import * as usersApi from './user-api'

export async function signUp(userData){
    try {
        const token = await usersApi.signUp(userData);
        return token;
    } catch {
        throw new Error('Invalid Sign Up');
    }
}