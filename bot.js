const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "hallo perkenalkan saya jek.bot, siapakah nama kamu?",
    `hallo ${data?.nama}, berapa usia kamu?`,
    `ohhhh ${data?.usia}, hobby kamu apa ya? `,
    `woww serius? kamu suka ${data?.hobi}? itu menakjubkan, apakah kamu memiliki pacar?`,
    `ohhhh ${data?.pacar} ☺ , baiklah kalau begitu, dari 1-10 berapa nilai untuk bot ini?`,
  ];
};
pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  if (jawaban.value.length < 1)
    return alert("jawab dulu dong anj, kok dikosongin sih!");
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(5px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, [500]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `thankyou yah ${usersData[0]} sudah meluangkan waktunya untuk menguji bot ini, kapan kapan kita ${usersData[2]} bareng yaa 😁`;
  jawaban.value = "okayyy, semangat ya jek";
}

function botEnd() {
  alert(`terimaksih ${usersData[0]}, anda akan diarahkan ke halaman awal.`);
  window.location.reload();
}
