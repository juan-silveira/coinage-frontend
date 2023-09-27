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
        document.getElementById("balance-hidden").style.display = "block";
        document.getElementById("balance").style.display = "none";
        document.getElementById("chart-container").style.display = "none";
        eye.classList.remove("ion-ios-eye");
        eye.classList.add("ion-ios-eye-off");
        balanceVisibility = false;
    } else {
        document.getElementById("balance-hidden").style.display = "none";
        document.getElementById("balance").style.display = "block";
        document.getElementById("chart-container").style.display = "block";
        eye.classList.remove("ion-ios-eye-off");
        eye.classList.add("ion-ios-eye");
        balanceVisibility = true;
    }
}

window.addEventListener('load', (event) => {
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
