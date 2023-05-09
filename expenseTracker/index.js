  let productsArray = [];
  var date = (function getDate() {
    let today = new Date();
    var dd = today.getDate();
    var mm = (today.getMonth() + 1);
    var yy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    return yy + '-' + mm + '-' + dd
  })();
  document.getElementById('date').value = date;

  function purchaseConst(product, date, price) {
    let purchase = {
      product:product,
      date: date,
      price: price
    }
    purchase.price= '$' + Number.parseFloat(price).toFixed(2);
    productsArray.push(purchase);
  }
  const product = document.querySelector('#nameInput');
  product.focus();
  const userDate = document.querySelector('#date');
  const price = document.querySelector('#expense');
  const button = document.querySelector('#submit');
  button.addEventListener('click', (e) => {
    let product1 = product.value.trim();
    let userDate1 = userDate.value.trim();
    let price1 = price.value.trim();
    if (product1 === '' || userDate1 === '' || price1 === '') {
      alert('Fill out all three options')
    } else {
      purchaseConst(product1, userDate1, price1);
      const table = document.querySelector('.table');
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      for (let i = 0; i < productsArray.length; i++) {
        cell1.innerHTML =`<span class='table-success'> ${productsArray[i].product}</span>`;
        cell2.innerHTML = `${productsArray[i].date}`;
        cell3.innerHTML = `${productsArray[i].price}`
        cell4.innerHTML = `<button class='close'>remove</button>`

      }
    }
    product.value = '';
    userDate.value = date;
    price.value = '';
    product.focus();
    closeButtons();

  });

  function closeButtons() {
    let close = document.querySelectorAll('.close');
    close.forEach((button, i) => {
      button.onclick = function() {
        document.querySelector('.table').deleteRow(i + 1);
        closeButtons();
      }
    });

  }
