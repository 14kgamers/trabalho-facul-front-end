const imagem = document.getElementById("imagem");

  imagem.addEventListener("mouseover", function() {
    this.setAttribute("src", "foto1.png");
    this.style.width = "984px";   // aumenta a largura
    this.style.height = "554px";  // aumenta a altura
  });

  imagem.addEventListener("mouseout", function() {
    this.setAttribute("src", "imagem1.avif");
    this.style.width = "984px";   // volta ao tamanho original
    this.style.height = "554px";
  });

  const imagem1 = document.getElementById("imagem1");

  imagem1.addEventListener("mouseover", function() {
    this.setAttribute("src", "foto2.png");
    this.style.width = "984px";   // aumenta a largura
    this.style.height = "554px";  // aumenta a altura
  });

  imagem1.addEventListener("mouseout", function() {
    this.setAttribute("src", "imagem2.avif");
    this.style.width = "984px";   // volta ao tamanho original
    this.style.height = "554px";
  });

  document.getElementById('cadastro-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('cadastro-form').style.display = 'block';
});

document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Cadastro enviado com sucesso para: ${email}`);
    document.getElementById('cadastro-form').style.display = 'none';
    this.reset(); // limpa o formulário
});