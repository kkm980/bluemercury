const current_user = [];

async function check() {

  var res = await fetch("http://localhost:3000/users/");
  var all_users = await res.json();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(all_users)
 

  const current_user_credentials = {
    email: email,
    password: password
  }

  let login_flag = 0;

  for (let i = 0; i < all_users.length; i++) {
    console.log("abc")
    if (all_users[i].email == email && all_users[i].password == password) {
      login_flag = 1;
      current_user.push(current_user_credentials);
      localStorage.setItem("current_user", JSON.stringify(current_user));
      window.location.href = "myaccount.html";
    } else if (all_users[i].email == email) {
      login_flag = 1;
      alert("Invalid Credentials");
    }
  }

  if (login_flag == 0) {
    alert("User does not exist, please signup first");
    window.location.href = "signup.html";
  }
}