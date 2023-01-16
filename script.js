let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
fetch(url)
.then((response) => response.json())
.then((data) => {
  let myMeal = data.meals;
  let list =document.getElementById("list");
  let list1 =document.getElementById("list1");
  let list2 =document.getElementById("list2");
  let list3 =document.getElementById("list3");
  let list4 =document.getElementById("list4");
  let list5 =document.getElementById("list5");
  let list6 =document.getElementById("list6");
  let list7 =document.getElementById("list7");
  let list8   =document.getElementById("list8"  );
  let list9 =document.getElementById("list9");
  let list10 =document.getElementById("list10");
  let list11 =document.getElementById("list11");
  let list12 =document.getElementById("list12");
  let list13=document.getElementById("list13");
  let list14 =document.getElementById("list14");
  let list15 =document.getElementById("list15");
  let list16=document.getElementById("list16");
  let list17=document.getElementById("list17");
  let list18 =document.getElementById("list18");
  let list19 =document.getElementById("list19");
  let list20 =document.getElementById("list20");
  let list21 =document.getElementById("list21");
  let list22 =document.getElementById("list22");
  let list23 =document.getElementById("list23");
  let list24 =document.getElementById("list24");
  let list25 =document.getElementById("list25");
  list.innerText = myMeal[0].strMeal;
  list1.innerText = myMeal[1].strMeal;
  list2.innerText = myMeal[2].strMeal;
  list3.innerText = myMeal[3].strMeal;
  list4.innerText = myMeal[4].strMeal;
  list5.innerText = myMeal[5].strMeal;
  list6.innerText = myMeal[6].strMeal;
  list7.innerText = myMeal[7].strMeal;
  list8.innerText = myMeal[8].strMeal;
  list9.innerText = myMeal[9].strMeal;
  list10.innerText = myMeal[10].strMeal;
  list11.innerText = myMeal[11].strMeal;
  list12.innerText = myMeal[12].strMeal;
  list13.innerText = myMeal[13].strMeal;
  list14.innerText = myMeal[14].strMeal;
  list15.innerText = myMeal[15].strMeal;
  list16.innerText = myMeal[16].strMeal;
  list17.innerText = myMeal[17].strMeal;
  list18.innerText = myMeal[18].strMeal;
  list19.innerText = myMeal[19].strMeal;
  list20.innerText = myMeal[20].strMeal;
  list21.innerText = myMeal[21].strMeal;
  list22.innerText = myMeal[22].strMeal;
  list23.innerText = myMeal[23].strMeal;
  list24.innerText = myMeal[24].strMeal;
  list25.innerText = myMeal[25].strMeal;

});

searchBtn.addEventListener("click", () => {
  let userInp = document.getElementById("user-inp").value;
  if (userInp.length == 0) {
    result.innerHTML = `<h3> Input Field Cannot Be Empty</h3>`;
  } else {
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        let myMeal = data.meals[0];

        let count = 1;
        let ingredients = [];

        for (let i in myMeal) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myMeal[i]) {
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure` + count];
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
       

        result.innerHTML = `
    <div class="relative">
    <img src=${myMeal.strMealThumb}
        class="card-img-top" alt="...">
    <div class="menu">
        <h2>${myMeal.strMeal}</h2>
         <h4>${myMeal.strArea}</h4>
    </div>
</div>
<div class="card-body mt-4">
    <div class="recipe">
        <p class="name">Recipe</p>
    </div>
    <div class="menu1" id="ingredient-con"></div>
</div>
`;

        let ingredientCon = document.getElementById("ingredient-con");
        let parent = document.createElement("ul");
        ingredients.forEach((i) => {
          let child = document.createElement("li");
          child.innerText = i;
          parent.appendChild(child);
          ingredientCon.appendChild(parent);
        });
        let cook = document.getElementById("cook");
        cook.innerHTML = ` <div class="card-body">
    <div class="card-title cook">How to cook</div>
    <pre class="text">${myMeal.strInstructions}</pre>
    </div>`;
      })
      .catch(() => {
        result.innerHTML = `<h3>Invalid Input</h3>`;
      });
  }
});
