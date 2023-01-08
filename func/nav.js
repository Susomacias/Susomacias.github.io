//guardar cookies true en localStorage
function cookiesAcept(){
    localStorage.setItem("cookies", "true");
    document.getElementById("avisoCookiesContainer").style.display = "none";
}

//comprobar si cookies existe en localStorage
function checkCookies(){
    let cookies = localStorage.getItem("cookies");
    if(cookies == "true"){
        document.getElementById("avisoCookiesContainer").style.display = "none";
    }
}

//cerrar todas los menús si se cambia de ventana.
let screenWidth = window.innerWidth;
window.addEventListener("resize", function(){
    if(screenWidth !== window.innerWidth){
        screenWidth = window.innerWidth;
        //recargar la pagina
        location.reload();
    }
});

function closeNavTactile(ev){
    if(ev.touches.length == 1) {
        let position = ev.touches[0].pageY-window.pageXOffset;

        let positionArray = [];
        let positionArrayString = localStorage.getItem("positionArray");
        if(positionArrayString !== null){
            positionArray = JSON.parse(positionArrayString);
        }
        positionArray.push(position);
        localStorage.setItem("positionArray", JSON.stringify(positionArray));

        let positionArrayString2 = localStorage.getItem("positionArray");
        let positionArray2 = JSON.parse(positionArrayString2);

        if(positionArray2[0] - positionArray2[positionArray2.length-1] > 50){
            navCloseAll();
            let Option = document.getElementsByClassName("opcionLista");
            Option = Array.from(Option);
            Option.map(function(element){
                element.style.fontSize = "0"; 
            });
            localStorage.removeItem("positionArray");
        }

        if(positionArray2[0] - positionArray2[positionArray2.length-1] < -50){
            navCloseAll();
            let Option = document.getElementsByClassName("opcionLista");
            Option = Array.from(Option);
            Option.map(function(element){
                element.style.fontSize = "0"; 
            });
            localStorage.removeItem("positionArray");
        }

        setTimeout(function(){
            localStorage.removeItem("positionArray");
        }, 1000);
    }
}

function navOpenSocial(){
    NavCloseHome();
    navCloseMenu();

    if(screenWidth > 800){
        document.getElementById("SocialButton").style.width = "0";
        document.getElementById("SocialOptions").style.width = "100%";
        document.getElementById("SocialContainer").style.width = "80%";
        document.getElementById("HomeContainer").style.width = "10%";
        document.getElementById("MenuContainer").style.width = "10%";
    }else{
        let options = document.getElementById("SocialOptions");
        if(options.style.height === ""){
            options.style.height = "90vh";
        }else{
            options.style.height = "";
        }
    }
}

function navCloseSocial(){
    if(screenWidth > 800){
        document.getElementById("SocialButton").style.width = "100%";
        document.getElementById("SocialOptions").style.width = "0";
        document.getElementById("SocialContainer").style.width = "10%";
    }else{
        let options = document.getElementById("SocialOptions");
        options.style.height = "";
    }
}

function NavOpenHome(){
    navCloseSocial();
    navCloseMenu();
    resetFontSize();

    if(screenWidth > 800){
        document.getElementById("HomeButton").style.width = "0";
        document.getElementById("HomeOptions").style.width = "100%";
        document.getElementById("HomeContainer").style.width = "80%";
        document.getElementById("SocialContainer").style.width = "10%";
        document.getElementById("MenuContainer").style.width = "10%";
    }else{
        options = document.getElementById("HomeOptions");
        Evento1 = document.getElementById("Evento1");
        Evento2 = document.getElementById("Evento2");
        Evento3 = document.getElementById("Evento3");
        Evento4 = document.getElementById("Evento4");
        Evento5 = document.getElementById("Evento5");
        if(options.style.height === ""){
            options.style.height = "90vh";
            Evento1.style.borderTop = "1px solid white";
            Evento2.style.borderTop = "1px solid white";
            Evento3.style.borderTop = "1px solid white";
            Evento4.style.borderTop = "1px solid white";
            Evento5.style.borderTop = "1px solid white";
        }else{
            NavCloseHome()
        }
    }
}

