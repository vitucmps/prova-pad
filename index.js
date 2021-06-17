// Questão 1:

function someFun(params, callback) {
  callback(params.someProperty)

  return 1
}

// Questão 2:

function someFn(number) {
  const returnFunction = (value) => {
    switch (value) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return returnFunction
}

// Questão 3:

function calculator(v1, v2) {
  return callback => callback(v1, v2)
}

// Questão 4:

//Ordem: 4 1 5 1

// Questão 5:

function tabuada(numero) {
  for (let a = 1; a <= 10; a++) {
    console.log(`${numero} X ${a} = ${numero * a}`)
  }
}
