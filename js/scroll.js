document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScroll = 0; // Armazena a última posição de rolagem

    // Função para controlar a visibilidade do header
    function handleScroll() {
        const currentScroll = window.scrollY; // Posição atual de rolagem

        if (currentScroll <= 0) {
            // Se estiver no topo da página, mostra o header
            header.classList.remove('hide');
            header.classList.add('show');
        } else if (currentScroll > lastScroll) {
            // Se estiver rolando para baixo, esconde o header
            header.classList.remove('show');
            header.classList.add('hide');
        } else {
            // Se estiver rolando para cima, mostra o header
            header.classList.remove('hide');
            header.classList.add('show');
        }

        lastScroll = currentScroll; // Atualiza a última posição de rolagem
    }

    // Adiciona o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    // Executa a função uma vez para definir o estado inicial
    handleScroll();
});