// import { galleryItems } from "./gallery-items.js";

// import { gallery } from "./firebase.js";

// Change code below this line
// const admin = document.querySelector(`div[class="img__wrapper"]`);
// console.log(gallery.length);

// const imageMarkup = createImageItem111(galleryItems);
// // console.log(imageMarkup);

// admin.insertAdjacentHTML(`beforeend`, imageMarkup);

// import d from "./downloads";
// console.dir(gallery);

// let wrapper = document.querySelector(".img__wrapper");
// let arrayImage = [];

// function donwload(input) {
//   let file = input.files[0];
//   let reader = new FileReader();

//   reader.readAsDataURL(file);

//   reader.onload = function () {
//     let img = document.createElement("img");
//     wrapper.appendChild(img);
//     img.src = reader.result;
//     arrayImage.push(img.src);
//     console.log(arrayImage);
//   };
// }
// console.log(gallery[0].preview);

// =============================================//
let wrapper = document.querySelector(".img__wrapper");

function donwload(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    let img = document.createElement("img");
    wrapper.appendChild(img);
    img.src = reader.result;
  };
}
