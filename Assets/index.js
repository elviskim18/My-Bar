document.addEventListener('DOMContentLoaded',()=> {
    getDofDay();
})

function getDofDay(){

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res =>res.json())
    .then(data => {
        appendElements(data.drinks)
    
    })
} 

//Render Elements

function appendElements(info){
    info.forEach(element => {
       const name = document.getElementById('name')
       name.textContent = element.strDrink
       console.log(element.strGlass)
       console.log(element.strDrinkThumb)
       console.log(element.strAlcoholic)
       console.log(element.strInstructions)
       console.log(element.strIngredient1)
       console.log(element.strIngredient2)
       console.log(element.strIngredient3)
       console.log(element.strIngredient4)
       console.log(element.strIngredient5)
    })
}