const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1;
    btn.addEventListener("click", addSeat);
    //left seat

    const seatName = e.target.innerText;
    const seatCategory = "Economy";
    const price = 550;
    const selectedSeatName = document.getElementById("seat-selected-name");
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = seatCategory;
    const p3 = document.createElement("p");
    p3.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    selectedSeatName.appendChild(li);

    const totalBdt = document.getElementById("total-bdt").innerText;
    const convertedTotalCost = parseInt(totalBdt);
    const sum = convertedTotalCost + parseInt(price);

    //sum2

    const grandBdt = document.getElementById("grand-bdt").innerText;
    const convertedGrandTotalCost = parseInt(grandBdt);
    const sum2 = convertedGrandTotalCost + sum;
    setInnerText("total-bdt", sum);
    setInnerText("grand-bdt", sum2);

    /* totalBdt("total-bdt", parseInt(price));
    const totalBdt = document.getElementById("total-bdt").innerText;
    const convertedTotalCost = parseInt(totalBdt);
    const sum = convertedTotalCost + parseInt(price);

    const totalGrandBdt = document.getElementById("grand-bdt").innerText;
    const convertGrandTotal = parseInt(totalGrandBdt);
    const sum2 = convertGrandTotal + sum;

    totalBdt(sum);
 */
    //const totalBdt = document.getElementById("total-bdt").innerText;

    //const convertedGrandTotal = parseInt(totalBdt);
    //const sum2 = convertedGrandTotal + parseInt(price);

    //console.log(seatName);
    if (count <= 4) {
      setInnerText("seat-count", count);
      setInnerText("total-bdt", sum);
      setInnerText("grand-bdt", sum2);
    } else {
      alert("you select the 4 seat");
    }
  });
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
}
setBackgroundColorById(btn);

//
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// button color
function addSeat(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
}

/* function totalBdt(id, value) {
  const totalBdt = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalBdt);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText(id, sum);
} */

//coupon input
