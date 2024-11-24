document.addEventListener('DOMContentLoaded', function() {
  const specials = ['Čokoladni mafin - 500din', 'Kroasan - 400din', 'Avokado tost - 250din'];
  const lista = document.getElementById('lista');
  specials.forEach(special => {
    const listItem = document.createElement('li');
    listItem.textContent = special;
    lista.appendChild(listItem);
  });
});

let orders = [];

function calculateTotal(order) {
  let total = 0;

  const coffeePrices = {
    'espresso': 300,
    'cappuccino': 360,
    'latte': 400
  };

  total += coffeePrices[order.tip];

  total += + 30 * order.secer;

  if (order.saMlekom) {
    total += + 50;
  }

  return total;
}

function submitOrder() {
  const tipKafe = document.getElementById('tipKafe').value;
  const nivoSecera = parseInt(document.getElementById('nivoSecera').value);
  const mleko = document.getElementById('mleko').checked;

  const order = {
    tip: tipKafe,
    secer: nivoSecera,
    saMlekom: mleko
  };

  orders.push(order);
  displayOrders();

  const total = calculateTotal(order);
alert(`Ukupan iznos narudžbe je: ${total}din`);

  return order;
}

function displayOrders(order) {
  const ordersDiv = document.getElementById('orders');
  ordersDiv.innerHTML = '';
  orders.forEach(order => {
    let kafaString = `Tip kafe : ${order.tip}, nivo šećera: ${order.secer}`;
    if (order.saMlekom) {
      kafaString += ', sa mlekom';
    }
    const kafaDiv = document.createElement('div');
    kafaDiv.classList.add('kafa');
    kafaDiv.textContent = kafaString;
    ordersDiv.appendChild(kafaDiv);
  });
  if (orders.length > 0) {
    ordersDiv.style.border = '2px solid black';
} else {
    ordersDiv.style.border = 'none';
}
return ordersDiv.innerHTML;
}
