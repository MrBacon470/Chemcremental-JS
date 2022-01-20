

function calculateElementGain() {
    for(let i = 0; i < 8; i++) {
        if(i === 7) {
            data.elementGain[i] = data.elements[i].level.divide(10000).times(compoundBoosts[0] + compoundBoosts[3] + powerBoosts[0] + coriumMultBoosts[0] + Decimal.sqrt(data.coriumMax))
        }
        else {
            data.elementGain[i] = (data.elements[i].level.divide(10000).times((1 + Decimal.sqrt(data.elements[i + 1].max)))).times(compoundBoosts[0] + powerBoosts[0] + coriumMultBoosts[0] + Decimal.sqrt(data.coriumMax))
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
let sumOfElements = D(0)
let diff
function mainLoop(){
    diff = data.settingsToggles[1]?(Date.now()-data.time)*data.devSpeed/1000:getRandom(0.048, 0.053)*data.devSpeed
    data.time = Date.now()
    updateBoosts()
    updateHTML()
    updateCosts()
    updateMeltCost()
    updatePowerCosts()
    calculateElementGain()
    for(let i = 0; i < 8; i++)
        increaseElements(data.elementGain[i].times(diff), i)
    powerGain = Decimal.ceil((Decimal.sqrt(data.compounds[0].amt / 4).plus(Decimal.sqrt(data.compounds[1].amt / 4))).times(compoundBoosts[1] + powerBoosts[2]))
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    coriumToGet = D(0)
    coriumToGet = 1 + (Decimal.sqrt(sumOfElements).times(coriumMultBoosts[2] + compoundBoosts[4]))
}

function updateBoosts() {
    for(let i = 0; i < 5; i++)
        compoundBoosts[i] = data.compounds[i].amt.gt(0) ? D(1).add(Decimal.sqrt(data.compounds[i].amt / 8)) : D(1)

    powerBoosts[0] = D(2).times(data.powerUps[0])
    powerBoosts[1] = D(10).times(data.powerUps[1])
    powerBoosts[2] = D(0.1).times(data.powerUps[2])
    powerLimit = D(100).plus(powerBoosts[1] * (compoundBoosts[2]))

    coriumMultBoosts[0] = D(4).times(data.coriumMultUps[0])
    coriumMultBoosts[1] = data.coriumMultUps[1] > 0 ? D(1.25).times(data.coriumMultUps[1]) : D(1)
    coriumMultBoosts[2] = data.coriumMultUps[2] > 0 ? D(0.5).times(data.coriumMultUps[2]) : D(1)
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

function toggleButton(i){
    data.settingsToggles[i] = !data.settingsToggles[i]
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
