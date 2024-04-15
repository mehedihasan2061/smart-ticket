const items = document.getElementsByClassName("selectSheat");
// console.log(items);
let count = 0;
let sheat = 40;
let grandTotal = 0;

for (const item of items) {
  item.addEventListener("click", function (e) {
    const singleTicket = (e.target);
   
    item.setAttribute(
      "class",
      "btn  "
    );
    count = count + 1;
    sheat = sheat - 1;
    total = 550 * count;
    grandTotal = grandTotal + 550;
    setInnerText("seat-count", count);
    setInnerText("available-sheat", sheat);
    setInnerText("total-price", total);
    setInnerText("grand-total",grandTotal);

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
    
    singleTicket.setAttribute("disabled", "disabled");
    
   
  });
}

// document.getElementById('ticket').addEventListener('click', function (e) {
//   console.log(e);
// })
// common function 

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
