

   /* var ctx = document.getElementById('chartContainer').getContext('2d');
    var myChart = new Chart(ctx, {
        */

    
       window.onload = function () {


        var chart = new CanvasJS.Chart("ganhostotais", {
            animationEnabled: true,
            title:{
                text: "Ganhos Anuais"
        
            },	
            axisY: {
                title: "Ganho Total",
                titleFontColor: "#36602c",
                lineColor: "#36602c",
                labelFontColor: "#36602c",
                tickColor: "#36602c"
            },
            axisY2: {
                title: "Lucro",
                titleFontColor: "#c6d8af",
                lineColor: "#c6d8af",
                labelFontColor: "#c6d8af",
                tickColor: "#c6d8af"
            },	
            toolTip: {
                shared: true
            },
            legend: {
                cursor:"pointer",
                itemclick: toggleDataSeries
            },
            data: [{
                color: "#36602c",
                type: "column",
                name: "Ganho Total",
                legendText: "Ganho Total",
                showInLegend: true, 
                dataPoints:[
                    { label: "Janeiro", y: 266.21 },
                    { label: "Fevereiro", y: 302.25 },
                    { label: "Março", y: 157.20 },
                    { label: "Abril", y: 148.77 },
                    { label: "Maio", y: 101.50 },
                    { label: "Junho", y: 102.7 },
                    { label: "Julho", y: 97.9 },
                    { label: "Agosto", y: 100.1 },
                    { label: "Setembro", y: 97.8 },
                    { label: "Outubro", y: 150.5 },
                    { label: "Novembro", y: 97.8 },
                    { label: "Dezembro", y: 163.7 },

                ]
            },
            {   color:"#c6d8af",
                type: "column",	
                name: "Lucro",
                legendText: "Lucro",
                axisYType: "secondary",
                showInLegend: true,
                dataPoints:[
                    { label: "Janeiro", y: 266.21 },
                    { label: "Fevereiro", y: 302.25 },
                    { label: "Março", y: 157.20 },
                    { label: "Abril", y: 148.77 },
                    { label: "Maio", y: 101.70 },
                    { label: "Junho", y: 120.9 },
                    { label: "Julho", y: 130.7 },
                    { label: "Agosto", y: 140.6 },
                    { label: "Setembro", y: 170.0 },
                    { label: "Outubro", y: 97.8} ,
                    { label: "Novembro", y: 106.9 },
                    { label: "Dezembro", y: 97.8 },
                ]
            }]
        });
        chart.render();
        
        function toggleDataSeries(e) {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
        }
        
        }
