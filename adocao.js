document.getElementById("FormularioAdoção").addEventListener("submit", function (e) {

    let nome = document, getElementById("nome").value;
    let email = document, getElementById("email").value;
    let Telefone = document, getElementById("Telefone").value;
    let CPF = document, getElementById("CPF").value;
    let Idade = document, getElementById("Idade").value;
    let Cidade = document, getElementById("Cidade").value;
    let moradia = document, getElementById("moradia").value;
    let nome = document, getElementById("nome").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let permição = document.getElementById("permição").checked;
    let seguro = document.getElementById("seguro").checked;
    let financeiro = document.getElementById("financeiro").checked;
    let impulso = document.getElementById("impulso").checked;
    let termo = document.getElementById("termo").checked;

    let cpfCadastrado = ["125678900", "11111111111"]

    if (nome.lenght < 3) return alert("Nome Inválido");
    if (!email.includes("@")) return alert("Email Inválido");
    if (telefone.length < 8) return alert("Telefone Inválido");
    if (cpf == "") return alert("CPF Obrigatório");
    if (cpfCadastrados.includes(cpf)) return alert("CPF já cadastrado");
    if (idade < 18) return alert("Deve ser maior de 18!")
    if (cidade == "") return alert("Cidade Obrigatório");
    if (moradia == "") return alert("Moradia");
    if (!quintal) return alert("Informe sobre Quintal!");
    if (!pet) return alert("Informe se ja teve pet!");
    if (horas == "" || isNaN(horas)) return alert("Horas Inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto!");
    if (!termo) return alert("Aceite os termos para a adoção!");

    if (moradia == "apartmento" && quintal.value == "sim") {
        return alert("!Apartamento não pode ter quintal!");
    }

    if (moradia == "apartmento" && !permite) {
        return alert("!Apartamento não permite animais!");
    }
    if (moradia == "casa" && !seguro) {
        return alert("!Informe se o quintal é seguro!");
    }
    if (horas > 8) {
        return alert("Animal ficará muito tempo sozinho!");
    }
    if (pet.value == "nao") {
        return alert("A ONG poderá acompanhar sua adaptação");
    }

    let motivosInvalidos = ["quero", "porque sim", "porque eu quero"];
    if (motivosInvalidos.includes(motivo.toLowerCase())) {
        return alert("Motivo inválido");
    }

    if (!financeiro) {
        return alert("Sem condições para ter um Pet.");
    }

    let impulsoInvalidos = ["hoje", "não importa", "ontem"];
    if (impulsoInvalidos.includes(impulso.toLowerCase())) {
        return alert("Cuidado com sua decisão!!");
    }


    document.getElementById("resultado").innerHTML =
        "Cadastro realizado com sucesso!<br> " +
        "Nome: " + nome + "<br>" +
        "Email: " + email + "<br>" +
        "Telefone: " + telefone + "<br>" +
        "Cidade: " + cidade;

});



















}