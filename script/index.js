let cart =[];
let total=0;
// all categories
const loadPlants =()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((json)=>displayPlants(json.categories));
}
//spinner
const manageSpinner=(status)=>{
  if(status==true){
    document.getElementById('spinner').classList.remove('hidden')
    document.getElementById('product-list').classList.add('hidden')
  }else{
    document.getElementById('product-list').classList.remove('hidden')
    document.getElementById('spinner').classList.add('hidden')
  }
}

//modal
const loadWordDetail=async(id)=>{
  const url=`https://openapi.programming-hero.com/api/plant/${id}`
  //console.log(url);
  const res = await fetch(url)
  const details= await res.json();
  displayDetails(details.plants);
}
//word_modal
 const displayDetails=(detail)=>{
   
    const detailBox = document.getElementById('detail-container');
     detailBox.className = " max-h-[350px] bg-white rounded-xl  p-2 flex flex-col";
    detailBox.innerHTML=` <h1  class="font-bold py-2 text-2xl">${detail.name}</h1>
                         <img src="${detail.image}" class="h-40 object-cover rounded mb-3">
                          <p class=" py-1"><span class="text-lg font-bold">Category:</span><span class="text-xs ml-2 ">${detail.category}</span></p>
                          <p class="py-1"><span class="text-lg font-bold">Price:</span><span class="text-xs ml-2 ">${detail.price}</span></p>
                          <p class=" py-1"><span class="text-lg font-bold">Description:</span><span class="text-xs ml-2 ">${detail.description}</span></p>
                             
                            `;
    document.getElementById('card_modal').showModal();
 }
//addToCart function

const addToCart=(id,name,price)=>{
   cart.push({ id, name, price });
   total += price;
   
  alert(`${name} added to cart`);
  displayCart();

};
//remove cart
const removeFromCart = (id) => {
  const item = cart.find(i => i.id === id);   
  if (item) total -= item.price;              

  cart = cart.filter(i => i.id !== id);       
  displayCart();                             
};
//displayCart
const displayCart=()=>{
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById('Total');

  cartItems.innerHTML="";
  let total=0;

  cart.forEach(item=>{
    total+=item.price;

    let li =document.createElement("li");
     li.className = "flex justify-between items-center bg-green-50 rounded p-2 mb-2";
    li.innerHTML = `
        <div>
        <p class="font-semibold">${item.name}</p>
        <p class="text-sm text-gray-600">৳${item.price}</p>
      </div>
      <button class="text-red-500 font-bold" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-xmark"></i></button>
    `;
    cartItems.appendChild(li);
    
  });

  totalEl.innerText = `৳${total}`;
  
   

}

//all plants
const loadCards =(id)=>{
     manageSpinner(true);
   let url=`https://openapi.programming-hero.com/api/plants`;
   if(id){
    url=`https://openapi.programming-hero.com/api/category/${id}`;
   }
   fetch(url)
   .then((res)=>res.json())
   .then((json)=>{
    displayCards(json.plants);
     manageSpinner(false);
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
    div.className = " max-h-[330px] bg-white rounded-xl shadow-md p-4 flex flex-col";
    div.innerHTML = `
      <img src="${card.image}" class="h-32 object-cover rounded mb-3">
      <h4 onclick="loadWordDetail(${card.id})" class="font-bold py-1">${card.name}</h4>
      <p class="text-sm text-gray-600 mb-2">${card.description.substring(0,65)}</p>
        <div class="flex items-center justify-between py-3">
    <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">${card.category}</span>
    <span class="font-semibold text-gray-700">৳${card.price}</span>
  </div>
      <button onclick="addToCart(${card.id},'${card.name}',${card.price})" class="bg-green-600 text-white py-1 rounded hover:bg-green-700">Add to Cart</button>
    `;
    //card.querySelector("button").addEventListener("click", () => addToCart(p));
    productList.appendChild(div);

  });
  manageSpinner(false);
 
}

loadPlants()
loadCards()