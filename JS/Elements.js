const elementBase = [D(10), D(1e2), D(1e3), D(1e4), D(1e5), D(1e6), D(1e7), D(1e8)]
const isotopeBase = [D(1e25),D(1e2),D(1e3),D(1e4),D(1e5),D(1e6),D(1e7),D(1e8)]
const elementScale = [D(1.25), D(1.3), D(1.35), D(1.4), D(1.45), D(1.5), D(1.6), D(1.7)]
let elementCost = []
let isotopeCost = []
function updateCosts() {
    for(let i = 0; i < elementBase.length; i++) {
        elementCost[i] = elementBase[i].times(Decimal.pow(elementScale[i], data.elements[i].level))
    }
    for(let i = 0; i < isotopeBase.length; i++) {
        isotopeCost[i] = isotopeBase[i].times(Decimal.pow(elementScale[i], data.isotopes[i].level))
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
                data.elements[i - 1].amt = data.elements[i - 1].amt.sub(elementCost[i])
            }
        }
    }
}

function purchaseIsotope(i) {
    for(let x = 0; x < data.buyAmounts[2]; x++){
    updateCosts()
    
        if(i == 0) {
            if(data.elements[7].amt.gte(isotopeCost[i])) {
                data.isotopes[i].level = data.isotopes[i].level.add(1)
                data.elements[7].amt = data.elements[7].amt.sub(isotopeCost[i])
            }
        }
        else {
            if(data.isotopes[i - 1].amt.gte(isotopeCost[i])) {
                data.isotopes[i].level = data.isotopes[i].level.add(1)
                data.isotopes[i - 1].amt = data.isotopes[i - 1].amt.sub(isotopeCost[i])
            }
        }
    }
}

