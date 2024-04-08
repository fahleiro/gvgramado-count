// Defina a data alvo para a contagem regressiva
const targetDate = new Date('2024-12-31T23:59:59').getTime();

// Atualize a contagem regressiva a cada segundo
const countdown = setInterval(function() {
  // Obtenha a data atual
  const now = new Date().getTime();

  // Calcule a diferença entre a data alvo e a data atual
  const difference = targetDate - now;

  // Calcule dias, horas, minutos e segundos restantes
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Atualize o conteúdo da div com a contagem regressiva
  document.getElementById('countdown').innerHTML = `
    <p>${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</p>
  `;

  // Se a contagem regressiva acabou, pare de atualizar
  if (difference < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'A contagem regressiva terminou!';
  }
}, 1000);
