document.querySelectorAll('button[data-id]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.disabled) return;

    // Marcar como aprobado
    btn.classList.add('aprobado');
    btn.disabled = true;

    // Desbloquear cursos relacionados
    const desbloquea = btn.getAttribute('data-desbloquea');
    if (desbloquea) {
      const ids = desbloquea.split(',');
      ids.forEach(id => {
        const target = document.querySelector(`button[data-id="${id}"]`);
        if (target) {
          target.disabled = false;
        }
      });
    }
  });
});
