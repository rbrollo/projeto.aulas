const usuarioCadastro = { usuario: "adimin", senha: "123" };

function login() {
    const usuarioForm = document.getElementById("usuario").value;
    const senhaForm = document.getElementById("senha").value;

    if (
      usuarioForm === usuarioCadastro.usuario &&
      senhaForm === usuarioCadastro.senha
   ) {
    alert("Login bem-sucedido");
    window.open("login.html");
   } else {
    alert("Usuario ou senha incorretos.");
   }
}

var carregarDadosCard = () => {
    const numAlunos = alunos.length;
    const card1 = document.querySelector(".card1");
    card1.innerHTML = 'Alunos: |${numAlunos}';
    const numProfessores = "10";
    const card2 = document.querySelector(".card2");
    card2.innerHTML = 'Professores: ${numProfessores}';
};