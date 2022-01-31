let coriumToGet = D(0)
const coriumMultCostBase = [D(1e3),D(1e5),D(1e10)]
let coriumMultCosts = [D(0),D(0),D(0)]
const coriumSingCost = [D(1e10),D(1e15),D(1e38)]
let coriumMultBoosts = [D(0),D(0),D(0)]
let coriumBoost = D(0)

function meltDown() {
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    if(sumOfElements.lt(D(1e8))) return;
    if(data.settingsToggles[0])
        if(!confirm('Are you sure you want to prestige? This will reset everything in exchange for corium')) return
    data.corium = data.corium.plus(coriumToGet)
    data.coriumMax = data.coriumMax.plus(coriumToGet)

    for(let i = 7; i > -1; i--) {
        data.elements[i].level = D(0)
        data.elements[i].max = D(0)
        data.elements[i].amt = D(0)
        data.elementGain[i] = D(0)
    }
    data.elements[0].amt = D(10)
    for(let i = 0; i < data.compounds.length; i++) {
        data.compounds[i].amt = D(0)
    }
    data.powerStored = D(0)
    data.power = D(0)
    for(let i = 0; i < data.powerUps.length; i++)
        data.powerUps[i] = D(0)

    data.previousSum = D(1)
}

function updateMeltCost() {
    for(let i = 0; i < 3; i++) {
        coriumMultCosts[i] = data.coriumMultUps[i] > 0 ? coriumMultCostBase[i].times(Decimal.pow(D(1.75),data.coriumMultUps[i])) : coriumMultCostBase[i]
    }
    
}

function purchaseMeltUp(x) {
    switch(x) {
        case 'm1':
            for(let x = 0; x < data.buyAmounts[4]; x++){
            if(data.corium.lt(coriumMultCosts[0])) return
            data.corium = data.corium.minus(coriumMultCosts[0])
            data.coriumMultUps[0] = data.coriumMultUps[0].plus(D(1))
            updateMeltCost()
            }
            break;
        case 'm2':
            for(let x = 0; x < data.buyAmounts[4]; x++){
                if(data.corium.lt(coriumMultCosts[1])) return
                data.corium = data.corium.minus(coriumMultCosts[1])
                data.coriumMultUps[1] = data.coriumMultUps[1].plus(D(1))
                updateMeltCost()
                }
        case 'm3':
            for(let x = 0; x < data.buyAmounts[4]; x++){
                if(data.corium.lt(coriumMultCosts[2])) return
                data.corium = data.corium.minus(coriumMultCosts[2])
                data.coriumMultUps[2] = data.coriumMultUps[2].plus(D(1))
                updateMeltCost()
                }
            break;
        case 's1':
            if(data.corium.lt(coriumSingCost[0]) || data.coriumSingUps[0] === true) return
            data.corium = data.corium.minus(coriumSingCost[0])
            data.coriumSingUps[0] = true
            break;
        case 's2':
            if(data.corium.lt(coriumSingCost[1]) || data.coriumSingUps[1] === true) return
            data.corium = data.corium.minus(coriumSingCost[1])
            data.coriumSingUps[1] = true
            break;
        case 's3':
            break;
    }
}