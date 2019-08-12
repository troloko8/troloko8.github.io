const plusRow = document.querySelector('.button_plus-row');
const minusRow = document.querySelector('.button_minus-row');
const plusData = document.querySelector('.button_plus-data');
const minusData = document.querySelector('.button_minus-data');
const tableRow = document.querySelector('.table__row');
const table = document.querySelector('tbody');
const tableRowAll = table.children;


function addData(index, element,) {
  for (let i = 0; i < index; i++) {
    var dataPlus = document.createElement('td');
    dataPlus.className = 'table__data';

    if (element == tableRowAll) {
      element[i].appendChild(dataPlus);
    } else {
      element.appendChild(dataPlus);
    }
  }
}

function deleteData(index, indexMove) {
  for (let i = 0; i < index; i++) {
    var td = tableRowAll[i].children[indexMove];
    tableRowAll[i].removeChild(td);
  }
}

function dispFlex(display) {
  minusRow.style.display = display;
}

plusData.addEventListener('click', function () {
  let index = tableRowAll.length;

  addData(index, tableRowAll)
})

function buttonMove(elem, axis, index) {
  elem.style.transform = `${axis}(${index * 100 - 100}%)`;
}

minusData.addEventListener('click', function () {
  let index = tableRowAll.length,
    indexMove = Number(minusData.style.webkitTransform.replace(/\D+/g, "")) / 100;

  deleteData(index, indexMove);

  if (tableRow.children.length == indexMove) {
    buttonMove(minusData, 'translateX', indexMove);
  }

})

plusRow.addEventListener('click', function () {
  let index = tableRowAll[0].children.length,
    rowPlus = document.createElement('tr');

  rowPlus.className = 'table__row';
  table.appendChild(rowPlus);

  addData(index, rowPlus);
  dispFlex('flex');

})

minusRow.addEventListener('click', function () {

  let index = tableRowAll.length,
    indexMove = Number(minusRow.style.webkitTransform.replace(/\D+/g, "")) / 100,
    tr = tableRowAll[indexMove];

  table.removeChild(tr);

  dispFlex('flex');

  if (index == 2) {
    dispFlex('none');
  }

  if (tableRowAll.length == indexMove) {
    buttonMove(minusRow, 'translateY', indexMove);
  }

})

table.addEventListener('mouseover', function (e) {
  let index = tableRowAll.length,
    row = e.target.closest('tr');

  for (i = 0; i < index; i++) {

    if (row.parentElement.children[i] == row) {
      minusRow.style.transform = `translateY(${i * 100}%)`;
    }
  }

  for (i = 0; i < row.children.length; i++) {
    if (e.target.closest('tr').children[i] == e.target) {
      minusData.style.transform = `translateX(${i * 100}%)`;
    }
  }
})

document.querySelector('body').addEventListener('mouseover', function (e) {
  let targetTable = e.target.closest('tbody') == table,
    targetButton = e.target.classList.contains('button_minus');

    console.log(targetTable);

  if (targetTable || targetButton) {
    minusRow.style.opacity = 1;
    minusData.style.opacity = 1;
  } if (targetButton) {
    e.target.style.opacity = 0.8;
  } if(!targetTable && !targetButton) {
    minusRow.style.opacity = 0;
    minusData.style.opacity = 0;
  }
})