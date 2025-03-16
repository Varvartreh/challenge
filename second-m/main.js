let fitnes=['Челленж 27 дней приседаний: 10, 15, 20, 25, 30, отдых, 30, 35, 40, 45, 50, отдых, 50, 55, 60, 65, 70, отдых, 70, 75, 80, 85, 90, отдых, 90, 95, 100.','Челленж 27 дней планка(в секундах): 10, 15, 20, 25, 30, отдых, 30, 35, 40, 45, 50, отдых, 50, 55, 60, 65, 70, отдых, 70, 75, 80, 85, 90, отдых, 90, 95, 100.']
let productivnost = ['Начните вести личный дневник-рефлексию.','Составь план дня в google-таблице и придерживайся его.']
let obraz = ['Прочитай книгу, которую доолго откладывал на потом','Пройди бесплатный начальный курс по питону на code-basics.']
let tvorch = ['Создай смешной коллаж из старых газет и журналов.','Нарисуй хуманизацию гриба или цветочка.']
let dom = ['Купите алоэ или кактус, заботьтесь о нём.','Разберите тот самый завал, который старательно прячете. Выбросьте из дома ненужные вещи']
let blago = ['Начните заниматься йогой. Для этого необязательно идти в студию, можно просто медленно разминаться под аудиопадкаст или музыку.','Сделайте то, о чём давно думаете.']



//текст испытания
function chale(){
    let tema = document.querySelector('.main-header').value;
    let text = document.querySelector('.main-desk').value;
    if(tema = 'fitnes'){
        text.innerHTML = fitnes[Math.floor(Math.random() * fitnes.length)];
    }
    else if(tema = 'productivnost'){
        text.innerHTML = productivnost[Math.floor(Math.random() * fitnes.length)];
    }
    else if(tema = 'obraz'){
        text.innerHTML = obraz[Math.floor(Math.random() * fitnes.length)];
    }
    else if(tema = 'tvorch'){
        text.innerHTML = tvorch[Math.floor(Math.random() * fitnes.length)];
    }
    else if(tema = 'dom'){
        text.innerHTML = dom[Math.floor(Math.random() * fitnes.length)];
    }
    else if(tema = 'blago'){
        text.innerHTML = blago[Math.floor(Math.random() * fitnes.length)];
    }
}

let men = document.querySelector('.main-niz')
men.addEventListener("click", chale())

