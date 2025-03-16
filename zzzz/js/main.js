let card = document.querySelectorAll('.card')
card.forEach(element => {
    element.addEventListener("click", () => {
        location.href = "../second-m/index.html"
    })
});
