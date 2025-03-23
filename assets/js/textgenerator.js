
const textList = ["Let's get connected!", "Let's design something crazy!", "Let's develop together!"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 30;
const deletingSpeed = 30;
const pauseBetweenWords = 1300; // 1 second pause

function typeText() {
  const currentText = textList[textIndex];
  const displayText = isDeleting
    ? currentText.substring(0, charIndex--)
    : currentText.substring(0, charIndex++);

  document.getElementById("text-generated").textContent = displayText;

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), pauseBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textList.length;
    setTimeout(typeText, typingSpeed);
    return;
  }

  setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, typingSpeed);
});