let globalData;
let tableArray = document.getElementById("tableArray");

function searchKeyButton() {
  updateArray();
  let searchOption = document.querySelector("#searchList").value;
  let targetKey = document.getElementById("Key").value;

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
    // Agarramos los dígitos centrales del número que es array
    result.push(array[middle - 1]);
    result.push(array[middle]);
    const numeroFinal = parseInt(result.join(""));
    return numeroFinal;
  }
};

class InternalSearch {
  constructor(size) {
    this.data = new Array(size);
    this.maximoIntentosColision = 0;
    this.registrosInsertados = 0;
    this.option = "a";
    globalData = this.data;
  }

  searchTarget(arr, target) {
    if (arr.length === 0) {
      return "El arreglo está vacío";
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === parseInt(target)) {
        document.getElementById(i).style.backgroundColor = "red";
        return "La clave está en la posición: " + (i + 1);
      }
    }
    return "No se encontró el objetivo";
  }

  deleteSearchTarget(arr, target) {
    if (arr.length === 0) {
      return "El arreglo está vacío";
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === parseInt(target)) {
        arr[i] = undefined;
        return "Clave Eliminada";
      }
    }
    return "No se encontró el objetivo";
  }

  binarySearch = (array, objective) => {
    let inicio = 0; // Define el inicio del Arreglo
    let final = array.length - 1; // Define el Final del Arreglo
    let puntoMedio; // Define el punto medio para empezar la búsqueda
    let resultado; // Almacena la respuesta de la función

    if (array.length === 0) {
      console.log("El arreglo está vacío");
      return 0;
    }

    array = array.sort((a, b) => a - b); // Ordenamos el arreglo de forma ascendente
    console.log("Arreglo ordenado: ", array);

    for (let i = 0; inicio != final; i++) {
      // Iteramos hasta que ambos extremos del arreglo se encuentren en un punto medio
      puntoMedio = Math.trunc((inicio + final) / 2); // Definimos la mitad del arreglo
      console.log(`Punto medio ${puntoMedio}`);
      console.log(`Valor ${array[puntoMedio]}`); // Muestra el recorrido que realiza para encontrar el resultado

      if (array[puntoMedio] === objective) {
        // Validamos si el punto medio actual del array es igual al objetivo
        resultado = `Encontrado : ${array[puntoMedio]} - Posición ${puntoMedio}`;
        return resultado;
      }

      array[puntoMedio] > objective
        ? (final = puntoMedio - 1)
        : (inicio = puntoMedio + 1); // Validamos si el punto medio es mayor o menor al objetivo
      inicio === final
        ? (puntoMedio = Math.trunc((inicio + final) / 2))
        : false; // Si "inicio" y "final" se encuentran en el mismo índice - Fin de la iteración
    }
    array[puntoMedio] != objective
      ? (resultado = `Clave no encontrada : ${objective}`)
      : (resultado = `Clave: ${array[puntoMedio]} encontrada en la Posición ${
          puntoMedio + 1
        }`);
    return resultado;
  };

  binarySearch1(value, list) {
    // SERÍA PASARLE UNA LISTA RECORTADA EN CASO DE QUE NO ESTÉ LLENA
    let first = 0; // left endpoint
    let last = list.length - 1; // right endpoint
    let position = -1;
    let found = false;
    let middle;
    while (found === false && first <= last) {
      middle = Math.floor((first + last) / 2);
      if (list[middle] == value) {
        found = true;
        position = middle;
      } else if (list[middle] > value) {
        // if in the lower half
        last = middle - 1;
      } else {
        // if in the upper half
        first = middle + 1;
      }
    }
    if (position === -1) {
      return "Clave no encontrada";
    } else {
      document.getElementById(position).style.backgroundColor = "red";
      return `Clave ${value} encontrada en la posición: ${position + 1}`;
    }
  }

  // Función para realizar la expansión del arreglo
  expandArray(expansionOption) {
    const originalSize = this.data.length;
    let newSize;

    if (expansionOption === "Totales") {
      newSize = originalSize * 2;
    } else if (expansionOption === "Parciales") {
      newSize = Math.floor(originalSize * 1.5);
    }

    // Crea un nuevo arreglo con el nuevo tamaño
    const newData = new Array(newSize);

    // Copia las claves del arreglo original al nuevo arreglo con las nuevas funciones hash
    for (let i = 0; i < originalSize; i++) {
      if (this.data[i] !== undefined) {
        const key = this.data[i];
        const newAddress = this.getKeyAddress(key, this.option, newSize);
        newData[newAddress - 1] = key;
      }
    }

    // Actualiza los datos y el tamaño
    this.data = newData;
  }


  //hashMethod
  getKeyAddress(key, option) {
    switch (option) {
      case "Secuencial":
        if (this.registrosInsertados < this.data.length) {
          this.data[this.registrosInsertados] = parseInt(key);
          this.registrosInsertados++;
        } else {
          alert("La estructura alcanzo su capacidad maxima.");
        }

        break;
      case "Binario":
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
    if (this.data[address - 1] != undefined) {
      console.log("Se presenta una colision");
      console.log("Aplicamos doble funcion hash");
      //HAY COLISION
      //APLICAMOS DOBLE FUNCION HASH
      let newAddress = this.getKeyAddress(address + 1, option);
      intentosColision++;
      while (validacionColision == false) {
        if (this.data[newAddress - 1] != undefined) {
          newAddress = this.getKeyAddress(newAddress + 1, option);
          intentosColision++;
        } else {
          this.data[newAddress - 1] = key;
          console.log(
            "clave: " + key + "guardada en la posicion: ",
            newAddress
          );
          validacionColision = true;
          if (intentosColision > this.maximoIntentosColision) {
            this.maximoIntentosColision = intentosColision;
          }
        }

        //Evitar ciclos colision
        if (intentosColision > 15) {
          alert(
            `La clave ${key} no pudo ser resuelta con un metodo para manejar colisiones`
          );
          return;
        }
      }
      validacionColision = false;
    } else {
      this.data[address - 1] = key;
      console.log("clave:" + key + "guardada en la posicion: ", address);
    }
  }

  get(key, option) {
    let address;
    switch (option) {
      case "Secuencial":
        return this.searchTarget(globalData.data, key);
        break;
      case "Binario":
        let arregloAux = [];
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i] != undefined) {
            arregloAux.push(this.data[i]);
          }
        }
        return this.binarySearch1(key, arregloAux);
        break;
    }

    //Busqueda con Hash
    address = this.getKeyAddress(key, option);
    if (this.data[address - 1] === parseInt(key)) {
      console.log("ENCONTRO");
      document.getElementById(address - 1).style.backgroundColor = "red";
      return `Valor encontrado: ${key} en la posición:${address}`;
    } else {
      let newAddress = this.getKeyAddress(address + 1, option);

      for (let i = 0; i < this.maximoIntentosColision; i++) {
        console.log(newAddress - 1);
        if (this.data[newAddress - 1] === parseInt(key)) {
          document.getElementById(newAddress - 1).style.backgroundColor = "red";
          return `Valor encontrado: ${key} en la posición:${newAddress}`;
        } else {
          newAddress = this.getKeyAddress(newAddress + 1, option);
        }
      }

      return "Clave no encontrada";
    }
  }

  delete(key, option) {
    let address;
    switch (option) {
      case "Secuencial":
        return this.deleteSearchTarget(globalData.data, key);
        break;
      case "Binario":
        return this.binarySearch(globalData.data, key);
        break;
    }

    //Busqueda con Hash
    address = this.getKeyAddress(key, option);
    if (this.data[address - 1] === parseInt(key)) {
      this.data[address - 1] = undefined;
      return `Clave elminada: ${key}`;
    } else {
      let newAddress = this.getKeyAddress(address + 1, option);

      for (let i = 0; i < this.maximoIntentosColision; i++) {
        console.log(newAddress - 1);
        if (this.data[newAddress - 1] === parseInt(key)) {
          this.data[newAddress - 1] = undefined;
          return `Clave eliminada: ${key}`;
        } else {
          newAddress = this.getKeyAddress(newAddress + 1, option);
        }
      }

      return "Clave no encontrada";
    }
  }
}