function NavCloseHome(){
    if(screenWidth > 800){
        document.getElementById("HomeButton").style.width = "100%";
        document.getElementById("HomeOptions").style.width = "0";
        document.getElementById("HomeContainer").style.width = "10%";
    }else{
        closeAllListas();
        options = document.getElementById("HomeOptions");
        Evento1 = document.getElementById("Evento1");
        Evento2 = document.getElementById("Evento2");
        Evento3 = document.getElementById("Evento3");
        Evento4 = document.getElementById("Evento4");
        Evento5 = document.getElementById("Evento5");

        options.style.height = "";
        Evento1.style.borderTop = "";
        Evento2.style.borderTop = "";
        Evento3.style.borderTop = "";
        Evento4.style.borderTop = "";
        Evento5.style.borderTop = "";
    }
}

function navOpenMenu(){
    navCloseSocial();
    NavCloseHome();
    resetFontSize();

    if(screenWidth > 800){
        document.getElementById("MenuButton").style.width = "0";
        document.getElementById("MenuOptions").style.width = "100%";
        document.getElementById("MenuContainer").style.width = "80%";
        document.getElementById("HomeContainer").style.width = "10%";
        document.getElementById("SocialContainer").style.width = "10%";
    }else{
        let options = document.getElementById("MenuOptions");
        let MenuHome = document.getElementById("MenuHome");
        let MenuAboutUs = document.getElementById("MenuAboutUs");
        let MenuMedia = document.getElementById("MenuMedia");
        let MenuGalery = document.getElementById("MenuGalery");
        let MenuCareers = document.getElementById("MenuCareers");
        let MenuPartners = document.getElementById("MenuPartners");
        let MenuContacts = document.getElementById("MenuContacts");
        if(options.style.height === ""){
            options.style.height = "90vh";
            MenuHome.style.borderTop = "1px solid white";
            MenuAboutUs.style.borderTop = "1px solid white";
            MenuMedia.style.borderTop = "1px solid white";
            MenuGalery.style.borderTop = "1px solid white";
            MenuCareers.style.borderTop = "1px solid white";
            MenuPartners.style.borderTop = "1px solid white";
            MenuContacts.style.borderTop = "1px solid white";
        }else{
            navCloseMenu()
        }
    }
}

function navCloseMenu() {
    if(screenWidth > 800){
        document.getElementById("MenuButton").style.width = "100%";
        document.getElementById("MenuOptions").style.width = "0";
        document.getElementById("MenuContainer").style.width = "10%";
    }else{
        closeAllListas();
        let options = document.getElementById("MenuOptions");
        let MenuHome = document.getElementById("MenuHome");
        let MenuAboutUs = document.getElementById("MenuAboutUs");
        let MenuMedia = document.getElementById("MenuMedia");
        let MenuGalery = document.getElementById("MenuGalery");
        let MenuCareers = document.getElementById("MenuCareers");
        let MenuPartners = document.getElementById("MenuPartners");
        let MenuContacts = document.getElementById("MenuContacts");

        options.style.height = "";
        MenuHome.style.borderTop = "";
        MenuAboutUs.style.borderTop = "";
        MenuMedia.style.borderTop = "";
        MenuGalery.style.borderTop = "";
        MenuCareers.style.borderTop = "";
        MenuPartners.style.borderTop = "";
        MenuContacts.style.borderTop = "";
    }
}


//si el ratón baja cerrar todos
function navCloseAll(){
    if(screenWidth > 800){
        navCloseSocial();
        NavCloseHome();
        navCloseMenu();
        document.getElementById("SocialContainer").style.width = "100%";
        document.getElementById("HomeContainer").style.width = "100%";
        document.getElementById("MenuContainer").style.width = "100%";
    }
    else {
        navCloseSocial();
        NavCloseHome();
        navCloseMenu();
    }
}

