let lista = [9, 8, 7, 6, 5, 1, 3, 4, 10, 11, 18, 2];

function verifica() {
    for (let i in lista) {
        let proxI = Number(i) + 1
        if (lista[i] > lista[proxI]) {
            return true;
        } 
    }
    return false;
}

while (verifica()) {
    for (let i in lista) {
        let proxI = Number(i) + 1;
        if (lista[i] > lista[proxI]) {
            const valorPerdido = lista[proxI];
            lista[proxI] = lista[i];
            lista[i] = valorPerdido;
        }
    }
}

console.log(lista);
