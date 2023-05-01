let outputEl = document.getElementById("output");
let outEl = document.getElementById("out");
let putEl = document.getElementById("put");
let otptEl = document.getElementById("otpt");
let answer = document.getElementById("points");
let ans = document.getElementById("season");
let solution = document.getElementById("teams");
let sol = document.getElementById("stanley");

document.getElementById("button").addEventListener("click", checkInput);

function checkInput() {
  let points = document.getElementById("points").value.toLowerCase();
  let season = document.getElementById("season").value.toLowerCase();
  let teams = document.getElementById("teams").value.toLowerCase();
  let stanley = document.getElementById("stanley").value.toLowerCase();

  if (
    points === "wayne gretzky" ||
    points === "gretzky" ||
    points === "great one"
  ) {
    value1 = 1;
    outputEl.innerHTML = `Correct`;
    answer.className = "green";
  } else {
    value1 = 0;
    outputEl.innerHTML = `Incorrect`;
    answer.className = "bred";
  }

  if (season === "215") {
    value2 = 1;
    outEl.innerHTML = `Correct`;
    ans.className = "green";
  } else {
    value2 = 0;
    outEl.innerHTML = `Incorrect`;
    ans.className = "bred";
  }

  if (teams === "32") {
    value3 = 1;
    putEl.innerHTML = `Correct`;
    solution.className = "green";
  } else {
    value3 = -0;
    putEl.innerHTML = `Incorrect`;
    solution.className = "bred";
  }

  if (
    stanley === "montreal canadiens" ||
    stanley === "canadiens" ||
    stanley === "montreal" ||
    stanley === "habs"
  ) {
    value4 = 1;
    otptEl.innerHTML = `Correct`;
    sol.className = "green";
  } else {
    value4 = 0;
    otptEl.innerHTML = `Incorrect`;
    sol.className = "bred";
  }

  let marks = value1 + value2 + value3 + value4;
  let score = ((value1 + value2 + value3 + value4) * 100) / 4;
  if (marks === 0) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%)`;
  } else if (marks === 1) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%)`;
  } else if (marks === 2) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%)`;
  } else if (marks === 3) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%)`;
  } else if (marks === 4) {
    document.getElementById("marks").innerHTML = `${marks}/4 (${score}%)`;
  }
}
