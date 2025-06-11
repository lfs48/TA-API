export function whitelistUserFields(user) {
  return {
    id: user.id,
    username: user.username,
  };
}