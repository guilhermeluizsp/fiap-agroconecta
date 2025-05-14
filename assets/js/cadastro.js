document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCadastro");
  
    form.addEventListener("submit", function (event) {
      const senha = document.getElementById("senha").value;
      const confirmarSenha = document.getElementById("confirmarSenha").value;
  
      if (senha !== confirmarSenha) {
        document.getElementById("confirmarSenha").setCustomValidity("As senhas não coincidem.");
      } else {
        document.getElementById("confirmarSenha").setCustomValidity("");
      }
  
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      form.classList.add("was-validated");
    });
  });