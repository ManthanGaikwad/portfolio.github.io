

AOS.init();
  
//header scroll

let nav = document.querySelector('.navbar');

window.onscroll = function(){
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled")
    } else {
        nav.classList.remove("header-scrolled")

    }
}


//nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse')
navbar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show')
    })
})


//download btn
const downloadBtn = document.querySelector(".download");

        const fileLink =
            "https://drive.google.com/file/d/1TR_Cvo-hl5RBQgOij-Uq7r9CnDbGDOPQ/view?usp=sharing";

        const initTimer = () => {
            if (downloadBtn.classList.contains("disable-timer")) {
                return (location.href = fileLink);
            }

            let timer = downloadBtn.dataset.timer;
            // console.log(timer);
            downloadBtn.classList.add("timer");
            downloadBtn.innerHTML = `Your file will download in <b> ${timer} </b> seconds ... `;

            //
            const initCounter = setInterval(() => {
                //console.log('hello');
                if (timer > 0) {
                    timer--;
                    return (downloadBtn.innerHTML = `Your file will download in <b> ${timer} </b> seconds ... `);
                }
                // console.log('cleared');
                clearInterval(initCounter);

                location.href = fileLink;
                downloadBtn.textContent = "Your file is downloading...";

                setTimeout(() => {
                    downloadBtn.classList.replace("timer", "disable-timer");
                    downloadBtn.innerHTML = ` <button class="btn btn-primary">
                                            <i class="fa-solid fa-download"> Download Again</i>
                                         </button>`;
                }, 3000);
            }, 1000);
        };

        downloadBtn.addEventListener("click", initTimer);