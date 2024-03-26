let container = document.querySelector("#container");

function addTask() {
  let tacheContainer = document.createElement("div");
  tacheContainer.classList.add("flex")
  let tache = document.createElement("p")
  tache.textContent = document.querySelector("#tache").value;
  tacheContainer.appendChild(tache);
  let image = document.createElement("img")
  image.src = "./assets/images/poubelle.png"
  image.alt = "poubelle"
  image.style.height = "50px"
  image.addEventListener("click", ()=> {
    supp(tacheContainer)
  })
  tacheContainer.appendChild(image)
  container.appendChild(tacheContainer)
  
  
}

function supp(tache) {
    tache.remove()
    
}
