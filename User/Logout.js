/**
 * logout a user
 *
 * @since   1.0.0
 * @version 1.0.0
 * @author  mit
 */
function main() {
  if (localStorage.getItem("UM_User_Authentication") !== null)
    localStorage.removeItem("UM_User_Authentication");
  if (sessionStorage.getItem("UM_User_Authentication") !== null)
    sessionStorage.removeItem("UM_User_Authentication");
}

export default main;
