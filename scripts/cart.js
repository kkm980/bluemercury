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

let login_click = document.getElementsByClassName("log_in_cart");

// login_click.addEventListener("click", function () {
//     window.location.href = "login.html";
//   });


function account_id() {
    window.location.href = "signup.html";
}

/******************Adding products to bag here *****************/


// var current_prod = JSON.parse(localStorage.getItem('current_selected_prod'));
// console.log("This is cart page. ", current_prod);

var current_prod_cart_space = document.getElementById("cart_Bag");

// var price_div = document.createElement('div');
// price_div.append(current_prod[0].price);
// current_prod_cart_space.append(price_div);

function cart_display(el) {
    console.log("We are here in function ", el)
    var new_div = document.createElement('div');
    new_div.style.display = 'flex';
    new_div.style.alignItems = 'center';
    // new_div.style.justifyContent = 'center';
    new_div.style.width = '100%';
    // new_div.setAttribute('style', 'float: left');

    var img_with_description = document.createElement('div');
    img_with_description.style.display = 'flex';
    img_with_description.style.alignItems = 'center';
    img_with_description.style.width = '50%';
    // img_with_description.style.backgroundColor = 'yellow';

    // img_with_description.style.float = 'left';
    var img = document.createElement('img');
    img.src = el.img;
    img.setAttribute('style', 'width: 20%; min-width: 100px')

    var desc = document.createElement('span');
    desc.append(el.title);
    desc.style.margin = '5px';
    desc.style.fontSize = '16px';
    desc.style.fontWeight = '300'

    img_with_description.append(img, desc);

    var price_div = document.createElement('div');
    price_div.append(`$${el.price}`);
    price_div.style.width = '20%';
    price_div.style.textAlign = 'center';
    price_div.style.fontSize = "16px";
    // price_div.style.backgroundColor = 'teal';

    var total_items_div = document.createElement('div');
    total_items_div.append(el.item_count);
    total_items_div.style.width = '15%'
    total_items_div.style.textAlign = 'center';
    total_items_div.style.fontSize = '16px';
    // total_items_div.style.backgroundColor = 'pink'

    var total_disp = document.createElement('div');
    var total = el.price * el.item_count;
    total_disp.innerHTML = `$${total}`;
    // console.log(total);
    total_disp.style.width = "15%";
    total_disp.style.textAlign = 'right';
    // total_disp.style.backgroundColor = 'skyblue';
    total_disp.style.fontSize = "16px";
    
    new_div.append(img_with_description, price_div, total_items_div, total_disp);
    new_div.style.borderBottom = '1px solid #dcdcdc';
    current_prod_cart_space.append(new_div);

}

let final_bag = JSON.parse(localStorage.getItem("shopping_bag"));
console.log(final_bag);

let total_bill = 0;
let total_cart_items = 0;
for (let i = 0; i < final_bag.length; i++) {
    cart_display(final_bag[i]);
    total_bill += Number(final_bag[i].price * final_bag[i].item_count);
    total_cart_items += final_bag[i].item_count;
}
console.log(total_cart_items, total_bill)


var a = document.getElementsByClassName('your_Cart')[0];
if (total_cart_items <= 1) {
    a.innerHTML = `Your Cart (${total_cart_items} item)`
} else {
    a.innerHTML = `Your Cart (${total_cart_items} items)`
}

document.getElementById('cart_total').innerHTML = `Subtotal $${total_bill}`;

// Sign-up button change

function changeAccount() {
  let signup_btn = document.getElementById("login_change");
  let check_user = JSON.parse(localStorage.getItem("current_user"));

  if (check_user != null) {
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

function checkLogin() {
  let current_user = JSON.parse(localStorage.getItem("current_user"))
  console.log("Here");

  console.log("This is user: ", current_user);
  if (current_user == null || current_user.length == 0) {
    console.log("In the if")
    alert("Please sign in before purchase");
    window.location.href = "login.html";
  } else {
    window.location.href = "customer_info.html"
  }
}