export function getJWTSecret() {
    return process.env.JWT_SECRET ?? '';
}