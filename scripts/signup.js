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
  // console.log('hi');
});


// on Input, suggestion box appears

let hideput=document.getElementById('hideput');
let suggestings=document.getElementById('suggestings');
hideput.addEventListener('input',(e)=>{
  
  
   if(e.target.value.length>=2){
       let vaalu=e.target.value.trim().replace(/\s/g, "");
        suggestings.style.display='block';
        async function gettingData() {
          try {
            let res = await fetch("http://localhost:3000/products/");
            let data = await res.json();
          //   console.log(data);
           showsuggestions(data, vaalu);
          } catch (err) {
            console.log(err);
          }
        }
        gettingData();
        
  }
  else{
      suggestings.style.display='none';
      
  }
}) 

// taking to product page on enter button pressed on input box

hideput.addEventListener("keyup", function (event) {

  // Checking if key pressed is ENTER or not
  // if the key pressed is ENTER
  // click listener on button is called
  if (event.key ==="Enter" && hideput.value.length>=2) {
      console.log(hideput.value.length);
      async function gettingData() {
          try {
            let res = await fetch("http://localhost:3000/products/");
            let data = await res.json();
          //   console.log(data);
           var ViewObj=[];
           data.forEach(el=>{
               if(el.name.includes(hideput.value)){
                   ViewObj.push(el);
                   

               }
           })
            localStorage.setItem('ViewObj', JSON.stringify(ViewObj));
            console.log(JSON.stringify(ViewObj));
           
           console.log(ViewObj);
          } catch (err) {
            console.log(err);
          }
         
        }
       
        gettingData(); 
            window.location.href="./customedproducts.html";
     window.location.target="_blank";
      
  } 
 
});
// appending in suggestion box 

function showsuggestions(data, vaalu){
 
  let cullu=0;
  let tempVarArr=[];
    let quickSearch=document.getElementById('quickSearch');

     // 1. in quick search
    quickSearch.innerHTML="";
    let p=document.createElement('p');
    p.innerHTML="QUICK SEARCH";
    p.classList.add('boldest');
    quickSearch.append(p);

  //   2. in categories 
    let categoriesSearch=document.getElementById('categoriesSearch');
    categoriesSearch.innerHTML="";
    let pi=document.createElement('p');
    pi.innerHTML="CATEGORIES";
    pi.classList.add('boldest');
    categoriesSearch.append(pi);

  //   for x-items found. viewings div 
    let viewings=document.getElementById('viewings');
    viewings.innerHTML="no items found";
    //for prodResView
    let itemlistsings=document.getElementsByClassName('itemlistsings');
     for(var i=0;i<itemlistsings.length;i++){
         itemlistsings[i].innerHTML="";
     }
    data.forEach(el => {
        
        if( el.name.includes(vaalu)){
            if(cullu <=2){

              //   in quick search 
              let p=document.createElement('p');
            p.innerHTML=el.name;
            quickSearch.append(p);
            
            }

          //   in categories 
            let pi=document.createElement('p');
            if(!tempVarArr.includes(el.option)){
                tempVarArr.push(el.option);
                pi.innerHTML=el.option;
                categoriesSearch.append(pi);
            }

          //   in prodResView
              
              if(cullu<=5){
                  console.log("cullu");
                  let picsdivid=document.createElement('img');
                 picsdivid.src=el.img;
                 picsdivid.style.cursor="pointer";
                 picsdivid.style.height="80px";
                 picsdivid.style.width="80px";
                 let itemNaam=document.createElement('div');
                 itemNaam.innerHTML=el.name;
                 itemNaam.style.fontWeight="700";
                 itemNaam.style.color="crimpson";
                 let itemTitless=document.createElement('div');
                 itemTitless.innerHTML=el.category;
                 itemTitless.style.cursor="pointer";
                 itemNaam.style.cursor="pointer";
                 let wrappingsmalls = document.createElement('a');
                 wrappingsmalls.target="_blank";
                 wrappingsmalls.href="./product.html";
                 wrappingsmalls.append(itemNaam);
                 wrappingsmalls.append(itemTitless);
                 wrappingsmalls.style.cursor="pointer";
                 itemlistsings[cullu].append(picsdivid);
                 itemlistsings[cullu].append(wrappingsmalls);

                 wrappingsmalls.addEventListener('click',function(){
                  window.localStorage.setItem('myViewObj', JSON.stringify(el));
                  console.log(JSON.stringify(el));
                 });
                 
              }
              
           cullu++;
           
        }  
        viewings.innerHTML=`${cullu} items found`; 
    });
    if(cullu==0 ){
          let p=document.createElement('p');
         p.innerHTML="No Quick Search Suggestion";
         quickSearch.append(p);
          let pi=document.createElement('p');
         pi.innerHTML="No Categories Suggestion";
       categoriesSearch.append(pi);
      }    
      
}

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
      window.location.href = "login.html";
    });
  }
}

changeAccount();
