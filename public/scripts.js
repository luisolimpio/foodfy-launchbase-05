const currentPage = location.pathname
const menuItems = document.querySelectorAll(" header .links a ")

for(let item of menuItems){
    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}

const dishes = document.querySelectorAll('.dish')

if(dishes) {
    for(let dish of dishes) {
        dish.style.cursor = "pointer"
        dish.addEventListener("click", function() {
        dishId = dish.getAttribute("id")
        console.log(dishId)
        window.location.href = `/recipe/${dishId}`
        })
    }
}
