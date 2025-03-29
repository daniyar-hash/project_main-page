var btn_delivery = document.querySelector(".delivery-list .button");
var btn_warranty = document.querySelector(".warranty-list .button");
var btn_credit = document.querySelector(".credit-list .button");

var desc_del = document.querySelector(" .delivery-list .service-description");
var desc_warrant = document.querySelector(" .warranty-list .service-description");
var desc_credit = document.querySelector(" .credit-list .service-description");

btn_warranty.addEventListener("click", function (evt) {
   evt.preventDefault();

if (desc_del.classList.contains("active") || desc_credit.classList.contains("active")) {
      desc_del.classList.remove("active");
      desc_credit.classList.remove("active");
      desc_warrant.classList.add("active");
}
});



btn_credit.addEventListener("click", function (evt) {
   evt.preventDefault();

if (desc_del.classList.contains("active") || desc_warrant.classList.contains("active")) {
      desc_del.classList.remove("active");
      desc_warrant.classList.remove("active");
      desc_credit.classList.add("active");
}
 

	// body...
});


btn_delivery.addEventListener("click", function (evt) {
   evt.preventDefault();

if (desc_warrant.classList.contains("active") || desc_credit.classList.contains("active")) {
      desc_warrant.classList.remove("active");
      desc_credit.classList.remove("active");
      desc_del.classList.add("active");
}
 

   // body...
});