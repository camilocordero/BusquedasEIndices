let globalData;
let tableArray = document.getElementById("tableArray");

function searchKeyButton() {
  updateArray();
  let searchOption = document.querySelector("#searchList").value;
  let targetKey = parseInt(document.getElementById("Key").value);

  globalData.get(targetKey, searchOption);
  document.getElementById("resultadoBusqueda").innerHTML = globalData.get(
    targetKey,
    searchOption
  );
}

const numToArray = (numero) => {
  return [...`${numero}`].map((c) => parseInt(c));
};

const findDigitosCentrados = (array) => {
  let result = [];
  let middle = Math.floor(array.length / 2);
  if (globalData.data.length == 10) {
    if (array.length % 2 === 0) {
      return array[middle - 1];
    } else {
      return array[middle];
    }
  } else {
    //Agarramos los digitos centrales del num que es array
    result.push(array[middle - 1]);
    result.push(array[middle]);
    const numeroFinal = parseInt(result.join(""));
    return numeroFinal;
  }
};

const searchTargetArray = (arr, target) => {
  if (arr.length === 0) {
    return "El arreglo esta vacio";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return 1;
    }
  }
  return 0;
};

class ExternalSearch {
  constructor(size) {
    this.data = new Array(size);
    this.maximoIntentosColision = 0;
    this.bloquesOcupados = 0;
    this.option = "a";
    globalData = this.data;
  }

