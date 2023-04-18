const minNode = document.querySelector("#min");
const maxNode = document.querySelector("#max");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
console.log("btn")
console.log(btn.innerText)

const numArea = document.querySelector(".numInfo");

const answer = 65;
let minNum = parseInt(minNode.innerText);
let maxNum = parseInt(maxNode.innerText);
console.log(minNum);
console.log(maxNum);

btn.addEventListener("click", () => {
   const guessNum = input.value;

   if(guessNum > maxNum || guessNum < minNum) {
    input.value = null;
    alert("請輸入正確數字");
    return;
   }

   if(guessNum > answer) {
    maxNum = guessNum;
    maxNode.innerText = guessNum;
   }

   if(guessNum < answer) {
    minNum = guessNum;
    minNode.innerText = guessNum;
   }

   if(guessNum == answer) {
    // alert("正確答案");
    numArea.innerHTML = `<h2 class="fs-1 mt-4 mb-4">恭喜答對</h2>`;

    // reset
    input.value = null;
   }

   input.value = null;
});