function updateArray() {
  let printData = JSON.stringify(globalData.data);
  tableArray.innerHTML = `<tr>
    <th>Índice</th>
    <th>Clave</th>
  </tr>`;

  for (let i = 0; i < globalData.data.length; i++) {
    let valor;
    if (globalData.data[i] === undefined) {
      valor = "";
    } else {
      valor = globalData.data[i];
    }
    tableArray.innerHTML += `<tr>
      <td>${i}</td>
      <td>${valor}</td>
    </tr>`;
  }
}

const hash = new InternalSearch(100);

function numToArray(numero) {
  return [...`${numero}`].map((num) => parseInt(num));
}

function insertKeyButton() {
  updateArray();
  let option = document.querySelector("#hashList").value;
  let key = document.getElementById("Key").value;

  if (option === "Division") {
    hash.option = "HashModulo";
    document.getElementById("resultado").innerHTML = `Dirección: ${hash.getKeyAddress(
      key,
      option
    )}`;
    document.getElementById("resultadoInsercion").innerHTML = hash.getKeyAddress(
      key,
      option
    );
  } else if (option === "Plegamiento") {
    hash.option = "HashPlegamiento";
    document.getElementById("resultado").innerHTML = `Dirección: ${hash.getKeyAddress(
      key,
      option
    )}`;
    document.getElementById("resultadoInsercion").innerHTML = hash.getKeyAddress(
      key,
      option
    );
  } else if (option === "Truncamiento") {
    hash.option = "HashTruncamiento";
    document.getElementById("resultado").innerHTML = `Dirección: ${hash.getKeyAddress(
      key,
      option
    )}`;
    document.getElementById("resultadoInsercion").innerHTML = hash.getKeyAddress(
      key,
      option
    );
  } else if (option === "Multiplicación") {
    // Add here
  } else {
    hash.option = "Secuencial";
    document.getElementById("resultado").innerHTML = `Dirección: ${hash.getKeyAddress(
      key,
      option
    )}`;
    document.getElementById("resultadoInsercion").innerHTML = hash.getKeyAddress(
      key,
      option
    );
  }
  const insertResult = hash.getKeyAddress(key, option);
  if (insertResult) {
    hash.registrosInsertados++;
    if (hash.registrosInsertados == hash.data.length) {
      document.getElementById("resultadoInsercion").innerHTML =
        "La estructura alcanzó su capacidad máxima.";
    }
  }
  if (insertResult) {
    if (option === "Multiplicación") {
      hash.data[hash.data.indexOf(null)] = key;
      document.getElementById("resultadoInsercion").innerHTML = `Dirección: ${hash.data.indexOf(key) + 1}`;
    } else {
      hash.data[hash.data.indexOf(null)] = key;
    }
  }
  updateArray();
}

