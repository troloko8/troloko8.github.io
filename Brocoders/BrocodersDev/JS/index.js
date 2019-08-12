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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGx1c1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fcGx1cy1yb3cnKTtcclxuY29uc3QgbWludXNSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX21pbnVzLXJvdycpO1xyXG5jb25zdCBwbHVzRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fcGx1cy1kYXRhJyk7XHJcbmNvbnN0IG1pbnVzRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fbWludXMtZGF0YScpO1xyXG5jb25zdCB0YWJsZVJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fcm93Jyk7XHJcbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGJvZHknKTtcclxuY29uc3QgdGFibGVSb3dBbGwgPSB0YWJsZS5jaGlsZHJlbjtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGREYXRhKGluZGV4LCBlbGVtZW50LCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xyXG4gICAgdmFyIGRhdGFQbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGRhdGFQbHVzLmNsYXNzTmFtZSA9ICd0YWJsZV9fZGF0YSc7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQgPT0gdGFibGVSb3dBbGwpIHtcclxuICAgICAgZWxlbWVudFtpXS5hcHBlbmRDaGlsZChkYXRhUGx1cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGFQbHVzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZURhdGEoaW5kZXgsIGluZGV4TW92ZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xyXG4gICAgdmFyIHRkID0gdGFibGVSb3dBbGxbaV0uY2hpbGRyZW5baW5kZXhNb3ZlXTtcclxuICAgIHRhYmxlUm93QWxsW2ldLnJlbW92ZUNoaWxkKHRkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BGbGV4KGRpc3BsYXkpIHtcclxuICBtaW51c1Jvdy5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxufVxyXG5cclxucGx1c0RhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGluZGV4ID0gdGFibGVSb3dBbGwubGVuZ3RoO1xyXG5cclxuICBhZGREYXRhKGluZGV4LCB0YWJsZVJvd0FsbClcclxufSlcclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbk1vdmUoZWxlbSwgYXhpcywgaW5kZXgpIHtcclxuICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9IGAke2F4aXN9KCR7aW5kZXggKiAxMDAgLSAxMDB9JSlgO1xyXG59XHJcblxyXG5taW51c0RhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGluZGV4ID0gdGFibGVSb3dBbGwubGVuZ3RoLFxyXG4gICAgaW5kZXhNb3ZlID0gTnVtYmVyKG1pbnVzRGF0YS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0ucmVwbGFjZSgvXFxEKy9nLCBcIlwiKSkgLyAxMDA7XHJcblxyXG4gIGRlbGV0ZURhdGEoaW5kZXgsIGluZGV4TW92ZSk7XHJcblxyXG4gIGlmICh0YWJsZVJvdy5jaGlsZHJlbi5sZW5ndGggPT0gaW5kZXhNb3ZlKSB7XHJcbiAgICBidXR0b25Nb3ZlKG1pbnVzRGF0YSwgJ3RyYW5zbGF0ZVgnLCBpbmRleE1vdmUpO1xyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5wbHVzUm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBpbmRleCA9IHRhYmxlUm93QWxsWzBdLmNoaWxkcmVuLmxlbmd0aCxcclxuICAgIHJvd1BsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICByb3dQbHVzLmNsYXNzTmFtZSA9ICd0YWJsZV9fcm93JztcclxuICB0YWJsZS5hcHBlbmRDaGlsZChyb3dQbHVzKTtcclxuXHJcbiAgYWRkRGF0YShpbmRleCwgcm93UGx1cyk7XHJcbiAgZGlzcEZsZXgoJ2ZsZXgnKTtcclxuXHJcbn0pXHJcblxyXG5taW51c1Jvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgbGV0IGluZGV4ID0gdGFibGVSb3dBbGwubGVuZ3RoLFxyXG4gICAgaW5kZXhNb3ZlID0gTnVtYmVyKG1pbnVzUm93LnN0eWxlLndlYmtpdFRyYW5zZm9ybS5yZXBsYWNlKC9cXEQrL2csIFwiXCIpKSAvIDEwMCxcclxuICAgIHRyID0gdGFibGVSb3dBbGxbaW5kZXhNb3ZlXTtcclxuXHJcbiAgdGFibGUucmVtb3ZlQ2hpbGQodHIpO1xyXG5cclxuICBkaXNwRmxleCgnZmxleCcpO1xyXG5cclxuICBpZiAoaW5kZXggPT0gMikge1xyXG4gICAgZGlzcEZsZXgoJ25vbmUnKTtcclxuICB9XHJcblxyXG4gIGlmICh0YWJsZVJvd0FsbC5sZW5ndGggPT0gaW5kZXhNb3ZlKSB7XHJcbiAgICBidXR0b25Nb3ZlKG1pbnVzUm93LCAndHJhbnNsYXRlWScsIGluZGV4TW92ZSk7XHJcbiAgfVxyXG5cclxufSlcclxuXHJcbnRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgbGV0IGluZGV4ID0gdGFibGVSb3dBbGwubGVuZ3RoLFxyXG4gICAgcm93ID0gZS50YXJnZXQuY2xvc2VzdCgndHInKTtcclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcclxuXHJcbiAgICBpZiAocm93LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0gPT0gcm93KSB7XHJcbiAgICAgIG1pbnVzUm93LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7aSAqIDEwMH0lKWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgcm93LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgndHInKS5jaGlsZHJlbltpXSA9PSBlLnRhcmdldCkge1xyXG4gICAgICBtaW51c0RhdGEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtpICogMTAwfSUpYDtcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKGUpIHtcclxuICBsZXQgdGFyZ2V0VGFibGUgPSBlLnRhcmdldC5jbG9zZXN0KCd0Ym9keScpID09IHRhYmxlLFxyXG4gICAgdGFyZ2V0QnV0dG9uID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b25fbWludXMnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0YXJnZXRUYWJsZSk7XHJcblxyXG4gIGlmICh0YXJnZXRUYWJsZSB8fCB0YXJnZXRCdXR0b24pIHtcclxuICAgIG1pbnVzUm93LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgbWludXNEYXRhLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gIH0gaWYgKHRhcmdldEJ1dHRvbikge1xyXG4gICAgZS50YXJnZXQuc3R5bGUub3BhY2l0eSA9IDAuODtcclxuICB9IGlmKCF0YXJnZXRUYWJsZSAmJiAhdGFyZ2V0QnV0dG9uKSB7XHJcbiAgICBtaW51c1Jvdy5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIG1pbnVzRGF0YS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICB9XHJcbn0pIl19
