var start = function() {

    var btnInscrever = document.querySelector("#cta-1");
    btnInscrever.addEventListener("click", function(e) {
        window.open('https://matchbox.digital/estagio-fcb-brasil-2021-inscricao');
    })

    var btnInscreverFinal = document.querySelector("#cta-final");
    btnInscreverFinal.addEventListener("click", function(e) {
        window.open('https://matchbox.digital/estagio-fcb-brasil-2021-inscricao');
    })


    window.addEventListener("scroll", function(e) {
        if (window.scrollY > 150) {
            document.querySelector(".navbar").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        } else {
            document.querySelector(".navbar").style.backgroundColor = "#0e3aebc4";
        }
    })

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
}

window.addEventListener("load", start());