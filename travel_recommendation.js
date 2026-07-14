fetch("travel_recommendation_api.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });
  fetch("travel_recommendation_api.json")
.then(response => response.json())
.then(data => {

    document.getElementById("searchBtn").addEventListener("click", function () {

        const keyword = document.getElementById("searchInput").value.toLowerCase();

        console.log(keyword);

        if (keyword.includes("beach")) {
            console.log(data.beaches);
        } else if (keyword.includes("temple")) {
            console.log(data.temples);
        } else {
            const country = data.countries.find(c =>
                c.name.toLowerCase() === keyword
            );

            if (country) {
                console.log(country.cities);
            } else {
                console.log("No results found");
            }
        }
    });

});
fetch("travel_recommendation_api.json")
.then(response => response.json())
.then(data => {

document.getElementById("searchBtn").addEventListener("click",function(){

let keyword=document.getElementById("searchInput").value.toLowerCase();
let results=document.getElementById("results");
results.innerHTML="";

let places=[];

if(keyword.includes("beach")){
    places=data.beaches;
}
else if(keyword.includes("temple")){
    places=data.temples;
}
else{
    const country=data.countries.find(c=>c.name.toLowerCase()==keyword);
    if(country){
        places=country.cities;
    }
}

places.forEach(place=>{
results.innerHTML+=`
<div class="card">
<img src="${place.imageUrl}" alt="${place.name}">
<h3>${place.name}</h3>
<p>${place.description}</p>
</div>
`;
});

});

});
document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("searchInput").value = "";
    document.getElementById("results").innerHTML = "";
});
