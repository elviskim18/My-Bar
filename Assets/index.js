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

       const ingredientContainer = document.getElementById('ingredients')
       
       if(element.strIngredient1 !== null){
           const ingOne = document.createElement('li')
           ingOne.textContent = element.strIngredient1
           ingredientContainer.appendChild(ingOne)
       }
       
       if (element.strIngredient2 !== null){
           const ingTwo = document.createElement('li')
           ingTwo.textContent = element.strIngredient2
           ingredientContainer.appendChild(ingTwo)
       }
       if (element.strIngredient3 !== null) {
         const ingThree = document.createElement("li");
         ingThree.textContent = element.strIngredient3;
         ingredientContainer.appendChild(ingThree);
       }
       if (element.strIngredient4 !== null) {
         const ingFour = document.createElement("li");
         ingFour.textContent = element.strIngredient4;
         ingredientContainer.appendChild(ingFour);
       }
       if (element.strIngredient5 !== null) {
         const ingFive = document.createElement("li");
         ingFive.textContent = element.strIngredient5;
         ingredientContainer.appendChild(ingFive);
       }
       if (element.strIngredient6 !== null) {
         const ingSix = document.createElement("li");
         ingSix.textContent = element.strIngredient6;
         ingredientContainer.appendChild(ingSix);
       }
       if (element.strIngredient7 !== null) {
         const ingSeven = document.createElement("li");
         ingSeven.textContent = element.strIngredient7;
         ingredientContainer.appendChild(ingSeven);
       }
      

    })
}