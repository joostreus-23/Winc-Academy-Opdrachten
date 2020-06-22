// const gebuikernaam = document.getElementById("gebruikernaam").value;
// const email = document.getElementById("email").value;
// const wachtwoord = document.getElementById("wachtwoord").value;
// const bevestigWachtwoord = document.getElementById("wachtwoord2").value;"registerbutton"
const registerButton = document.getElementById("registerbutton");

let minLengteGebruikernaam = 3;
let minLengteWachtwoord = 6;

const checkGebuikernaam = (naam) => {
  const antwoord = naam.length > minLengteGebruikernaam ? true : false;
  antwoord
    ? (gebruikerfout.style.visibility = "hidden")
    : (gebruikerfout.style.visibility = "visible");
  return antwoord;
};

// console.log(checkGebuikernaam("inda"));

const checkEmail = (email) => {
  const antwoord = email.includes("@") && email.includes(".") ? true : false;
  antwoord
    ? (emailfout.style.visibility = "hidden")
    : (emailfout.style.visibility = "visible");
  return antwoord;
};

// console.log(checkEmail("sddfvih@hiun.nl"));

const checkWachtwoord = (wachtwoord) => {
  const antwoord = wachtwoord.length >= minLengteWachtwoord ? true : false;
  antwoord
    ? (wachtwoordfout.style.visibility = "hidden")
    : (wachtwoordfout.style.visibility = "visible");
  return antwoord;
};

const checkBevestigWachtwoord = (wachtwoord, bevestigWachtwoord) => {
  const antwoord = wachtwoord === bevestigWachtwoord ? true : false;
  antwoord
    ? (wachtwoord2fout.style.visibility = "hidden")
    : (wachtwoord2fout.style.visibility = "visible");
  return antwoord;
};

registerButton.addEventListener("click", (event) => {
  console.log(event.target);

  const gebuikernaam = document.getElementById("gebuikernaam").value;
  const email = document.getElementById("email").value;
  const wachtwoord = document.getElementById("wachtwoord").value;
  const bevestigWachtwoord = document.getElementById("wachtwoord2").value;
  checkGebuikernaam(gebuikernaam);
  checkEmail(email);
  checkWachtwoord(wachtwoord);
  checkBevestigWachtwoord(wachtwoord, bevestigWachtwoord);
});
