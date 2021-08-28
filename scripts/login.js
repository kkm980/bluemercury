/* Slideshow function */

function slideshowOffer() {

    let slide_text = document.getElementById('slide-text');
    let p = document.createElement('p');

    let announcement_msg = ['Earn up to $100! Receive $20 for every $100 you spend.', 'Free shipping for bluerewards members >', 'Free samples with all orders >', 'Free gifts with purchase. Browse now >'];

    p.innerHTML = announcement_msg[0];
    p.style.textAlign = 'center';
    p.style.textTransform = 'uppercase'
    slide_text.append(p);
    let i = 1;
    setInterval(function () {
        p.innerHTML = announcement_msg[i % announcement_msg.length];
        p.style.textAlign = 'center';
        p.style.textTransform = 'uppercase';
        i++;
        slide_text.append(p);
    }, 5000);

}
slideshowOffer();


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

// Sign-up button change

function changeAccount() {
  let signup_btn = document.getElementById("login_change");
  let check_user = JSON.parse(localStorage.getItem("current_user"));

  console.log("check", check_user)
  if (check_user.length != 0) {
    signup_btn.innerHTML = `<i class="fa fa-user-circle"></i> Account`;
    signup_btn.addEventListener("click", () => {
      window.location.href = "myaccount.html";
    });
  } else {
    signup_btn.innerHTML = `<i class="fa fa-user-circle"></i> Sign in/up`;
    signup_btn.addEventListener("click", () => {
      window.location.href = "login.html"
    });
  }
}

changeAccount();