document.addEventListener('DOMContentLoaded', () => {
  // 1. Control de Alto Contraste
  const btnContrast = document.getElementById('btn-contrast');
  btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const isContrast = document.body.classList.contains('high-contrast');
    btnContrast.setAttribute('aria-pressed', isContrast);
  });

  // 2. Control de Tamaño de Texto
  const btnTextSize = document.getElementById('btn-text-size');
  let isLargeText = false;
  btnTextSize.addEventListener('click', () => {
    isLargeText = !isLargeText;
    document.documentElement.style.setProperty('--font-size-base', isLargeText ? '1.25rem' : '1rem');
    btnTextSize.textContent = isLargeText ? 'Texto Normal' : 'Aumentar Texto';
  });

  // 3. Validación interactiva del caso práctico
  const btnCheck = document.getElementById('btn-check-answer');
  const feedback = document.getElementById('feedback');

  btnCheck.addEventListener('click', () => {
    const selected = document.querySelector('input[name="bias-option"]:checked');

    if (!selected) {
      feedback.hidden = false;
      feedback.className = 'feedback-box error';
      feedback.textContent = 'Por favor, selecciona una opción antes de verificar.';
      return;
    }

    feedback.hidden = false;
    if (selected.value === 'correct') {
      feedback.className = 'feedback-box success';
      feedback.textContent = '¡Correcto! La IA asignó automáticamente el rol médico al hombre y el rol de enfermería a la mujer, perpetuando un estereotipo de género sin que el prompt lo especificara.';
    } else {
      feedback.className = 'feedback-box error';
      feedback.textContent = 'Incorrecto. Revisa nuevamente la asignación de roles profesionales en la respuesta de la IA.';
    }
  });
});