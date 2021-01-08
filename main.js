var start = function() {

    var btnInscrever = document.querySelector(".btn-inscrever");
    btnInscrever.addEventListener("click", function(e) {
        window.open('https://google.com');
    })
}

window.addEventListener("load", start());