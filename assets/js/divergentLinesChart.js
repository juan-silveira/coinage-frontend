const dashDados = [{
  "date": new Date(2023, 0, 1),
  "cx": 70 / 100,
  "cflex": 50 / 100,
  "cdi": 50 / 100,
  "force": 50 / 100
}, {
  "date": new Date(2023, 1, 1),
  "cx": 60 / 100,
  "cflex": 55 / 100,
  "cdi": 50 / 100,
  "force": 55 / 100
}, {
  "date": new Date(2023, 2, 1),
  "cx": 60 / 100,
  "cflex": 45 / 100,
  "cdi": 50 / 100,
  "force": 65 / 100
}, {
  "date": new Date(2023, 3, 1),
  "cx": 70 / 100,
  "cflex": 58 / 100,
  "cdi": 50 / 100,
  "force": 70 / 100
}, {
  "date": new Date(2023, 4, 1),
  "cx": 70 / 100,
  "cflex": 66 / 100,
  "cdi": 50 / 100,
  "force": 60 / 100
}, {
  "date": new Date(2023, 5, 1),
  "cx": 80 / 100,
  "cflex": 80 / 100,
  "cdi": 50 / 100,
  "force": 68 / 100
}, {
  "date": new Date(2023, 6, 1),
  "cx": 80 / 100,
  "cflex": 60 / 100,
  "cdi": 50 / 100,
  "force": 70 / 100
}, {
  "date": new Date(2023, 7, 1),
  "cx": 90 / 100,
  "cflex": 40 / 100,
  "cdi": 50 / 100,
  "force": 80 / 100
}, {
  "date": new Date(2023, 8, 1),
  "cx": 90 / 100,
  "cflex": 70 / 100,
  "cdi": 50 / 100,
  "force": 60 / 100
}, {
  "date": new Date(2023, 9, 1),
  "cx": 100 / 100,
  "cflex": 50 / 100,
  "cdi": 50 / 100,
  "force": 50 / 100
}, {
  "date": new Date(2023, 10, 1),
  "cx": 100 / 100,
  "cflex": 20 / 100,
  "cdi": 50 / 100,
  "force": 80 / 100
}, {
  "date": new Date(2023, 11, 1),
  "cx": 110 / 100,
  "cflex": 80 / 100,
  "cdi": 50 / 100,
  "force": 100 / 100
}];

const performance_data = [
  {
    "field": "cx",
    "name": "CoinX",
    "color": "black",
    "dashed": false
  },
  {
    "field": "cflex",
    "name": "Coin Flex",
    "color": "blue",
    "dashed": false
  },
  {
    "field": "cdi",
    "name": "CDI",
    "color": "red",
    "dashed": true
  },
  {
    "field": "force",
    "name": "Force",
    "color": "orange",
    "dashed": false
  }
];

const ftrData = [{
  "date": new Date(2023, 0, 1),
  "ftr": 70 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 1, 1),
  "ftr": 60 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 2, 1),
  "ftr": 60 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 3, 1),
  "ftr": 70 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 4, 1),
  "ftr": 70 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 5, 1),
  "ftr": 80 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 6, 1),
  "ftr": 80 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 7, 1),
  "ftr": 90 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 8, 1),
  "ftr": 90 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 9, 1),
  "ftr": 100 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 10, 1),
  "ftr": 100 / 100,
  "cdi": 50 / 100
}, {
  "date": new Date(2023, 11, 1),
  "ftr": 110 / 100,
  "cdi": 50 / 100
}];

const ftr_data = [
  {
    "field": "ftr",
    "name": "FTR",
    "color": "orange",
    "dashed": true
  },
  {
    "field": "cdi",
    "name": "CDI",
    "color": "black",
    "dashed": false
  }
];

const handleDivergentLinesChart = (id, data, series) => {
  am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance(2023
    var chart = am4core.create(id, am4charts.XYChart);

    chart.numberFormatter.language.locale = am4lang_pt_BR;
    chart.dateFormatter.dateFormat = "MMM YYYY";
    chart.numberFormatter.numberFormat = "#.#%";

    // Chart title
    var title = chart.titles.create();
    // title.text = "Projected infection dynamics";
    title.fontSize = 20;
    title.paddingBottom = 10;

    // Add data
    chart.data = data;

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
    // valueAxis.title.text = "Number of infections";
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

    series.forEach((e,i) => {
      createSeries(series[i].field, series[i].name, am4core.color(series[i].color), series[i].dashed);
    });

    chart.legend = new am4charts.Legend();
    chart.cursor = new am4charts.XYCursor();

  }); // end am4core.ready()
}

handleDivergentLinesChart("performance-chart", dashDados, performance_data);
handleDivergentLinesChart("ftr-divergentChart", ftrData, ftr_data);