// all categories
const loadPlants =()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((json)=>displayPlants(json.categories));
}
//reemove active class




//all plants
const loadCards =(id)=>{
   let url=`https://openapi.programming-hero.com/api/plants`;
   if(id){
    url=`https://openapi.programming-hero.com/api/category/${id}`;
   }
   fetch(url)
   .then((res)=>res.json())
   .then((json)=>{
    displayCards(json.plants);
   })
}
 //display ctagegory-name left
const displayPlants =(plants)=>{
  
  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = `<h3 class='font-bold mb-3 text-2xl p-2'>Categories</h3>
                            <p class="cursor-pointer bg-[#15803D] text-white p-2 mb-2 rounded">All Trees </p>`;
  plants.forEach(cat => {
    const div = document.createElement("div");
    div.className = "cursor-pointer hover:bg-[#15803D] hover:text-white p-2 mb-2 rounded";
    div.innerHTML =`<p>${cat.category_name}</p>`;
    //add active class
        div.addEventListener("click", () => {
            
            const allCats = document.querySelectorAll("#category-list div");
            allCats.forEach(c => c.classList.remove("bg-[#15803D]", "text-white"));

            
            div.classList.add("bg-[#15803D]", "text-white");

            
            loadCards(cat.id);
        });

    categoryList.appendChild(div);
  });
}

//display cards middle
const displayCards =(cards)=>{
  
  const productList = document.getElementById("product-list");
    productList.innerHTML = "";
  cards.forEach(card => {
    const div = document.createElement("div");
    div.className = " max-h-[320px] bg-white rounded-xl shadow-md p-4 flex flex-col";
    div.innerHTML = `
      <img src="${card.image}" class="h-32 object-cover rounded mb-3">
      <h4 class="font-bold">${card.name}</h4>
      <p class="text-sm text-gray-600 mb-2">${card.description.substring(0,65)}</p>
        <div class="flex items-center justify-between py-3">
    <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">${card.category}</span>
    <span class="font-semibold text-gray-700">৳${card.price}</span>
  </div>
      <button class="bg-green-600 text-white py-1 rounded hover:bg-green-700">Add to Cart</button>
    `;
    //card.querySelector("button").addEventListener("click", () => addToCart(p));
    productList.appendChild(div);

  });
}

loadPlants()
loadCards()