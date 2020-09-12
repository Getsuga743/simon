let $start = document.querySelector("#start");
const simon = document.querySelectorAll(".simon");
const main = document.querySelector(".main");
const btns = [1, 2, 3, 4];
const $turn = document.querySelector(".turn");
let jugadas = [];
let patron = [];
let lvl = 0;
$start.value = false;

$start.addEventListener("click", (e) => {
  if (e.target.value != true) {
    document.querySelector(".turn").textContent = lvl;
    e.target.value = true;
    proxima();
  }
});

main.addEventListener("click", (e) => {
  let btnElegido;
  if (e.target.value != undefined) {
    btnElegido = e.target.value;
  }
  jugadas.push(btnElegido);
  checkAnswer(jugadas.length - 1);
});

function proxima() {
  jugadas = [];
  lvl++;

  $turn.textContent = `Turn: ${lvl}`;
  let numRandom = Math.floor(Math.random() * 4);
  let btnRandom = btns[numRandom - 1];
  patron.push(btnRandom);
  console.log(btnRandom);
}
function reiniciar() {
  lvl = 0;
  patron = [];
  jugadas = [];
  $turn.textContent = `Turn: ${lvl}`
  $start = false;

}
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * max + min);
}
function checkAnswer(level) {
  if (patron[level] == jugadas[level]) {
    if (jugadas.length === patron.length) {
      setTimeout(() => {
        proxima();
      }, 2000);
    }
  } else {
    reiniciar();
  }
}

// $start = false;

// $btn1.onclick = (e) => {
//   console.log("1");
// };
// $btn2.onclick = (e) => {
//   console.log("2");
// };
// $btn3.onclick = (e) => {
//   console.log("3");
// };
// $btn4.onclick = (e) => {
//   console.log("4");
// };
// lvl = 0;

// document.addEventListener("click", (e) => {
//   if (e.target.id === "start") {
//     {
//       $start.value = true;
//     }
//   } else {
//     return $start.value;
//   }
// });
// if ($start === true) {
//   simon.addEventListener("click", (e) => {
//     return e.target.value;
//   });
// }

// const jugadas = [];
// const patron = [];

// function game() {
//   if (lvl % 2 != 0) {
//     patron.push(generateRandomInteger(1, 4));
//     if (!checkear(patron, jugadas)) {
//       console.log("fail");
//     }
//     leerJugadasMaquina(patron);
//   }
//   if (lvl === -5) {
//     location.reload();
//   }
//   if (lvl % 2 === 0) {
//     main.addEventListener("click", (e) => {
//       if (e.target.value != undefined) {
//         jugadas.push(Number(e.target.value));
//       }
//     });
//   }

//   lvl++;
// }

// function checkear(maquina, jugador) {
//   return maquina[lvl - 1] === jugador[lvl - 1];
// }

// function nuevaJugada(btn) {
//   jugadas.push(btn);
// }
// function leerJugadasMaquina(arr) {
//   arr.forEach((element) => {
//     document.querySelector(`.btn-${element}`).click();
//   });
// }
