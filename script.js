// Initialising...
let fstName = document.newvendor.firstname;
let fNameField = document.querySelector("#fname_field");
let lNameField = document.querySelector("#lname_field");
let stallField = document.querySelector("#stall_field");
let telNoField = document.querySelector("#telnofield");
let dateField = document.querySelector("#datefield");
let goodsField = document.querySelector("#goods_field");
let rentField = document.querySelector("#mont_rent");
let infoField = document.querySelector("#moreinfo");

// Regexp
let letters = /^[A-Za-z]+$/;
let rent = /^[0-9]+$/;
let alpnum = /^[0-9a-zA-Z.,]+$/;

// Create Element
let errDiv = document.createElement("p");

// Style Element
errDiv.style.color = "red";
errDiv.style.fontSize = "13px";
const bdrStyle = "2px solid red";

// Focusing on first field.
const firstFocus = () => {
  fstName.focus();
  return true;
};

// Validating First Name field.
const fNameVal = (min, max) => {
  let fNameLen = fstName.value.length;
  
  if (fNameLen == 0) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errDiv.textContent = "Field must not be left empty.";
    fNameField.appendChild(errDiv);
  } else if (fNameLen < min || fNameLen > max) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be between ${min} and ${max} characters.`;
    fNameField.appendChild(errDiv);
  } else if (!fstName.value.match(letters)) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of strictly alphabet characters.`;
    fNameField.appendChild(errDiv);
  }
  return false;
};

// Validating Last Name field.
const lNameVal = (min, max) => {
  let lstName = document.newvendor.lastname;
  let lNameLen = fstName.value.length;
  let letters = /^[A-Za-z]+$/;

  if (lNameLen == 0) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errDiv.textContent = "Field must not be left empty.";
    lNameField.appendChild(errDiv);
  } else if (lNameLen < min || lNameLen > max) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be between ${min} and ${max} characters.`;
    lNameField.appendChild(errDiv);
  } else if (!lstName.value.match(letters)) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of strictly alphabet characters.`;
    lNameField.appendChild(errDiv);
  }
  return false;
};

// Validating Stall Number field.
const stVal = () => {
  let stall = document.newvendor.stallnum;
  let num = /^[A-Z0-9]+$/;
  let staLen = stall.value.length;

  if (staLen > 2 && stall.value.match(num)) {
    return true;
  } else {
    stall.style.border = bdrStyle;
    stall.focus();
    errDiv.textContent = "Format: A01, More than 2 characters";
    stallField.appendChild(errDiv);
    return false;
  }
};

// Validating Telephone Number field.
const telNoVal = () => {
  let tel = document.newvendor.telnum;
  let num = /^[0-9]+$/;
  let teLen = tel.value.length;

  if (teLen == 10 && tel.value.match(num)) {
    return true;
  } else {
    tel.style.border = bdrStyle;
    tel.focus();
    errDiv.textContent = `Tel. No. must be 10 numbers.`;
    telNoField.appendChild(errDiv);
    return false;
  }
};

// Validating Types of Goods field.
const gdVal = () => {
  let gds = document.newvendor.goods;
  if (gds.value == "default") {
    gds.focus();
    gds.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    goodsField.appendChild(errDiv);
    return false;
  }
  return true;
};

// Validating Monthly Rent Field.
const mRent = () => {
  let monRent = document.newvendor.mon_rent;
  let rentLen = monRent.value.length;

  if (monRent.value.match(rent) && rentLen >= 3) {
    return true;
  } else {
    monRent.style.border = bdrStyle;
    monRent.focus();
    errDiv.textContent = "Rent should have 3 or more numbers.";
    rentField.appendChild(errDiv);
    return false;
  }
};

// Validating Additional Business Information Field.
const infoVal = () => {
  let bizInfo = document.newvendor.bizinfo
  
  if (bizInfo.value.match(alpnum)) {
    return true;
  } else {
    bizInfo.style.border = bdrStyle;
    bizInfo.focus()
    errDiv.textContent = 'Only numbers and letters allowed.'
    infoField.appendChild(errDiv)
  }
}
