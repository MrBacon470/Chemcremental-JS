let antimatterEffects = [D(0),D(0),D(0)]
let antimatterGain = D(0)
let matterGain = D(0)
let matterBoosts = [D(0),D(0),D(0)]
const boostDivisors = [D(10),D(100),D(1e3)]

function updateMatter() {
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    antimatterGain = data.matter[0].gt(D(0)) && sumOfElements.gte(D(1e150)) ? Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(sumOfElements.divide(D(1e150))))) : D(0)
    matterGain = sumOfElements.lt(D(1e130)) ? Decimal.sqrt(sumOfElements.divide(D(1e125))) : D(0)
    if(data.matter[0].gt(D(0)) && sumOfElements.gte(D(1e150))) {
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
