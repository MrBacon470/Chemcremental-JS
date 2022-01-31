function calculateElementGain() {
    for(let i = 0; i < 8; i++) {
        
        if(i === 7) {
            //data.elementGain[i] = (data.elements[i].level.times(compoundBoosts[0].add(compoundBoosts[3]).add(powerBoosts[0]).add(coriumMultBoosts[0]).add(Decimal.sqrt(data.coriumMax))))
            data.elementGain[i] = data.elements[i].level.times(compoundBoosts[0])
            data.elementGain[i] = data.elementGain[i].times(compoundBoosts[3])
            data.elementGain[i] = data.elementGain[i].times(powerBoosts[0])
            data.elementGain[i] = data.elementGain[i].times(coriumMultBoosts[0])
            data.elementGain[i] = data.elementGain[i].times(D(1).add(Decimal.sqrt(data.coriumMax)))
            if(data.accelerators[2].level.gt(D(0)) && data.accelerators[2].upgradeLevel.gte(D(3)))
                data.elementGain[i] = data.elementGain[i].times(D(1).add((Decimal.sqrt(data.refineryCurrencies[2].times(D(2)))).times(accelBoosts[2].d)))
            else
                data.elementGain[i] = data.elementGain[i].times(D(1).add(Decimal.sqrt(data.refineryCurrencies[2].times(D(2)))))
            if(data.accelerators[0].level.gt(D(0)) && data.accelerators[0].upgradeLevel.gte(D(0)))
                data.elementGain[i] = data.elementGain[i].times(accelBoosts[0].a)
            if(data.accelerators[0].level.gt(D(0)) && data.accelerators[0].upgradeLevel.gte(D(1)))
                data.elementGain[i] = data.elementGain[i].times(accelBoosts[0].b)
            if(data.accelerators[0].level.gt(D(0)) && data.accelerators[0].upgradeLevel.gte(D(3)))
                data.elementGain[i] = data.elementGain[i].times(accelBoosts[0].d)
        }
        else {
            //data.elementGain[i] = ((data.elements[i].level.times((compoundBoosts[0].add(powerBoosts[0].add(coriumMultBoosts[0]).add(Decimal.sqrt(data.coriumMax)).add(Decimal.sqrt(data.elements[i + 1].max)))))))
            data.elementGain[i] = data.elements[i].level.times(D(1).add(Decimal.sqrt(data.elements[i + 1].max)))
            data.elementGain[i] = data.elementGain[i].times(compoundBoosts[0])
            data.elementGain[i] = data.elementGain[i].times(D(1).add(powerBoosts[0]))
            data.elementGain[i] = data.elementGain[i].times(D(1).add(coriumMultBoosts[0]))
            data.elementGain[i] = data.elementGain[i].times(D(1).add(Decimal.sqrt(data.coriumMax)))
            data.elementGain[i] = data.elementGain[i].times(D(1).add(Decimal.sqrt(data.refineryCurrencies[2].times(D(2)))))
            if(data.accelerators[0].level.gt(D(0)) && data.accelerators[0].upgradeLevel.gte(D(3)))
                data.elementGain[i] = data.elementGain[i].times(accelBoosts[0].d)
            if(data.accelerators[0].level.gt(D(0)) && data.accelerators[0].upgradeLevel.gte(D(0)))
                data.elementGain[i] = data.elementGain[i].times(accelBoosts[0].a)
        }

        if(i === 7) {
            //data.elementGain[i] = (data.elements[i].level.times(compoundBoosts[0].add(compoundBoosts[3]).add(powerBoosts[0]).add(coriumMultBoosts[0]).add(Decimal.sqrt(data.coriumMax))))
            data.isotopeGain[i] = data.isotopes[i].level.times(D(1).add(Decimal.sqrt(data.coriumMax)))
            data.isotopeGain[i] = data.isotopeGain[i].times(D(1).add(Decimal.sqrt(data.refineryCurrencies[2].times(D(2)))))
        }
        else {
            //data.elementGain[i] = ((data.elements[i].level.times((compoundBoosts[0].add(powerBoosts[0].add(coriumMultBoosts[0]).add(Decimal.sqrt(data.coriumMax)).add(Decimal.sqrt(data.elements[i + 1].max)))))))
            data.isotopeGain[i] = data.isotopes[i].level.times(D(1).add(Decimal.sqrt(data.isotopes[i + 1].max)))
            data.isotopeGain[i] = data.isotopeGain[i].times(D(1).add(Decimal.sqrt(data.coriumMax)))
            data.isotopeGain[i] = data.isotopeGain[i].times(D(1).add(Decimal.sqrt(data.refineryCurrencies[2].times(D(2)))))
        }
    }
    //for(let i = 0; i < 8; i++)
        //data.elementGain[i] = data.compounds[0].amt.gt(D(0)) ? data.elementGain[i] : data.elementGain[i].divide(D(10000)) 
}