  searchTarget(arr, target) {
    if (arr.length === 0) {
      return "El arreglo esta vacio";
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 2; j++) {
        //*
        console.log(`Arreglo IJ: ${arr[i][j]}`);
        if (arr[i][j] === target) {
          document.getElementById(i).style.backgroundColor = "red"; //*
          return (
            "La clave esta en el bloque " +
            (i + 1) +
            ", en la posicion " +
            (j + 1)
          ); //*
        }
      }
    }
    return "No se encontro el objetivo";
  }

  searchTargetDeleteBlock(arr, target) {
    if (arr.length === 0) {
      return "El arreglo esta vacio";
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 2; j++) {
        //*
        console.log(`Arreglo IJ: ${arr[i][j]}`);
        if (arr[i][j] === target) {
          arr[i][j] = undefined; //*
          return "Clave eliminada"; //*
        }
      }
    }
    return "No se encontro el objetivo";
  }

  deleteSearchTarget(arr, target) {
    if (arr.length === 0) {
      return "El arreglo esta vacio";
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === parseInt(target)) {
        arr[i] = undefined;
        return 1;
      }
    }
    return 0;
  }

  binarySearch = (array, objective) => {
    let inicio = 0; //Define el inicio del Arreglo
    let final = array.length - 1; //Define el Final del Arreglo
    let puntoMedio; //Define el punto medio para empezar la búsqueda
    let resultado; //Almacena la respuesta de la función

    if (array.length === 0) {
      console.log("El arreglo esta vacio");
      return 0;
    }

    // array = array.sort((a, b) => a - b); //Ordenamos el arreglo de forma ascendente
    console.log("Arreglo ordenado: ", array);

    for (let i = 0; inicio != final; i++) {
      //Iteramos hasta que ambos extremos del arreglo se encuentren en un punto medio
      puntoMedio = Math.trunc((inicio + final) / 2); // Definimos la mitad del arreglo
      console.log(`Punto medio ${puntoMedio}`);
      console.log(`Valor ${array[puntoMedio]}`);
      //console.log(array[puntoMedio] + " : " + objective); //Muestra el recorrido que realiza para encontrar el resultado

      if (array[puntoMedio] === objective) {
        // Validamos si el punto medio actual del array es igual al objetivo
        resultado = `Encontrado : ${array[puntoMedio]} - Posicion ${puntoMedio}`;
        return resultado;
      }

      array[puntoMedio] > objective
        ? (final = puntoMedio - 1)
        : (inicio = puntoMedio + 1); //Validamos si el punto medio es mayor o menor al objetivo
      inicio === final
        ? (puntoMedio = Math.trunc((inicio + final) / 2))
        : false; //Si "inicio" y "final" se encuentran en el mismo indice - Fin de la iteración
    }
    array[puntoMedio] != objective
      ? (resultado = `Clave no encontrada : ${objective}`)
      : (resultado = `Clave: ${array[puntoMedio]} encontrada en la Posicion ${
          puntoMedio + 1
        }`);
    return resultado;
  };

  //hashMethod
  getKeyAddress(key, option) {
    switch (option) {
      case "Secuencial": //mirar secuencial cuando se borran cosas
        let validacionSecuencial = false;
        while (validacionSecuencial === false) {
          if (this.data[this.bloquesOcupados].length < 2) {
            this.data[this.bloquesOcupados].push(key);
            validacionSecuencial = true;
          } else {
            
            this.bloquesOcupados++;
          }

          if (this.bloquesOcupados === this.data.length) {
            alert("La estructura alcanzo su capacidad maxima.");
            return;
          }
        }
        validacionSecuencial = false;

        break;
      case "Binario": //mirar binario
        if (this.registrosInsertados < this.data.length) {
          this.data[this.registrosInsertados] = parseInt(key);
          this.registrosInsertados++;
          this.data.sort((a, b) => a - b);
        } else {
          alert("La estructura alcanzo su capacidad maxima.");
        }

        break;
      case "HashModulo":
        return (parseInt(key) % this.data.length) + 1;
      case "HashCuadrado":
        let cuadrados = Math.pow(key, 2);
        let arrayNum = numToArray(cuadrados);
        let hashResult = findDigitosCentrados(arrayNum) + 1;
        return hashResult;
      case "HashPlegamiento":
        let keyStr1 = key.toString();
        let halfLength = Math.floor(keyStr1.length / 2);
        let foldedHash;
        let address;

        if (halfLength < 1) {
          foldedHash = parseInt(keyStr1);
          address = foldedHash + 1;
          return address;
        }
        const firstHalf = parseInt(keyStr1.substring(0, halfLength));
        const secondHalf = parseInt(keyStr1.substring(halfLength));
        if (this.data.length == 100) {
          foldedHash = (firstHalf + secondHalf) % 100;
        } else {
          foldedHash = (firstHalf + secondHalf) % 10;
        }

        address = foldedHash + 1;

        return address;
      case "HashTruncamiento":
        let keyStr = key.toString();
        const length = Math.floor(keyStr.length / 2);
        let truncatedHash;
        if (this.data.length == 100) {
          const firstDigit = parseInt(keyStr[0]);
          const thirdDigit = parseInt(keyStr[2]);

          truncatedHash = firstDigit * 10 + thirdDigit + 1;
          return truncatedHash;
        } else if (length < 1) {
          const Digit = parseInt(keyStr);
          truncatedHash = Digit + 1;
          return truncatedHash;
        } else {
          const secondDigit = parseInt(keyStr[1]);
          truncatedHash = secondDigit + 1;
          return truncatedHash;
        }
    }
  }

  set(key, option) {
    let address;
    switch (option) {
      case "Secuencial":
        this.getKeyAddress(key, option);
        return;
        break;
      case "Binario":
        this.getKeyAddress(key, option);
        return;
        break;
    }

    //Manejo de colisiones
    let validacionColision = false;
    address = this.getKeyAddress(key, option);
    let intentosColision = 0;
    console.log(`Lenght ${this.data[address - 1]}`);
    if (this.data[address - 1].length == 2) {
      if (this.data[address - 1][0] === undefined) {
        this.data[address - 1][0] = key;
        return
      } else if (this.data[address - 1][1] === undefined) {
        this.data[address - 1][1] = key;
        return
      } else {
        console.log("Se presenta una colision");
        console.log("Aplicamos doble funcion hash");
        //HAY COLISION
        //APLICAMOS DOBLE FUNCION HASH
        let newAddress = this.getKeyAddress(address + 1, option);
        intentosColision++;
        while (validacionColision == false) {
          if (this.data[newAddress - 1].length == 2) {
            if (this.data[newAddress - 1][0] === undefined) {
              this.data[newAddress - 1][0] = key;
              return
            } else if (this.data[newAddress - 1][1] === undefined) {
              this.data[newAddress - 1][1] = key;
              return
            } else {
              newAddress = this.getKeyAddress(newAddress + 1, option);
              intentosColision++;
            }
          } else {
            this.data[newAddress - 1].push(key);
            console.log(
              "clave: " + key + "guardada en el bloque: ",
              newAddress
            );
            validacionColision = true;
            if (intentosColision > this.maximoIntentosColision) {
              this.maximoIntentosColision = intentosColision;
            }
          }
          if (intentosColision > 15) {
            alert(
              `La clave ${key} no pudo ser resuelta con un metodo para manejar colisiones`
            );
            return;
          }
        }
      }

      //Evitar ciclos colision
      
      validacionColision = false;
    } else {
      this.data[address - 1].push(key);
      console.log("clave:" + key + "guardada en el bloque: ", address);
    }
  }

  get(key, option) {
    let address;
    switch (option) {
      case "Secuencial":
        return this.searchTarget(globalData.data, key);
        break;
      case "Binario":
        return this.binarySearch(globalData.data, key);
        break;
    }

    //Busqueda con Hash
    address = this.getKeyAddress(key, option);
    let busqueda = searchTargetArray(this.data[address - 1], key);
    if (busqueda == 1) {
      document.getElementById(address - 1).style.backgroundColor = "red";
      return `Clave encontrada [${key}] en el bloque [${address}]`;
    } else {
      let newAddress = this.getKeyAddress(address + 1, option);
      for (let i = 0; i < 10; i++) {
        busqueda = searchTargetArray(this.data[newAddress - 1], key);
        if (busqueda == 1) {
          document.getElementById(newAddress - 1).style.backgroundColor = "red";
          return `Clave encontrada [${key}] en el bloque [${newAddress}]`;
        } else {
          newAddress = this.getKeyAddress(newAddress + 1, option);
        }
      }
      return "Clave NO encontrada";
    }
  }

  delete(key, option) {
    //falta binario
    let address;
    switch (option) {
      case "Secuencial":
        return this.searchTargetDeleteBlock(globalData.data, key);
        break;
      case "Binario": //falta
        return this.binarySearch(globalData.data, key);
        break;
    }

    //Busqueda con Hash
    address = this.getKeyAddress(key, option);
    let busqueda = this.deleteSearchTarget(this.data[address - 1], key);
    if (busqueda == 1) {
      return `Clave eliminada`;
    } else {
      let newAddress = this.getKeyAddress(address + 1, option);
      for (let i = 0; i < 10; i++) {
        busqueda = this.deleteSearchTarget(this.data[newAddress - 1], key);
        if (busqueda == 1) {
          return `Clave eliminada`;
        } else {
          newAddress = this.getKeyAddress(newAddress + 1, option);
        }
      }
      return "Clave NO encontrada";
    }
  }
}