let scrollPos = 0;
window.addEventListener('scroll', function() {
    if ((document.body.getBoundingClientRect()).top > scrollPos){
        if(screenWidth > 800){
            NavOpenHome();
        }
    }else{
        if(screenWidth > 800){
            navCloseAll();
            scrollPos = (document.body.getBoundingClientRect()).top;
        }
    }       
});

function redirectPage(location, page, pages) {
    let iframe = document.getElementById('page');
    let iframelocation = iframe.data.substring(0, iframe.data.lastIndexOf('#'));
    if(!iframelocation.endsWith(location)) {
        iframe.data = location + `#${page}-${pages}`;
    } else {
        iframe.contentWindow.slider(page, pages);
    }
}

function redirectTo(url){
    if(screenWidth < 800 || screenWidth === 800){
        navCloseAll();
    }

    history.pushState(null, null, url);
    router();

    arrListas = [
        "Evento1",
        "Evento2",
        "Evento3",
        "Evento4",
        "Evento5",
        "MenuHome",
        "MenuAboutUs",
        "MenuMedia",
        "MenuGalery",
        "MenuCareers",
        "MenuPartners",
        "MenuContacts"
    ];

    for (let lista of arrListas) {
        listaSelect = document.getElementById(lista);
        listaSelect.style.fontSize ="2rem";
    }

}

function openMenu(){
    if(screenWidth > 800){
        navOpenMenu();
    } else { 
        colorsForUrlsInNavBar();
    }
}

function resetFontSize(){
    let Option = document.getElementsByClassName("opcionLista");
    Option = Array.from(Option);
    Option.map(function(element){
        element.style.fontSize = "";
    });
}

