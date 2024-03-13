"use strict";

// let contries = document.querySelectorAll(".block__list_li");
// let blockList = document.querySelectorAll(".blcok__list");

// let pic = document.querySelector(".pic");

// let body = document.querySelector("body");

// contries.forEach((item, i) => {
//   item.addEventListener("mouseover", (e) => {
//     e.preventDefault();
//     console.log(item);
//   });

//   item.addEventListener("mouseout", () => {
//     let el = createBlock();
//     document.querySelector("");
//   });
// });

// function createBlock() {
//   let modalWindow = document.createElement("div");
//   modalWindow.innerHTML = "WindowModal";
//   modalWindow.style.cssText =
//     "width: 150px; height: 50px; color: #000; bacground: red; position: absolute; top: -45px; right: -153px; border: #000 solid 2px; padding: 15px; text-align: center; border-radius: 8px 8px 8px 0px; font-weight: bold; opacity: .7";
//   //   modalWindow.style.color = "red";
//   return modalWindow;
// }

const blackBlock = document.querySelector(".block__black");
const block__countries = document.querySelector(".block__countries");
const countries = document.querySelectorAll(".block__country");

function createBlock(index) {
  let modalWindow = document.createElement("div");

  if (index === 1) {
    modalWindow.style.cssText = "top: 320px; left: 1030px; z-index: 20;";
  } else if (index === 2) {
    modalWindow.innerHTML = "Catholicism";
    modalWindow.style.cssText = "top: 490px; left: 680px; z-index: 20;";
  } else if (index === 3) {
    modalWindow.style.cssText = "top: 680px; left: 530px; z-index: 20;";
  } else if (index === 4) {
    modalWindow.innerHTML = "Catholicism";
    modalWindow.style.cssText = "top: 620px; left: 830px; z-index: 20;";
  } else if (index === 5) {
    modalWindow.innerHTML = "Christian";
    modalWindow.style.cssText = "top: 200px; left: 550px; z-index: 20;";
  } else if (index === 6) {
    modalWindow.style.cssText = "top: 450px; left: 950px; z-index: 20;";
  } else if (index === 7) {
    modalWindow.style.cssText = "top: 500px; left: 920px; z-index: 20;";
  } else if (index === 8) {
    modalWindow.style.cssText = "top: 540px; left: 770px; z-index: 20;";
  } else if (index === 9) {
    modalWindow.style.cssText = "top: 380px; left: 1290px; z-index: 20;";
  } else if (index === 10) {
    modalWindow.style.cssText = "top: 475px; left: 1200px; z-index: 20;";
  }

  // switch (index) {
  //   case index === 1:
  //     modalWindow.style.cssText = "top: 380px; left: 1000px; z-index: 20;";
  //     break;
  //   case index === 2:
  //     modalWindow.style.cssText = "top: 490px; left: 680px; z-index: 20;";
  //     break;
  //   case index === 3:
  //     modalWindow.style.cssText = "top: 680px; left: 530px; z-index: 20;";
  //     break;
  //   case index === 4:
  //     modalWindow.style.cssText = "top: 620px; left: 830px; z-index: 20;";
  //     break;
  //   case index === 5:
  //     // modalWindow.style.cssText = "top: 490px; left: 680px; z-index: 20;";
  //     break;
  // }

  // countries.forEach((i, ind) => {
  //   if (ind === index) {
  //     i.style.cssText = "border: #000 solid 2px;";
  //   }
  // });
  // modalWindow.style.cssText =
  //   "width: 150px; height: 50px; color: #000; background-color: red; position: absolute; top: -45px; right: -153px; border: #000 solid 2px; padding: 15px; text-align: center; border-radius: 8px 8px 8px 0px; font-weight: bold; opacity: .7; z-index: 10;";
  modalWindow.classList.add("styleDiv");
  return modalWindow;
}
// let newBLock = createBlock();
// console.log(newBLock);

// let modalWindow = document.createElement("div");
// modalWindow.innerHTML = "WindowModal";
// // modalWindow.style.cssText =
// //   "width: 150px; height: 50px; color: #000; background-color: red; position: absolute; top: -45px; right: -153px; border: #000 solid 2px; padding: 15px; text-align: center; border-radius: 8px 8px 8px 0px; font-weight: bold; opacity: .7; z-index: 10;";
// modalWindow.style.cssText = "color: red;";

countries.forEach((item, index) => {
  // console.log(item);
  item.addEventListener("mouseover", () => {
    countries[index].insertAdjacentElement("beforebegin", createBlock(index));
    let exeptInd = index;
    // blackBlock.style.cssText = "display: block; opacity: 0.5;";
    // item.style.cssText = "position: relative; z-index: 30;";
    countries.forEach((j, ind) => {
      if (ind !== exeptInd) {
        j.style.cssText = "opacity: 0.3; transition: opacity 500ms;";
      }
    });
    // document.querySelector("body").style.cssText =
    //   "opacity: 0.3; position: relative;";
    // block__countries.style.cssText =
    //   "position: relative; opacity: 0.2; z-index: 1;";
  });
});

countries.forEach((item, index) => {
  item.addEventListener("mouseout", () => {
    document.querySelector(".styleDiv").remove();
    let exeptInd = index;
    countries.forEach((j, ind) => {
      if (ind !== exeptInd) {
        j.style.cssText = "opacity: 1;";
      }
    });
  });
});
