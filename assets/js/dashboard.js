const changeActive = ({ target }) => {
    // console.log(target.parentNode.childNodes[1, 3, 5, 7, 9])
    target.parentNode.childNodes.forEach((element, i) => {
        if (i % 2 != 0 && i != target.parentNode.childNodes.length)
            element.classList.remove("active")
    });
    target.classList.add("active");
}

let balanceVisibility = true;

const handleVisibility = () => {
    const eye = document.getElementById("eye");
    if (balanceVisibility == true) {
        const hidden = document.querySelectorAll(".balance-hidden");
        for (var i = 0; i < hidden.length; i++) {
            hidden[i].style.display = "block";
        }
        const visible = document.querySelectorAll(".balance-visible");
        for (var i = 0; i < visible.length; i++) {
            visible[i].style.display = "none";
        }
        eye.classList.remove("ion-ios-eye");
        eye.classList.add("ion-ios-eye-off");
        balanceVisibility = false;
    } else {
        const hidden = document.querySelectorAll(".balance-hidden");
        for (var i = 0; i < hidden.length; i++) {
            hidden[i].style.display = "none";
        }
        const visible = document.querySelectorAll(".balance-visible");
        for (var i = 0; i < visible.length; i++) {
            visible[i].style.display = "block";
        }
        eye.classList.remove("ion-ios-eye-off");
        eye.classList.add("ion-ios-eye");
        balanceVisibility = true;
    }
}

// Configurações do gráfico redondo
const handleRadialChart = (id, percent, color, width, fontSize) => {
    
    const radChart = document.getElementById(id);
    radChart.style = "--p: " + percent +"; --c:" + color +"; --w:" + width + "px" +"; font-size:" + fontSize + "px";
    if(id === "dashboard-chart"){
        radChart.innerHTML = `<span class="d-block mt-2 text-center">${percent}%</span><p class="fs-12 text-center">Total Investido</p>`
    } else {
        radChart.innerText = percent + "%";
    }
}

handleRadialChart("dashboard-chart", 55.47, "orange", 120, 20);
handleRadialChart("fi-chart", 41.4, "red", 50, 14);
handleRadialChart("rf-chart", 35.6, "yellow", 50, 14);
handleRadialChart("ac-chart", 13, "blue", 50, 14);
handleRadialChart("rv-chart", 10, "green", 50, 14);


window.addEventListener('load', () => {
    const portfolio = document.querySelector('#portfolio');
    const wallet = document.querySelector('#wallet');
    portfolio.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
    wallet.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
});

window.addEventListener('resize', () => {
    const portfolio = document.querySelector('#portfolio');
    const wallet = document.querySelector('#wallet');
    portfolio.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
    wallet.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
});

document.getElementById("sidebar-menu").addEventListener("click", changeActive);
document.getElementById("visibility-button").addEventListener("click", handleVisibility);
