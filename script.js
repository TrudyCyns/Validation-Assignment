// Initialisations
let fullName = document.new_vendor.fullname;
let nameField = document.querySelector("#name_field");
let stallField = document.querySelector("#stall_field");
let goodsField = document.querySelector("#goods_field");
let rentField = document.querySelector("#mont_rent");

// Create Element
let errDiv = document.createElement("p");

// Style Element
errDiv.style.color = "red";
errDiv.style.fontSize = "13px";

// Focusing on first field.
const firstFocus = () => {
  fullName.focus();
  return true;
};

// Validating Full Name field.
const nameVal = (min, max) => {
  let fNameLen = fullName.value.length;
  if (fNameLen < min || fNameLen >= max) {
    fullName.focus();
    fullName.style.border = "2px solid red";
    errDiv.textContent = `Name must be less than ${max} characters but more than ${min} characters.`;
    nameField.appendChild(errDiv);
    let letters = /^[A-Za-z]+$/;
    if (fullName.value.match(letters)) {
      return true;
    } else {
      errDiv.textContent = `Name must not contain numbers`;
      errDiv.style.color = "red";
      errDiv.style.fontSize = "12px";
      nameField = document.querySelector("#name_field");
      nameField.appendChild(errDiv);
      return false;
    }
  }
};

// Validating Stall Number field.
const stVal = () => {
  console.log("In stVal");
  let stall = document.new_vendor.stall_num;
  console.log(stall);
  let xters = /^[A-Z0-9]+$/;
  let staLen = stall.value.length;
  console.log(staLen);
  if (staLen > 2 && stall.value.match(xters)) {
    console.log("true");
    return true;
  } else {
    stall.style.border = "2px solid red";
    stall.focus();
    errDiv.textContent = `Stall Number must be in the format A01, with more that 2 characters.`;
    stallField.appendChild(errDiv);
    return false;
  }
};

// Validating Types of Goods field.
const gdVal = () => {
  let gds = document.new_vendor.goods;
  if (gds.value == "default") {
    gds.focus();
    gds.style.border = "2px red solid";
    errDiv.textContent = 'You must choose an option.';
    goodsField.appendChild(errDiv);
    return false;
  }
  return true;
};

// Validating Monthly Rent Field.
const mRent = () => {
  let monRent = document.new_vendor.mon_rent;
  let rent = /^[0-9]+$/;
  let rentLen = monRent.value.length;
  if (monRent.value.match(rent) && rentLen >= 3) {
    return true;
  } else {
    monRent.style.border = "2px red solid";
    monRent.focus();
    errDiv.textContent = "Monthly Rent should be numeric, with more than 3 digits.";
    rentField.appendChild(errDiv);
    return false;
  }
};