function searchKey() {
  const targetKey = parseInt(document.getElementById("Key").value);
  const searchOption = document.querySelector("#searchList").value;

  if (searchOption === "Lineal") {
    const result = hash.searchTarget(hash.data, targetKey);
    document.getElementById("resultadoBusqueda").textContent = result;
  } else if (searchOption === "Binaria") {
    const result = hash.binarySearch(hash.data, targetKey);
    document.getElementById("resultadoBusqueda").textContent = result;
  } else {
    const result = hash.searchTarget(hash.data, targetKey);
    document.getElementById("resultadoBusqueda").textContent = result;
  }
}

function deleteKey() {
  const targetKey = parseInt(document.getElementById("Key").value);
  const deleteOption = document.querySelector("#deleteList").value;

  if (deleteOption === "Eliminar") {
    const result = hash.deleteSearchTarget(hash.data, targetKey);
    document.getElementById("resultadoEliminar").textContent = result;
    updateArray();
  } else if (deleteOption === "Reemplazar") {
    const result = hash.deleteSearchTarget(hash.data, targetKey);
    document.getElementById("resultadoEliminar").textContent = result;
    const newKey = parseInt(document.getElementById("NewKey").value);
    if (!isNaN(newKey)) {
      const option = document.querySelector("#hashList").value;
      const newAddress = hash.getKeyAddress(newKey, option);
      if (hash.data[newAddress - 1] === undefined) {
        hash.data[newAddress - 1] = newKey;
        updateArray();
      }
    }
  }
}

document.getElementById("expansionButton").addEventListener("click", () => {
  const expansionOption = document.querySelector("#expansionList").value;
  hash.expandArray(expansionOption);
  updateArray();
});x

function createButton() {
  let arrayLength = parseInt(document.getElementById("arrayLong").value);

  if (arrayLength === 10 || arrayLength === 100) {
    globalData = new InternalSearch(arrayLength);
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

  globalData = new InternalSearch(arregloAux.length);

  for (let i = 0; i < globalData.data.length; i++) {
    if (arregloAux[i] !== undefined) {
      globalData.set(arregloAux[i], searchOption);
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
