// Função para atualizar a cidade na página
    function updateCity(city) {
      const userCityElement = document.getElementById("user-city");
      userCityElement.textContent = city;
    }

    // Faz uma requisição para ipinfo.io para obter informações de geolocalização
    fetch("https://ipinfo.io?token=add1bc3d79679c")
      .then(response => response.json())
      .then(data => {
        updateCity(data.city);
      })
      .catch(error => {
        console.error("Erro ao obter informações de localização:", error);
        updateCity("Localização desconhecida");
      });


// Data e hora de término da oferta (substitua com a sua data e hora desejada)
    const offerEndTime = new Date('2023-09-01T23:59:59').getTime();

    // Atualiza a contagem regressiva a cada segundo
    const countdownInterval = setInterval(function() {
        const currentTime = new Date().getTime();

        if (currentTime >= offerEndTime) {
            // Oferta expirada
            clearInterval(countdownInterval);
            document.getElementById('timer').innerHTML = 'Valor Promocional Acabou!';
        } else {
            const timeLeft = offerEndTime - currentTime;
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Atualiza os elementos HTML com os valores da contagem regressiva
            document.querySelector('.minutes').textContent = minutes;
            document.querySelector('.seconds').textContent = seconds;
        }
    }, 1000); // Atualiza a cada segundo

const counterElement = document.getElementById('counterValue');
        let currentValue = 80;

        function updateCounter() {
            const randomChange = Math.random() < 0.5 ? -12 : 0; // Aleatoriamente diminuir 7 a cada atualização

            currentValue += randomChange;
            if (currentValue < 80) {
                currentValue = 80;
            }

            if (currentValue % 5 === 0) {
                currentValue += Math.floor(Math.random() * (101 - 80 + 1)) + 5; // Aumentar entre 80 e 400 a cada 4 vendas
            }

            counterElement.textContent = currentValue;

            setTimeout(updateCounter, Math.random() * 7000 + 1000); // Atualizar a cada 1-4 segundos
        }

        updateCounter(); // Iniciar a contagem