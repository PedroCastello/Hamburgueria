const ul = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMap = document.querySelector(".Map10");
const buttonReduce = document.querySelector(".reduce");
const buttonFilter = document.querySelector(".filter");

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return newValue 

}

function showAll(productsArray) {
  let myLi = "";
  productsArray.forEach((product) => {
    myLi += ` <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> R$ ${product.price}</p> 
        </li> 
        `;
  });
  buttonClick = "true";

  ul.innerHTML = myLi;
}

function mapAll() {
  const newPrices = menuOptions.map((product) => ({
    ...product, //spread operator
    price: (product.price * 0.9).toFixed(2), //10%discount
  }));

  showAll(newPrices);
}

function reduceAll() {
  const priceSum = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
  ul.innerHTML = ` <li>
            <p> O valor total dos itens (sem desconto!) é de:
             ${formatCurrency(priceSum)}</p> 
        </li> 
        `;
}

function filterAll() {
  const newList = menuOptions.filter((product) => product.vegan);

  showAll(newList);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMap.addEventListener("click", mapAll);
buttonReduce.addEventListener("click", reduceAll);
buttonFilter.addEventListener("click", filterAll);
