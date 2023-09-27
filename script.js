function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/fernando.jpeg")
  } else {
    img.setAttribute(
      "src",
      "https://media.licdn.com/dms/image/C4E03AQEzArxl80sYrg/profile-displayphoto-shrink_800_800/0/1636688205031?e=1700697600&v=beta&t=bWhJY4tDxWLb7krJYGK4tUop5VMsxe5-sI4pWyi8CU8"
    )
  }
}
