document.addEventListener("DOMContentLoaded", () => {
  /* ========================================================
     1. SISTEMA DE MIRA DE TANQUE MODERNO (FCS RETICLE)
     ======================================================== */
  const tankReticle = document.getElementById("tank-reticle");
  const reticleDot = document.getElementById("reticle-dot");
  const distHud = document.getElementById("dist-hud");

  // Rastreia o movimento do cursor e atualiza os elementos HUD
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    tankReticle.style.left = `${x}px`;
    tankReticle.style.top = `${y}px`;

    reticleDot.style.left = `${x}px`;
    reticleDot.style.top = `${y}px`;
  });

  // Atualização simulada e randômica do telêmetro a laser
  setInterval(() => {
    const distanciaAleatoria = Math.floor(Math.random() * (2600 - 900 + 1)) + 900;
    if (distHud) {
      distHud.textContent = `${distanciaAleatoria}m`;
    }
  }, 2200);

  // Animação de trava de alvo ao clicar
  document.addEventListener("mousedown", () => {
    tankReticle.classList.add("reticle-lock");
  });

  document.addEventListener("mouseup", () => {
    tankReticle.classList.remove("reticle-lock");
  });

  /* ========================================================
     2. MÓDULO INTERATIVO: CONSOLE LOG TÁTICO
     ======================================================== */
  const btnScan = document.getElementById("btnScan");
  const consoleLog = document.getElementById("consoleLog");

  const mensagensRadar = [
    "> Drones de vigilância sincronizados.",
    "> Varredura IR: Nenhum alvo hostil detectado no raio de 3km.",
    "> Atualizando chaves de criptografia neural...",
    "> Enlace DataLink A-10 Thunderbolt reconfigurado com sucesso.",
    "> Frequência de rádio tático: LIMPA."
  ];

  if (btnScan && consoleLog) {
    btnScan.addEventListener("click", () => {
      const msg = mensagensRadar[Math.floor(Math.random() * mensagensRadar.length)];
      const novoParagrafo = document.createElement("p");
      novoParagrafo.textContent = msg;
      consoleLog.appendChild(novoParagrafo);
      consoleLog.scrollTop = consoleLog.scrollHeight;
    });
  }

  /* ========================================================
     3. CONTADOR DE LIKES / REGISTRO DE SUPORTE
     ======================================================== */
  const btnLike = document.getElementById("btnLike");
  const likeCountSpan = document.getElementById("likeCount");

  let totalLikes = 0;

  if (btnLike && likeCountSpan) {
    btnLike.addEventListener("click", () => {
      totalLikes++;

      // Formata em padrão tático com zeros (ex: 001, 002)
      likeCountSpan.textContent = totalLikes.toString().padStart(3, "0");

      // Animação visual de disparo/feedback
      btnLike.classList.add("animacao-disparo");

      setTimeout(() => {
        btnLike.classList.remove("animacao-disparo");
      }, 350);
    });
  }
});
