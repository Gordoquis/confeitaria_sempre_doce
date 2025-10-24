function adicionarPedido(){
    const pedido= document.getElementById('pedido')
    const nome= document.getElementById('nome')
    const data_fim= document.getElementById('data_fim')
    const qntde= document.getElementById('qntd')
    const tel= document.getElementById('telefone')
    const info=document.getElementById('info-add')

    const end= `${data_fim.value}`

    const comprimissoCalendario ={
        title:nome.value,
        pedido: pedido.value,
        quantidade: qntde.value,
        numero: tel.value,
        info:info,
        start:end
    }


    let pedidoLS= window.localStorage.getItem('pedido')

    if(pedidoLS== undefined){
        //nao exixte a lista no Local Storage
        pedidoLS= []
    }else{
        //exixte no LS
        pedidoLS=JSON.parse(pedidoLS)
    }
    //salva no LS
    pedidoLS.push(comprimissoCalendario)
    window.localStorage.setItem('pedido', JSON.stringify(pedidoLS))

    alert('Pedido cadastrado com sucesso (¬‿¬)')
}

