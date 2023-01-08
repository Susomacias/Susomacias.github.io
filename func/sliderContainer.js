function frameTouchMove(ev, page, pages) {
    if(ev.touches.length == 1) {
        let position = ev.touches[0].pageX-window.pageXOffset;

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
            slider(page+1, pages);
            localStorage.removeItem("positionArray");
        }

        if(positionArray2[0] - positionArray2[positionArray2.length-1] < -50){
            slider(page-1, pages);
            localStorage.removeItem("positionArray");
        }

        setTimeout(function(){
            localStorage.removeItem("positionArray");
        }, 1000);
    }
}

function slider(page, pages) {
    let canvas = 100/pages;
    let slice = canvas*page;

    if(pages != page &&
       page >= 0 ){
        let sliderContainer = document.getElementById("sliderContainer");
        sliderContainer.style.transform = "translateX(-"+slice+"%)";
    }
}

function router() {
    let page = Number(document.location.hash.substring(1,2));
    let pages = Number(document.location.hash.substring(3));
    slider(page, pages);

    let urlActual = window.top.window.top.location.pathname;
    buttonSliderSelect(urlActual);
}

function changeUrl(url, page, pages){
    slider(page, pages);
    window.top.history.pushState(null, null, url);
    buttonSliderSelect(url);
}

function buttonSliderSelect(button){
    let buttonSelect = document.getElementById(button);

    let buttons = document.getElementsByClassName("buttonSlider");
    buttons = Array.from(buttons);
    buttons.map(function(element){
        element.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    });

    buttonSelect.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}