window.addEventListener("load", function() {
    this.document.getElementById('enviar-mensagem').addEventListener('click', function() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem && document.getElementById('contactForm').checkValidity()) {
            if(nome.split(' ').length < 2) {
                alert('Por favor, insira seu nome completo.');
                return;
            }
            
            alert(`Mensagem enviada com sucesso!`);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
})