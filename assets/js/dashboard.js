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

// Mudar seleção entre radios
const handleRadioIcon = ({ target }) => {
    const mktRadio = document.getElementById("market-radio");
    const crvRadio = document.getElementById("curve-radio");
    const mktTxt = document.getElementById("market-radio-text");
    const crvTxt = document.getElementById("curve-radio-text");
    const mktTitle = document.getElementById("market-card-title");
    const crvTitle = document.getElementById("curve-card-title");

    if (target.parentNode.id == "market-radio-trigger") {
        if (target.classList.contains("ion-ios-radio-button-off")) {
            target.classList.replace("ion-ios-radio-button-off", "ion-ios-radio-button-on")
            crvRadio.classList.replace("ion-ios-radio-button-on", "ion-ios-radio-button-off")
            mktTxt.classList.toggle("text-hidden")
            crvTxt.classList.toggle("text-hidden")
            mktTitle.classList.toggle("text-hidden")
            crvTitle.classList.toggle("text-hidden")
        }
    } else {
        if (target.classList.contains("ion-ios-radio-button-off")) {
            target.classList.replace("ion-ios-radio-button-off", "ion-ios-radio-button-on")
            mktRadio.classList.replace("ion-ios-radio-button-on", "ion-ios-radio-button-off")
            mktTxt.classList.toggle("text-hidden")
            crvTxt.classList.toggle("text-hidden")
            mktTitle.classList.toggle("text-hidden")
            crvTitle.classList.toggle("text-hidden")
        }
    }
}

// Mudar posição padrão
const handleChangePosition = () => {

    const mktTxt = document.getElementById("market-radio-text");
    const crvTxt = document.getElementById("curve-radio-text");
    const mktTitle = document.getElementById("market-card-title");
    const crvTitle = document.getElementById("curve-card-title");
    const mktRadio = document.getElementById("market-radio");
    const crvRadio = document.getElementById("curve-radio");

    if (crvTitle.classList.contains("text-hidden")) {
        mktRadio.classList.replace("ion-ios-radio-button-on", "ion-ios-radio-button-off")
        crvRadio.classList.replace("ion-ios-radio-button-off", "ion-ios-radio-button-on")
        mktTxt.classList.toggle("text-hidden")
        crvTxt.classList.toggle("text-hidden")
        mktTitle.classList.toggle("text-hidden")
        crvTitle.classList.toggle("text-hidden")
    } else {
        mktRadio.classList.replace("ion-ios-radio-button-off", "ion-ios-radio-button-on")
        crvRadio.classList.replace("ion-ios-radio-button-on", "ion-ios-radio-button-off")
        mktTxt.classList.toggle("text-hidden")
        crvTxt.classList.toggle("text-hidden")
        mktTitle.classList.toggle("text-hidden")
        crvTitle.classList.toggle("text-hidden")
    }
}

// Configurações do gráfico redondo
const handleRadialChart = (id, percent, color, width, fontSize) => {

    const radChart = document.getElementById(id);
    radChart.style = "--p: " + percent + "; --c:" + color + "; --w:" + width + "px" + "; font-size:" + fontSize + "px";
    if (id === "dashboard-chart" || id === "portfolio-chart") {
        radChart.innerHTML = `<span class="d-block mt-2 text-center">${percent}%</span><p class="fs-12 text-center">Total Investido</p>`
    } else {
        radChart.innerText = percent + "%";
    }
}


handleRadialChart("fi-chart", 23.8, "red", 50, 14);
handleRadialChart("rf-chart", 16.4, "yellow", 50, 14);
handleRadialChart("ac-chart", 11, "blue", 50, 14);
handleRadialChart("rv-chart", 2.7, "green", 50, 14);

window.addEventListener('load', () => {
    const portfolio = document.querySelector('#portfolio');
    const rentabilidade = document.querySelector('#rentabilidade-table');
    portfolio.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
    rentabilidade.classList.toggle('table-responsive', window.matchMedia('(max-width:650px)').matches);
});

window.addEventListener('resize', () => {
    const portfolio = document.querySelector('#portfolio');
    const rentabilidade = document.querySelector('#rentabilidade-table');
    portfolio.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
    rentabilidade.classList.toggle('table-responsive', window.matchMedia('(max-width:650px)').matches);
});

document.getElementById("visibility-button").addEventListener("click", handleVisibility);
document.getElementById("market-radio-trigger").addEventListener("click", handleRadioIcon);
document.getElementById("curve-radio-trigger").addEventListener("click", handleRadioIcon);
document.getElementById("market-radio-toggler").addEventListener("click", handleChangePosition);
document.getElementById("curve-radio-toggler").addEventListener("click", handleChangePosition);
