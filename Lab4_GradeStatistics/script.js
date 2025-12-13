const submitBtn = document.getElementById("submitBtn");
const tableBody = document.querySelector("tbody");

submitBtn.addEventListener("click", function () {
const math = Number(document.getElementById("math").value);
const english = Number(document.getElementById("english").value);

if (isNaN(math) || isNaN(english)) return;

const avg = ((math + english) / 2).toFixed(2);

const row = document.createElement("tr");
row.innerHTML = `<td>${math}</td><td>${english}</td><td>${avg}</td>`;
tableBody.appendChild(row);

updateColumnAverages();
});

function updateColumnAverages() {
const rows = tableBody.querySelectorAll("tr");
let mathSum = 0, engSum = 0;

rows.forEach(row => {
mathSum += Number(row.children[0].innerText);
engSum += Number(row.children[1].innerText);
});

const count = rows.length;
const mathAvg = (mathSum / count).toFixed(2);
const engAvg = (engSum / count).toFixed(2);
const overallAvg = ((mathSum + engSum) / (count * 2)).toFixed(2);

document.getElementById("mathAvg").innerText = mathAvg;
document.getElementById("engAvg").innerText = engAvg;
document.getElementById("overallAvg").innerText = overallAvg;
}