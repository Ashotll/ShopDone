const catalog = JSON.parse(localStorage.getItem("catalog")) || [
  {
    index: 0,
    name: "Nike Max 90",
    price: 80,
    images: ["img0_1.png", "img0_2.png", "img0_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 1,
    name: "Nike Force 1",
    price: 90,
    images: ["img1_1.png", "img1_2.png", "img1_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
    new: true,
  },
  {
    index: 2,
    name: "Nike Dunk Low",
    price: 100,
    images: ["img2_1.png", "img2_2.png", "img2_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 3,
    name: "Nike Jordan 1",
    price: 110,
    images: ["img3_1.png", "img3_2.png", "img3_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 4,
    name: "Nike Blazer",
    price: 75,
    images: ["img4_1.png", "img4_2.png", "img4_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
    new: true,
  },
  {
    index: 5,
    name: "Nike ZoomX",
    price: 150,
    images: ["img5_1.png", "img5_2.png", "img5_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 6,
    name: "Nike Pegasus 40",
    price: 65,
    images: ["img6_1.png", "img6_2.png", "img6_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 7,
    name: "Nike React Flyknit",
    price: 85,
    images: ["img7_1.png", "img7_2.png", "img7_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 8,
    name: "Nike SB Dunk",
    price: 95,
    images: ["img8_1.png", "img8_2.png", "img8_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
    new: true,
  },
  {
    index: 9,
    name: "Nike Lebron 21",
    price: 120,
    images: ["img9_1.png", "img9_2.png", "img9_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 10,
    name: "Nike V2K Run",
    price: 130,
    images: ["img10_1.png", "img10_2.png", "img10_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 11,
    name: "Nike Big Low",
    price: 80,
    images: ["img11_1.png", "img11_2.png", "img11_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 12,
    name: "Nike Mercurial",
    price: 100,
    images: ["img12_1.png", "img12_2.png", "img12_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
  },
  {
    index: 13,
    name: "Nike Air Terra",
    price: 100,
    images: ["img13_1.png", "img13_2.png", "img13_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 14,
    name: "Nike Pegasus Plus",
    price: 120,
    images: ["img14_1.png", "img14_2.png", "img14_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
  },
  {
    index: 15,
    name: "Nike Ultrafly",
    price: 70,
    images: ["img15_1.png", "img15_2.png", "img15_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 16,
    name: "Nike Metcon 9",
    price: 150,
    images: ["img16_1.png", "img16_2.png", "img16_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 17,
    name: "Nike Killshot 2",
    price: 115,
    images: ["img17_1.png", "img17_2.png", "img17_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 18,
    name: "Nike Tiempo Legend",
    price: 95,
    images: ["img18_1.png", "img18_2.png", "img18_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 19,
    name: "Nike OffCourt",
    price: 55,
    images: ["img19_1.png", "img19_2.png", "img19_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 20,
    name: "Nike Victory One",
    price: 150,
    images: ["img20_1.png", "img20_2.png", "img20_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 21,
    name: "Nike Initiator",
    price: 140,
    images: ["img21_1.png", "img21_2.png", "img21_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
  },
  {
    index: 22,
    name: "Nike Max 100",
    price: 80,
    images: ["img22_1.png", "img22_2.png", "img22_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
  },
  {
    index: 23,
    name: "Nike Force 19",
    price: 90,
    images: ["img23_1.png", "img23_2.png", "img23_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
  },
  {
    index: 24,
    name: "Nike Dunky Low",
    price: 100,
    images: ["img24_1.png", "img24_2.png", "img24_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
    new: true,
  },
  {
    index: 25,
    name: "Nike Jordan 12",
    price: 110,
    images: ["img25_1.png", "img25_2.png", "img25_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 26,
    name: "Nike BlazerD",
    price: 75,
    images: ["img26_1.png", "img26_2.png", "img26_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
    new: true,
  },
  {
    index: 27,
    name: "Nike ZoomZ",
    price: 150,
    images: ["img27_1.png", "img27_2.png", "img27_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
  },
  {
    index: 28,
    name: "Nike Pegasus 20",
    price: 65,
    images: ["img28_1.png", "img28_2.png", "img28_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 29,
    name: "Nike React Fly",
    price: 85,
    images: ["img29_1.png", "img29_2.png", "img29_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 30,
    name: "Nike SK Dunk",
    price: 95,
    images: ["img30_1.png", "img30_2.png", "img30_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
    new: true,
  },
  {
    index: 31,
    name: "Nike Lebron 23",
    price: 120,
    images: ["img31_1.png", "img31_2.png", "img31_3.png"],
    amount: 0,
    fav: false,
    type: "man",
  },
  {
    index: 32,
    name: "Nike V4K Run",
    price: 130,
    images: ["img32_1.png", "img32_2.png", "img32_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
    new: true,
  },
  {
    index: 33,
    name: "Nike Small Low",
    price: 80,
    images: ["img33_1.png", "img33_2.png", "img33_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
  },
  {
    index: 34,
    name: "Nike Mercurial Air",
    price: 100,
    images: ["img34_1.png", "img34_2.png", "img34_3.png"],
    amount: 0,
    fav: false,
    type: "woman",
    new: true,
  },
  {
    index: 35,
    name: "Nike Air TerraX",
    price: 100,
    images: ["img35_1.png", "img35_2.png", "img35_3.png"],
    amount: 0,
    fav: false,
    type: "man",
    new: true,
  },
  {
    index: 36,
    name: "Nike Pegasus Minus",
    price: 120,
    images: ["img36_1.png", "img36_2.png", "img36_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
  },
  {
    index: 37,
    name: "Nike Ultrafly High",
    price: 70,
    images: ["img37_1.png", "img37_2.png", "img37_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
  },
  {
    index: 38,
    name: "Nike Metcon 11",
    price: 150,
    images: ["img38_1.png", "img38_2.png", "img38_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
    new: true,
  },
  {
    index: 39,
    name: "Nike Killshot 3",
    price: 115,
    images: ["img39_1.png", "img39_2.png", "img39_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
  },
  {
    index: 40,
    name: "Nike Tiempo Legends",
    price: 95,
    images: ["img40_1.png", "img40_2.png", "img40_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
  },
  {
    index: 41,
    name: "Nike ONCourt",
    price: 55,
    images: ["img41_1.png", "img41_2.png", "img41_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
    new: true,
  },
  {
    index: 42,
    name: "Nike Victory Two",
    price: 150,
    images: ["img42_1.png", "img42_2.png", "img42_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
  },
  {
    index: 43,
    name: "Nike Initiator Low",
    price: 140,
    images: ["img43_1.png", "img43_2.png", "img43_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
  },
  {
    index: 44,
    name: "Nike Max 70",
    price: 80,
    images: ["img44_1.png", "img44_2.png", "img44_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
  },
  {
    index: 45,
    name: "Nike Force 4",
    price: 90,
    images: ["img45_1.png", "img45_2.png", "img45_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
    new: true,
  },
  {
    index: 46,
    name: "Nike Dunk High",
    price: 100,
    images: ["img46_1.png", "img46_2.png", "img46_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
    new: true,
  },
  {
    index: 47,
    name: "Nike Jordan 2",
    price: 110,
    images: ["img47_1.png", "img47_2.png", "img47_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
    new: true,
  },
  {
    index: 48,
    name: "Nike BlazerS",
    price: 75,
    images: ["img48_1.png", "img48_2.png", "img48_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
    new: true,
  },
  {
    index: 49,
    name: "Nike ZoomY",
    price: 150,
    images: ["img49_1.png", "img49_2.png", "img49_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
  },
  {
    index: 50,
    name: "Nike Pegasus 50",
    price: 65,
    images: ["img50_1.png", "img50_2.png", "img50_3.png"],
    amount: 0,
    fav: false,
    type: "kid",
  },
];

var basket =
  JSON.parse(localStorage.getItem("basket", JSON.stringify(basket))) || [];

var currentView = "all";
var loadmore = 6;
var ifInputWordChanges;

function fillArray(arr) {
  const main = document.querySelector(".basket");
  main.innerHTML = "";
  const shop = document.createElement("div");
  shop.innerHTML = "";
  shop.classList.add("catalog");
  main.appendChild(shop);
  if (arr.length == 0) {
    loadmore = 6;
    currentView = "all";
    removeClasses();
    removeClasses2();
    fillArray(catalog);
  } else {
    var x = 0;
    arr.forEach((element) => {
      if (x !== loadmore) {
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="image-container">
           <img class="SneakerImg" data-index="0" src="${
             element.images[0]
           }" alt="#" />
          </div>
          <p>${element.name}</p>
          <p>${element.price}$</p>
          <div class="AddFav">
            <button onclick="addInBasket('${
              element.index
            }')" class="addIn">Add to Bag</button>
            <img src="${element.fav ? "heart1.png" : "heart.png"}" 
              onclick="toggleFav('${element.index}')" class="Fav">
           </div>
        `;
        div.classList.add("SmallDiv");
        shop.appendChild(div);
        addSwipeFunctionality(div.querySelector(".SneakerImg"), element.images);
        x++;
      }
    });
  }
  if (
    (currentView === "all" && arr.length != 0) ||
    (arr.length > 6 && currentView !== "favs")
  ) {
    const loadMore = document.createElement("p");
    loadMore.innerHTML = `<button onclick="loadMore()">load more</button>`;
    loadMore.classList.add("loadMore");
    main.appendChild(loadMore);
  }
  localStorage.setItem("catalog", JSON.stringify(catalog));
}

function addSwipeFunctionality(imgElement, images) {
  let index = 0;
  let startX = 0;
  let isSwiping = false;

  function changeImage(direction) {
    index = (index + direction + images.length) % images.length;
    imgElement.classList.add("fade-out");
    setTimeout(() => {
      imgElement.src = images[index];
      imgElement.setAttribute("data-index", index);
      imgElement.classList.remove("fade-out");
    }, 200);
  }

  imgElement.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  imgElement.addEventListener("touchmove", (e) => {
    let diffX = e.touches[0].clientX - startX;
    if (Math.abs(diffX) > 50) {
      changeImage(diffX > 0 ? -1 : 1);
      startX = e.touches[0].clientX;
    }
  });

  imgElement.addEventListener("mousedown", (e) => {
    isSwiping = true;
    startX = e.clientX;
  });

  imgElement.addEventListener("mousemove", (e) => {
    if (!isSwiping) return;
    let diffX = e.clientX - startX;
    if (Math.abs(diffX) > 50) {
      changeImage(diffX > 0 ? -1 : 1);
      startX = e.clientX;
      isSwiping = false;
    }
  });

  imgElement.addEventListener("mouseup", () => {
    isSwiping = false;
  });

  imgElement.addEventListener("mouseleave", () => {
    isSwiping = false;
  });
}

document.getElementById("lupe").addEventListener("click", () => {
  currentView = "all";
  loadmore = 6;
  fillArray(catalog);
});

document.querySelector(".heading1").addEventListener("click", () => {
  currentView = "all";
  loadmore = 6;
  fillArray(catalog);
});

document.querySelector(".header__nike").addEventListener("click", () => {
  unPurch();
  removeClasses();
  removeClasses2();
  loadmore = 6;
  currentView = "all";
  fillArray(catalog);
});

document.querySelector(".nikee").addEventListener("click", () => {
  unPurch();
  removeClasses();
  removeClasses2();
  loadmore = 6;
  currentView = "all";
  fillArray(catalog);
});

function homeE() {
  unPurch();
  removeClasses();
  removeClasses2();
  loadmore = 6;
  currentView = "all";
  fillArray(catalog);
}

function catalogG() {
  unPurch();
  addClasses();
  removeClasses2();
  loadmore = 6;
  currentView = "all";
  fillArray(catalog);
}

function purchaseE() {
  currentView = "purchase";
  addClasses();
  addClasses2();
  const card = document.getElementById("card");
  card.innerHTML = "";
  var div = document.createElement("div");
  div.innerHTML = `
  <div class="cardInfo">
    <h1>Enter your name and address</h1>
    <input type="text" maxlength="20" onkeydown="if (event.key === ' ') event.preventDefault();" class="userName" oninput="userName()" id="userName" placeholder="First Name">
    <input type="text" maxlength="20" onkeydown="if (event.key === ' ') event.preventDefault();" class="userLastName" oninput="userLastName()" id="userLastName" placeholder="Last Name">
    <input type="text" maxlength="40" class="userAddress" oninput="userAddress()" id="userAddress" placeholder="Address">
    <h1>Enter your contacts</h1>
    <input type="text" class="userPhone" onkeydown="if (event.key === ' ') event.preventDefault();" id="userPhone" oninput="userPhone()" placeholder="Phone Number">
    <input type="email" class="userEmail" id="userEmail" onkeydown="if (event.key === ' ') event.preventDefault();" oninput="userEmail()" placeholder="Email">
  </div>
  <div>
    <h1 class="cardHeadInfo">Card Info</h1>
    <div class="cardInputs">
      <input id="cardNum" class="cardNum" onkeydown="if (event.key === ' ') event.preventDefault();" type="text" oninput="cardNum()" placeholder="Enter Card Number">
      <div class="expireDate">
        <div class="exp1">
          <p>Expire Month</p>
          <input id="cardMonth" type="text" onkeydown="if (event.key === ' ') event.preventDefault();" oninput="cardMonth()" placeholder="MM">
        </div>
        <div class="exp2">
          <p>Expire Year</p>
          <input id="cardYear" type="text" onkeydown="if (event.key === ' ') event.preventDefault();" oninput="cardYear()" placeholder="YY">
        </div>
        <div class="exp3">
          <p>CCV</p>
          <input id="cardCcv" type="text" onkeydown="if (event.key === ' ') event.preventDefault();" oninput="cardCvv()" placeholder="CCV">
        </div>
        <img src="card.png" alt="#">
      </div>
      <input id="cardName" oninput="cardName()" class="cardName" type="text" placeholder="Name On The Card">
      <div class="cardCheck">
        <input type="checkbox">
        <p>Save details for fast payments</p>
      </div>
      <div class="cardButtons">
        <button class="cardCancel" onclick="homeE()">CANCEL</button>
        <button class="cardPay" onclick="homeE()">PAY NOW</button>
    </div>
    </div>`;
  div.classList.add("cardBox");
  card.appendChild(div);
}

function unPurch() {
  const card = document.getElementById("card");
  card.innerHTML = "";
}

function userName() {
  const input = document.getElementById("userName");
  input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
}

function userLastName() {
  const input = document.getElementById("userLastName");
  input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
}

function userAddress() {
  const input = document.getElementById("userAddress");
  input.value = input.value.replace(/[^a-zA-Z,0-9\s]/g, "");
}

function userPhone() {
  const input = document.getElementById("userPhone");
  input.value = input.value.replace(/[^0-9\s]/g, "");
}

function userEmail() {
  const input = document.getElementById("userEmail");
  input.value = input.value.replace(/[^a-zA-Z0-9@_.\s]/g, "");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const domainParts = input.value.split("@")[1]?.split(".") || [];
  const localPart = input.value.split("@")[0];

  if (
    emailRegex.test(input.value) &&
    input.value.length <= 254 &&
    localPart.length <= 64 &&
    domainParts.every((part) => part.length <= 63)
  ) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}

function cardNum() {
  const input = document.getElementById("cardNum");
  input.value = input.value.replace(/[^0-9\s]/g, "");
  if (input.value.length > 16) {
    input.value = input.value.slice(0, 16);
  }
}

function cardMonth() {
  const input = document.getElementById("cardMonth");
  input.value = input.value.replace(/[^0-9\s]/g, "");
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
}

function cardYear() {
  const input = document.getElementById("cardYear");
  input.value = input.value.replace(/[^0-9\s]/g, "");
  if (input.value.length > 4) {
    input.value = input.value.slice(0, 4);
  }
}

function cardCvv() {
  const input = document.getElementById("cardCcv");
  input.value = input.value.replace(/[^0-9\s]/g, "");
  if (input.value.length > 3) {
    input.value = input.value.slice(0, 3);
  }
}

function cardName() {
  const input = document.getElementById("cardName");
  input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
}

function removeClasses() {
  const texts2 = document.querySelector(".texts2");
  const hot = document.querySelector(".hotOffers");
  const bigImg = document.querySelector(".BigImg");
  const dont = document.querySelector(".dont");
  const texts3 = document.querySelector(".texts3");
  texts3.classList.remove("block");
  dont.classList.remove("disappear");
  hot.classList.remove("disappear");
  texts2.classList.remove("disappear");
  bigImg.classList.remove("disappear");
}

function removeClasses2() {
  const catalogHeading = document.querySelector(".catalog__heading");
  const searcher = document.querySelector("#disP");
  const basket = document.querySelector(".basket");
  const card = document.querySelector(".card");
  card.classList.remove("height");
  catalogHeading.classList.remove("disappear");
  searcher.classList.remove("disappear");
  searcher.classList.add("searcher");
  basket.classList.remove("disappear");
}

function addClasses() {
  const texts2 = document.querySelector(".texts2");
  const hot = document.querySelector(".hotOffers");
  const bigImg = document.querySelector(".BigImg");
  const dont = document.querySelector(".dont");
  const texts3 = document.querySelector(".texts3");
  texts3.classList.add("block");
  dont.classList.add("disappear");
  hot.classList.add("disappear");
  texts2.classList.add("disappear");
  bigImg.classList.add("disappear");
}

function addClasses2() {
  const catalogHeading = document.querySelector(".catalog__heading");
  const searcher = document.querySelector("#disP");
  const basket = document.querySelector(".basket");
  const card = document.querySelector(".card");
  card.classList.add("height");
  catalogHeading.classList.add("disappear");
  searcher.classList.remove("searcher");
  searcher.classList.add("disappear");
  basket.classList.add("disappear");
}

function loadMore() {
  loadmore += 6;
  if (currentView === "search") {
    searcher(catalog, ifInputWordChanges);
  } else if (currentView === "new") {
    newSneakers();
  } else if (currentView === "man") {
    manSneakers();
  } else if (currentView === "woman") {
    womanSneakers();
  } else if (currentView === "kid") {
    kidsSneakers();
  } else {
    currentView = "all";
    fillArray(catalog);
  }
}

document
  .getElementById("searcher")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const p = document.getElementById("searcher");
      const word = p.value;
      if (word != ifInputWordChanges) {
        loadmore = 6;
      }
      ifInputWordChanges = word;
      if (!word) {
        currentView = "all";
        fillArray(catalog);
      } else {
        searcher(catalog, word);
      }
      p.value = "";
    }
  });

function searcher(arr, word) {
  const filtered = arr.filter((item) => {
    if (item.name.search(word) != -1) {
      return item;
    }
  });
  currentView = "search";
  fillArray(filtered);
}

function addInBasket(index) {
  var isRepeating = false;
  basket.filter((item) => {
    if (item.index == index) {
      isRepeating = true;
      catalog[index].amount++;
    }
  });
  if (!isRepeating) {
    catalog[index].amount++;
    basket.push(catalog[index]);
  }
  if (catalog[index].amount > 5) {
    basket[index];
  }
  basketNum();
  localStorage.setItem("basket", JSON.stringify(basket));
}

function showBasket() {
  unPurch();
  removeClasses2();
  const main = document.querySelector(".basket");
  main.innerHTML = "";
  const shop = document.createElement("div");
  shop.classList.add("catalog");
  shop.innerHTML = "";
  main.appendChild(shop);
  var totalCheck = 0;
  basket.forEach((element, index) => {
    const div = document.createElement("div");
    var total = element.amount * element.price;
    var promo;
    if (element.amount >= 5) {
      promo = total - (element.amount * element.price) / 5;
      totalCheck = totalCheck + promo;
    } else {
      totalCheck = totalCheck + total;
    }
    div.innerHTML = `<img src="${element.images[0]}" alt="#" /> 
        <div class="catalog__ItemNames">
          <p>${element.name}</p>
          <p>Total: <span class="${
            element.amount >= 5 ? "TotalPricePromo" : ""
          }"> ${total}$</span> ${element.amount >= 5 ? promo + "$" : ""}</p>  
        </div>
        <p class="catalog__ItemPrice">${element.price}$</p>
        <div class="catalog__ItemButtons">
          <button onclick="remove(${index})" class="removeFrom">Remove</button>
          <div>
            <button onclick="minusAmount(${index})" class="amountChanger">-</button>
            <p class="TotalAmount">${element.amount}</p>
            <button onclick="plusAmount(${index})" class="amountChanger">+</button>
          </div>
        </div>
        `;
    div.classList.add("BigDiv");
    shop.appendChild(div);
  });
  if (basket.length == 0) {
    removeClasses();
    currentView = "all";
    loadmore = 6;
    fillArray(catalog);
  } else {
    addClasses();
    const h1 = document.createElement("h1");
    h1.innerHTML = `<h1 class="empty">TotalCheck: <span class="${
      totalCheck >= 10000 ? "TotalPricePromo" : ""
    }"> ${totalCheck}$</span> ${
      totalCheck >= 10000 ? totalCheck - totalCheck / 10 + "$" : ""
    }
      </h1>`;
    const div = document.createElement("div");
    div.classList.add("basketPurchaseBox");
    div.innerHTML = `<button class="basketPurchase" onclick="purchaseE()">BUY NOW!!!</button>`;
    main.appendChild(h1);
    main.appendChild(div);
  }
}

function remove(index) {
  basket[index].amount = 0;
  basket.splice(index, 1);
  showBasket();
  basketNum();
  localStorage.setItem("basket", JSON.stringify(basket));
}

function minusAmount(index) {
  basket[index].amount--;
  if (basket[index].amount <= 0) {
    remove(index);
  }
  showBasket();
  localStorage.setItem("basket", JSON.stringify(basket));
}
function plusAmount(index) {
  basket[index].amount++;
  showBasket();
  localStorage.setItem("basket", JSON.stringify(basket));
}

function basketNum() {
  var numbersInBasket = document.querySelectorAll("#numsBaskets");
  if (basket.length == 0) {
    numbersInBasket.forEach((elem) => {
      elem.innerHTML = "";
      elem.classList.remove("numsInBasket");
    });
  } else {
    numbersInBasket.forEach((elem) => {
      elem.innerHTML = `${basket.length}`;
      elem.classList.add("numsInBasket");
    });
  }
}

function toggleFav(index) {
  catalog[index].fav = !catalog[index].fav;
  localStorage.setItem("catalog", JSON.stringify(catalog));
  if (currentView === "favs") {
    fillArray(getFavs());
  } else if (currentView === "all") {
    fillArray(catalog);
  } else if (currentView === "search") {
    searcher(catalog, ifInputWordChanges);
  } else if (currentView === "new") {
    newSneakers();
  } else if (currentView === "man") {
    manSneakers();
  } else if (currentView === "woman") {
    womanSneakers();
  } else if (currentView === "kid") {
    kidSneakers();
  }
  favNum();
}

function getFavs() {
  return catalog.filter((elem) => elem.fav);
}

function showFavs() {
  unPurch();
  const favs = getFavs();
  currentView = "favs";
  fillArray(favs);
  if (favs.length > 0) {
    removeClasses2();
    addClasses();
  }
}

function favNum() {
  var numbersInFavs = document.querySelector("#numsFavs");
  if (getFavs().length == 0) {
    numbersInFavs.innerHTML = "";
    numbersInFavs.classList.remove("numsInFavs");
  } else {
    numbersInFavs.innerHTML = `${getFavs().length}`;
    numbersInFavs.classList.add("numsInFavs");
  }
}

function newSneakers() {
  unPurch();
  removeClasses2();
  if (currentView != "new") {
    loadmore = 6;
  }
  currentView = "new";
  addClasses();
  fillArray(catalog.filter((elem) => elem.new));
}
function manSneakers() {
  unPurch();
  removeClasses2();
  if (currentView != "man") {
    loadmore = 6;
  }
  currentView = "man";
  addClasses();
  fillArray(catalog.filter((elem) => elem.type === "man"));
}
function womanSneakers() {
  unPurch();
  removeClasses2();
  if (currentView != "woman") {
    loadmore = 6;
  }
  currentView = "woman";
  addClasses();
  fillArray(catalog.filter((elem) => elem.type === "woman"));
}
function kidSneakers() {
  unPurch();
  removeClasses2();
  if (currentView != "kid") {
    loadmore = 6;
  }
  currentView = "kid";
  addClasses();
  fillArray(catalog.filter((elem) => elem.type === "kid"));
}

fillArray(catalog);
basketNum();
favNum();

// localStorage.clear();
