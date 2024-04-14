const items = document.getElementsByClassName("selectSheat");
// console.log(items);
let count = 0;
let sheat = 40;
for (const item of items) {
  item.addEventListener("click", function () {
    item.setAttribute(
      "class",
      "bg-green-500 text-white p-4 font-bold text-center rounded-xl"
    );
    count = count + 1;
    sheat = sheat - 1;
    total = 550 * count;
    setInnerText("seat-count", count);
    setInnerText("available-sheat", sheat);
    setInnerText("total-price", total);
     
      const selectedTicket = document.getElementById("selected-ticket");
      const ol = document.createElement('ol');
      ol.setAttribute('class','flex justify-between')
      const p1 = document.createElement('p');
      const p1Text = item.innerText;
      p1.innerText = p1Text;
    
      const p2 = document.createElement('p');
      p2.innerText = "Economoy"
   
      const fare = document.getElementById('fare').innerText;
      const p3 = document.createElement('p');
      p3.innerText = fare;
       
      ol.appendChild(p1)
      ol.appendChild(p2)
      ol.appendChild(p3)
    
      selectedTicket.appendChild(ol)
      
     

  });
}



function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
