const API_URL = 'https://fifagama.herokuapp.com/fifa19/0/10';

fetch(API_URL)
.then(response => response.json())
.then(result => {
        console.log(result);
        console.log(result.filter((item)=> item.data.Potential === '93'));

        const dados = result.filter((item)=> item.data.Potential === '93')
        console.log(dados.length);
        
        const idadeJogador = result.filter((item) => item.data.Idade )

        // const maior = Math.max.apply(null, meuArray );
        // document.getElementById( 'resultado' ).innerHTML = maior;

        
        var ctx = document.getElementById('myChart').getContext('2d');
        var cty = document.getElementById('myChart2').getContext('2d');


        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: result.map(item => item.data.Name),
                datasets: [{
                    label: 'Jogadores Contagem',
                    data: result.map(item => item.data.Penalties),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
                
            }
        });

        var myChart2 = new Chart(cty, {
            type: 'bar',
            data: {
                labels: ['Conta idade jogador'],
                datasets: [{
                    label: 'Análise geral',
                    data: [10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
                
            }
        });

    }

);









        