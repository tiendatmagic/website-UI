document
  .getElementsByClassName("buttonsocial")[0]
  .addEventListener("click", () => {
    for (
      i = 0;
      i <= document.getElementsByClassName("btn").length - 1;
      i++
    )
      document
        .getElementsByClassName("btn")
      [i].classList.toggle("active");
  });