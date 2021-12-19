const elementBase = [10, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8]
const elementScale = [1.10, 1.15, 1.20, 1.25, 1.35, 1.40, 1.45, 1.50]
let elementCost = []

for(let i = 0; i < elementBase.length; i++) {
    elementCost[i] = elementBase[i] * Math.pow(elementScale[i], data.elements[i].level);
}

function purchaseElement(i) {
    if(i == 0 || i == 1) {
        if(data.elements[0].amt >= elementCost[i]) {
            data.elements[i].level++
            data.elements[0].amt -= elementCost[i]
        }
    }
    else {
        if(data.elements[i - 1].amt >= elementCost[i]) {
            data.elements[i].level++
            data.elements[i - 1].amt -= elementCost[i]
        }
    }
}