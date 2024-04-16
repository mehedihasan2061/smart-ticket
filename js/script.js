const items = document.getElementsByClassName("selectSheat");
// console.log(items);
let count = 0;
let sheat = 40;
let grandTotal = 0;
let counting = 0;
// let unique = [];

for (const item of items) {
  item.addEventListener("click", function (e) {
    const singleTicket = (e.target);

    
   
    // if (unique.includes(item) === false) {
    //   unique.push(item)
    //   return unique;
    // }
    
    //  discountItem("input-value");
    counting = counting + 1;
    // console.log(counting);
    const btn = document.getElementById("apply-btn")
    // const inputField = document.getElementById("input-value").value;
    // console.log(inputField);
    if (counting === 4) {
      btn.removeAttribute("disabled");
      singleTicket.setAttribute("disabled",true)
      // const inputValue = document.getElementById('input-value').value;
      // console.log(inputValue);
      // if (btn) {
        
      // }
      
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
      // console.log(selectedTicket);
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

      // singleTicket.setAttribute("disabled:bg-green-500");
      singleTicket.setAttribute("disabled", "disabled");
      singleTicket.setAttribute(
        "class",
        "bg-green-500 p-3 text-center text-white rounded-xl cursor-pointer"
      );
      //  btn.setAttribute("disabled", true);
    }







  
    
   
    
  });
  
  const ticket = (item.innerText);
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
//  function discountItem (id,value) {
//   const inputField = document.getElementById(id).value;
  
//   console.log(inputField);
  
// }
 document.getElementById("apply-btn").addEventListener("click", function discountItem (id) {
  const inputField = document.getElementById("input-value").value;
  console.log(inputField)
  setInnerText("total-price", total);
  // setInnerText("grand-total", grandTotal);
  if (inputField === "NEW15") {
    const discountPrice = (total * 15) / 100;
    // console.log(discountPrice);
    const grand=document.getElementById('grand-total')
    const grandTotal = total - discountPrice;
   grand.innerText=grandTotal

    inputField.value = "";


    const discountTicket = document.getElementById("discount");
    console.log(discountTicket);
    const ol = document.createElement('ol')
    ol.setAttribute("class", "flex justify-between");
    const p1 = document.createElement('p')
    p1.setAttribute("class", "font-bold");
    p1.innerText = "Discount Price"
    
    const p2 = document.createElement('p')
    p2.setAttribute('class','font-bold')
    p2.innerText = discountPrice;
    ol.appendChild(p1)
    ol.appendChild(p2)
    discountTicket.appendChild(ol);
   




  
    
  }
  if (inputField === "Couple20") {
    const discountPrice = (total * 20) / 100;
    // console.log(discountPrice);
    const grand = document.getElementById("grand-total");
    const grandTotal = total - discountPrice;
    grand.innerText = grandTotal;

    inputField.value = " ";

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





  else {
    const input = document.getElementById("input-area");
    input.removeAttribute('input-area')
    
  }
})

// document.getElementById('ticket').addEventListener('click', function (e) {
//   console.log(e);
// })
// common function

// document.getElementById("phoneNumber").addEventListener('keyup', function (e) {
//   const phoneNumberField = (e.target.value);
//   if (item && phoneNumberField) {
//     const nextBtn = document.getElementById("nextBtn");
//     nextBtn.removeAttribute("disabled")
//   }
// });

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
