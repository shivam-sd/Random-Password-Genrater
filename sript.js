// const upperSet = "ABCDEFGHIJKLMNOPQURSTWVXYZ";
// const lowerSet = "abcdefghijklmnopqurstwvxyz";
// const numberSet = "1234567890";
// const specialSet = "~!@#$%^&*()_+=|}{:;\}";

// let screenPassword = document.getElementById("pass-box");
// const totalLength = document.getElementById("total-length");
// const uppercase = document.getElementById("uppercase");
// const lowercase = document.getElementById("lowercase");
// const number = document.getElementById("number");
// const special = document.getElementById("special-case");
// let copyContent = document.getElementById("copy");


// const getRandomData = (dataset) => {
//     return dataset[Math.floor(Math.random() *dataset.length)];
// }
// // getRandomData();

// const genaratePassword = (password = "") => {
//   if(uppercase.checked){
//     password += getRandomData(upperSet);
//   }
//   if(lowercase.checked){
//     password += getRandomData(lowerSet);
//   }
//   if(number.checked){
//     password += getRandomData(numberSet);
//   }
//   if(special.checked){
//     password += getRandomData(specialSet);
//   }
//   if(password.length < totalLength.value){
//     return genaratePassword(password);
//   }
//   // console.log(turncateString(password,totalLength.value));
//   screenPassword.value = turncateString(password,totalLength.value);
// }
// // screenPassword.innerText = "Hello";
// // genaratePassword();

// const btn = document.querySelector("button");

// btn.addEventListener("click",() => {
//     // console.log("hello")
//     genaratePassword();
// })


// function turncateString(str,num){
//   if(str.length > num){
//     let substr = str.substring(0,num);
//     return substr;
//   }
//   else{
//     return str;
//   }
// }


// copyContent.addEventListener("click",() => {
//   navigator.clipboard.writeText(screenPassword.value);
//   copyContent.innerText = 'check';
//   copyContent.title = 'PassWord Copied';

//   setTimeout(() => {
//     copyContent.innerHTML = 'content_copy';
//     copyContent.title = '';
//   },2000)
//   // copyContent.innerText = "cheked";
//   // copyContent.textContent = "content copy";
// })



// I Try to write our code

const upperSet = "ABCDEFGHIJKLMNOPQURSTWVXYZ";
const lowerSet = "abcdefghijklmnopqurstwvxyz";
const numberSet = "1234567890";
const specialSet = "~!@#$%^&*()_+=|}{:;\}";

let screenPassword = document.getElementById("pass-box");
const totalLength = document.getElementById("total-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const special = document.getElementById("special-case");
let copyContent = document.getElementById("copy");

const GetRandomData = (dataset) => {
     return dataset[Math.floor(Math.random()*dataset.length)]
}
// GetRandomData();

const genaratePassword = (password = '') =>{
  if(uppercase.checked){
    password = password + GetRandomData(upperSet)
  }
  if(lowercase.checked){
    password = password + GetRandomData(lowerSet)
  }
  if(number.checked){
    password = password + GetRandomData(numberSet)
  }
  if(special.checked){
    password = password + GetRandomData(specialSet)
  }
  if(password.length < totalLength.value){
      return genaratePassword(password);
  }
  // console.log(turncasting(password,totalLength.value));
  screenPassword.value = turncasting(password,totalLength.value)
  // genaratePassword(password);
}

let btn = document.getElementById('button');

btn.addEventListener("click",() => {
  genaratePassword();
})

const turncasting = (str , num) => {
if(str.length > num){
  let substr = str.substring(0,num);
  return substr;
}
  else{
      return str;
  }
}

copyContent.addEventListener("click",() => {
  navigator.clipboard.writeText(screenPassword.value);
  copyContent.innerText = 'check';
  copyContent.title = 'PassWord Copied';

  setTimeout(() => {
    copyContent.innerHTML = 'content_copy';
    copyContent.title = '';
  },2000)
  // copyContent.innerText = "cheked";
  // copyContent.textContent = "content copy";
})
