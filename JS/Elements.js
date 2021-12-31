const elementBase = [D(10), D(1e5), D(1e8), D(1e12), D(1e14), D(1e16), D(1e18), D(1e20)]
const elementScale = [D(1.10), D(1.15), D(1.20), D(1.25), D(1.35), D(1.40), D(1.45), D(1.50)]
let elementCost = []

function updateCosts() {
    for(let i = 0; i < elementBase.length; i++) {
        elementCost[i] = elementBase[i].times(Decimal.pow(D(2.5), data.elements[i].level))
    }
}

function purchaseElement(i) {
    for(let x = 0; x < data.buyAmounts[0]; x++){
    updateCosts()
    
    if(i == 0 || i == 1) {
        if(data.elements[0].amt.gte(elementCost[i])) {
            data.elements[i].level = data.elements[i].level.add(1)
            data.elements[0].amt = data.elements[0].amt.sub(elementCost[i])
        }
    }
    else {
        if(data.elements[i - 1].amt.gte(elementCost[i])) {
            data.elements[i].level = data.elements[i].level.add(1)
            data.elements[i - 1].amt = data.elements[0].amt.sub(elementCost[i])
        }
    }
}
}

