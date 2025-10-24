const calendario = document.getElementById('calendario')

const opcoes = {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    width: 500,
    height: 400,
    headerToolbar: {
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        center:'title',
        left:''
    },

    eventClick: function(info) {
        alert(
            'Nome: ' + info.event.title + '\n' +
            'Produto: ' + info.event.extendedProps.pedido  + '\n' +
            'Quantidade:' + info.event.extendedProps.qntde  + '\n' +
            'Tel: ' + info.event.extendedProps.telefone
        );
   

    }


}

var calendarioJS = new FullCalendar.Calendar(calendario, opcoes)

// Buscar os compromissos no LS
let compromissosLS = window.localStorage.getItem('pedido')
compromissosLS = JSON.parse(compromissosLS) 

// Muitos compromissos, é uma lista
// Então vamos precisar de for  
for(let i=0; i < compromissosLS.length; i++) {

    const pedido = compromissosLS[i]

    // Adiciona o evento no calendario
    calendarioJS.addEvent({
        title: pedido['title'],
        start: pedido['start'],
        end: pedido['end'],
        pedido: pedido['pedido'],
        qntde: pedido['quantidade'],
        telefone: pedido['numero']
    })
}
calendarioJS.render()