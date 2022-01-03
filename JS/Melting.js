let coriumToGet = D(0)
const coriumMultCostBase = [D(1e5),D(1e9),D(1e12)]
let coriumMultCosts = [D(0),D(0),D(0)]
const coriumSingCost = [D(1e12),D(1e15),D(1e17)]

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
        data.compounds[i].amt = D(0)
    }
    data.power = D(0)
    for(let i = 0; i < data.powerUps.length; i++)
        data.powerUps[i] = D(0)
}

function updateMeltCost() {
    for(let i = 0; i < 3; i++)
    coriumMultCosts[i] = coriumMultCostBase[i].times(Decimal.pow(D(1.75),data.coriumMultUps[i]))
}

function purchaseMeltUp(x) {
    switch(x) {
        case 'm1':
            break;
        case 'm2':
            break;
        case 'm3':
            break;
        case 's1':
            break;
        case 's2':
            break;
        case 's3':
            break;
    }
}