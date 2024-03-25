window.onload = async () => {
    
    const pelicula = await fetch(`http://localhost:3001/api/movies/3`)
    .then(resp=>{
      console.log("resp: ",resp);
      return resp.json();
    })
    .then(info =>{
      console.log("info: ",info);
      return info
    })
  
    const inputs = document.querySelectorAll("input");
 
/*
    inputs.forEach(input =>{
        input.value = pelicula.data.input.name
    })*/

    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        if (element.name == "title") {
            element.value = pelicula.data.title
        }
        if (element.name == "rating") {
            element.value = pelicula.data.rating
        }
        if (element.name == "awards") {
            element.value = pelicula.data.awards
        }
        if (element.name == "length") {
            element.value = pelicula.data.length
        }
        if (element.name == "release_date") {
            element.value = pelicula.data.release_date;
        }
        
    }

    /* UPDATE */

    const buttonEdit = document.querySelector(".botonEditar")

    buttonEdit.addEventListener("click", function(e){
        e.preventDefault()
        const data={}
            for (let i = 0; i < inputs.length; i++) {
                const element = inputs[i];
                if (element.name == "title") {
                    data.title = element.value
                }
                if (element.name == "rating") {
                    data.rating = element.value
                }
                if (element.name == "awards") {
                    data.awards = element.value
                }
                if (element.name == "length") {
                    data.length = element.value
                }
                if (element.name == "release_date") {
                    data.release_date = element.value
                }
            }
            console.log("data", data);
        let settingsPut ={
            "method" : "put",
            "headers":{
                "content-type":"application/json",
            },
            "body": JSON.stringify(data)
        }
    
         fetch(`http://localhost:3001/api/movies/update/3`, settingsPut)
         .then(resp=>{
             return resp.json()
         })
         .then(info=>{
             console.log(info);
         })
        
         this.submit()
    })
    

    /* CREATE */
    const buttonCreate = document.querySelector("#botonAgregar")
    buttonCreate.addEventListener("click", function(){
        e.preventDefault()
        const data={}
        for (let i = 0; i < inputs.length; i++) {
            const element = inputs[i];
            if (element.name == "title") {
                data.title = element.value
            }
            if (element.name == "rating") {
                data.rating = element.value
            }
            if (element.name == "awards") {
                data.awards = element.value
            }
            if (element.name == "length") {
                data.length = element.value
            }
            if (element.name == "release_date") {
                data.release_date = element.value
            }
        }
        let settings ={
            "method" : "post",
            "headers":{
                "content-type":"application/json",
            },
            "body": JSON.stringify(data)
        }
    
        fetch("http://localhost:3001/api/movies/create", settings)
        .then(resp=>{
            return resp.json()
        })
        .then(info=>{
            console.log(info);
        })
        this.submit()
    })
    
    
}