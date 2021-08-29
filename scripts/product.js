


function appearSearch(){
  
  document.getElementById('searchings').style.display='flex';
  document.getElementById('hideput').value="";
  document.body.classList.add("stop-scrolling"); //to stop scrolling when suggestion box appears//
  console.log("working")
}
// let myViewObj=window.localStorage.getItem('myViewObj');
//    console.log(myViewObj);



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
        async function getData() {
          try {
            let res = await fetch("http://localhost:3000/products/");
            let data = await res.json();
            console.log(data);
           showsuggestions(data, vaalu);
          } catch (err) {
            console.log(err);
          }
        }
        getData();
        
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

                wrappingsmalls.addEventListener('click', function () {
                  window.localStorage.setItem('current_selected_prod', JSON.stringify(el));
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



// NavBar Slide start

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
  // NavBar Slide End



//  dynamic description of product


// let myViewObj = JSON.parse(window.localStorage.getItem('myViewObj'));
// console.log(myViewObj);
// //let xing=myViewObj.name;
// const urlParams = new URLSearchParams(window.location.search);
// //urlParams.append('item', xing);
// // window.location.search = urlParams;

// document.getElementById('main_img').src="";
// document.getElementById('prod-company-name').innerHTML="";
// document.getElementById('prod-title-name').innerHTML="";
// document.getElementById('prod-title-name').innerHTML="";
// document.getElementById('detail_lines').innerHTML="";
// document.getElementById('add_to_bag').innerHTML="";

// function settingHTML(){
//   document.getElementById('main_img').src=myViewObj.img;
//      document.getElementById('prod-company-name').innerHTML=myViewObj.name;
//      document.getElementById('prod-title-name').innerHTML=myViewObj.name;
//      document.getElementById('prod-title-name').innerHTML=myViewObj.name;
//      document.getElementById('detail_lines').innerHTML=myViewObj.title;
//      document.getElementById('add_to_bag').innerHTML=`ADD TO BAG | ${myViewObj.price}`;console.log(myViewObj);
// }
// settingHTML();


//   Add to bag

// Counting products
var count = 1;
let cart_btn = document.querySelector("#add_to_bag");
let remove_count = document.getElementById("remove_count");
let add_count = document.getElementById("add_count");
let product_count = document.getElementById("product_count");

// Image changing
let img_1 = document.getElementById("img_1");
let img_2 = document.getElementById("img_2");
let main_img = document.getElementById("main_img");

img_1.addEventListener("click", function () {
    main_img.src = current_prod[0].img;
  });

img_2.addEventListener("click", function () {
  main_img.src = "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000578579-2_525x525.jpg?v=1623217977";
});

// cart_btn.addEventListener("click", function () {



//   if (count != 0) {
//     current_prod[0].item_count = count;
//     localStorage.setItem('current_selected_prod', JSON.stringify(current_prod))
//     // console.log(current_prod);
    
//     /****************25/07/21 12:57 am changes made from here ****************************/
//     // window.location.href = 'cart.html' // If anything goes wrong, uncomment this line and delete every below line of this block

//     let shopping_bag;
//     if (localStorage.getItem("shopping_bag") == null) {
//       localStorage.setItem("shopping_bag", JSON.stringify(current_prod));
//     } else {
//       var temp_bag = JSON.parse(localStorage.getItem("shopping_bag"));
//       console.log(temp_bag);

//       var flag = 0;
//       for (let i = 0; i < temp_bag.length; i++) {
//         if (temp_bag[i].prod_id_num == current_prod[0].prod_id_num) {
//           temp_bag[i].item_count = current_prod[0].item_count;
//           console.log("We are here.");
//           flag = 1;
//           break;
//         }
//       }
//       if (flag) {
//         localStorage.setItem("shopping_bag", JSON.stringify(temp_bag));
//         console.log("Here because of same id")
//       } else {
//         temp_bag.push(current_prod[0]);
//         localStorage.setItem("shopping_bag", JSON.stringify(temp_bag));
//       }
//     }
//   }
// });

//   remove_count.addEventListener("click", function () {
//     count = count - 1;
    
//     if (count <= 0) {
//       cart_btn.setAttribute('style', 'opacity: 0.5 ; cursor: not-allowed');
//     } else {
//       cart_btn.removeAttribute('style');
//     }


//     if (count < 0) {
//       product_count.innerHTML = 0;
//       count = count+1;
//     } else {
//       product_count.innerHTML = count;
//     }
//     // console.log("Decrease: ", count)
//   });

//   add_count.addEventListener("click", function () {
//     count = count + 1;
    
//     if (count < 0) {
//       product_count.innerHTML = 0;
//     } else {
//       cart_btn.removeAttribute('style')
//       product_count.innerHTML = count;
//     }

//     // console.log("Increase: ", count)
//   });


// /************** MORE CHANGES DONE BELOW *************/

// var current_prod = JSON.parse(localStorage.getItem('current_selected_prod'));
// console.log("Product Page", current_prod);

// document.title =myViewObj.name;

// // document.getElementById('img_1').src = `https://via.placeholder.com/150`;
// document.getElementById('main_img').src = current_prod[0].img;
// document.getElementById('main_img').setAttribute('style', 'width: 500px;')

// console.log(current_prod[0].price)

// var title_name = document.getElementById('prod-company-name');
// title_name.innerHTML = current_prod[0].name;

// var add_price = document.getElementById("dynamic-price");
// add_price.innerHTML = "$" + current_prod[0].price;

// var add_title = document.getElementById('prod-title-name');
// add_title.innerHTML = current_prod[0].title;

// var page_navigator = document.getElementById('page_navigator-span');
// page_navigator.innerHTML = current_prod[0].title;

// cart_btn.append(current_prod[0].price);

// // Sign-up button change

// function changeAccount() {
//   let signup_btn = document.getElementById("login_change");
//   let check_user = JSON.parse(localStorage.getItem("current_user"));

//   if (check_user != null) {
//     signup_btn.innerHTML = `<i class="fa fa-user-circle"></i> Account`;
//     signup_btn.addEventListener("click", () => {
//       window.location.href = "myaccount.html";
//     });
//   } else {
//     signup_btn.innerHTML = `<i class="fa fa-user-circle"></i> Sign in/up`;
//     signup_btn.addEventListener("click", () => {
//       window.location.href = "login.html"
//     });
//   }
// }

// changeAccount();

cart_btn.addEventListener("click", function () {
  if (count != 0) {
    current_prod[0].item_count = count;
    localStorage.setItem('current_selected_prod', JSON.stringify(current_prod))
    // console.log(current_prod);
    
    /****************25/07/21 12:57 am changes made from here ****************************/
    // window.location.href = 'cart.html' // If anything goes wrong, uncomment this line and delete every below line of this block

    let shopping_bag;
    if (localStorage.getItem("shopping_bag") == null) {
      localStorage.setItem("shopping_bag", JSON.stringify(current_prod));
    } else {
      var temp_bag = JSON.parse(localStorage.getItem("shopping_bag"));
      console.log(temp_bag);

      var flag = 0;
      for (let i = 0; i < temp_bag.length; i++) {
        if (temp_bag[i].prod_id_num == current_prod[0].prod_id_num) {
          temp_bag[i].item_count = current_prod[0].item_count;
          console.log("We are here.");
          flag = 1;
          break;
        }
      }
      if (flag) {
        localStorage.setItem("shopping_bag", JSON.stringify(temp_bag));
        console.log("Here because of same id")
      } else {
        temp_bag.push(current_prod[0]);
        localStorage.setItem("shopping_bag", JSON.stringify(temp_bag));
      }
    }
  }
});

  remove_count.addEventListener("click", function () {
    count = count - 1;
    
    if (count <= 0) {
      cart_btn.setAttribute('style', 'opacity: 0.5 ; cursor: not-allowed');
    } else {
      cart_btn.removeAttribute('style');
    }


    if (count < 0) {
      product_count.innerHTML = 0;
      count = count+1;
    } else {
      product_count.innerHTML = count;
    }
    // console.log("Decrease: ", count)
  });

  add_count.addEventListener("click", function () {
    count = count + 1;
    
    if (count < 0) {
      product_count.innerHTML = 0;
    } else {
      cart_btn.removeAttribute('style')
      product_count.innerHTML = count;
    }

    // console.log("Increase: ", count)
  });


/************** MORE CHANGES DONE BELOW *************/

var current_prod = JSON.parse(localStorage.getItem('current_selected_prod'));
// console.log("Product Page", current_prod);

document.title = `${current_prod[0].name} ${current_prod[0].title}`;

document.getElementById('img_1').src = current_prod[0].img;
document.getElementById('main_img').src = current_prod[0].img;
document.getElementById('main_img').setAttribute('style', 'width: 500px;')

// console.log(current_prod[0].price)

var title_name = document.getElementById('prod-company-name');
title_name.innerHTML = current_prod[0].name;

var add_price = document.getElementById("dynamic-price");
add_price.innerHTML = "$" + current_prod[0].price;

var add_title = document.getElementById('prod-title-name');
add_title.innerHTML = current_prod[0].title;

var page_navigator = document.getElementById('page_navigator-span');
page_navigator.innerHTML = current_prod[0].title;

cart_btn.append(current_prod[0].price);

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