// div.insertAdjacentHTML("afterend", "<p>Пока</p>");

// array1.forEach((element) => console.log(element));

function getImages(n) {
  for (var image, array = [], i = 1; i <= n; i++) {
    image = new Image();

    image.src = "foto/foto" + i + ".webp";
    // console.log(image.src);

    array.push(image.src);
  }

  return array;
}

const a = getImages(46);

// console.log(a);

// dla kartinok
// let wrapper = document.querySelector(".img__wrapper");

// function donwload(input) {
//   let file = input.files[0];
//   let reader = new FileReader();
//   reader.readAsDataURL(file);

//   reader.onload = function () {
//     let img = document.createElement("img");
//     wrapper.appendChild(img);
//     img.src = reader.result;
//   };
// }

// 1 переделиваем масив в масив адресов
// 2
// var names = ['1.jpg', 'cat.jpg', 'hren.jpg', 'dog.gif', 'elefant.png', '987.jpg']; // массив адресов/имён файлов изображений

// var arrayImage = []; // определяете искомый массив объектов изображений
// for var j = 0, J = names.length; j < J; j++)
//    {
//    arrayImage [j] = new Image ();
//    arrayImage [j].src = names [j];
//    }
