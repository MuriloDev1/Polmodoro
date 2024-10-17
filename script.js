var interval;
var timerDuration = 60 * 25; // Duração total do timer em segundos
var timer = timerDuration; // Timer atual
var isPaused = true; // Estado do timer

function updateDisplay(display) {
  var minutes = parseInt(timer / 60, 10);
  var seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = minutes + ":" + seconds;
}

function startTimer(display) {
  if (!isPaused) return; // Se já estiver rodando, não faz nada

  isPaused = false; // Muda o estado para rodando

  interval = setInterval(function () {
    if (--timer < 0) {
      clearInterval(interval); // Para o timer quando chega a zero
      isPaused = true; // Reseta o estado
      document.querySelector("#pauseButton").style.display = "none"; // Esconde o botão de pause
      document.querySelector("#startButton").style.display = "block"; // Mostra o botão iniciar
    }
    updateDisplay(display);
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  isPaused = true; // Muda o estado para pausado
  document.querySelector("#pauseButton").style.display = "none"; // Esconde o botão de pause
  document.querySelector("#startButton").style.display = "block"; // Mostra o botão iniciar
}

window.onload = function () {
  var display = document.querySelector("#timer"); // Elemento para exibir o timer
  updateDisplay(display); // Atualiza o display ao carregar

  document.querySelector("#startButton").onclick = function () {
    startTimer(display);
    this.style.display = "none"; // Esconde o botão iniciar
    document.querySelector("#pauseButton").style.display = "block"; // Mostra o botão de pause
  };

  document.querySelector("#pauseButton").onclick = function () {
    pauseTimer();
  };
};
