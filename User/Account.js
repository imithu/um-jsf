/**
 * find out current signed user_id
 *
 * @return {number} user_id -  0  means no signed user
 *                        - >0  signed user_id
 *
 * @since   1.0.0
 * @version 1.1.0
 * @author  mit
 */
export default function() {
  let id = localStorage.getItem("UM_User_Authentication");

  if (id === null) {
    id = sessionStorage.getItem("UM_User_Authentication");
  }

  if (id !== null) {
    id = JSON.parse(id);
    localStorage.setItem("usertype", id.usertype);
    return id.user_id;
  }
  return 0;
}