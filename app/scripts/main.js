google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = new google.visualization.DataTable();

    data.addColumn('number', 'Lat');
    data.addColumn('number', 'Long');
    data.addColumn('number', 'Value');
    data.addColumn({type:'string', role:'tooltip'});
    data.addRows([[41.151636,-8.569336,0,'tooltip']]);
    data.addRows([[ 39.059575,-98.789062,0,'tooltip']]);

    var options = {
        projection: 'kavrayskiy-vii',
        legend: 'none', 
        datalessRegionColor: '#C0C0C0',
        backgroundColor: {
            fill: 'transparent',
            stroke: '#FFF',
            strokeWidth: 0
        },
        colorAxis: {
            minValue: 0,
            maxValue: 0,
            colors: ['#214887']
        },
        tooltip: {
            textStyle: {
                color: '#444444'
            }
        },
        displayMode: 'markers', 
        enableRegionInteractivity: 'true', 
        resolution: 'countries',
        region: 'world',
        sizeAxis: {minValue: 1, maxValue: 1, minSize: 5, maxSize: 5},
        keepAspectRatio: true,
    };
    var chart = new google.visualization.GeoChart(document.getElementById('fa-widget-minimap-canvas')); 
    chart.draw(data, options);
}
