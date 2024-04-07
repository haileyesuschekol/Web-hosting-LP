const collabsable = document.querySelectorAll(".collabsable")

collabsable.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("collabsable--expanded")
  })
)
