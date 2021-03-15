/**
 * log a user
 *
 * @param {number} user_id
 * @param {string} username
 * @param {string} email
 * @param {string} password_hashed
 * @param {string} usertype
 * @param {string} userstatus
 * @param {boolean} remember_me
 *
 * @since   1.0.0
 * @version 1.0.0
 * @author  mit
 */
function main(
  user_id,
  username,
  email,
  password_hashed,
  usertype,
  userstatus,
  remember_me
) {
  let UM_Auth = {
    user_id,
    username,
    email,
    password_hashed,
    usertype,
    userstatus
  };
  UM_Auth = JSON.stringify(UM_Auth);

  if (remember_me) localStorage.setItem("UM_User_Authentication", UM_Auth);
  else sessionStorage.setItem("UM_User_Authentication", UM_Auth);
}

export default main;
