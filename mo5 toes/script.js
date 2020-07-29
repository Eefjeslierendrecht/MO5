fetch("https://pokeapi.co/api/v2/pokemon/ditto")  
.then(response => response.json())
  .then(myJson => {
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })

