const tokenBlacklist = new Set();

export const addTokenToBlacklist = ( token ) => {
    tokenBlacklist.add(token);
}

export const isTokenBlacklisted = ( token ) => {
    return tokenBlacklist.has(token);
}

export default {addTokenToBlacklist, isTokenBlacklisted};