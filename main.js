function addingAnimal(){

  
      
    let animalName = document.getElementById("nameOfAnimal").value ;
    let animalAge = document.getElementById("ageOfAnimal").value ;
    let animalUrl = document.getElementById("urlOfAnimal").value ;
    let animalType = document.getElementById("typeOfAnimal").value ;

if(animalType === "" || animalName === "" || animalAge === "" || animalUrl === ""){
    alert("Invalid Enter Type , Name , Age , url of animal")
    return;
}


let tbody = document.getElementById("tableOfAnimals");

tbody.innerHTML += `
<tr>
<td>${animalType}</td>
<td>${animalName}</td>
<td>${animalAge}</td>
<td> <img src="${animalUrl}" width="100" height="100"></td>

</tr>
`; 




let animals = JSON.parse(localStorage.getItem("animals")) || []

animals.push({ Type: animalType , Name: animalName , Age: animalAge , Picture : animalUrl})


let countOfAnimals = document.getElementById("countDisplayOfAnimals")

countOfAnimals.textContent = "Current Animals: " + animals.length


localStorage.setItem("animals",JSON.stringify(animals));

}


function loadAnimals(){

let tbody = document.getElementById("tableOfAnimals");
let animals = JSON.parse(localStorage.getItem("animals")) || []

for(const animal of animals ) {

tbody.innerHTML += `
<tr>
<td>${animal.Type}</td>
<td>${animal.Name}</td>
<td>${animal.Age}</td>
<td> <img src="${animal.Picture}" width="100" height="100"></td>

</tr>
`; 


}
let animalCount = document.getElementById("countDisplayOfAnimals")

animalCount.textContent = "Current Animals: " + animals.length

}


loadAnimals()
