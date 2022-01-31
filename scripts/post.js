// ===========================================================================================
// ---------------------------------------Cadastro de Usuário---------------------------------
// ===========================================================================================

function cadastraUsuario() {
  // Evita que a página recarregue ao submeter o formulário
  event.preventDefault();
  // URL que será usada no método POST para enviar ao servidor criptografado
  let url = "http://192.168.100.66/project/register";
  let nome = document.getElementById("nameSignup");
  let email = document.getElementById("emailSignup");
  let senha = document.getElementById("passwordSignup");
  let generos = document.getElementsByName("radio");

  //   Testando o retorno das variáveis declaradas acima
  //   console.log(nome, email, senha);
  //   generos.forEach((genero) => {
  //     if (genero.checked === true) {
  //       console.log(genero.id);
  //     }
  //   });

  //   Extraindo o genero
  generos.forEach((genero) => {
    if (genero.checked === true) {
      generos = genero.id;
    }
  });

  // Extraindo os valores
  const nomeValor = nome.value;
  const emailValor = email.value;
  const senhaValor = senha.value;
  const generoValor = generos;

  //   verificando novamente o retorno da dos valores dentro do console
  //   console.log(nomeValor, emailValor, senhaValor, generoValor);

  //   Declarando o schema

  const body = {
    name: nomeValor,
    email: emailValor,
    senha: senhaValor,
    sexo: generoValor,
  };

  fazPost(url, body);
}

// ===========================================================================================
// ---------------------------------------Validação de Usuário---------------------------------
// ===========================================================================================

function validaUsuario() {
  // Evita que a página recarregue ao submeter o formulário
  event.preventDefault();
  // URL que será usada no método POST para enviar ao servidor criptografado
  let url = "http://127.0.0.1:5000/users";
  let email = document.getElementById("loginEmail");
  let senha = document.getElementById("passwordLogin");

  const emailValor = email.value;
  const senhaValor = senha.value;

  const body = {
    email: emailValor,
    senha: senhaValor,
  };

  fazPost(url, body);
}

// ===========================================================================================
// ---------------------------------------Envio de JSON---------------------------------
// ===========================================================================================

async function fazPost(url, body) {
  console.log(body);

  const res = await fetch(url, {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  if (res.ok) {
    return await res.json();
  }

  // let request = new XMLHttpRequest();

  // request.open("POST", url, true);

  // Abre o servidor e envia o body para ele
  // content type define o conteúdo do  cabeçalho para dizer o tipo de conteúdo que estamos enviando.
  // request.setRequestHeader("Content-type", "application/json");
  // request.send(JSON.stringify(body));

  //Pra saber o que acontece quando mandamos a informação
  // request.onload = function () {
  // console.log(this.responseText);
  // };

  // return request.responseText;
}

// ===========================================================================================
// ---------------------------------------Clear Inputs---------------------------------
// ===========================================================================================

function clearAll() {
  // Register
  let nomeSignUp = document.getElementById("nameSignup");
  let emailSignup = document.getElementById("emailSignup");
  let senhaSignup = document.getElementById("passwordSignup");
  const registerBtn = document.querySelector("[SignUpSubmit]");

  // Login
  let emailLogin = document.getElementById("loginEmail");
  let senhaLogin = document.getElementById("passwordLogin");
  const loginBtn = document.querySelector("[loginSubmit]");

  nomeSignUp.value = "";
  emailSignup.value = "";
  senhaSignup.value = "";
  emailLogin.value = "";
  senhaLogin.value = "";
  registerBtn.classList.remove("filled");
  loginBtn.classList.remove("filled");
}
