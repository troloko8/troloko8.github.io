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
    targetButton = e.target.classList.contains('button');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbHVzUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9wbHVzLXJvdycpO1xyXG5jb25zdCBtaW51c1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fbWludXMtcm93Jyk7XHJcbmNvbnN0IHBsdXNEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9wbHVzLWRhdGEnKTtcclxuY29uc3QgbWludXNEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9taW51cy1kYXRhJyk7XHJcbmNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlX19yb3cnKTtcclxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG5jb25zdCB0YWJsZVJvd0FsbCA9IHRhYmxlLmNoaWxkcmVuO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZERhdGEoaW5kZXgsIGVsZW1lbnQsKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XHJcbiAgICB2YXIgZGF0YVBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgZGF0YVBsdXMuY2xhc3NOYW1lID0gJ3RhYmxlX19kYXRhJztcclxuXHJcbiAgICBpZiAoZWxlbWVudCA9PSB0YWJsZVJvd0FsbCkge1xyXG4gICAgICBlbGVtZW50W2ldLmFwcGVuZENoaWxkKGRhdGFQbHVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0YVBsdXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlRGF0YShpbmRleCwgaW5kZXhNb3ZlKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XHJcbiAgICB2YXIgdGQgPSB0YWJsZVJvd0FsbFtpXS5jaGlsZHJlbltpbmRleE1vdmVdO1xyXG4gICAgdGFibGVSb3dBbGxbaV0ucmVtb3ZlQ2hpbGQodGQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcEZsZXgoZGlzcGxheSkge1xyXG4gIG1pbnVzUm93LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG59XHJcblxyXG5wbHVzRGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgaW5kZXggPSB0YWJsZVJvd0FsbC5sZW5ndGg7XHJcblxyXG4gIGFkZERhdGEoaW5kZXgsIHRhYmxlUm93QWxsKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gYnV0dG9uTW92ZShlbGVtLCBheGlzLCBpbmRleCkge1xyXG4gIGVsZW0uc3R5bGUudHJhbnNmb3JtID0gYCR7YXhpc30oJHtpbmRleCAqIDEwMCAtIDEwMH0lKWA7XHJcbn1cclxuXHJcbm1pbnVzRGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgaW5kZXggPSB0YWJsZVJvd0FsbC5sZW5ndGgsXHJcbiAgICBpbmRleE1vdmUgPSBOdW1iZXIobWludXNEYXRhLnN0eWxlLndlYmtpdFRyYW5zZm9ybS5yZXBsYWNlKC9cXEQrL2csIFwiXCIpKSAvIDEwMDtcclxuXHJcbiAgZGVsZXRlRGF0YShpbmRleCwgaW5kZXhNb3ZlKTtcclxuXHJcbiAgaWYgKHRhYmxlUm93LmNoaWxkcmVuLmxlbmd0aCA9PSBpbmRleE1vdmUpIHtcclxuICAgIGJ1dHRvbk1vdmUobWludXNEYXRhLCAndHJhbnNsYXRlWCcsIGluZGV4TW92ZSk7XHJcbiAgfVxyXG5cclxufSlcclxuXHJcbnBsdXNSb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGluZGV4ID0gdGFibGVSb3dBbGxbMF0uY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgcm93UGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gIHJvd1BsdXMuY2xhc3NOYW1lID0gJ3RhYmxlX19yb3cnO1xyXG4gIHRhYmxlLmFwcGVuZENoaWxkKHJvd1BsdXMpO1xyXG5cclxuICBhZGREYXRhKGluZGV4LCByb3dQbHVzKTtcclxuICBkaXNwRmxleCgnZmxleCcpO1xyXG5cclxufSlcclxuXHJcbm1pbnVzUm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICBsZXQgaW5kZXggPSB0YWJsZVJvd0FsbC5sZW5ndGgsXHJcbiAgICBpbmRleE1vdmUgPSBOdW1iZXIobWludXNSb3cuc3R5bGUud2Via2l0VHJhbnNmb3JtLnJlcGxhY2UoL1xcRCsvZywgXCJcIikpIC8gMTAwLFxyXG4gICAgdHIgPSB0YWJsZVJvd0FsbFtpbmRleE1vdmVdO1xyXG5cclxuICB0YWJsZS5yZW1vdmVDaGlsZCh0cik7XHJcblxyXG4gIGRpc3BGbGV4KCdmbGV4Jyk7XHJcblxyXG4gIGlmIChpbmRleCA9PSAyKSB7XHJcbiAgICBkaXNwRmxleCgnbm9uZScpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRhYmxlUm93QWxsLmxlbmd0aCA9PSBpbmRleE1vdmUpIHtcclxuICAgIGJ1dHRvbk1vdmUobWludXNSb3csICd0cmFuc2xhdGVZJywgaW5kZXhNb3ZlKTtcclxuICB9XHJcblxyXG59KVxyXG5cclxudGFibGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKGUpIHtcclxuICBsZXQgaW5kZXggPSB0YWJsZVJvd0FsbC5sZW5ndGgsXHJcbiAgICByb3cgPSBlLnRhcmdldC5jbG9zZXN0KCd0cicpO1xyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xyXG5cclxuICAgIGlmIChyb3cucGFyZW50RWxlbWVudC5jaGlsZHJlbltpXSA9PSByb3cpIHtcclxuICAgICAgbWludXNSb3cuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtpICogMTAwfSUpYDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCByb3cuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCd0cicpLmNoaWxkcmVuW2ldID09IGUudGFyZ2V0KSB7XHJcbiAgICAgIG1pbnVzRGF0YS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2kgKiAxMDB9JSlgO1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gIGxldCB0YXJnZXRUYWJsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3Rib2R5JykgPT0gdGFibGUsXHJcbiAgICB0YXJnZXRCdXR0b24gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbicpO1xyXG5cclxuICBpZiAodGFyZ2V0VGFibGUgfHwgdGFyZ2V0QnV0dG9uKSB7XHJcbiAgICBtaW51c1Jvdy5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIG1pbnVzRGF0YS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICB9IGlmICh0YXJnZXRCdXR0b24pIHtcclxuICAgIGUudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAwLjg7XHJcbiAgfSBpZighdGFyZ2V0VGFibGUgJiYgIXRhcmdldEJ1dHRvbikge1xyXG4gICAgbWludXNSb3cuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBtaW51c0RhdGEuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgfVxyXG59KSJdfQ==
