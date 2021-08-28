//search field appear
console.log("outer abc")

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
              console.log(data);
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




// hover show and hide on nav bar
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


// Showing product Grids
var amounting=0;
function showItems(l) {
  let items = l;
  let items_div = document.getElementById("items");

  items_div.innerHTML = null;

  items.forEach(function (el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerText = el.name;

    let span_title = document.createElement("span");
    span_title.innerText = el.title;

    let p_price = document.createElement("p");
    p_price.innerHTML = `$${el.price}`;

    let img = document.createElement("img");
    img.src = el.img;

    let wish = document.createElement("p");
    wish.innerHTML = "<i class='far fa-heart'></i>";
    wish.setAttribute("id", "wish-btn");
    wish.style.width = "22px";
    wish.style.height = "21px";
    wish.style.float = "left";
    wish.style.marginBottom = "0px";

    p_name.setAttribute(
      "style",
      " font-family: Montserrat Medium,sans-serif; font-weight: 400;letter-spacing: .2px;line-height: 24px;text-transform: uppercase;color: #12284c;font-size: 14px;"
    );
    span_title.setAttribute(
      "style",
      " font-family: Montserrat Light,sans-serif; font-weight: 300;letter-spacing: .18px;line-height: 20px;color: #12284c;font-size: 14px;"
    );
    p_price.setAttribute(
      "style",
      " font-family: Montserrat Light,sans-serif; font-weight: 400;line-height: 1.65;color: #12284c;font-size: 14px;"
    );

    img.style.width = "80%";
    img.style.height = "80%"

    img.addEventListener("click", function () {
      addtoVisited(el);
    });
    
    var i = 0;
    function switchArrayColor() {
      if (i % 2 == 0) {
        wish.innerHTML = "<i class='fas fa-heart'></i>";
        if (localStorage.getItem("wishlist") == null) {
          let wishlistArr = [];
          localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
        }
        let temp = JSON.parse(localStorage.getItem("wishlist"));
        temp.push(el);
        localStorage.setItem("wishlist", JSON.stringify(temp));
      } else {
        wish.innerHTML = "<i class='far fa-heart'></i>";
        let temp = JSON.parse(localStorage.getItem("wishlist"));
        temp.forEach((element, index, temp) => {
          if (element.prod_id_num == el.prod_id_num) {
            temp.splice(index, 1);
          }
        });
        localStorage.setItem("wishlist", JSON.stringify(temp));
      }
      i++;
    }
    wish.addEventListener("click", switchArrayColor);
     div.addEventListener('click', function(){
      div.target="_blank";
      window.location.href="./product.html";
          localStorage.setItem('myViewObj', JSON.stringify(el));
          console.log(JSON.stringify(el));
     })
    div.append(wish, img, p_name, span_title, p_price);
    items_div.append(div);
    amounting++;
  });

}

// <-------------------------------Fetching the data from customised search of user -------------------------->
function getData() {
    let ViewObj=localStorage.getItem('ViewObj');
    
  var newObj=JSON.parse(ViewObj);
  console.log(newObj);
  showItems(newObj);
  
}
getData();

// NavBar Slide start

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
// NavBar Slide End

// Feature and sorting seletive function

function myFunction() {
  var x = document.getElementById("mySelect").value;
  if (x == "Price, Low to High") {
    sortLH();
  } else if (x == "Price, High to Low") {
    sortHL();
  }
}

// __________________________________________________________________________________________________

// Sorting Functions for Low to high and High to low
async function sortLH() {
  let res = await fetch("http://localhost:3000/products/");
  let data = await res.json();

  data = data.sort(function (a, b) {
    return a.price - b.price;
  });
  showItems(data);
}

async function sortHL() {
  let res = await fetch("http://localhost:3000/products/");
  let data = await res.json();

  data = data.sort(function (a, b) {
    return b.price - a.price;
  });
  showItems(data);
}

// Filter dropdown
let dropDown_type = document.getElementById("dropdown_type");

dropDown_type.addEventListener("click", function () {
  document.getElementById("myDropdown_type").classList.toggle("show");
});

let dropDown_brand = document.getElementById("dropdown_brand");

dropDown_brand.addEventListener("click", function () {
  document.getElementById("myDropdown_brand").classList.toggle("show");
});

let dropdown_shopby = document.getElementById("dropdown_shopby");

dropdown_shopby.addEventListener("click", function () {
  document.getElementById("myDropdown_shopby").classList.toggle("show");
});

let dropdown_price = document.getElementById("dropdown_price");

dropdown_price.addEventListener("click", function () {
  document.getElementById("myDropdown_price").classList.toggle("show");
});


function addtoVisited(obj) {
  console.log("Obj: ", obj);
  let singleProdArr = [];
  singleProdArr.push(obj);

  // window.location.href = "product.html";
}

