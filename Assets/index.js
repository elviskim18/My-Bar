document.addEventListener('DOMContentLoaded',()=> {
    getDofDay();

    //hide panels
    const liquo = document.querySelector("#pombe");
    liquo.style.display = "none"

    
    const nonliquo = document.querySelector("#sipombe");
    nonliquo.style.display = "none"

    
    const lookUp = document.querySelector("#lookup");
    lookUp.style.display = "none"

    
    const favs = document.querySelector("#favs");
    favs.style.display = "none"


    //eventlistener for alcoholic button
    document.querySelector('#alcoholic').addEventListener('click', () => {
        displayLiqour()
    })

    //eventlistener for nonalcoholic button
    document.querySelector('#nonalcoholic').addEventListener('click', () => {
        displayNonLiqour()
    })

    
    //search form eventlistener
    searchDrink()

    

    
    
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


       //like button event
       const EMPTY_HEART = '♡'
       const FULL_HEART = '♥'

       document.querySelector('#like').addEventListener('click', (e) =>{
        //DOM manipulation
        const heart = e.target;
        heart.innerHTML = EMPTY_HEART

        if(heart.innerHTML === EMPTY_HEART){
            heart.innerHTML == FULL_HEART;
            heart.classList.add("activated-heart")
            
          }
          else {
            heart.innerHTML == EMPTY_HEART;
            heart.classList.remove("activated-heart")
          }
        
          //elements posted to the favourites tab
          const newdata = {
            name: element.strDrink,
            image: element.strDrinkThumb,
            alcoholType : element.strAlcoholic,
            alcoholGlass : element.strGlass
          }
        
        document.querySelector("#fav").addEventListener('click', () => {
            displayFavs(newdata)
        })

    })

      

    })
}


function displayLiqour(){
    //get alcoholic drinks
    const liquo = document.querySelector("#pombe");
    liquo.style.display = "block"
    const card = document.createElement("div");
    card.className = "cardContainer";

    liquo.appendChild(card)
           

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then(res => res.json())
    .then(drink => {
        drink.drinks.forEach(item =>{
            
            const newElement = document.createElement('div')
            newElement.className = "dcard"
            newElement.innerHTML = `
            
            <img id = "dimage" src= "${item.strDrinkThumb}" alt= "drink" >
            <p>"${item.strDrink}"</p>
            
            `;
            card.appendChild(newElement)
            
        })
    })
    
}

function displayNonLiqour(){
    const nonliquo = document.querySelector("#sipombe");
    nonliquo.style.display = "block"

    const card = document.createElement("div");
    card.className = "cardContainer";
    nonliquo.appendChild(card)

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then(res => res.json())
    .then(drink => {
        drink.drinks.forEach(item =>{
            
            const newElement = document.createElement('div')
            newElement.className = "dcard"
            newElement.innerHTML = `
            
            <img id = "dimage" src= "${item.strDrinkThumb}" alt= "drink" >
            <p>"${item.strDrink}"</p>
            
            `;
            card.appendChild(newElement)
            
        })
    })

}

//search function
function searchDrink(){

    document.querySelector('#fsearch').addEventListener('submit', (e) =>{
    e.preventDefault()
    

    const myValue = e.target.searchvalue.value;
     const dInfo = document.querySelector("#doth"); //make doth div invisible
     dInfo.style.display = "none"

    const lookUp = document.querySelector("#lookup"); //make lookup div visible
    lookUp.style.display = "block"

    const card = document.createElement("div"); // create div to append created cards
    card.className = "scardContainer";

    lookUp.innerHTML = ""   //clear previous search

    lookUp.appendChild(card)
    
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${myValue}`)
    .then(res => res.json())
    .then(data => {
        
        data.drinks.forEach(item =>{

            const newElement = document.createElement('div')
            newElement.className = "scard"
            newElement.innerHTML = `
            
            <img id = "simage" src= "${item.strDrinkThumb}" alt= "drink" >
            <p>Name : ${item.strDrink}</p>
            <p>Type: ${item.strAlcoholic}</p>
            `;
            
            card.appendChild(newElement)
            
        })
        
    })
        
      
    }) 
}

function displayFavs(info){
    const favs = document.querySelector("#favs");
    favs.style.display = "block"
    

    //display the fav to DOM

    const favContainer = document.createElement('div');
    favContainer.className = "favContainer"
    favContainer.innerHTML = ""
    favs.appendChild(favContainer);
    //console.log(info.image)
    favContainer.innerHTML = `
    <img id = "favimage" src= "${info.image}" alt= "drink" >
    <p>Name : ${info.name}</p>
    <p>Glass : ${info.alcoholGlass}</p>
    <p>Type : ${info.alcoholType}</p>


    `
    

}