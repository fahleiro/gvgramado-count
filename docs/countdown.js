// Função para fazer as letras caírem aleatoriamente
function scatterLetters() {
  const title = document.getElementById('title');
  const titleText = title.innerText;
  const letters = titleText.split('');

  title.innerHTML = '';

  letters.forEach(letter => {
    const span = document.createElement('span');
    span.innerText = letter;
    span.style.position = 'absolute';
    span.style.left = Math.random() * window.innerWidth + 'px';
    span.style.top = Math.random() * window.innerHeight + 'px';
    span.style.color = 'white';
    span.style.transition = '1s';
    document.body.appendChild(span);

    setTimeout(() => {
      span.style.left = title.offsetLeft + 'px';
      span.style.top = title.offsetTop + 'px';
      span.style.color = 'transparent';
    }, 100);
  });
}

// Chame a função para fazer as letras caírem
scatterLetters();

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
    <div class="block">${days}</div>
    <div class="block">${hours}</div>
    <div class="block">${minutes}</div>
    <div class="block">${seconds}</div>
  `;

  // Se a contagem regressiva acabou, pare de atualizar
  if (difference < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'A contagem regressiva terminou!';
  }
}, 1000);
