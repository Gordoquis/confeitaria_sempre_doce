function validarLogin(){
    // Dados do usuario
    const email = document.getElementById('email')
    const password=document.getElementById('password')

    //acessar a lista do locar storage
    let lista=window.localStorage.getItem('usuarios')

    //fazer o parse
    lista =JSON.parse(lista)
    //controlar  o erro do login
    let logado =false

    //verificar se o usuario esta na lista e se a senha esta certa

    for(let i=0; i < lista.length; i++){
        const usuario= lista[i]
        const emailLista=usuario.email
        const passwordLista=usuario.password

        if (emailLista == email.value) {
            //comparar as senhas 
            if (passwordLista == password.value) {
                alert('Sucesso, você está logado!')
                logado=true
                break
               
            } else {
                logado=false
            }
        } else {
            logado=false
        }
    }
    //mostra a msg de não logado    
    if(logado==false){
        alert('Login inválido')
    }else{
         //vai para a pagina home
                window.location.href='../../pages/home.admin.html'
    }
}