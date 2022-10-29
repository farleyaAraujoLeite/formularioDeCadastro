function validaEmail(){

    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const email = document.querySelector("#email").value;
    if(name || age || email != ""){
        alert(`Bem vindo ${name}, cadastro realizado com sucesso!`);
    } else {
        alert("Todos os campos são de preenchimento obrigatório.")
    }

}
