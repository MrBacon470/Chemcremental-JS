let antiDisplayEffects = [D(0),D(0),D(0)]
let antimatterEffects = [D(0),D(0),D(0)]
let antimatterGain = D(0)
let matterGain = D(0)
let matterBoosts = [D(0),D(0),D(0)]
let darkEnergyGain = D(0)
let darkEnergyEffects = D(0)
let darkMatterGain = D(0)

const darkMatterCosts = [D(1e3),D(1e6),D(1e9),D(1e12),D(1e15)]
const darkMatterUpDesc = ['Decrease Antimatter Gain<br>Cost: 1.00 Kilogram','Boost Dark Energy Gain<br>Cost: 1.00 Megagram','Boost Dark Matter Gain<br>Cost: 1.00 Teragram','','']
function updateMatter() {
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    antimatterGain = data.hasTab[6] && sumOfElements.gte(D(1e140)) ? Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(sumOfElements.divide(D(1e140))))) : D(0)
    matterGain = sumOfElements.lt(D(1e120)) ? D(0) : Decimal.sqrt(Decimal.sqrt(sumOfElements.divide(D(1e115))))
    darkMatterGain = data.darkEnergy.gt(D(0)) && data.matter[1].gt(D(0)) ? (data.matter[0].sub(data.matter[1])).times(Decimal.sqrt(data.darkEnergy).divide((data.matter[0].sub(data.matter[1]).mul(D(0.35))))) : D(0)
    darkEnergyGain = Decimal.sqrt(Decimal.sqrt(data.power)).times(D(0.5))
    if(data.matterUnlocked[0]) {
        data.darkEnergy = data.darkEnergy.plus(darkEnergyGain)
    }
    if(data.hasTab[6] && sumOfElements.gte(D(1e140))) {
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

function darken() {
    consolidate()
    data.matter[2] = data.matter[2].plus(darkMatterGain)
    data.matter[0] = data.matter[1] = data.darkEnergy = D(0)
}

function purchaseDarkUp(i) {
    if(data.matter[2].lt(darkMatterCosts[i]) && !data.darkUpUnlocked[i]) return
    data.matter[2] = data.matter[2].sub(darkMatterCosts[i])
    data.darkUpUnlocked[i] = true
}