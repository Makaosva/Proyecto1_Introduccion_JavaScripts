precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

total = 1;
/*funcion para aumentar cantidad*/
function aumentaClick() {
  cantidadSpan = document.querySelector(".cantidad");
  aumentar = Number(cantidadSpan.innerHTML);
  aumentar++;
  cantidadSpan.innerHTML = aumentar;
  pagarSpan = document.querySelector(".valor-total");
  pagarSpan.innerHTML = precio * aumentar;
}
/*funcion para disminuir cantidad*/
function diminuyeClick() {
  cantidadSpan = document.querySelector(".cantidad");
  disminuir = Number(cantidadSpan.innerHTML);
  disminuir--;
  cantidadSpan.innerHTML = disminuir;
  pagarSpan = document.querySelector(".valor-total");
  pagarSpan.innerHTML = precio * disminuir;
}
