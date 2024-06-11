// Minecraft Fishing Start Code

// HTML Variables - Elements
let char_select = document.getElementById("character-select");
let steve_img_el = document.getElementById("steve-img");
let alex_img_el = document.getElementById("alex-img");
let villager_img_el = document.getElementById("villager-img");
let fish_btn_el = document.getElementById("fish-btn");
let img_result_el = document.getElementById("result-img");

// HTML Variables - Fishes
let num_cod_el = document.getElementById("num-cod");
let num_salmon_el = document.getElementById("num-salmon");
let num_tropical_el = document.getElementById("num-tropical");
let num_puffer_el = document.getElementById("num-puffer");

// HTML Variables - Btn
let plus5_btn = document.getElementById("plus5");
let until200_btn = document.getElementById("until200");
let user_choice_in = document.getElementById("user_choice");
let inventory = document.getElementById("inv");
let sort_fish_btn = document.getElementById("sort_fish");

// Global Variables
let character = "Steve";
let num_cod = 0;
let num_salmon = 0;
let num_tropical = 0;
let num_puffer = 0;

// Event Listeners
char_select.addEventListener("change", setFisherman);
fish_btn_el.addEventListener("click", fishOnce);
plus5_btn.addEventListener("click", plus5);
until200_btn.addEventListener("click", until200);
user_choice_in.addEventListener("change", user_choice);
sort_fish_btn.addEventListener("click", sort_fish);

function setFisherman() {
  console.log(char_select.value);
}

function setFisherman() {
  if (char_select.value == "alex") {
    // sets the current fisherman variable
    character = "Alex";

    // update red border on images
    steve_img_el.classList.remove("active");
    alex_img_el.classList.add("active");
    villager_img_el.classList.remove("active");
  } else if (char_select.value == "steve") {
    // sets the current fisherman variable
    character = "Steve";

    // update red border on images
    steve_img_el.classList.add("active");
    alex_img_el.classList.remove("active");
    villager_img_el.classList.remove("active");
  } else if (char_select.value == "villager") {
    // sets the current fisherman variable
    character = "Villager";

    // update red border on images
    steve_img_el.classList.remove("active");
    alex_img_el.classList.remove("active");
    villager_img_el.classList.add("active");
  }
}

function fishOnce() {
  // Test current character
  if (character === "Steve") {
    // Use Steve Probablility Distribution for Fishing
    let rand_num1 = (Math.random() * 100).toFixed(2);
    let rand_num2 = (Math.random() * 100).toFixed(2);

    if (rand_num2 < 90) {
      if (rand_num1 < 70) {
        num_cod++;
        img_result_el.src = "img/Raw-Cod.png";
        inventory.innerHTML += `<img id="cod_img" src="img/Raw-Cod.png"/>`;
        num_cod_el.innerHTML = num_cod;
      } else if (rand_num1 < 90) {
        num_salmon++;
        img_result_el.src = "img/Raw-Salmon.png";
        inventory.innerHTML += `<img id="salmon_img" src="img/Raw-Salmon.png"/>`;
        num_salmon_el.innerHTML = num_salmon;
      } else if (rand_num1 < 95) {
        num_tropical++;
        img_result_el.src = "img/Tropical-Fish.png";
        inventory.innerHTML += `<img id="tropfish_img" src="img/Tropical-Fish.png"/>`;
        num_tropical_el.innerHTML = num_tropical;
      } else {
        num_puffer++;
        img_result_el.src = "img/Pufferfish.png";
        inventory.innerHTML += `<img id="pufferfish_img" src="img/Pufferfish.png"/>`;
        num_puffer_el.innerHTML = num_puffer;
      }
    }
  } else if (character === "Alex") {
    // Use Alex Probablility Distribution for Fishing
    let rand_num1 = (Math.random() * 100).toFixed(2);
    let rand_num2 = (Math.random() * 100).toFixed(2);

    if (rand_num2 < 80) {
      if (rand_num1 < 10) {
        num_cod++;
        img_result_el.src = "img/Raw-Cod.png";
        inventory.innerHTML += `<img id="cod_img" src="img/Raw-Cod.png"/>`;
        num_cod_el.innerHTML = num_cod;
      } else if (rand_num1 < 20) {
        num_salmon++;
        img_result_el.src = "img/Raw-Salmon.png";
        inventory.innerHTML += `<img id="salmon_img" src="img/Raw-Salmon.png"/>`;
        num_salmon_el.innerHTML = num_salmon;
      } else if (rand_num1 < 50) {
        num_tropical++;
        img_result_el.src = "img/Tropical-Fish.png";
        inventory.innerHTML += `<img id="tropfish_img" src="img/Tropical-Fish.png"/>`;
        num_tropical_el.innerHTML = num_tropical;
      } else {
        num_puffer++;
        img_result_el.src = "img/Pufferfish.png";
        inventory.innerHTML += `<img id="pufferfish_img" src="img/Pufferfish.png"/>`;
        num_puffer_el.innerHTML = num_puffer;
      }
    }
  } else {
    // Use Villager Probablility Distribution for Fishing
    let rand_num1 = (Math.random() * 100).toFixed(2);
    let rand_num2 = (Math.random() * 100).toFixed(2);

    if (rand_num2 < 75) {
      if (rand_num1 < 40) {
        num_cod++;
        img_result_el.src = "img/Raw-Cod.png";
        inventory.innerHTML += `<img id="cod_img" src="img/Raw-Cod.png"/>`;
        num_cod_el.innerHTML = num_cod;
      } else if (rand_num1 < 60) {
        num_salmon++;
        img_result_el.src = "img/Raw-Salmon.png";
        inventory.innerHTML += `<img id="salmon_img" src="img/Raw-Salmon.png"/>`;
        num_salmon_el.innerHTML = num_salmon;
      } else if (rand_num1 < 90) {
        num_tropical++;
        img_result_el.src = "img/Tropical-Fish.png";
        inventory.innerHTML += `<img id="tropfish_img" src="img/Tropical-Fish.png"/>`;
        num_tropical_el.innerHTML = num_tropical;
      } else {
        num_puffer++;
        img_result_el.src = "img/Pufferfish.png";
        inventory.innerHTML += `<img id="pufferfish_img" src="img/Pufferfish.png"/>`;
        num_puffer_el.innerHTML = num_puffer;
      }
    }
  }
}

// Fishes 5 times
function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishOnce();
  }
}

// Fishes until the user gets 200 cod
function until200() {
  let cod_target = num_cod + 200;
  let count = 0;
  while (num_cod < cod_target) {
    fishOnce();
    count++;
  }
}

// Fishes until it fishes the amount of times the user inputed
function user_choice() {
  user_choice_in = document.getElementById("user_choice").value;
  for (let x = 1; x <= user_choice_in; x++) {
    fishOnce();
  }
}

// Groups the types of fish together
function sort_fish() {
  inventory.innerHTML = ``;
  for (let num = 0; num < num_cod; num++) {
    inventory.innerHTML += `<img id="cod_img" src="img/Raw-Cod.png"/>`;
  }
  for (let num = 0; num < num_salmon; num++) {
    inventory.innerHTML += `<img id="salmon_img" src="img/Raw-Salmon.png"/>`;
  }
  for (let num = 0; num < num_tropical; num++) {
    inventory.innerHTML += `<img id="tropfish_img" src="img/Tropical-Fish.png"/>`;
  }
  for (let num = 0; num < num_puffer; num++) {
    inventory.innerHTML += `<img id="pufferfish_img" src="img/Pufferfish.png"/>`;
  }
}
