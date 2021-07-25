//JSON given
const userData = [
  { fname: "esme", lname: "sanchez", id: 1892038, isTherapist: true },

  { fname: "rick", lname: "jeps", id: 1894024, isTherapist: false },

  { fname: "angie", lname: "lange", id: 1982403, isTherapist: false },

  { fname: "renat", lname: "gros", id: 1894039, isTherapist: true },

  { fname: "bettino", lname: "yang", id: 3789204, isTherapist: true },
];

// start of code
//List each user, last name first, with each name capped
function firstName(fname) {
  return fname[0].toUpperCase() + fname.slice(1);
}
function lastName(lname) {
  return lname[0].toUpperCase() + lname.slice(1);
}
//display first and last name
function userFigure(users) {
  return `
  <div id="name">
  <div class="names">${lastName(users.lname)},${firstName(users.fname)}</div>
  </div>
    `;
}

document.getElementById("app").innerHTML = `
<h1 class="title">Users (${userData.length} results)</h1>
${userData.map(userFigure).join("")}
`;
