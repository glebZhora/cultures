"use strict";

const blackBlock = document.querySelector(".block__black");
const block__countries = document.querySelector(".block__countries");
const countries = document.querySelectorAll(".block__country");

const religions = document.querySelectorAll(".religions__religion");

function createBlock(index) {
  let modalWindow = document.createElement("div");

  if (index === 0) {
    // Germany
    modalWindow.innerHTML = `Christianity.`;
    modalWindow.style.cssText = "top: 330px; left: 830px; z-index: 20;";
  } else if (index === 1) {
    // Poland
    modalWindow.innerHTML = `Christianity. Stream Catholicism`;
    modalWindow.style.cssText = "top: 320px; left: 1030px; z-index: 20;";
  } else if (index === 2) {
    // Francy
    modalWindow.innerHTML = `Christianity. Catholicism 47%`;
    modalWindow.style.cssText = "top: 490px; left: 680px; z-index: 20;";
  } else if (index === 3) {
    // Spain
    modalWindow.innerHTML = "Christianity. Catholicism 55%";
    modalWindow.style.cssText = "top: 680px; left: 530px; z-index: 20;";
  } else if (index === 4) {
    modalWindow.innerHTML = "Catholicism";
    modalWindow.style.cssText = "top: 620px; left: 830px; z-index: 20;";
  } else if (index === 5) {
    // England
    modalWindow.innerHTML = "Christianity";
    modalWindow.style.cssText = "top: 200px; left: 550px; z-index: 20;";
  } else if (index === 6) {
    //czech republic
    modalWindow.innerHTML = "48% held none";
    modalWindow.style.cssText = "top: 450px; left: 950px; z-index: 20;";
  } else if (index === 7) {
    // austria
    modalWindow.innerHTML = "Christianity. Catholic 57%";
    modalWindow.style.cssText = "top: 500px; left: 920px; z-index: 20;";
  } else if (index === 8) {
    // switzerland
    modalWindow.innerHTML = "Christianity. Catholic 34.4%";
    modalWindow.style.cssText = "top: 540px; left: 770px; z-index: 20;";
  } else if (index === 9) {
    // ukraine
    modalWindow.innerHTML = "Christianity. Christian Orthodox";
    modalWindow.style.cssText = "top: 380px; left: 1290px; z-index: 20;";
  } else if (index === 10) {
    modalWindow.innerHTML = "Christianity. Christian Orthodox 88%";
    modalWindow.style.cssText = "top: 475px; left: 1200px; z-index: 20;";
  }

  modalWindow.classList.add("styleDiv");
  return modalWindow;
}

countries.forEach((item, index) => {
  // console.log(item);
  item.addEventListener("mouseover", () => {
    countries[index].insertAdjacentElement("beforebegin", createBlock(index));
    let exeptInd = index;

    countries.forEach((j, ind) => {
      if (ind !== exeptInd) {
        j.style.cssText = "opacity: 0.3; transition: opacity 500ms;";
      }
    });
  });
});

countries.forEach((item, index) => {
  item.addEventListener("mouseout", () => {
    document.querySelector(".styleDiv").remove();
    let exeptInd = index;
    // item.classList.remove("countryOpacity");

    countries.forEach((j, ind) => {
      if (ind !== exeptInd) {
        j.style.cssText = "opacity: 1;";
      }
    });
  });
});

// religions.forEach((item, index) => {
//   item.addEventListener("mouseover", () => {
//     let informationReligion = document.createElement("div");
//     informationReligion.style.cssText =
//       "display: flex; flex-direction: column; z-index: 25; width: 260px; min-height: 100px; align-items: center; position: absolute; top: -50px; left: 170px; border-radius: 20px; border: 2px solid #fff; padding: 20px; background: #222d2d;";
//     informationReligion.innerHTML =
//       "<div>Title</div><div>God</div><div>Amount of people</div>";

//     item.insertAdjacentElement("afterbegin", informationReligion);
//   });
// });
