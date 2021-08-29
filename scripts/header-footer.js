/*********************** 
Slideshow function 
************************/

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


/****************************
Search functions 
****************************/



//search field appear

function appearSearch(){
    document.getElementById('searchings').style.display='flex';
    document.getElementById('hideput').value="";
    document.body.classList.add("stop-scrolling"); //to stop scrolling when suggestion box appears//
}

//search field hiding

document.getElementById('hidesearchings').addEventListener('click', function(){
    document.getElementById('searchings').style.display='none';
    document.body.classList.remove("stop-scrolling"); //to allow scrolling when suggestion box appears//
});

// on Input, suggestion box appears

let hideput=document.getElementById('hideput');
let suggestings=document.getElementById('suggestings');
hideput.addEventListener('input', (e) => {
    
    if (e.target.value.length >= 2) {
        let vaalu = e.target.value.trim().replace(/\s/g, "");
        suggestings.style.display = 'block';
        async function gettingData() {
            try {
                let res = await fetch("http://localhost:3000/products/");
                let data = await res.json();
                showsuggestions(data, vaalu);
            } catch (err) {
                console.log(err);
            }
        }
        gettingData();
    }
    else {
        suggestings.style.display = 'none';
        
    }
});

// taking to product page on enter button pressed on input box

hideput.addEventListener("keyup", function (event) {
  
    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.key === "Enter" && hideput.value.length >= 2) {
        console.log(hideput.value.length);
        async function gettingData() {
            try {
                let res = await fetch("http://localhost:3000/products/");
                let data = await res.json();
                //   console.log(data);
                var ViewObj = [];
                data.forEach(el => {
                    if (el.name.includes(hideput.value)) {
                        ViewObj.push(el);
                        console.log(el)
                    }
                })
                console.log("abc")
                localStorage.setItem('ViewObj', JSON.stringify(ViewObj));
                console.log(JSON.stringify(ViewObj));
             
                console.log(ViewObj);
                window.location.href = "./customedproducts.html";
                window.location.target = "_blank";
            } catch (err) {
                console.log(err);
            }  
        }
        gettingData();   
    }
});

// Speech to text

function runSpeechRecognition() {
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
            
    // This runs when the speech recognition service starts
    recognition.onstart = function () {
        console.log("in onstart");
    };
                
    recognition.onspeechend = function () {
        console.log("in on speech");
        recognition.stop();
    }
              
    // This runs when the speech recognition service returns result
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        console.log("transcript", transcript);

        document.getElementById("hideput").value = transcript;
    };
              
    // start recognition
    recognition.start();
}

// appending in suggestion box 

function showsuggestions(data, vaalu) {
   
    let cullu = 0;
    let tempVarArr = [];
    let quickSearch = document.getElementById('quickSearch');

    // 1. in quick search
    quickSearch.innerHTML = "";
    let p = document.createElement('p');
    p.innerHTML = "QUICK SEARCH";
    p.classList.add('boldest');
    quickSearch.append(p);

    //   2. in categories 
    let categoriesSearch = document.getElementById('categoriesSearch');
    categoriesSearch.innerHTML = "";
    let pi = document.createElement('p');
    pi.innerHTML = "CATEGORIES";
    pi.classList.add('boldest');
    categoriesSearch.append(pi);

    //   for x-items found. viewings div 
    let viewings = document.getElementById('viewings');
    viewings.innerHTML = "no items found";
    //for prodResView
    let itemlistsings = document.getElementsByClassName('itemlistsings');
    for (var i = 0; i < itemlistsings.length; i++) {
        itemlistsings[i].innerHTML = "";
    }

    data.forEach(el => {
          
        if (el.name.includes(vaalu)) {
            if (cullu <= 2) {
                //   in quick search 
                let p = document.createElement('p');
                p.innerHTML = el.name;
                quickSearch.append(p);
            }

            //   in categories 
            let pi = document.createElement('p');
            if (!tempVarArr.includes(el.option)) {
                tempVarArr.push(el.option);
                pi.innerHTML = el.option;
                categoriesSearch.append(pi);
            }

            //   in prodResView  
            if (cullu <= 5) {
                console.log("cullu");
                let picsdivid = document.createElement('img');
                picsdivid.src = el.img;
                picsdivid.style.cursor = "pointer";
                picsdivid.style.height = "80px";
                picsdivid.style.width = "80px";

                let itemNaam = document.createElement('div');
                itemNaam.innerHTML = el.name;
                itemNaam.style.fontWeight = "700";
                itemNaam.style.color = "crimpson";

                let itemTitless = document.createElement('div');
                itemTitless.innerHTML = el.category;
                itemTitless.style.cursor = "pointer";
                itemNaam.style.cursor = "pointer";

                let wrappingsmalls = document.createElement('a');
                wrappingsmalls.target = "_blank";
                wrappingsmalls.href = "./product.html";
                wrappingsmalls.style.cursor = "pointer";

                wrappingsmalls.append(itemNaam);
                wrappingsmalls.append(itemTitless);
                itemlistsings[cullu].append(picsdivid);
                itemlistsings[cullu].append(wrappingsmalls);

                wrappingsmalls.addEventListener('click', function () {
                    let tempArr = [];
                    tempArr.push(el);
                    window.localStorage.setItem('current_selected_prod', JSON.stringify(tempArr));
                    console.log("el is clicked", el);
                });
            }
            cullu++;
        }
        viewings.innerHTML = `${cullu} items found`;
    });
    if (cullu == 0) {
        let p = document.createElement('p');
        p.innerHTML = "No Quick Search Suggestion";
        quickSearch.append(p);
        let pi = document.createElement('p');
        pi.innerHTML = "No Categories Suggestion";
        categoriesSearch.append(pi);
    }
}


/************************
Dropdown on hover
*************************/


function showing(id1,id2){
    let menuContainergetting1 = document.getElementById(id1);
    // let floaterTwo=document.getElementById('floaterTwo');
    // let floaterTwo=document.getElementById('floaterThree');
    // floaterTwo.innerHTML="";
    // floaterThree.innerHTML="";
    // floaterTwo.innerHTML=menuContainergetting1;
    menuContainergetting1.style.visibility = "visible";
    menuContainergetting1.style.display = "block";
    let menuContainergetting2 = document.getElementById(id2);
    // floaterTwo.innerHTML=menuContainergetting2;
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



/**************************
Sign-up button change
***************************/

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