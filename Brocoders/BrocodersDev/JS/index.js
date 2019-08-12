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
    targetButton = e.target.classList.contains('button_minus')

  if (targetTable || targetButton) {
    minusRow.style.opacity = 1;
    minusData.style.opacity = 1;
  } else {
    minusRow.style.opacity = 0;
    minusData.style.opacity = 0;
  }
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBsdXNSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX3BsdXMtcm93Jyk7XHJcbmNvbnN0IG1pbnVzUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9taW51cy1yb3cnKTtcclxuY29uc3QgcGx1c0RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX3BsdXMtZGF0YScpO1xyXG5jb25zdCBtaW51c0RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX21pbnVzLWRhdGEnKTtcclxuY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX3JvdycpO1xyXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbmNvbnN0IHRhYmxlUm93QWxsID0gdGFibGUuY2hpbGRyZW47XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkRGF0YShpbmRleCwgZWxlbWVudCwpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcclxuICAgIHZhciBkYXRhUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBkYXRhUGx1cy5jbGFzc05hbWUgPSAndGFibGVfX2RhdGEnO1xyXG5cclxuICAgIGlmIChlbGVtZW50ID09IHRhYmxlUm93QWxsKSB7XHJcbiAgICAgIGVsZW1lbnRbaV0uYXBwZW5kQ2hpbGQoZGF0YVBsdXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRhUGx1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVEYXRhKGluZGV4LCBpbmRleE1vdmUpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcclxuICAgIHZhciB0ZCA9IHRhYmxlUm93QWxsW2ldLmNoaWxkcmVuW2luZGV4TW92ZV07XHJcbiAgICB0YWJsZVJvd0FsbFtpXS5yZW1vdmVDaGlsZCh0ZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwRmxleChkaXNwbGF5KSB7XHJcbiAgbWludXNSb3cuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcbn1cclxuXHJcbnBsdXNEYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBpbmRleCA9IHRhYmxlUm93QWxsLmxlbmd0aDtcclxuXHJcbiAgYWRkRGF0YShpbmRleCwgdGFibGVSb3dBbGwpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBidXR0b25Nb3ZlKGVsZW0sIGF4aXMsIGluZGV4KSB7XHJcbiAgZWxlbS5zdHlsZS50cmFuc2Zvcm0gPSBgJHtheGlzfSgke2luZGV4ICogMTAwIC0gMTAwfSUpYDtcclxufVxyXG5cclxubWludXNEYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBpbmRleCA9IHRhYmxlUm93QWxsLmxlbmd0aCxcclxuICAgIGluZGV4TW92ZSA9IE51bWJlcihtaW51c0RhdGEuc3R5bGUud2Via2l0VHJhbnNmb3JtLnJlcGxhY2UoL1xcRCsvZywgXCJcIikpIC8gMTAwO1xyXG5cclxuICBkZWxldGVEYXRhKGluZGV4LCBpbmRleE1vdmUpO1xyXG5cclxuICBpZiAodGFibGVSb3cuY2hpbGRyZW4ubGVuZ3RoID09IGluZGV4TW92ZSkge1xyXG4gICAgYnV0dG9uTW92ZShtaW51c0RhdGEsICd0cmFuc2xhdGVYJywgaW5kZXhNb3ZlKTtcclxuICB9XHJcblxyXG59KVxyXG5cclxucGx1c1Jvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgaW5kZXggPSB0YWJsZVJvd0FsbFswXS5jaGlsZHJlbi5sZW5ndGgsXHJcbiAgICByb3dQbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHJcbiAgcm93UGx1cy5jbGFzc05hbWUgPSAndGFibGVfX3Jvdyc7XHJcbiAgdGFibGUuYXBwZW5kQ2hpbGQocm93UGx1cyk7XHJcblxyXG4gIGFkZERhdGEoaW5kZXgsIHJvd1BsdXMpO1xyXG4gIGRpc3BGbGV4KCdmbGV4Jyk7XHJcblxyXG59KVxyXG5cclxubWludXNSb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGxldCBpbmRleCA9IHRhYmxlUm93QWxsLmxlbmd0aCxcclxuICAgIGluZGV4TW92ZSA9IE51bWJlcihtaW51c1Jvdy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0ucmVwbGFjZSgvXFxEKy9nLCBcIlwiKSkgLyAxMDAsXHJcbiAgICB0ciA9IHRhYmxlUm93QWxsW2luZGV4TW92ZV07XHJcblxyXG4gIHRhYmxlLnJlbW92ZUNoaWxkKHRyKTtcclxuXHJcbiAgZGlzcEZsZXgoJ2ZsZXgnKTtcclxuXHJcbiAgaWYgKGluZGV4ID09IDIpIHtcclxuICAgIGRpc3BGbGV4KCdub25lJyk7XHJcbiAgfVxyXG5cclxuICBpZiAodGFibGVSb3dBbGwubGVuZ3RoID09IGluZGV4TW92ZSkge1xyXG4gICAgYnV0dG9uTW92ZShtaW51c1JvdywgJ3RyYW5zbGF0ZVknLCBpbmRleE1vdmUpO1xyXG4gIH1cclxuXHJcbn0pXHJcblxyXG50YWJsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gIGxldCBpbmRleCA9IHRhYmxlUm93QWxsLmxlbmd0aCxcclxuICAgIHJvdyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XHJcblxyXG4gICAgaWYgKHJvdy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldID09IHJvdykge1xyXG4gICAgICBtaW51c1Jvdy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2kgKiAxMDB9JSlgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IHJvdy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ3RyJykuY2hpbGRyZW5baV0gPT0gZS50YXJnZXQpIHtcclxuICAgICAgbWludXNEYXRhLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7aSAqIDEwMH0lKWA7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgbGV0IHRhcmdldFRhYmxlID0gZS50YXJnZXQuY2xvc2VzdCgndGJvZHknKSA9PSB0YWJsZSxcclxuICAgIHRhcmdldEJ1dHRvbiA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uX21pbnVzJylcclxuXHJcbiAgaWYgKHRhcmdldFRhYmxlIHx8IHRhcmdldEJ1dHRvbikge1xyXG4gICAgbWludXNSb3cuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBtaW51c0RhdGEuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1pbnVzUm93LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgbWludXNEYXRhLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gIH1cclxufSkiXX0=