//                                              HTML
function updateArray() {
  let printData = JSON.stringify(globalData.data);
  tableArray.innerHTML = `<tr>
    <th>Indice</th>
    <th>Clave</th>
  </tr>`;

  for (let i = 0; i < globalData.data.length; i++) {
    let valor;
    if (globalData.data[i] === undefined) {
      valor = "";
    } else {
      valor = globalData.data[i];
    }

    tableArray.innerHTML += `
          <tr id=${i}>
            <td>${i + 1}</td>
            <td>${valor}</td>
          </tr>
    `;
  }
}

function createButton() {
  let arrayLength = parseInt(document.getElementById("arrayLong").value);

  if (arrayLength === 10 || arrayLength === 100) {
    globalData = new ExternalSearch(arrayLength);

    for (let i = 0; i < globalData.data.length; i++) {
      globalData.data[i] = [];
    }
  } else {
    alert("Por favor ingrese una capacidad maxima de 10 o de 100");
  }

  updateArray();
}

function setButton() {
  let searchOption = document.querySelector("#searchList").value;
  let keyToInsert = parseInt(document.getElementById("setKey").value);

  if (keyToInsert > 9999) {
    alert("Por favor ingrese un numero de 4 digitos");
  } else if (keyToInsert <= 0) {
    alert("Por favor ingrese un numero mayor a cero");
  } else {
    globalData.set(keyToInsert, searchOption);
  }

  updateArray();
}

let optionList = document.getElementById("searchList");
optionList.onchange = (event) => {
  let searchOption = document.querySelector("#searchList").value;
  let arregloAux = globalData.data;
  console.log(arregloAux);

  globalData = new ExternalSearch(arregloAux.length);
  //Rellenar bloques con arrays vacios
  for (let i = 0; i < globalData.data.length; i++) {
    globalData.data[i] = [];
  }

  for (let i = 0; i < globalData.data.length; i++) {
    //Recorre bloques
    for (let j = 0; j < 2; j++) {
      if (arregloAux[i][j] !== undefined) {
        globalData.set(arregloAux[i][j], searchOption);
      }
    }
  }
  updateArray();
};

function deleteKeyButton() {
  let keyToDelete = parseInt(document.getElementById("Deletekey").value);
  let searchOption = document.querySelector("#searchList").value;

  document.getElementById("resultadoBusqueda").innerHTML = globalData.delete(
    keyToDelete,
    searchOption
  );
  updateArray();
}
