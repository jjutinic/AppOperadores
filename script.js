let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el menu una vez que selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("excel");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("Comunicacion");
        habilidades[6].classList.add("Trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyectos");
    }
}


//detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}