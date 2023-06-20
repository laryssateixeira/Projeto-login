/*
codigo de validação de formulario de login
*/
function Validar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    
    if(!email|| !senha){
        alert("campo de preenchimento obrigatorio.favor preencher");
    }else{
        alert("campos preenchidos com sucesso");
    }
}

