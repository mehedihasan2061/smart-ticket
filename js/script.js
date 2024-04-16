const items = document.getElementsByClassName("selectSheat");
// console.log(items);
let count = 0;
let sheat = 40;
let grandTotal = 0;
let counting = 0;


for (const item of items) {
  item.addEventListener("click", function (e) {
    const singleTicket = e.target;

    
    counting = counting + 1;
    
    const btn = document.getElementById("apply-btn");
   
    if (counting === 4) {
      btn.removeAttribute("disabled");
      singleTicket.setAttribute("disabled","disabled");
      

      
    } else {
      singleTicket.setAttribute("class", "btn  ");
      count = count + 1;
      sheat = sheat - 1;
      total = 550 * count;
      grandTotal = grandTotal + 550;
      // console.log(count);
      setInnerText("seat-count", count);
      setInnerText("available-sheat", sheat);
      setInnerText("total-price", total);
      setInnerText("grand-total", grandTotal);

      const selectedTicket = document.getElementById("selected-ticket");
      
      const ol = document.createElement("ol");
      ol.setAttribute("class", "flex justify-between");
      const p1 = document.createElement("p");
      const p1Text = item.innerText;
      p1.innerText = p1Text;

      const p2 = document.createElement("p");
      p2.innerText = "Economoy";

      const fare = document.getElementById("fare").innerText;
      const p3 = document.createElement("p");
      p3.innerText = fare;

      ol.appendChild(p1);
      ol.appendChild(p2);
      ol.appendChild(p3);

      selectedTicket.appendChild(ol);

      
      singleTicket.setAttribute(
        "disabled",
        "disabled"
      );
      singleTicket.setAttribute(
        "class",
        "bg-green-500 p-3 text-center text-white rounded-xl cursor-pointer"
      );
     
    }
  });

  const ticket = item.innerText;
  document
    .getElementById("phoneNumber")
    .addEventListener("keyup", function (e) {
      const phoneNumberField = e.target.value;
      if (ticket && phoneNumberField) {
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.removeAttribute("disabled");
      }
    });
}

document
  .getElementById("apply-btn")
  .addEventListener("click", function discountItem(id) {
    const inputField = document.getElementById("input-value");
    const inputArea = inputField.value;
    console.log(inputField);
    setInnerText("total-price", total);
    
    if (inputArea === "NEW15") {
      const discountPrice = (total * 15) / 100;
      
       const inputField = document.getElementById("input-value");
      const grand = document.getElementById("grand-total");
      const grandTotal = total - discountPrice;
      grand.innerText = grandTotal;

      inputField.value = "";
      const btn = document.getElementById("apply-btn");
      btn.setAttribute("disabled","disabled")

      const discountTicket = document.getElementById("discount");
      console.log(discountTicket);
      const ol = document.createElement("ol");
      ol.setAttribute("class", "flex justify-between");
      const p1 = document.createElement("p");
      p1.setAttribute("class", "font-bold");
      p1.innerText = "Discount Price";

      const p2 = document.createElement("p");
      p2.setAttribute("class", "font-bold");
      p2.innerText = discountPrice;
      ol.appendChild(p1);
      ol.appendChild(p2);
      discountTicket.appendChild(ol);
    }
    if (inputArea === "Couple 20") {
      const discountPrice = (total * 20) / 100;
      // console.log(discountPrice);
      const inputField = document.getElementById("input-value");
      const grand = document.getElementById("grand-total");
      const grandTotal = total - discountPrice;
      grand.innerText = grandTotal;

      inputField.value = "";
      const btn = document.getElementById("apply-btn");
      btn.setAttribute("disabled", "disabled");

      const discountTicket = document.getElementById("discount");
      console.log(discountTicket);
      const ol = document.createElement("ol");
      ol.setAttribute("class", "flex justify-between");
      const p1 = document.createElement("p");
      p1.setAttribute("class", "font-bold");
      p1.innerText = "Discount Price";

      const p2 = document.createElement("p");
      p2.setAttribute("class", "font-bold");
      p2.innerText = discountPrice;
      ol.appendChild(p1);
      ol.appendChild(p2);
      discountTicket.appendChild(ol);
    } 
  });


function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
