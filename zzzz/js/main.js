let card = document.querySelectorAll('.card')
card.forEach(element => {
    element.addEventListener("click", () => {
        localStorage.setItem ("key", element.innerHTML)
        location.href = "../second-m/index.html"
    })
});
