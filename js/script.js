const products = [
  {
    id: 1,
    title: "مبل ال اقلیما",
    details:
      "نفره: 60*85 کنج : 100*85 میز : 90* 60جنس بدنه : چوب روس و سفید 195*85 2 نفره : 163*85 تک تعداد : 3 نفره دسته دار+ 2 نفره دسته دار+ 1 نفره + کنج(امکان تغییر تعداد نفرات وجود دارد) ابعاد : 3نفره: ",
    priceWithoutCut: "36000000 تومان",
    priceWithCut: "23900000 تومان",
    pictureSource: "images/id1.jpg",
  },
  {
    id: 2,
    title: "جولینا",
    details:
      "ابعاد : طول 2*280 عرض 80  جنس بدنه : چوب روس جنس نشیمن : اسفنج 30 کیلویی نوع دوخت : ساده مکانیزم : تختخواب شو",
    priceWithoutCut: "34500000 تومان",
    priceWithCut: "34000000 تومان",
    pictureSource: "images/id2.jpg",
  },
  {
    id: 3,
    title: "مبل راحتی تانیا",
    details:
      "تعداد : 7 نفره (3+2+1+1) امکان تغییر تعداد نفرات وجود دارد ابعاد : کاناپه سه نفره: طول 190 سانتی متر، ارتفاع 70 سانتی متر کاناپه دو نفره: طول 130 سانتی متر، ارتفاع 70 سانتی متر جنس بدنه : چوب روس و سفید",
    priceWithoutCut: "40400000 تومان",
    priceWithCut: "29900000 تومان",
    pictureSource: "images/id3.jpg",
  },
  {
    id: 4,
    title: "مبل راحتی چستر لاریسا",
    details:
      " تعداد : 7 نفره (3+2+1+1)  ابعاد : کاناپه 3 نفره طول بیرون دسته 195 ارتفاع از زمین 98 -- طول داخل دسته 150 عرض نشیمن 60 کاناپه 2 نفره طول بیرون دسته 144 جنس بدنه : چوب روس",
    priceWithoutCut: "52000000 تومان",
    priceWithCut: "36500000 تومان",
    pictureSource: "images/id4.jpg",
  },
];

ulElement = document.querySelector(".list ul");

for (let i = 0; i < products.length; i++) {
  let newLi = document.createElement("li");
  newLi.innerHTML = products[i].title;
  ulElement.append(newLi);
}

let showCaseProducts = setInterval(shwoCase, 3000);

let i = 0;

function shwoCase() {
  let itemName = document.querySelector("#off-sample .item-picture h2");
  itemName.innerHTML = products[i].title;

  let priceWithoutCut = document.querySelector(
    "#off-sample .description .price div:first-child p"
  );
  priceWithoutCut.innerHTML = products[i].priceWithoutCut;

  let priceWithCut = document.querySelector(
    "#off-sample .description .price div:last-child p"
  );
  priceWithCut.innerHTML = products[i].priceWithCut;

  let detail = document.querySelector("#off-sample .description .details pre");
  detail.innerHTML = products[i].details;

  let picture = document.querySelector("#off-sample .item-picture img");
  picture.src = products[i].pictureSource;

  let li = document.querySelectorAll(".list ul li");
  for (let j = 0; j < li.length; j++) {
    if (li[j].innerHTML == products[i].title) {
      li[j].style.backgroundColor = "#3A9745";
      li[j].style.color = "#fff";
    } else {
      li[j].style.backgroundColor = "";
      li[j].style.color = "";
    }
  }
  i++;
  if (i > 3) {
    i = 0;
  }
}

let timeLeft = document.querySelectorAll(
  "#off-sample .time-left > div > div p.amout-of-time"
);

let days = 4;
let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = setInterval(time, 1000);

function time() {
  if (seconds == 0 || seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes == 0 || minutes < 0) {
    minutes = 59;
    hours--;
  }
  if (hours == 0 || hours < 0) {
    hours = 23;
    days--;
  }
  if (days == 0 || days < 0) {
    let timeFinished = document.querySelectorAll(
      "#off-sample .time-left > div #demo"
    );
    timeFinished.innerHTML = "زمان تخفیف به پایان رسید";
    timeFinished.style.color = "red";
  }

  seconds--;

  timeLeft[3].innerHTML = days;
  timeLeft[2].innerHTML = hours;
  timeLeft[1].innerHTML = minutes;
  timeLeft[0].innerHTML = seconds;
}

// hamburgur menu
const hamburgurToggle = document.getElementById("menu-toggle");
const section = document.querySelector("nav .container");
hamburgurToggle.addEventListener("click", toggled);

function toggled () {
  document.getElementById("links").classList.toggle("show");
  section.style = "align-items: start";
}