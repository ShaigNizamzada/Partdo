// Lesson

// if - eger
// else - deyilse
// if else - eger deyils

// const a = 5 < 1;

// const b = 40 == "40";
// if (a) {
//   console.log("bu ifade duzdur");
// } else if (b) {
//   console.log("bu 40dir");
// } else {
//   console.log("bu ifade duz deyil");
// }

// const time = 13;

// if (time > 5 && time < 13) {
//   console.log("good morning");
//   if (time === 7) {
//     console.log("get up");
//   } else if (time === 9) {
//     console.log("yemeyini ye");
//   }
// } else if (time >= 13 && time <= 18) {
//   console.log("good afternoon");
// } else if (time > 19 && time <= 21) {
//   console.log("good evening");
// } else if (time > 22 && time <= 23) {
//   console.log("good night");
// } else {
//   console.log("wrong time");
// }

// let info = 5;
// switch (info) {
//   case 5:
//     info = 100;
//     console.log("this is 5");
//     if (info >= 20) {
//       console.log("this is evrika");
//     }
//     break;
//   case 10:
//     console.log("this is 10");
//     break;
//   default:
//     console.log("this is default");
//     break;
// }

// Homework

const productOne = ["bread", "water", "oil"];
const productTwo = ["onion", "milk", "egg"];
const productThree = ["meat", "cola", "fruits", "fish"];
const productFour = productOne + "," + productTwo;
const productFive = productTwo + "," + productThree;
const time = 4;
const price = time * 3;

if (price >= 10 && price <= 20) {
  console.log(productOne);
} else if (price > 20 && price <= 40) {
  console.log(productTwo);
} else if (price > 40 && price <= 70) {
  console.log(productThree);
} else if (price > 70 && price <= 120) {
  console.log(productFour);
} else if (price > 120) {
  console.log(productFive);
} else {
  console.log("You don't have 💵");
}

switch (price) {
  case 12:
    console.log(productOne);
    break;
  default:
    break;
}
