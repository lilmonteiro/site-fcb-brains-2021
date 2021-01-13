var start = function() {

    var btnInscrever = document.querySelector(".btn-inscrever");
    btnInscrever.addEventListener("click", function(e) {
        window.open('https://google.com');
    })

    window.addEventListener("scroll", function(e) {
        if(window.scrollY > 150){
            document.querySelector(".navbar").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        }else{
            document.querySelector(".navbar").style.backgroundColor = "#0e3aebc4";
        }
    })
}

window.addEventListener("load", start());
