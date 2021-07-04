
let loginCaptu = "";
let senhaCaptu = "";

function verifique(){
    const loginvalido = "Daniel Nogueira";
    const senhavalida = "Sq1359#..!";

    loginCaptu = document.getElementById("Login").value;
    senhaCaptu = document.getElementById("Senha").value;
    if(loginCaptu == null || senhaCaptu == null){
        document.getElementById("erroLog").innerHTML = "PREENCHA TODOS OS DADOS!";
    }else{

        if(loginCaptu == loginvalido){
            if(senhaCaptu == senhavalida){
                location.href="/site/home.html";
            }else{
                document.getElementById("erroLog").innerHTML = "SUA SENHA ESTÁ INVALIDA";
            }
        }else{
            document.getElementById("erroLog").innerHTML = "SEU LOGIN ESTÁ INCORRETO";
        }
    }
    
};