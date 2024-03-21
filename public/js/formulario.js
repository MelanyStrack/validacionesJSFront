window.onload = async () => {
    const id = +req.params.id
    const pelicula = await fetch(`localhost:3001/api/movies/${id}`)
    .then(resp=>{
      console.log("resp: ",resp);
      return resp.json();
    })
    .then(info =>{
      console.log("info: ",info);
      return data
    })
  
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input=>{
        input.value = pelicula.input.name
    })

    /* UPDATE */

    let settingsPut ={
        "method" : "put",
        "headers":{
            "content-type":"application/json",
        },
        "body": JSON.stringify(req.body)
    }

     fetch(`localhost:3001/api/movies/update/${id}`, settings)
     .then(resp=>{
         return resp.json()
     })
     .then(info=>{
         console.log(info);
     })


    /* CREATE */

    let settings ={
        "method" : "post",
        "headers":{
            "content-type":"application/json",
        },
        "body": JSON.stringify(req.body)
    }

    fetch("localhost:3001/api/movies/create", settings)
    .then(resp=>{
        return resp.json()
    })
    .then(info=>{
        console.log(info);
    })
    

}