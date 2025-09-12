const loadLesson =()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((json)=>displayLesson(json.categories));
}
 
const displayLesson =(lessons)=>{
  const levelContainer = document.getElementById("all-category");
 levelContainer.innerHTML="";
  for(let lesson of lessons){

    console.log(lesson);
     const btnDiv = document.createElement("div");
     btnDiv.innerHTML=`
       <div class="col-span-4 bg-white rounded-md p-4">
                <p class="bg-[#15803D] text-white text-center p-4 rounded-lg">${lesson.category_name}</p>
              </div>
    `;
     levelContainer.append(btnDiv);

  }
}

loadLesson()