/* Slideshow function */

function slideshowOffer() {
  let slide_text = document.getElementById("slide-text");
  let p = document.createElement("p");

  let announcement_msg = [
    "Earn up to $100! Receive $20 for every $100 you spend.",
    "Free shipping for bluerewards members >",
    "Free samples with all orders >",
    "Free gifts with purchase. Browse now >",
  ];

  p.innerHTML = announcement_msg[0];
  p.style.textAlign = "center";
  p.style.textTransform = "uppercase";
  slide_text.append(p);
  let i = 1;
  setInterval(function () {
    p.innerHTML = announcement_msg[i % announcement_msg.length];
    p.style.textAlign = "center";
    p.style.textTransform = "uppercase";
    i++;
    slide_text.append(p);
  }, 5000);
}
slideshowOffer();

// function store(e) {
//   e.preventDefault();
//   let form = document.getElementById("form");

//   let email = form.email.value;
//   let first_name = form.first_name.value;
//   let last_name = form.last_name.value;
//   let password = form.password.value;
//   let birthday = form.birthday.value;

//   let user = {
//     email,
//     first_name,
//     last_name,
//     password,
//     birthday,
//     all_orders: []
//   };

//   let arr;
//   arr = localStorage.getItem("all_users_data"); //locations
//   if (arr == null) {
//     arr = [];
//   } else {
//     arr = JSON.parse(localStorage.getItem("all_users_data"));
//   }

//   let flag = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (user.email == arr[i].email) {
//       console.log("In the if condition")
//       alert("User already exists, please login.")
//       flag = 1;
//       break;
//     }
//   }

//   if (flag == 0) {
//     arr.push(user);
//     localStorage.setItem("all_users_data", JSON.stringify(arr));
//   }
//   window.location.href = 'login.html';
// }



// CREATING USER
function loggedIn() {
  var fName = document.getElementById("fName").value
  var lName = document.getElementById("lName").value
  var pwd = document.getElementById("pwd").value
  var curEmail = JSON.parse(localStorage.getItem("currentEmail"))
  const data = { email: curEmail, firstName: fName, lastName: lName, password: pwd};
  fetch('http://localhost:2345/users/', {
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      localStorage.setItem("isLoggedIn", JSON.stringify(true))
      localStorage.setItem("currentEmail", JSON.stringify(data.email));
      goToCreationSuccess();
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}






// Sign-up button change

function changeAccount() {
  let signup_btn = document.getElementById("login_change");
  let check_user = JSON.parse(localStorage.getItem("current_user"));

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