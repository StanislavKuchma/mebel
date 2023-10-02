// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqDXuThzf885gOXx7v66oUW78_LZjYbdY",
  authDomain: "mebel-c491b.firebaseapp.com",
  databaseURL: "https://mebel-c491b-default-rtdb.firebaseio.com",
  projectId: "mebel-c491b",
  storageBucket: "mebel-c491b.appspot.com",
  messagingSenderId: "177869573732",
  appId: "1:177869573732:web:f83f756a3ea45df23cd971",
};

const app = initializeApp(firebaseConfig);
import {
  getDatabase,
  set,
  ref,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
const db = getDatabase();
const galleryItems = [
  {
    preview: "./foto/foto47.webp",
    original: "./foto/foto47.webp",
    description: "Кухня шпон+мдф фарба",
  },
  {
    preview: "./foto/foto48.webp",
    original: "./foto/foto48.webp",
    description: "Кухня шпон+мдф фарба",
  },
  {
    preview: "./foto/foto49.webp",
    original: "./foto/foto49.webp",
    description: "Кухня шпон+мдф фарба",
  },
  {
    preview: "./foto/foto15.webp",
    original: "./foto/foto15.webp",
    description: "Кухня МДФ фарба та шпон",
  },
  {
    preview: "./foto/foto2.webp",
    original: "./foto/foto2.webp",
    description: "Кухня акрил",
  },
  {
    preview: "./foto/foto3.webp",
    original: "./foto/foto3.webp",
    description: "Кухня Мдф фарба та ДСП еггер",
  },
  // {
  //   preview: "./foto/foto4.webp",
  //   original: "./foto/foto4.webp",
  //   description: "",
  // },
  {
    preview: "./foto/foto5.webp",
    original: "./foto/foto5.webp",
    description: "Ванна кымната МДФ фарба",
  },
  {
    preview: "./foto/foto6.webp",
    original: "./foto/foto6.webp",
    description: "Кухня шпон",
  },
  {
    preview: "./foto/foto7.webp",
    original: "./foto/foto7.webp",
    description: "Кухня шпон",
  },
  {
    preview: "./foto/foto8.webp",
    original: "./foto/foto8.webp",
    description: "Кухня шпон",
  },
  {
    preview: "./foto/foto9.webp",
    original: "./foto/foto9.webp",
    description: "Шкаф купе скло графіт",
  },
  {
    preview: "./foto/foto10.webp",
    original: "./foto/foto10.webp",
    description: "Кухня фасад ДСП",
  },
  {
    preview: "./foto/foto11.webp",
    original: "./foto/foto11.webp",
    description: "Кухня Мдф фарба та ДСП еггер",
  },
  {
    preview: "./foto/foto12.webp",
    original: "./foto/foto12.webp",
    description: "Кухня Мдф фарба та ДСП еггер",
  },
];
const admin = document.querySelector(`div[class="img__wrapper"]`);

// -------------------------references-------------------------//
let namebox = document.getElementById("namebox");
let rollbox = document.getElementById("rollbox");
let secbox = document.getElementById("secbox");
let genbox = document.getElementById("genbox");

let insBtn = document.getElementById("insBtn");
let selBtn = document.getElementById("selBtn");
let updateBtn = document.getElementById("updateBtn");
let delBtn = document.getElementById("delBtn");

// -----------------------insert-----------------------------------//
function InsertData() {
  // console.log(namebox.value)
  // console.log(rollbox.value)
  // console.log(secbox.value)
  // console.log(genbox.value)
  set(ref(db, "mebel/" + rollbox.value), {
    preview: namebox.value,
    RollNo: rollbox.value,
    original: secbox.value,
    description: genbox.value,
  })
    .then(() => {
      alert("DATA SUCSESS");
    })
    .catch((error) => {
      alert("ERROR" + error);
    });
}
// =================selectALL ==============================//
function SelectAllData() {
  const dbref = ref(db);

  // let gallery = [];
  get(child(dbref, "mebel"))
    .then((snapshot) => {
      // snapshot.forEach((element) => {
      //   gallery.push(element.val());
      // });
      const data = snapshot.val();
      console.log(data);
      // let currentGallery = [];
      // currentGallery = gallery;

      admin.insertAdjacentHTML(`beforeend`, createImageItem111(data));
      // createImageItem111(gallery);

      // return gallery;
    })
    .catch((error) => {
      alert("UNSUCSSES, error " + error);
    });

  // return gallery;
}
SelectAllData();

// const imageMarkup = createImageItem111(item);
// admin.insertAdjacentHTML(`beforeend`, imageMarkup);
//return gallery;
// window.onload = SelectAllData;

// console.log(gall);
// const imageMarkup = createImageItem111(galleryItems);

// console.log(imageMarkup);

// =================select ==============================//
function SelectData() {
  const dbref = ref(db);

  get(child(dbref, "mebel/" + rollbox.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        namebox.value = snapshot.val().NameOfStudent;
        secbox.value = snapshot.val().Section;
        genbox.value = snapshot.val().Gender;
      } else {
        alert("NO DATA");
      }
    })
    .catch((error) => {
      alert("UNSUCSSES, error " + error);
    });
}
// ================= update ===================================//
function UpdateData() {
  update(ref(db, "mebel/" + rollbox.value), {
    preview: namebox.value,
    original: secbox.value,
    description: genbox.value,
  })
    .then(() => {
      alert("UPDATE SUCSESS");
    })
    .catch((error) => {
      alert("UNSUCSSES, error " + error);
    });
}
// ================= DELETE ===================================//
function DeleteData() {
  remove(ref(db, "mebel/" + rollbox.value))
    .then(() => {
      alert("DATA DELETE SUCSESS");
    })
    .catch((error) => {
      alert("UNSUCSSES, error " + error);
    });
}
// -------------------onButton----------------------------------//
insBtn.addEventListener("click", InsertData);
selBtn.addEventListener("click", SelectData);
updateBtn.addEventListener("click", UpdateData);
delBtn.addEventListener("click", DeleteData);
// bbbbbbbbbbbbbbbbbbbbbbbbbbbbb end firebase
// export { gallery };
function createImageItem111(item) {
  console.log(item);
  return item
    .map(({ preview, RollNo, original, description }) => {
      return `
      <div class="img_wrapper">
      <img   src="${preview}" alt="${description}"/>
      <label>Номер</label><input id="rollbox" type="text" value=${RollNo}><br>
      <label>Опис</label><input id="secbox" type="text" value =${description}><br>
      <button id="change">Click me</button>
      </div>
   `;
    })
    .join(``);
}

//================================img===========================//
// const imageOut = document.querySelector(".image-out");
// const heroName = document.querySelector(".hero-name");
// const heroMovie = document.querySelector(".hero-movie");
// const heroUniv = document.querySelector(".hero-univ");

// for (let key in images) {
//   let img = document.createElement("img");
//   img.setAttribute("data-key", key);
//   img.src = "images/" + key + ".png";
//   imageOut.append(img);
// }

// imageOut.addEventListener("click", showInfo);

// function showInfo(event) {
//   // console.dir(event.target);
//   const key = event.target.dataset["key"];
//   console.log(key);
//   if (key === undefined) {
//     return true;
//   }
//   heroName.textContent = images[key]["name"];
//   heroMovie.textContent = images[key]["movie"];
//   heroUniv.textContent = images[key]["universe"];

//   document.querySelectorAll(".image-out img").forEach((item) => {
//     item.classList.remove("active");
//   });

//   event.target.classList.add("active");
// }
