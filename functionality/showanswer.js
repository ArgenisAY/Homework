export default function showanswer() {
  const d = document;

  d.addEventListener("click", (e) => {
    let arrowDown = "keyboard_arrow_down",
      arrowUp = "keyboard_arrow_up";

    if (e.target.matches("#btn-1") || e.target.matches(`#btn-1 *`)) {
      d.querySelector(".answer-1").classList.toggle("answers");
    }

    if (e.target.matches("#btn-2") || e.target.matches(`#btn-2 *`)) {
      d.querySelector(".answer-2").classList.toggle("answers");
    }

    if (e.target.matches("#btn-3") || e.target.matches(`#btn-3 *`)) {
      d.querySelector(".answer-3").classList.toggle("answers");
    }

    if (e.target.matches("#btn-4") || e.target.matches(`#btn-4 *`)) {
      d.querySelector(".answer-4").classList.toggle("answers");
    }

    if (e.target.matches("#btn-5") || e.target.matches(`#btn-5 *`)) {
      d.querySelector(".answer-5").classList.toggle("answers");
    }
  });
}
