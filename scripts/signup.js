// Posting the user data in database and fetching to compare if it already exist or not

function store() {
  let email = document.getElementById("email").value;
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let password = document.getElementById("password").value;
  let order_ids = [];
  let cart_items = [];
  let wishlist_items = [];

  const data = {
    email: email,
    first_name: first_name,
    last_name: last_name,
    password: password,
    order_ids: order_ids,
    cart_items: cart_items,
    wishlist_items: wishlist_items,
  };

  fetch("http://localhost:3000/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  getUser(data);
}


async function getUser(user) {
   var res = await fetch("http://localhost:3000/users/");
   var arr = await res.json();
   console.log(arr);
  let flag = 0;
  console.log("Array length", arr.length)
  for (let i = 0; i < arr.length; i++) {
    if (user.email == arr[i].email) {
      console.log("In the if condition")
      alert("User already exists, please login.")
      flag = 1;
      break;
    }
  }

  if (flag == 0) {
    arr.push(user);
    localStorage.setItem("all_users_data", JSON.stringify(arr));
  }
  window.location.href = 'login.html';
}

getUser();