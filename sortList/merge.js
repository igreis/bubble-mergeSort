function mergeSort(array) {
    // Verifica se só tem um elemento na lista e retorna ele
    if (array.length <= 1) {
        return array;
    }
    // Dividir o array no meio
    const indexDoMeio = Math.floor(array.length / 2); // Corrigido: calcular o índice do meio corretamente
    const esquerdaDoArray = array.slice(0, indexDoMeio);
    const direitaDoArray = array.slice(indexDoMeio);

    // Chamada recursiva
    const sortedEsquerda = mergeSort(esquerdaDoArray);
    const sortedDireita = mergeSort(direitaDoArray);

    return merge(sortedEsquerda, sortedDireita);
}

// Função para juntar os arrays
function merge(esquerdaDoArray, direitaDoArray) {
    let resultado = [];
    let indexEsquerda = 0;
    let indexDireita = 0;

    // Comparar e ordenar
    while (indexEsquerda < esquerdaDoArray.length && indexDireita < direitaDoArray.length) {
        if (esquerdaDoArray[indexEsquerda] < direitaDoArray[indexDireita]) {
            resultado.push(esquerdaDoArray[indexEsquerda]);
            indexEsquerda++;
        } else {
            resultado.push(direitaDoArray[indexDireita]);
            indexDireita++;
        }
    }

    // Adicionar os elementos restantes
    return resultado
        .concat(esquerdaDoArray.slice(indexEsquerda))
        .concat(direitaDoArray.slice(indexDireita)); // Corrigido: estava repetindo o slice
}

// Teste
const array = [12, 6, 4, 8, 2, 42, 29, 11];
const arrayArrumado = mergeSort(array);
console.log("Array arrumado: ", arrayArrumado);
