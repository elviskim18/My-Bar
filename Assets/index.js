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

       const glass = document.getElementById('glass')
       glass.textContent = element.strGlass


       const type = document.getElementById('type') 
       type.textContent = element.strAlcoholic

       const image = document.getElementById('image')
       image.setAttribute("src",element.strDrinkThumb)
       
       const description = document.getElementById('description')
       description.textContent = element.strInstructions
       
       console.log(element.strIngredient1)
       console.log(element.strIngredient2)
       console.log(element.strIngredient3)
       console.log(element.strIngredient4)
       console.log(element.strIngredient5)
    })
}