// Sign-up button change
console.log("outer abc")
function changeAccount() {
  let signup_btn = document.getElementById("login_change");
  let check_user = JSON.parse(localStorage.getItem("current_user"));
  console.log("inner abc")
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



/************************
Show wish list products
************************/
function hideOverlay() {
  document.getElementById('super-wishlist-box').style.display = 'none';
}
function showWishProd() {
  console.log("Yay");
  document.getElementById('super-wishlist-box').style.display = 'block';
  let super_div = document.getElementById("bg")
  super_div.style.display = "block";
  
  let main_div = document.getElementById("wishlist-box-overlay");
  main_div.innerHTML = null;
  main_div.style.display = "block";
  main_div.style.width = '70%';
  main_div.style.display = 'flex';
  main_div.style.flexDirection = 'column';
  
  let temp = JSON.parse(localStorage.getItem("wishlist"));
  temp.forEach((el) => {
    
  });

  if (temp == null || temp.length == 0) {
    main_div.innerHTML = null;
    
    let default_div = document.createElement('div');
    default_div.setAttribute("id", "wishlist-prod-div");

    let para_1 = document.createElement('p');
    para_1.innerHTML = `Love It? Add To My Wishlist`;
    para_1.setAttribute("style", "font-weight: bold; font-size: 18px; line-height: 50px; text-transform: capitalize; color: #434655; margin: 25px 0; text-align: center;")

    let para_2 = document.createElement('p');
    para_2.innerHTML = `My Wishlist allows you to keep track of all of your favorites and shopping activity whether you're on your computer, phone, or tablet. You won't have to waste time searching all over again for that item you loved on your phone the other day - it's all here in one place!`;
    para_2.setAttribute("style", "font-weight: 500; font-size: 14px; line-height: 1.5em; letter-spacing: .05em; color: #828282; max-width: 650px;")

    let shopping_btn = document.createElement('button');
    shopping_btn.innerHTML = `Continue Shopping`;
    shopping_btn.setAttribute("style", "font-weight: normal; font-size: 14px; line-height: 16px; text-transform: uppercase; margin: 35px 0; padding: 13px 30px; cursor: pointer; background-color: #12284C; border: none; color: white");
    shopping_btn.addEventListener('click', () => {
      window.location.href = './new.html';
    })

    default_div.append(para_1, para_2, shopping_btn);
    main_div.append(default_div);
  } else {
    let outer_div = document.createElement('div');
    outer_div.setAttribute("style", "display: grid; grid-template-columns: repeat(4, 200px); /*grid-auto-rows: 250px;*/ gap: 20px; height: 500px; overflow: scroll; align-items: top");

    outer_div.setAttribute("id", "wishlist-prod-div");

    let wishlistArr = JSON.parse(localStorage.getItem('wishlist'));
    console.log(wishlistArr);

    wishlistArr.forEach((el) => {
      let inner_div = document.createElement('div');
      inner_div.style.backgroundColor = 'white';
      inner_div.style.border = "1px solid #12284C";
      inner_div.style.height = 'fit-content';
      inner_div.style.position = 'relative';

      let cancel_p = document.createElement('p');
      cancel_p.innerHTML = `<i class="material-icons">close</i>`;
      cancel_p.style.position = 'absolute';
      cancel_p.style.right = '0';
      cancel_p.style.color = '#12284C';
      cancel_p.style.cursor = 'pointer';
      cancel_p.addEventListener('click', () => {
        for (let i = 0; i < wishlistArr.length; i++) {
          if (wishlistArr[i].prod_id_num == el.prod_id_num) {
            wishlistArr.splice(i, 1);
            console.log(wishlistArr[i])
            console.log("here");
            localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
            break;
          }
        }
        showWishProd();
      });

      let img = document.createElement('img');
      img.src = el.img;
      img.style.width = "100%";
      img.style.height = "70%";
      img.style.objectFit = "cover";

      let title = document.createElement('p');
      title.innerHTML = el.title;
      title.setAttribute("style", "white-space: nowrap; width: 100%; overflow: hidden; text-overflow: ellipsis;")

      let price = document.createElement('p');
      price.innerHTML = `$ ${el.price}`;

      let add_to_cart = document.createElement('button');
      add_to_cart.innerHTML = `ADD TO BAG`;
      add_to_cart.setAttribute("style", "font-weight: normal; font-size: 14px; line-height: 16px; text-transform: uppercase; padding: 5px; cursor: pointer; background-color: #12284C; border: none; color: white; width: 100%");
      add_to_cart.addEventListener('click', () => {
        window.location.href = './new.html';
      });

      inner_div.append(cancel_p, img, title, price, add_to_cart);
      outer_div.append(inner_div);
    });
    
    let shopping_btn = document.createElement('button');
    shopping_btn.innerHTML = `Continue Shopping`;
    shopping_btn.setAttribute("style", "font-weight: normal; font-size: 14px; line-height: 16px; text-transform: uppercase; padding: 13px 30px; cursor: pointer; background-color: #12284C; border: none; color: white; width: 250px; margin: 10px auto");
    shopping_btn.addEventListener('click', () => {
      window.location.href = './new.html';
    })

    main_div.append(outer_div, shopping_btn);
  }
}