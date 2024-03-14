window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    const inputTitle = document.querySelector("#title")
    const inputs = document.querySelectorAll("input")
    const form = document.querySelector("form");
    const select = document.querySelector("select")
    const ulErrores = document.querySelector(".errores")
    const divs = document.querySelectorAll("div")

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    const between = function(value, min, max){
        console.log("value", value);
        return value >= min && value <= max
    }

    const addErrorP = function (elemento) {
        const errorP = document.createElement("p");
            errorP.classList.add(`inputError${elemento.name}`)
            errorP.classList.add(`is-invalid`)
            errorP.innerText = ` ${elemento.name.toUpperCase()} no puede estar vacío `
            divs.forEach(div=>{
                const oldPError=document.querySelector(`.inputError${elemento.name}`)
                const rightDiv=document.querySelector(`.div-${elemento.name}`)
                document.querySelector(`.inputError${elemento.name}`) ? rightDiv.replaceChild(errorP,oldPError) : rightDiv.appendChild(errorP)
            })
    }
    const adErrorLi = function(elemento){
        elemento.classList.add("is-invalid")
            const childError = document.createElement("li");
            childError.classList.add(`error${elemento.name}`)
            childError.innerText = ` ${elemento.name.toUpperCase()} no puede estar vacío `

            const oldChild = document.querySelector(`.error${elemento.name}`) 
            oldChild ? ulErrores.replaceChild(childError,oldChild) :  ulErrores.appendChild(childError)
            console.log("childError",childError);
            ulErrores.classList.add("alert-warning")
    }

    const deleteError = function(elemento){
        const childLi = document.querySelector(`.error${elemento.name}`)
        const childP = document.querySelector(`.inputError${elemento.name}`)
        childLi ? ulErrores.removeChild(childLi) : null
        const divRequired = document.querySelector(`.div-${elemento.name}`);
        childP ? divRequired.removeChild(childP) : null

        elemento.classList.remove("is-invalid")
        elemento.classList.add("is-valid")
        elemento.style.border = "none"
    }

    const validation = function(elemento, e){
        if(elemento.value == ""){
            adErrorLi(elemento)
        }
        
        if (elemento.value == "" && e.type == "blur"){ 

            elemento.style.border="2px solid red"
            addErrorP(elemento)
        }


        if (elemento.value != "") {
            deleteError(elemento)
        }
        
        if (elemento.name == "rating" || elemento.name == "awards"){
            if (!between(elemento.value, 0, 10)) {
                    addErrorP(elemento)
                    document.querySelector(`.inputError${elemento.name}`).innerText=` ${elemento.name.toUpperCase()} debe tener un valor mínimo de 0 y un valor máximo de 10`
                    console.log("entre al if");

                    adErrorLi(elemento)
                    document.querySelector(`.error${elemento.name}`).innerText=` ${elemento.name.toUpperCase()} debe tener un valor mínimo de 0 y un valor máximo de 10`
                    const error=document.querySelector(`.error${elemento.name}`)
                    
                }else if(elemento.value == ""){
                    adErrorLi(elemento);
                    addErrorP(elemento)
                }else{
                    deleteError(elemento)
                }
        }
        if (elemento.name == "length") {
            if (!between(elemento.value, 60, 360)) {
                addErrorP(elemento)
                document.querySelector(`.inputError${elemento.name}`).innerText=` ${elemento.name.toUpperCase()} debe tener un valor mínimo de 60 y un valor máximo de 360`
                console.log("entre al if");

                adErrorLi(elemento)
                document.querySelector(`.error${elemento.name}`).innerText=` ${elemento.name.toUpperCase()} debe tener un valor mínimo de 60 y un valor máximo de 360`
                
            }else if(elemento.value == ""){
                
                adErrorLi(elemento)
                addErrorP(elemento)
            }else{
                deleteError(elemento)
            }
            
        }
    }

    inputTitle.focus();


    inputs.forEach(input=>{
        console.log("inputs", input);
        input.addEventListener("blur",function(e){
            validation(this,e)
        })
    })

    form.addEventListener("submit", function(e){
        inputs.forEach(input=>{
            validation(this,e)
        })
        validation(select,e)

        if (document.querySelector("ul li")) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes ingresar datos válidos",
                footer: ''
              });
            e.preventDefault()
        }else{
            Swal.fire("La película se guardó satisfactoriamente");
            
        }
         

    })





}