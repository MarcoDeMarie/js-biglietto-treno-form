const BtnCalc = document.getElementById('btn-calc')

BtnCalc.addEventListener('click', function(){

  const InputName = document.getElementById('input-name').value 
  const InputKm = document.getElementById('input-km').value
  const InputAge = document.getElementById('input-age').value 


  const NomeBiglietto = document.getElementById('nome-biglietto')  
  NomeBiglietto.innerHTML= InputName

  const NomeOfferta = document.getElementById('nome-offerta')  
  NomeOfferta.innerHTML= InputAge

  const PriceKm = 0.21

  const Ticket = PriceKm * InputKm

  var TicketFinalPrice = 0

  if(InputAge === 'minorenne'){
    TicketFinalPrice = Ticket - (Ticket * 20 / 100)
    NomeOfferta.innerHTML= 'minorenne'
  }
  else if(InputAge === 'over65'){
    TicketFinalPrice = Ticket - (Ticket * 40 / 100)
    NomeOfferta.innerHTML='Silver Ticket'
  }
  else {TicketFinalPrice=Ticket
    NomeOfferta.innerHTML='Standard Ticket'
  }

  const CostoFinale = document.getElementById('costo-finale')  
  CostoFinale.innerHTML= TicketFinalPrice.toFixed(2)

  console.log(TicketFinalPrice.toFixed(2))
})

// const TicketFinalPriceEL = document.getElementById('TicketFinalPrice')

// TicketFinalPriceEL.innerHTML=TicketFinalPrice
