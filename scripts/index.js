/* Products Data */
var productsData = [
    {
        name: 'RMS BEAUTY',
        desc: 'Back2brow Brow Powder',
        price: 22,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-light-816248022212-1_600x600_crop_center.jpg?v=1624896973',
    },
    {
        name: 'DR. BARBARA STRUM',
        desc: 'Darker Skin Tones Discovery Kit',
        price: 110,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-lightmedium-5035832105635-1_600x600_crop_center.jpg?v=1626725428'
    },
    {
        name: 'CHANTECAILLE',
        desc: 'Limmited Edition Lip Veil',
        price: 49,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011552-1_600x600_crop_center.jpg?v=1626296817'
    },
    {
        name: 'SKYN ICELAND',
        desc: 'Hydro Cool Brightening Face Mask',
        price: 14,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035204628-1_600x600_crop_center.jpg?v=1625845843'
    },
    {
        name: 'LEGOLOGY',
        desc: 'Air-Lite Daily Lift for Legs',
        price: 65,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-6oz-5060367410008-1_525x525.jpg?v=1624638493'
    },
    {
        name: 'TOM FORD',
        desc: 'Hyaluronic Energizing Mist',
        price: 50,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-888066081870-1_525x525.jpg?v=1626725435'
    },
    {
        name: 'RMS BEAUTY',
        desc: 'Back2brow Brow Powder',
        price: 22,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-light-816248022212-1_600x600_crop_center.jpg?v=1624896973',
    },
    {
        name: 'DR. BARBARA STRUM',
        desc: 'Darker Skin Tones Discovery Kit',
        price: 110,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-lightmedium-5035832105635-1_600x600_crop_center.jpg?v=1626725428'
    },
]

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

function slideshowBestSellers() {
    let slide_img = document.getElementById('slide-img');
    let img = document.createElement('img');

    let best_sellers_arr = ['https://cdn.shopify.com/s/files/1/0283/0185/2747/files/earn-redeem-july-hero-des.jpg?v=1626210704', 'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/m61-cooling-eye-gel-hero-des.jpg?v=1626212604', 'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Dr.Barbara-Sturm-hp-hero-des.jpg?v=1625759244', 'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/suyb-fabienne-hero-des.jpg?v=1626106125'];

    img.src = best_sellers_arr[0];
    img.style.width = '100%';
    slide_img.append(img);
    let i = 1;
    setInterval(function () {
        img.src = best_sellers_arr[i % best_sellers_arr.length];
        img.style.width = '100%';
        i++;
        slide_img.append(img);
    }, 3000);


    let dots = document.getElementById('dots-slide');
    let dot_div = document.createElement('div');
    dot_div.style.display = 'inline-block';
}

slideshowOffer();
slideshowBestSellers();


/**********************************
New Arrivals js part
 **********************************/
var startIndex = 0;
let prod_div = document.getElementById('products'); // DOM part

function productShow(startIndex, numOfProd) {

    // console.log("startIndex first: ", startIndex)
    prod_div.innerHTML = null;
  
    for (var i = startIndex; i < numOfProd; i++) {

        let div = document.createElement('div'); // Div for single products 

        let img = document.createElement('img');
        img.src = productsData[i].image;

        let p_name = document.createElement('p');
        p_name.innerHTML = productsData[i].name;

        let p_desc = document.createElement('p');
        p_desc.innerHTML = productsData[i].desc;

        let p_price = document.createElement('p');
        p_price.innerHTML = "$" + productsData[i].price;

        div.append(img, p_name, p_desc, p_price);
        div.style.display = 'inline-block';
        prod_div.append(div);
        // console.log(prod_div)

        // Merging of the Product page

        img.addEventListener("click", function () {
            window.location.href = "product.html";
        });

        p_name.addEventListener("click", function () {
            window.location.href = "product.html";
        });

        p_price.addEventListener("click", function () {
            window.location.href = "product.html";
        });
    }
    console.log("startIndex last: ", startIndex);
}

var numOfProd = 4;
productShow(0, numOfProd);


// Carousel Section Sliding by nitesh
let a = 4;
let b = 8;
var next = document.getElementById('nextSlider-btn');
next.addEventListener('click', () => {
   
    productShow(a, b);
    a = 0;
    b = 4
});

var prev = document.getElementById('prevSlider-btn');
prev.addEventListener('click', () => {
   
    productShow(a, b);
    a = 0;
    b = 4
});
//search field appear
function appearSearch(){
    document.getElementById('searchings').style.display='flex';
    document.getElementById('hideput').value="";
}
//search field hiding
document.getElementById('hidesearchings').addEventListener('click', function(){
    document.getElementById('searchings').style.display='none';
    // console.log('hi');
});


function showing(id1,id2){
    let menuContainergetting1 = document.getElementById(id1);
    menuContainergetting1.style.visibility = "visible";
    menuContainergetting1.style.display = "block";
    let menuContainergetting2 = document.getElementById(id2);
    menuContainergetting2.style.visibility = "visible";
    menuContainergetting2.style.display = "block";
}
function hiding(id1,id2){
    let menuContainergetting1 = document.getElementById(id1);
    menuContainergetting1.style.visibility = "hidden";
    menuContainergetting1.style.display = "none";
    let menuContainergetting2 = document.getElementById(id2);
    menuContainergetting2.style.visibility = "hidden";
    menuContainergetting2.style.display = "none";
}

function showItm(idx) {
    let menuContainergetting = document.getElementById(idx);
    menuContainergetting.style.visibility = "visible";
    menuContainergetting.style.display = "flex";
    menuContainergetting.style.color = "black";
    menuContainergetting.style.zIndex = "35";
    menuContainergetting.style.opacity="1";
}
function hideItm(idx) {
    let menuContainergetting = document.getElementById(idx);
    menuContainergetting.style.visibility = "hidden";
    menuContainergetting.style.display = "none";
    menuContainergetting.style.opacity="0";
}



/******************************
 Email success overlay msg
******************************/

const newsletter_emails = [];


function overlaymsg(e) {
    e.preventDefault();
    var mail = document.getElementById("newsletter-mail-input").value;
    console.log(mail)
    if (mail.trim() == "") {
        alert("Please do not leave the field blank");
        console.log("Here")
        return 0;
    } else {
        newsletter_emails.push(mail);
        localStorage.setItem('newsletter-list', JSON.stringify(newsletter_emails));
        document.getElementById("success-msg").innerText = null;
        document.getElementById("success-msg").innerText = `${mail} you will soon hear from us.`;
        document.getElementById("mail-submission-success-overlay").style.display = "block";
        mail = "";

    }
}

function overlayMsgHide() {
    mail = "";
    document.getElementById("mail-submission-success-overlay").style.display = "none";   
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