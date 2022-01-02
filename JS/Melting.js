let coriumToGet = D(0)

function meltDown() {
    if(elementSum.lt(1e20)) return

    data.corium = data.corium.plus(coriumToGet)
    data.coriumMax = data.coriumMax.plus(coriumToGet)

    for(let i = 0; i < data.elements.length; i++) {
        data.elements[i].level = D(0)
        data.elements[i].max = D(0)
        data.elements[i].amt = D(0)
    }
    for(let i = 0; i < data.compounds.length; i++) {
        
    }
}