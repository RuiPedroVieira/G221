

   /* var ctx = document.getElementById('chartContainer').getContext('2d');
    var myChart = new Chart(ctx, {
        */

    
       window.onload = function () {


        var chart = new CanvasJS.Chart("patrocinadores", {
            animationEnabled: true,
            title:{
                text: "Ganhos Patrocinadores",
                color: "#c6d8af",

                
                
            },	
            axisY: {
                title: "Ganho Total",
                titleFontColor: "#917854",
                lineColor: "#917854",
                labelFontColor: "#917854",
                tickColor: "#917854"
            },
            axisY2: {
                title: "Lucro",
                titleFontColor: "#d4c685",
                lineColor: "#d4c685",
                labelFontColor: "#d4c685",
                tickColor: "#d4c685"
            },	
            toolTip: {
                shared: true
            },
            legend: {
                cursor:"pointer",
                itemclick: toggleDataSeries
            },
            data: [{
                color: "#917854",
                type: "column",
                name: "Ganho Total",
                legendText: "Ganho Total",
                showInLegend: true, 
                dataPoints:[
                    { label: "Janeiro", y: 150.21 },
                    { label: "Fevereiro", y: 200.25 },
                    { label: "Março", y: 157.20 },
                    { label: "Abril", y: 148.77 },
                    { label: "Maio", y: 206.50 },
                    { label: "Junho", y: 400.9 },
                    { label: "Julho", y: 500.68 },
                    { label: "Agosto", y: 650.70 },
                    { label: "Setembro", y: 340.78 },
                    { label: "Outubro", y: 270.8 },
                    { label: "Novembro", y: 133.8 },
                    { label: "Dezembro", y: 163.7 },

                ]
            },
            {   color:"#d4c685",
                type: "column",	
                name: "Lucro",
                legendText: "Lucro",
                axisYType: "secondary",
                showInLegend: true,
                dataPoints:[
                    { label: "Janeiro", y: 100.21 },
                    { label: "Fevereiro", y: 120.25 },
                    { label: "Março", y: 130.20 },
                    { label: "Abril", y: 100.77 },
                    { label: "Maio", y: 140.70 },
                    { label: "Junho", y: 300.9 },
                    { label: "Julho", y: 440.7 },
                    { label: "Agosto", y: 530.6 },
                    { label: "Setembro", y: 256.0 },
                    { label: "Outubro", y: 200.8} ,
                    { label: "Novembro", y: 90.9 },
                    { label: "Dezembro", y: 97.8 },
                ]
            }]
        });
        chart.render();
        
        
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
                    { label: "Janeiro", y: 150.21 },
                    { label: "Fevereiro", y: 200.25 },
                    { label: "Março", y: 157.20 },
                    { label: "Abril", y: 148.77 },
                    { label: "Maio", y: 206.50 },
                    { label: "Junho", y: 400.9 },
                    { label: "Julho", y: 500.68 },
                    { label: "Agosto", y: 650.70 },
                    { label: "Setembro", y: 340.78 },
                    { label: "Outubro", y: 270.8 },
                    { label: "Novembro", y: 133.8 },
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
                    { label: "Janeiro", y: 100.21 },
                    { label: "Fevereiro", y: 120.25 },
                    { label: "Março", y: 130.20 },
                    { label: "Abril", y: 100.77 },
                    { label: "Maio", y: 140.70 },
                    { label: "Junho", y: 300.9 },
                    { label: "Julho", y: 440.7 },
                    { label: "Agosto", y: 530.6 },
                    { label: "Setembro", y: 256.0 },
                    { label: "Outubro", y: 200.8} ,
                    { label: "Novembro", y: 90.9 },
                    { label: "Dezembro", y: 97.8 },
                ]
            }]
        });
        chart.render();

        var chart = new CanvasJS.Chart("espacos", {
            animationEnabled: true,
            title:{
                text: "Ganhos Espaços"
                
            },	
            axisY: {
                title: "Ganho Total",
                titleFontColor: "#F0F66E",
                lineColor: "#F0F66E",
                labelFontColor: "#F0F66E",
                tickColor: "#F0F66E"
            },
            axisY2: {
                title: "Lucro",
                titleFontColor: "#68A357",
                lineColor: "#68A357",
                labelFontColor: "#68A357",
                tickColor: "#68A357"
            },	
            toolTip: {
                shared: true
            },
            legend: {
                cursor:"pointer",
                itemclick: toggleDataSeries
            },
            data: [{
                color: "#F0F66E",
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
            {   color:"#68A357",
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


        function toggleDataSeries(e) {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
        }
        
        

        function toggleDataSeries(e) {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
        }
        
        
