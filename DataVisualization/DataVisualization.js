
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: [ "2007","2008", "2009", "2010","2011","2012", "2013","2014","2015","2016","2017","2018"],
        datasets: [
            {
                label: "Unit sales (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#F08080","#FFA07A","#98FB98","#DDA0DD","#87CEEB","#FFFF00","#FA8072"],
                data: [1.39,11.63,20.73,39.99,72.29,125.05,150.26,169.22,231.22,211.88,216.76,217.72]
            }
        ]
    },
    options: {
      title: {
        display: true,
        text: 'Student Name:Enhui Jiang, Unit sales of the Apple iPhone worldwide from 2007 to 2018 (in millions)'
      }
    }
});
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
        labels: [ "2007","2008", "2009", "2010","2011","2012", "2013","2014","2015","2016","2017","2018"],
      datasets: [
        {
            label: "Unit sales (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#F08080","#FFA07A","#98FB98","#DDA0DD","#87CEEB","#FFFF00","#FA8072"],
            data: [1.39,11.63,20.73,39.99,72.29,125.05,150.26,169.22,231.22,211.88,216.76,217.72]

        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Student Name:Enhui Jiang, Unit sales of the Apple iPhone worldwide from 2007 to 2018 (in millions)'
      }
    }
});
