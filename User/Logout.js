/**
 * logout a user
 *
 * @since   1.0.0
 * @version 1.0.0
 * @author  mit
 */
function main() {
  localStorage.removeItem("UM_User_Authentication");
  sessionStorage.removeItem("UM_User_Authentication");
}

export default main;
