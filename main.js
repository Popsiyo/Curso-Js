  let precio = parseInt(prompt("Ingrese el precio del producto que quiera comprar:"));
  let cuotas = parseInt(prompt("¿En cuantas cuotas queres comprar tu producto: 3,6 o 12?"));
  
  const validarPrecio = (precio) => {
    while (Number.isNaN(precio) || precio === 0){
      if (precio !== 0) {
        alert("Debe usar numeros para indicar el precio")
    
      } else {
        alert("Debe usar un numero distinto de cero")
      }

    }

    return precio;
  }
  const validarCuotas = (cuotas) => {
    while (Number.isNaN(cuotas) || cuotas === 0) {
        if (cuotas !== 0) {
            alert("Debe usar un numero");
    }   else (cuotas !==3 && !==6 && !==12) {
            alert("Debe elegir uno solo de los siguientes numeros: 3,6 o 12");

            
    }
  }

  return cuotas;
}

let cuotasElegidas = (cuotas) => {
  if (cuotasElegidas == 3) {
    alert("Las cuotas son interes");
  } else (cuotas == 6) {
    alert("El precio de cada cuota sera de" + "" +  (precio * 0.20) / 6);
  
  } else if (cuotas == 12) {
    alert("El precio de cada cuota sera de" + "" + (precio * 0.40) / 12 );
  } 
    
  
}


