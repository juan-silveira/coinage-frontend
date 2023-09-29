am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("pieChartdiv", am4charts.PieChart);

    // Add data
    chart.data = [{
        "products": "Renda Fixa",
        "share": 356,
        "color": am4core.color("yellow")
    }, {
        "products": "Renda Variável",
        "share": 100,
        "color": am4core.color("green")
    }, {
        "products": "Fundos Imobiliários",
        "share": 414,
        "color": am4core.color("red")
    }, {
        "products": "Ações",
        "share": 130,
        "color": am4core.color("blue")
    }];

    // Set inner radius
    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "share";
    pieSeries.dataFields.category = "products";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;

    var rgm = new am4core.LinearGradientModifier();
    rgm.brightnesses.push(0, - 0.4);

    var rgm2 = new am4core.LinearGradientModifier();
    rgm2.brightnesses.push(0, - 0.4);

    pieSeries.slices.template.fillModifier = rgm;
    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.slices.template.tooltipText = "{category}: {value.percent.formatNumber('#.#')}%";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.strokeModifier = rgm2;

    // This creates legends under the chart
    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

}); // end am4core.ready()