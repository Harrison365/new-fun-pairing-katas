/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(usernames) {
  const regex = /^[a-z0-9_]{5,20}$/;
  for (let i = 0; i < usernames.length; i++) {
    if (!regex.test(usernames[i])) {
      return false;
    }
  }
  return true;
}

module.exports = checkUsernames;
