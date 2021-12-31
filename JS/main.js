function calculateElementGain() {
    for(let i = 0; i < 8; i++) {
        if(i === 7) {
            data.elementGain[i] = data.elementGain[i].plus((data.elements[i].level.divide(4)).times(Decimal.sqrt(D(1).plus(data.compounds[0].amt.divide(4)))).times(D(1).plus(Decimal.sqrt((data.compounds[4].amt.divide(4))))))
        }
        else {
            data.elementGain[i] = data.elementGain[i].plus((data.elements[i].level.times((1 + Decimal.sqrt(data.elements[i + 1].max.divide(4)))).divide(4)).times(D(1).plus(Decimal.sqrt((data.compounds[0].amt.divide(4))))))
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
    powerGain = Decimal.ceil((Decimal.sqrt(data.compounds[0].amt / 4).plus(Decimal.sqrt(data.compounds[1].amt / 4))).times(D(1).plus(Decimal.sqrt(data.compounds[1].amt / 4))))
}


function toggleBuyAmount(i) {
    if(data.buyAmounts[i] === 1)
        data.buyAmounts[i] = 10
    else if(data.buyAmounts[i] === 10)
        data.buyAmounts[i] = 100
    else if(data.buyAmounts[i] === 100)
        data.buyAmounts[i] = 1000
    else if(data.buyAmounts[i] === 1000)
        data.buyAmounts[i] = 1
}

/* Didn't Work
function buyMax(c,b,s,l) {
    //c == Currency | b == base cost | s == rate/cost scale | l == levels to be increased
    //Converted from C# made by Cryptogrounds
    //var n = Floor(Log((c * (s - 1) / (b * Pow(s, l))) + 1, s));
    let n = Decimal.floor(Decimal.log(c.times(s.sub(1)).divide(b.times(Decimal.pow(s, l))).plus(1), s))
    // var cost = b * (Pow(s, l) * (Pow(s, n) - 1) / (s - 1));
    let cost = b.times(Decimal.pow(s,l)).times(Decimal.pow(s,n).sub(1)).divide(s.sub(1))
    console.log(cost)
    if(c.gte(cost)) {
        l = l.plus(n)
        c = c.minus(cost)
    }
}

Obsolete
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
