const km = prompt('Quanti km devi fare?') 

const age = prompt('Quanti anni hai?') 

const PriceKm = 0.21

const Ticket = PriceKm * km

var TicketFinalPrice = 0

if(age <= 18){
  TicketFinalPrice = Ticket - (Ticket * 20 / 100)
}
else if(age >= 65){
  TicketFinalPrice = Ticket - (Ticket * 40 / 100)
}
else {TicketFinalPrice=Ticket}

const TicketFinalPriceEL = document.getElementById('TicketFinalPrice')

TicketFinalPriceEL.innerHTML=TicketFinalPrice

console.log(TicketFinalPrice)