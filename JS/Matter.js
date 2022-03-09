let antiDisplayEffects = [D(0),D(0),D(0)]
let antimatterEffects = [D(0),D(0),D(0)]
let antimatterGain = D(0)
let matterGain = D(0)
let matterBoosts = [D(0),D(0),D(0)]
let darkEnergyGain = D(0)
let darkEnergyEffects = D(0)
let darkMatterGain = D(0)
function updateMatter() {
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    antimatterGain = data.hasTab[6] && sumOfElements.gte(D(1e145)) ? Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(sumOfElements.divide(D(1e145))))) : D(0)
    matterGain = sumOfElements.lt(D(1e120)) ? D(0) : Decimal.sqrt(Decimal.sqrt(sumOfElements.divide(D(1e115))))
    darkMatterGain = data.darkEnergy.gt(D(0)) ? (data.matter[0].sub(data.matter[1])).times(D(1).divide(data.darkEnergy)) : D(0)
    darkEnergyGain = Decimal.sqrt(Decimal.sqrt(data.power))
    if(data.hasTab[6] && sumOfElements.gte(D(1e145))) {
        data.matter[1] = data.matter[1].plus(antimatterGain.times(diff))
    }
}

function consolidate() {
    data.matter[0] = data.matter[0].plus(matterGain)

    for(let i = 0; i < 3; i++) {
        data.coriumMultUps[i] = D(0)
    }
    
    data.coriumMax = D(0)
    data.corium = D(0)
    
    for(let i = 0; i < 5; i++)
        data.compounds[i].amt = D(0)

    for(let i = 7; i > -1; i--) {
        data.elements[i].level = D(0)
        data.elements[i].max = D(0)
        data.elements[i].amt = D(0)
        data.elementGain[i] = D(0)
    }
}

function condense() {
    data.darkEnergy = data.darkEnergy.plus(darkEnergyGain)
    for(let i = 0; i < 4; i++)
        data.fuelStored[i] = D(0)
    data.power = data.powerStored = D(0)
    for(let i = 0; i < 3; i++) 
        data.powerUps[i]  = D(0)
}

function darken() {
    data.matter[2] = data.matter[2].plus(darkMatterGain)
    data.matter[0] = data.matter[1] = data.darkEnergy = D(0)
}