function colorsForUrlsInNavBar(){
    //poner todos los campos en azul oscuro
    let ListaOpcion = document.querySelectorAll(".opcionLista");  
    ListaOpcion.forEach((option) => {
        option.style.backgroundColor = "#2065c7";
    });

    //colorear la opción correspondiente a la url de azul claro
    document.getElementById(window.location.pathname).style.backgroundColor = "#2C84FF";

    //COLOREAR LA POSICION DEL MENU PRINCIPAL
    // inicializar todos los campos en azul claro
    let OptionContainer = document.querySelectorAll(".OptionContainer");  
    OptionContainer.forEach((option) => {
        option.style.backgroundColor = "rgb(102, 255, 255)";
    });

    // Encontramos la posición de la segunda aparición de la barra diagonal
    let url = window.location.pathname;
    let posicion = url.indexOf('/', url.indexOf('/') + 1);
            
    // Si se encontró la segunda aparición de la barra diagonal, extraemos el substring
    if (posicion !== -1) {
      url = url.substring(0, posicion);
    }

    url = url.replace(/\//g, '_')
    
    document.querySelector("." + url).style.backgroundColor = "#2C84FF";
}

function openHome(){
    if(screenWidth > 800){
        NavOpenHome(); 
    }else {
        colorsForUrlsInNavBar();

        let Option = document.getElementsByClassName("opcionLista");
            Option = Array.from(Option);
            Option.map(function(element){
                element.style.fontSize = ""; 
            });

        let homeContainer = document.getElementById("HomeContainer");
        if(homeContainer.style.height === "100vh"){
            Option = document.getElementsByClassName("opcionLista");
            Option = Array.from(Option);
            Option.map(function(element){
                element.style.fontSize = "0"; 
            });

            navCloseAll();
        }
    }
}

function redirectToUrl(url) {
    window.location.href = url;
}

function openLista(opcion, posicion){
    if(screenWidth < 800 || screenWidth === 800){
        if(document.getElementById(opcion).style.fontSize !== "2rem"){
            closeAllListas()
            let boton = document.getElementById(opcion);
            boton.style.fontSize = "2rem";
    
            let opcionLista = document.querySelectorAll(".Lista" + opcion);  
            opcionLista.forEach((option) => {
                option.style = posicion;
            });
    
            let ListaOpcion = document.querySelectorAll(".opcionLista" + opcion);  
            ListaOpcion.forEach((option) => {
                if(option.style.paddingTop !== "0.25rem"){
                    option.style.paddingTop = "0.25rem";
                    option.style.paddingBottom = "0.75rem";
                    option.style.borderTop = "1px solid rgb(102, 255, 255)"
                }
            });
        }else{
            closeAllListas()
        }
    }
}

async function closeAllListas(){
    if(screenWidth < 800 || screenWidth === 800){
        arrListas = [
            ".Evento1",
            ".Evento2",
            ".Evento3",
            ".Evento4",
            ".Evento5",
            ".MenuHome",
            ".MenuAboutUs",
            ".MenuMedia",
            ".MenuGalery",
            ".MenuCareers",
            ".MenuPartners",
            ".MenuContacts"
        ];

        for (let lista of arrListas) {
            listaSelect = document.querySelector(lista);
            listaSelect.style.fontSize = "0px";
        }

        let ListaOpcion = document.querySelectorAll(".opcionLista");  
        ListaOpcion.forEach((option) => {
            option.style.paddingTop = "0";
            option.style.paddingBottom = "0";
            option.style.borderTop = "0"
        });
    }
} 

//COSAS QUE HACER
/**
 * Poner las imagenes de los logos
 */


function router(){
    //redirectPage(dirección de la carpeta raiz donde estén alojadas las páginas, página actual, número de páginas)
    if(window.location.pathname == '/world-water-cicling-awards/sponsors'){redirectPage('/pages/world-water-cicling-awards', 4, 5); openHome();}
    if(window.location.pathname == '/world-water-cicling-awards/red-carpet'){redirectPage('/pages/world-water-cicling-awards', 3, 5); openHome();}
    if(window.location.pathname == '/world-water-cicling-awards/tickets'){redirectPage('/pages/world-water-cicling-awards', 2, 5); openHome();}
    if(window.location.pathname == '/world-water-cicling-awards/awardees'){redirectPage('/pages/world-water-cicling-awards', 1, 5); openHome();}
    if(window.location.pathname == '/world-water-cicling-awards/about'){redirectPage('/pages/world-water-cicling-awards', 0, 5); openHome();}

    //water-ebike-champions, sponsors, best-photos, rankings, registration, locations, about
    if(window.location.pathname == '/water-ebike-champions/sponsors'){redirectPage('/pages/water-ebike-champions', 5, 6); openHome();}
    if(window.location.pathname == '/water-ebike-champions/best-photos'){redirectPage('/pages/water-ebike-champions', 4, 6); openHome();}
    if(window.location.pathname == '/water-ebike-champions/rankings'){redirectPage('/pages/water-ebike-champions', 3, 6); openHome();}
    if(window.location.pathname == '/water-ebike-champions/registration'){redirectPage('/pages/water-ebike-champions', 2, 6); openHome();}
    if(window.location.pathname == '/water-ebike-champions/locations'){redirectPage('/pages/water-ebike-champions', 1, 6); openHome();}
    if(window.location.pathname == '/water-ebike-champions/about'){redirectPage('/pages/water-ebike-champions', 0, 6); openHome();}

    // water-cicling-training-center, sponsors, photos, training-centers, about
    if(window.location.pathname == '/water-cicling-training-center/sponsors'){redirectPage('/pages/water-cicling-training-center', 3, 4); openHome();}
    if(window.location.pathname == '/water-cicling-training-center/photos'){redirectPage('/pages/water-cicling-training-center', 2, 4); openHome();}
    if(window.location.pathname == '/water-cicling-training-center/training-centers'){redirectPage('/pages/water-cicling-training-center', 1, 4); openHome();}
    if(window.location.pathname == '/water-cicling-training-center/about'){redirectPage('/pages/water-cicling-training-center', 0, 4); openHome();}

    // test-ride, sponsors, photos, experience-in, about
    if(window.location.pathname == '/test-ride/sponsors'){redirectPage('/pages/test-ride', 3, 4); openHome();}
    if(window.location.pathname == '/test-ride/photos'){redirectPage('/pages/test-ride', 2, 4); openHome();}
    if(window.location.pathname == '/test-ride/experience-in'){redirectPage('/pages/test-ride', 1, 4); openHome();}
    if(window.location.pathname == '/test-ride/about'){redirectPage('/pages/test-ride', 0, 4); openHome();}

    //hall-of-fame, sport-legends, about
    if(window.location.pathname == '/hall-of-fame/sport-legends'){redirectPage('/pages/hall-of-fame', 1, 2); openHome();}
    if(window.location.pathname == '/hall-of-fame/about'){redirectPage('/pages/hall-of-fame', 0, 2); openHome();}

    // <!--home, investors, donations, supporters, influencers, about-->
    if(window.location.pathname == '/home/gallery2'){redirectPage('/pages/home', 5, 6); openMenu()}
    if(window.location.pathname == '/home/gallery1'){redirectPage('/pages/home', 4, 6); openMenu()}
    if(window.location.pathname == '/home/a-new-way'){redirectPage('/pages/home', 3, 6); openMenu()}
    if(window.location.pathname == '/home/innovation'){redirectPage('/pages/home', 2, 6); openMenu()}
    if(window.location.pathname == '/home/world-premiere'){redirectPage('/pages/home', 1, 6); openMenu()}
    if(window.location.pathname == '/home/intro'){redirectPage('/pages/home', 0, 6); openMenu()}

    // <!--media, news, press-release, kit-press, accreditations-->
    if(window.location.pathname == '/media/news'){redirectPage('/pages/media', 2, 3); openMenu()}
    if(window.location.pathname == '/media/press-release'){redirectPage('/pages/media', 1, 3); openMenu()}
    if(window.location.pathname == '/media/accreditations'){redirectPage('/pages/media', 0, 3); openMenu()}

    // <!--gallery, videos, photos-->
    if(window.location.pathname == '/gallery/photos'){redirectPage('/pages/gallery', 0, 1); openMenu()}

    // <!--careers, sponsorship-raisers, promoters, instructors-->
    if(window.location.pathname == '/careers/sponsorship-raisers'){redirectPage('/pages/careers', 2, 3); openMenu()}
    if(window.location.pathname == '/careers/promoters'){redirectPage('/pages/careers', 1, 3); openMenu()}
    if(window.location.pathname == '/careers/instructors'){redirectPage('/pages/careers', 0, 3); openMenu()}

    // <!--partners, sponsors, franchising, donations-->
    if(window.location.pathname == '/partners/donations'){redirectPage('/pages/partners', 2, 3); openMenu()}
    if(window.location.pathname == '/partners/franchising'){redirectPage('/pages/partners', 1, 3); openMenu()}
    if(window.location.pathname == '/partners/sponsors'){redirectPage('/pages/partners', 0, 3); openMenu()}

    // <!--about-us, about-us-->
    if(window.location.pathname == '/about-us/aquatica'){redirectPage('/pages/about-us', 0, 2); openMenu()}
    if(window.location.pathname == '/about-us/the-voice-of'){redirectPage('/pages/about-us', 1, 2); openMenu()}

    // <!--contacts, contacts-->
    if(window.location.pathname == '/contacts/contacts'){redirectPage('/pages/contacts', 0, 2); openMenu()}
    if(window.location.pathname == '/contacts/success'){redirectPage('/pages/contacts', 1, 2 );}

    if(window.location.pathname == '/'){redirectPage('/pages/home', 0, 5); openHome()}

}

window.addEventListener('popstate', function(){router();});

//Desplegar Home Container si la url pone Home
function openHomeToLoadIntro(){
    let url = window.location.href;
    if (url.includes("home")) {
        NavOpenHome();
    }
}
