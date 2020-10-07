const currentPage = location.pathname
const menuItems = document.querySelectorAll(" header .links a ")

for(let item of menuItems){
    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}

// const dishes = document.querySelectorAll('.dish')

// if(dishes) {
//     for(let dish of dishes) {
//         dish.addEventListener("click", function() {
//         dish_id = dish.getAttribute("id")
//         window.location.href = `/recipe/${dish_id}`
//         })
//     }
// }