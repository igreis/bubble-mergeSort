function bubbleSort(list) {
    let trocou;
    let tamanhoArray = list.length;

    do {
        trocou = false;
        for (let i = 0; i < tamanhoArray - 1; i++) {
            if (list[i] > list[i + 1]) {
                [list[i], list[i + 1]] = [list[i + 1], list[i]];
                trocou = true;
            }
        }
        tamanhoArray --;
    } while (trocou)

   
    return list;
}

console.log(bubbleSort([9, 8, 7, 6, 5, 1, 3, 4, 10, 11, 2]))
//Saida -> [1,2,3,4,5,6,7,8,9,10,11]