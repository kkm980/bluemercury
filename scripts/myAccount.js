function logout() {
  let account = document.getElementById("logout");
  account.innerText = "Account";
  localStorage.removeItem('shopping_bag');
  localStorage.removeItem('current_selected_prod');
  localStorage.removeItem('current_user');
  window.location.href = "login.html";
  console.log("In logout")
}