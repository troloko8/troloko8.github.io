const plusRow = document.querySelector('.button_plus-row');
const minusRow = document.querySelector('.button_minus-row');
const plusData = document.querySelector('.button_plus-data');
const minusData = document.querySelector('.button_minus-data');
const tableRow = document.querySelector('.table__row');
const table = document.querySelector('tbody');
const tableRowAll = table.children;


function addData(index, element,) {
  for (let i = 0; i < index; i++) {
    const dataPlus = document.createElement('td');
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
    const td = tableRowAll[i].children[indexMove];
    tableRowAll[i].removeChild(td);
  }
}

function changeDisplay(display, elem) {
  elem.style.display = display;
}

plusData.addEventListener('click', function () {
  const index = tableRowAll.length;

  addData(index, tableRowAll)
  changeDisplay('flex', minusData);
})

function buttonMove(elem, axis, index) {
  elem.style.transform = `${axis}(${index * 100 - 100}%)`;
}

minusData.addEventListener('click', function () {
  const index = tableRowAll.length,
    indexData = tableRowAll[0].children.length,
    indexMove = Number(minusData.style.webkitTransform.replace(/\D+/g, "")) / 100;

  deleteData(index, indexMove);

  if (tableRow.children.length == indexMove) {
    buttonMove(minusData, 'translateX', indexMove);
  }

   if (indexData == 2) {
     changeDisplay('none', minusData);
   }

})

plusRow.addEventListener('click', function () {
  const index = tableRowAll[0].children.length,
    rowPlus = document.createElement('tr');

  rowPlus.className = 'table__row';
  table.appendChild(rowPlus);

  addData(index, rowPlus);
  changeDisplay('flex', minusRow);
})

minusRow.addEventListener('click', function () {
  const index = tableRowAll.length,
    indexMove = Number(minusRow.style.webkitTransform.replace(/\D+/g, "")) / 100,
    tr = tableRowAll[indexMove];

  table.removeChild(tr);

  changeDisplay('flex', minusRow);

  if (index == 2) {
    changeDisplay('none', minusRow);
  }

  if (tableRowAll.length == indexMove) {
    buttonMove(minusRow, 'translateY', indexMove);
  }

})

table.addEventListener('mouseover', function (e) {
  const index = tableRowAll.length,
    row = e.target.closest('tr');

  for (let i = 0; i < index; i++) {

    if (row.parentElement.children[i] == row) {
      minusRow.style.transform = `translateY(${i * 100}%)`;
    }
  }

  for (i = 0; i < row.children.length; i++) {
    if (row.children[i] == e.target) {
      minusData.style.transform = `translateX(${i * 100}%)`;
    }
  }
})

document.querySelector('body').addEventListener('mouseover', function (e) {
  const targetTable = e.target.closest('tbody') == table,
    targetButton = e.target.closest('.button_minus');

  if (targetTable || targetButton) {
    minusRow.classList.add('opacity');
    minusRow.classList.remove('opacity_none', 'opacity_hulf');
    minusData.classList.add('opacity');
    minusData.classList.remove('opacity_none', 'opacity_hulf');
  } if (targetButton) {
    e.target.classList.add('opacity_hulf');
    e.target.classList.remove('opacity_none', 'opacity');
  } if(!targetTable && !targetButton) {
    minusRow.classList.add('opacity_none');
    minusData.classList.add('opacity_none');
  }
})