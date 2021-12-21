const elementBase = [D(10), D(1e2), D(1e3), D(1e4), D(1e5), D(1e6), D(1e7), D(1e8)]
const elementScale = [D(1.10), D(1.15), D(1.20), D(1.25), D(1.35), D(1.40), D(1.45), D(1.50)]
let elementCost = []

function updateCosts() {
    for(let i = 0; i < elementBase.length; i++) {
        elementCost[i] = elementBase[i].times(Decimal.pow(elementScale[i], data.elements[i].level))
    }
}

function purchaseElement(i) {
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

