const dadosPie = [{
    "products": "Renda Fixa",
    "share": 15.86,
    "color": am4core.color("yellow")
}, {
    "products": "Renda Variável",
    "share": 2.61,
    "color": am4core.color("green")
}, {
    "products": "Fundos Imobiliários",
    "share": 22.96,
    "color": am4core.color("red")
}, {
    "products": "Ações",
    "share": 10.59,
    "color": am4core.color("blue")
}, {
    "products": "Não Investido",
    "share": 44.54,
    "color": am4core.color("#ccc")
}];

const handlePieChart = (id, data) => {
    am4core.ready(function () {

        // License begin
        am4core.addLicense("ch-custom-attribution");

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create(id, am4charts.PieChart);

        // Add data
        chart.data = data;

        // Set inner radius
        chart.innerRadius = am4core.percent(70);

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.ticks.template.disabled = true;
        pieSeries.labels.template.disabled = true;
        pieSeries.dataFields.value = "share";
        pieSeries.dataFields.category = "products";
        pieSeries.slices.template.propertyFields.fill = "color";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

    }); // end am4core.ready()
}

handlePieChart("dashboard-chart", dadosPie);
handlePieChart("total-invested-chart", dadosPie);
handlePieChart("wallet-chart", dadosPie);