function calculateElementGain() {
    for(let i = 0; i < 8; i++) {
        if(i === 7) {
            data.elementGain[i] = data.elementGain[i].plus(data.elements[i].level.divide(4))
        }
        else {
            data.elementGain[i] = data.elementGain[i].plus(data.elements[i].level.times((1 + Decimal.sqrt(data.elements[i + 1].max.divide(4)))).divide(4))
        }
    }
}

function increaseElements(x,i) {
        data.elements[i].amt = data.elements[i].amt.plus(x);
        if(i != 0) {
            data.elements[i].max = data.elements[i].max.plus(x);
        }

}

function switchTab(i){
    data.currentTab = i
    let x=i-2
    if (x >= 0) data.hasTab[x] ? data.currentTab=i : data.currentTab=1
    tabChangeHTML()
}

function mainLoop(){
    let diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    updateHTML()
    updateCosts()
    calculateElementGain()
    for(let i = 0; i < 8; i++)
        increaseElements(data.elementGain[i].times(diff), i)
}
/*
function elementProduction(){
    data.elements[0].amt = data.elements[0].amt.add(data.elements[0].level.times((1 + Decimal.sqrt(data.elements[1].max))))

    data.elements[1].amt = data.elements[1].amt.add(data.elements[1].level.times((1 + Decimal.sqrt(data.elements[2].max))))
    data.elements[1].max = data.elements[1].max.add(data.elements[1].level.times(1 + Decimal.sqrt(data.elements[2].max)))

    data.elements[2].amt = data.elements[2].amt.add(data.elements[2].level.times((1 + Decimal.sqrt(data.elements[3].max))))
    data.elements[2].max = data.elements[2].max.add(data.elements[2].level * (1 + Decimal.sqrt(data.elements[3].max)))
    
    data.elements[3].amt = data.elements[3].amt.add(data.elements[3].level.times((1 + Decimal.sqrt(data.elements[4].max))))
    data.elements[3].max = data.elements[3].max.add(data.elements[3].level * (1 + Decimal.sqrt(data.elements[4].max)))

    data.elements[4].amt = data.elements[4].amt.add(data.elements[4].level.times((1 + Decimal.sqrt(data.elements[5].max))))
    data.elements[4].max = data.elements[4].max.add(data.elements[4].level * (1 + Decimal.sqrt(data.elements[5].max)))

    data.elements[5].amt = data.elements[5].amt.add(data.elements[5].level.times((1 + Decimal.sqrt(data.elements[6].max))))
    data.elements[5].max = data.elements[5].max.add(data.elements[5].level * (1 + Decimal.sqrt(data.elements[6].max)))

    data.elements[6].amt = data.elements[6].amt.add(data.elements[6].level.times((1 + Decimal.sqrt(data.elements[7].max))))
    data.elements[6].max = data.elements[6].max.add(data.elements[6].level * (1 + Decimal.sqrt(data.elements[7].max)))

    data.elements[7].amt = data.elements[7].amt.add(data.elements[7].level)
    data.elements[7].max = data.elements[7].max.add(data.elements[7].level)
}
*/
window.setInterval(function(){
    mainLoop()
}, 10);
