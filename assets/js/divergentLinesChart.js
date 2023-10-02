am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("performance-chart", am4charts.XYChart);
    
    chart.dateFormatter.dateFormat = "MMM YYYY";
    console.log(chart)
    chart.numberFormatter.numberFormat = "#.#%";
    
    // Chart title
    var title = chart.titles.create();
    title.text = "Projected infection dynamics";
    title.fontSize = 20;
    title.paddingBottom = 10;
    
    // Add data
    chart.data = [{
      "date": new Date(2020, 0, 1),
      "observed": 0 / 100,
      "stricter": -50 / 100,
      "navi": 100 / 100
    }, {
      "date": new Date(2020, 1, 1),
      "observed": 0 / 100,
      "stricter": -100 / 100
    }, {
      "date": new Date(2020, 2, 1),
      "observed": 0 / 100
    }, {
      "date": new Date(2020, 3, 1),
      "observed": 0 / 100
    }, {
      "date": new Date(2020, 4, 1),
      "observed": 0 / 100
    }, {
      "date": new Date(2020, 5, 1),
      "observed": 0 / 100,
      "navi": 100 / 100
    }, {
      "date": new Date(2020, 6, 1),
      "observed": 0 / 100,
      "easing": 80 / 100,
      "projection": 100 / 100,
      "stricter": -75 / 100
    }, {
      "date": new Date(2020, 7, 1),
      "easing": 25 / 100,
      "projection": 25 / 100,
      "stricter": 0 / 100
    }, {
      "date": new Date(2020, 8, 1),
      "easing": 25 / 100,
      "projection": 25 / 100,
      "stricter": 50 / 100
    }, {
      "date": new Date(2020, 9, 1),
      "easing": 25 / 100,
      "projection": 50 / 100,
      "stricter": 0 / 100
    }, {
      "date": new Date(2020, 10, 1),
      "easing": 0 / 100,
      "projection": 50 / 100,
      "stricter": 100 / 100
    }, {
      "date": new Date(2020, 11, 1),
      "observed": 0 / 100,
      "easing": 0 / 100,
      "projection": 0 / 100,
      "stricter": 0 / 100,
      "navi": 100 / 100
    }];
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.verticalCenter = "bottom";
    valueAxis.renderer.labels.template.dx = -5;
    valueAxis.renderer.labels.template.dy = 10;
    valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis.title.text = "Number of infections";
    valueAxis.title.marginRight = 5;
    
    // Create series
    function createSeries(field, name, color, dashed) {
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.name = name;
      series.tooltipText = "[bold]{name}[/]\n{dateX}: [b]{valueY}[/]";
      series.strokeWidth = 2;
      series.smoothing = "monotoneX";
      series.stroke = color;
      
      if (dashed) {
        series.strokeDasharray = "5 3";
      }
      
      return series;
    }
    
    createSeries("observed", "Observed", am4core.color("#B1B106"));
    createSeries("easing", "Easing rules", am4core.color("#D68C45"), true);
    createSeries("stricter", "Stricter rules", am4core.color("#2C6E49"), true);
    createSeries("projection", "Projection", am4core.color("#B1B106"), true);
    createSeries("navi", "Navi", am4core.color("black"));
    chart.legend = new am4charts.Legend();
    chart.cursor = new am4charts.XYCursor();
    
    }); // end am4core.ready()