function increaseElements(x,i) {
        data.elements[i].amt = data.elements[i].amt.plus(x);
        if(i != 0) {
            data.elements[i].max = data.elements[i].max.plus(x);
        }

}

function increaseIsotopes(x,i) {
    data.isotopes[i].amt = data.isotopes[i].amt.plus(x);
    if(i != 0) {
        data.isotopes[i].max = data.isotopes[i].max.plus(x);
    }

}

function switchTab(i){
    data.currentTab = i
    let x=i-3
    if (x >= 0) data.hasTab[x] ? data.currentTab=i : data.currentTab=1
    tabChangeHTML()
}
function switchSubTab(i,x){
    data.currentSubTab[x] = i
    //let x=i-3
    //if (i >= 0) data.hasTab[x] ? data.currentSubTab[x]=i : data.currentSubTab[x] = 1
    subTabChangeHTML()
}
let sumOfElements = D(0)
let shardsToGet = D(0), fragmentsToGet = D(0), coinsToGet = D(0)
let diff
function mainLoop(){
    diff = data.settingsToggles[1]?(Date.now()-data.time)*data.devSpeed/1000:getRandom(0.048, 0.053)*data.devSpeed
    data.time = Date.now()
    //Functions Here
    updateBoosts()
    updateAccelStuff()
    updateHTML()
    updateAchievementHTML()
    updateCosts()
    updateMeltCost()
    updatePowerCosts()
    calculateElementGain()
    unlockAchieves()
    //Misc Stuff Here
    for(let i = 0; i < 8; i++) {
        increaseElements(data.elementGain[i].times(diff), i)
        increaseIsotopes(data.isotopeGain[i].times(diff), i)
    }
        
    powerGain = Decimal.ceil((Decimal.sqrt(data.compounds[0].amt / 4).plus(Decimal.sqrt(data.compounds[1].amt / 4))).times(compoundBoosts[1] + powerBoosts[2]))
    if(data.accelerators[1].level.gt(D(0)) && data.accelerators[1].upgradeLevel.gte(D(0)))
        powerGain = powerGain.times(accelBoosts[2].a)
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    //Corium
    coriumToGet = D(0)
    coriumToGet = D(1).add(Decimal.sqrt(sumOfElements / D(1e6)).times(coriumMultBoosts[2]))
    coriumToGet = coriumToGet.times(compoundBoosts[4])
    if(data.accelerators[1].level.gt(D(0)) && data.accelerators[1].upgradeLevel.gte(D(0)))
        coriumToGet = coriumToGet.times(accelBoosts[1].a)
    //Misc stuff
    if(data.elements[0].amt.lt(D(10)) && data.elements[0].level.lt(D(1)))
        data.elements[0].amt = D(10)
    shardsToGet = Decimal.sqrt(sumOfElements.divide(D(1e8)))
    fragmentsToGet = Decimal.sqrt(data.refineryCurrencies[0].divide(D(1e5)))
    coinsToGet = Decimal.sqrt(data.refineryCurrencies[1].divide(D(1e3)))
    if(data.accelerators[1].level.gt(D(0)) && data.accelerators[1].upgradeLevel.gte(D(1))) {
        shardsToGet = shardsToGet.times(accelBoosts[2].b)
        fragmentsToGet = fragmentsToGet.times(accelBoosts[2].b)
        coinsToGet = coinsToGet.times(accelBoosts[2].b)
    }
    for(let i = 0; i < 3; i++) {
        data.accelerators[i].lvlCap = D(25).plus(D(25).times(data.accelerators[i].upgradeLevel))
    }
}
function updateBoosts() {
    for(let i = 0; i < 5; i++) {
        if(data.compounds[i].amt.gt(D(0)))
            compoundBoosts[i] = D(1).add(Decimal.sqrt(data.compounds[i].amt / 8)) 
        else
        compoundBoosts[i] = D(1)

        if(data.accelerators[0].level.gt(D(0)) && data.accelerators[0].upgradeLevel.gte(D(2)))
            compoundBoosts[i] = compoundBoosts[i].times(accelBoosts[0].c)
    }
    for(let i = 0; i < 3; i++) {
        let boosts = [D(2), D(10), D(0.1)]
        if(i !== 0)
            powerBoosts[i] = boosts[i].times(data.powerUps[i])
        else
            if(data.powerUps[i].gt(D(0)))
                powerBoosts[0] = boosts[i].times(data.powerUps[i])
            else
                powerBoosts[0] = D(1)
    }
    if(data.accelerators[2].level.gt(D(0)) && data.accelerators[2].upgradeLevel.gte(D(2)))
        powerBoosts[0] = powerBoosts[0].times(accelBoosts[2].c)
    /*
    powerBoosts[0] = data.powerUps[0] === D(0) ? D(1) : D(2).times(data.powerUps[0])
    powerBoosts[1] = D(10).times(data.powerUps[1])
    powerBoosts[2] = D(0.1).times(data.powerUps[2])
    */
    powerLimit = D(100).plus(powerBoosts[1] * (compoundBoosts[2]))
    for(let i = 0; i < 3; i++) {
        let boosts = [D(4),D(1.25),D(0.5)]
        if(data.coriumMultUps[i].gt(D(0)))
            coriumMultBoosts[i] = boosts[i].times(data.coriumMultUps[i])
        else
            coriumMultBoosts[i] = D(1)

    }
    if(data.accelerators[1].level.gt(D(0)) && data.accelerators[1].upgradeLevel.gte(D(1)))
        coriumMultBoosts[0] = coriumMultBoosts[0].times(accelBoosts[1].b)
    if(data.accelerators[1].level.gt(D(0)) && data.accelerators[1].upgradeLevel.gte(D(2)))
        coriumMultBoosts[1] = coriumMultBoosts[1].times(accelBoosts[1].c)
    if(data.accelerators[1].level.gt(D(0)) && data.accelerators[1].upgradeLevel.gte(D(3)))
        coriumMultBoosts[2] = coriumMultBoosts[2].times(accelBoosts[1].d)
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

function refine(i) {
    switch(i) {
        case 0:
            if(sumOfElements.gte(D(1e8))) {
                data.refineryCurrencies[0] = data.refineryCurrencies[0].plus(shardsToGet)
                shardsToGet = D(0)
            }
            break;
        case 1:
            if(data.refineryCurrencies[0].gte(D(1e5))) {
                data.refineryCurrencies[1] = data.refineryCurrencies[1].plus(fragmentsToGet)
                data.refineryCurrencies[0] = D(0)
                fragmentsToGet = D(0)
            }
            break;
        case 2:
            if(data.refineryCurrencies[1].gte(D(1e3))) {
                data.refineryCurrencies[2] = data.refineryCurrencies[2].plus(coinsToGet)
                data.refineryCurrencies[1] = D(0)
                coinsToGet = D(0)
            }
            break;
    }
}
/*
function confirmVariable(i) {
    switch(i) {
        case 'prestigeY':
            meltConfirmed = true;
            DOMCacheGetOrSet('confirmWrapper').style.display = 'none'
            break;
        case 'prestigeN':
            meltConfirmed = false;
            DOMCacheGetOrSet('confirmWrapper').style.display = 'none'
            break;
    }
}

function callConfirmation(i) {
    switch(i) {
        case 'prestige':
            DOMCacheGetOrSet('confirm').innerHTML = 'Are you sure you want to prestige?'
            DOMCacheGetOrSet('confirmWrapper').style.display = 'flex'
            DOMCacheGetOrSet('confirmB').addEventListener('click', () => confirmVariable('prestigeY')) 
            DOMCacheGetOrSet('cancelB').addEventListener('click', () => confirmVariable('prestigeY')) 
            break;
    }
}
*/
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
