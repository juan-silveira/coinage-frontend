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

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
chart.data = [{
    "products": "FTR",
    "share": 501.9,
    "color": am4core.color("#FCD535")
}, {
    "products": "IMB",
    "share": 301.9,
    "color": am4core.color("#0f8f62")
}, {
    "products": "LOC",
    "share": 201.1
}, {
    "products": "JUD",
    "share": 50
}];

const handleLoadPieChart = () => {
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "share";
    pieSeries.dataFields.category = "products";
    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.innerRadius = am4core.percent(75);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;

    var rgm = new am4core.LinearGradientModifier();
    rgm.brightnesses.push(0, - 0.4);
    pieSeries.slices.template.fillModifier = rgm;

    var rgm2 = new am4core.LinearGradientModifier();
    rgm2.brightnesses.push(0, - 0.4);
    pieSeries.slices.template.tooltipText = "{category}: {value.percent.formatNumber('#.#')}%";
    pieSeries.slices.template.strokeModifier = rgm2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.strokeWidth = 1;
    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";

    pieSeries.slices.template.events.on("validated", function (event) {
        var gradient = event.target.fillModifier.gradient
        gradient.rotation = event.target.middleAngle + 90;

        var gradient2 = event.target.strokeModifier.gradient
        gradient2.rotation = event.target.middleAngle + 90;
    })
}

window.addEventListener('load', () => {
    const portfolio = document.querySelector('#portfolio');
    const wallet = document.querySelector('#wallet');
    portfolio.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
    wallet.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
    handleLoadPieChart();
});

window.addEventListener('resize', () => {
    const portfolio = document.querySelector('#portfolio');
    const wallet = document.querySelector('#wallet');
    portfolio.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
    wallet.classList.toggle('table-responsive', window.matchMedia('(max-width:500px)').matches);
});

document.getElementById("sidebar-menu").addEventListener("click", changeActive);
document.getElementById("visibility-button").addEventListener("click", handleVisibility);
