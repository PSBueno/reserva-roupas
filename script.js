
function gerarCalendario(id) {
  const calendario = document.getElementById(id);
  const diasMes = 30;
  for (let i = 1; i <= diasMes; i++) {
    const span = document.createElement("span");
    span.className = "dia";
    span.innerText = i;
    // Alterna entre disponível e indisponível
    if (i % 2 === 0) {
      span.classList.add("disponivel");
    } else {
      span.classList.add("indisponivel");
    }
    calendario.appendChild(span);
  }
}

for (let i = 1; i <= 6; i++) {
  gerarCalendario("calendario" + i);
}
