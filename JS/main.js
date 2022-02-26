
function calculateElementGain() {
    for(let i = 0; i < 8; i++) {
        
        if(i === 7) {
            //data.elementGain[i] = (data.elements[i].level.times(compoundBoosts[0].add(compoundBoosts[3]).add(powerBoosts[0]).add(coriumMultBoosts[0]).add(Decimal.sqrt(data.coriumMax))))
            data.elementGain[i] = data.elements[i].level.times(compoundBoosts[0])
            data.elementGain[i] = data.elementGain[i].times(compoundBoosts[3])
            data.elementGain[i] = data.elementGain[i].times(powerBoosts[0])
            data.elementGain[i] = data.elementGain[i].times(coriumMultBoosts[0])
            data.elementGain[i] = data.elementGain[i].times(coriumBoost)
            data.elementGain[i] = data.elementGain[i].times(augmentBoosts[0].boost[0])
            data.elementGain[i] = data.elementGain[i].times(augmentBoosts[0].boost[2])
            data.elementGain[i] = data.elementGain[i].times(D(1).plus(Decimal.sqrt(data.isotopes[0].max)))
            if(data.research[7])
                data.elementGain[i] = Decimal.pow(data.elementGain[i], D(1.10))
            data.elementGain[i] = data.elementGain[i].times(quarkBoosts[3])
        }
        else {
            //data.elementGain[i] = ((data.elements[i].level.times((compoundBoosts[0].add(powerBoosts[0].add(coriumMultBoosts[0]).add(Decimal.sqrt(data.coriumMax)).add(Decimal.sqrt(data.elements[i + 1].max)))))))
            data.elementGain[i] = data.elements[i].level.times(D(1).add(Decimal.sqrt(data.elements[i + 1].max)))
            data.elementGain[i] = data.elementGain[i].times(compoundBoosts[0])
            data.elementGain[i] = data.elementGain[i].times(D(1).add(powerBoosts[0]))
            data.elementGain[i] = data.elementGain[i].times(D(1).add(coriumMultBoosts[0]))
            data.elementGain[i] = data.elementGain[i].times(coriumBoost)
            data.elementGain[i] = data.elementGain[i].times(augmentBoosts[0].boost[0])
            if(data.research[6] && i < 4)
                data.elementGain[i] = Decimal.pow(data.elementGain[i], D(1.05))
            if(data.research[7] && i > 3)
                data.elementGain[i] = Decimal.pow(data.elementGain[i], D(1.10))
            if(i === 0) 
                data.elementGain[i] = data.elementGain[i].times(quarkBoosts[0])
        }

        if(i === 7) {
            //data.elementGain[i] = (data.elements[i].level.times(compoundBoosts[0].add(compoundBoosts[3]).add(powerBoosts[0]).add(coriumMultBoosts[0]).add(Decimal.sqrt(data.coriumMax))))
            data.isotopeGain[i] = data.isotopes[i].level
        }
        else {
            //data.elementGain[i] = ((data.elements[i].level.times((compoundBoosts[0].add(powerBoosts[0].add(coriumMultBoosts[0]).add(Decimal.sqrt(data.coriumMax)).add(Decimal.sqrt(data.elements[i + 1].max)))))))
            data.isotopeGain[i] = data.isotopes[i].level.times(D(1).add(Decimal.sqrt(data.isotopes[i + 1].max)))
            data.isotopeGain[i] = data.isotopeGain[i]
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
    data.isotopes[i].max = data.isotopes[i].max.plus(x);

}

function increasePower(i) {
    let fuelLoss = D(1)
    if(data.research[10]) fuelLoss = fuelLoss.divide(D(2))
    if(data.fuelStored[i].gt(D(0))) {
        if(!data.research[9]) {
            switch(i) {
                case 0:
                    data.powerStored = data.powerStored.plus((D(1).times(augmentBoosts[2].boost[2])).times(diff))
                    break
                case 1:
                    data.powerStored = data.powerStored.plus((D(10).times(augmentBoosts[2].boost[2])).times(diff))
                    break
                case 2:
                    data.powerStored = data.powerStored.plus((D(100).times(augmentBoosts[2].boost[2])).times(diff))
                    break
                case 3:
                    data.powerStored = data.powerStored.plus((D(1e3).times(augmentBoosts[2].boost[2])).times(diff))
                    break
            }
        }
        else {
            switch(i) {
                case 0:
                    data.power = data.power.plus((D(1).times(augmentBoosts[2].boost[2])).times(diff))
                    break
                case 1:
                    data.power = data.power.plus((D(10).times(augmentBoosts[2].boost[2])).times(diff))
                    break
                case 2:
                    data.power = data.power.plus((D(100).times(augmentBoosts[2].boost[2])).times(diff))
                    break
                case 3:
                    data.power = data.power.plus((D(1e3).times(augmentBoosts[2].boost[2])).times(diff))
                    break
            }
        }
    }

     //Fuel consumption logic
     for(let i = 0; i < 4; i++) {
        if(data.fuelStored[i].gt(D(0))) 
            data.fuelStored[i] = data.fuelStored[i].sub(fuelLoss.times(diff))
        
        if(data.fuelStored[i].lt(D(0)))
            data.fuelStored[i] = D(0)
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
let diff
function mainLoop(){
    diff = data.settingsToggles[1]?(Date.now()-data.time)*data.devSpeed/1000:getRandom(0.048, 0.053)*data.devSpeed
    data.time = Date.now()
    changeTheme(data.currentTheme)
    //Functions Here
    updateBoosts()
    updateAccelStuff()
    calculateAugmentBoost()
    updateRadiation()
    updateHTML()
    updateAchievementHTML()
    updateChallengeHTML()
    updateCosts()
    updateMeltCost()
    updatePowerCosts()
    calculateElementGain()
    unlockAchieves()
    automate()
    //Misc Stuff Here
    for(let i = 0; i < 8; i++) {
        increaseElements(data.elementGain[i].times(diff), i)
        increaseIsotopes(data.isotopeGain[i].times(diff), i)
    }
    for(let i = 0; i < 4; i++) {
        increasePower(i)
    }
    if(data.research[15] === true && data.alerted === false) {
        createAlert('You\'ve Reached the End Game for Now', 'Congrats! You\'ve now unlocked challenges<br>Which is the final point for the second prestige<br>I hope you enjoyed the new content')
        data.alerted = true
    }
    powerGain = Decimal.ceil((Decimal.sqrt(data.compounds[0].amt / 4).plus(Decimal.sqrt(data.compounds[1].amt / 4))).times(compoundBoosts[1] + powerBoosts[2]))
    powerGain = powerGain.times(augmentBoosts[2].boost[0])
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    //Corium
    coriumToGet = D(0)
    coriumToGet = D(1).add(Decimal.sqrt(sumOfElements / D(1e6)).times(coriumMultBoosts[2]))
    coriumToGet = coriumToGet.times(compoundBoosts[4])
    coriumToGet = coriumToGet.times(augmentBoosts[1].boost[0])
    if(data.activeChallenge[2]) coriumToGet = Decimal.sqrt(coriumToGet)
    if(data.research[11] && sumOfElements.gte(D(1e8))) {
        data.corium = data.corium.plus((coriumToGet.times(D(0.01))).times(diff))
        data.coriumMax = data.coriumMax.plus((coriumToGet.times(D(0.01))).times(diff))
    }
    //Misc stuff
    if(data.elements[0].amt.lt(D(10)) && data.elements[0].level.lt(D(1)))
        data.elements[0].amt = D(10)
    challengeGoalResources[0] = data.corium
    challengeGoalResources[1] = data.particles[1].muons
    challengeGoalResources[2] = data.corium
    challengeGoalResources[3] = data.particles[0].protons
    challengeGoalResources[4] = data.elements[0].amt
    if(data.activeChallenge[4]) {
        for(let i = 0; i < 8; i++) {
            if(data.elements[i].level.gt(D(0)))
            data.elements[i].level = data.elements[i].level.sub((data.elements[i].level.times(D(0.1))).times(diff))
            if(data.elements[i].level.lt(D(0)))
                data.elements[i].level = D(0)
        }
    }
    for(let i = 0; i < 5; i++) {
        if(data.activeChallenge[i] === true) {
            completeChallenge(i)
        }
    }
    if(data.activeChallenge[1]) 
        DOMCacheGetOrSet('pB').style.display = 'none'
}
function updateBoosts() {
    coriumBoost = D(1).plus(Decimal.sqrt(data.coriumMax))
    if(data.activeChallenge[2]) coriumBoost = Decimal.sqrt(coriumBoost)
    if(!data.activeChallenge[3]) {
        leptonBoost[0] = !data.leptonUnlocks[1] || data.activeChallenge[3] ? D(1) : D(1).plus(Decimal.sqrt(data.particles[1].muons))
        leptonBoost[1] = !data.leptonUnlocks[1] || data.activeChallenge[3] ? D(1) : D(1).plus(Decimal.sqrt(data.particles[1].taus))
    }
    else {
        for(let i = 0; i < 2; i++)
            leptonBoost[i] = D(1)
    }
    

    for(let i = 0; i < 5; i++) {
        if(data.compounds[i].amt.gt(D(0)))
            compoundBoosts[i] = D(1).add(Decimal.sqrt(data.compounds[i].amt / 8)) 
        else
        compoundBoosts[i] = D(1)

        compoundBoosts[i] = compoundBoosts[i].times(augmentBoosts[0].boost[2])
        compoundBoosts[i] = compoundBoosts[i].times(quarkBoosts[1])
        if(data.activeChallenge[0])
            compoundBoosts[i] = D(1)
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
    /*
    powerBoosts[0] = data.powerUps[0] === D(0) ? D(1) : D(2).times(data.powerUps[0])
    powerBoosts[1] = D(10).times(data.powerUps[1])
    powerBoosts[2] = D(0.1).times(data.powerUps[2])
    */
    powerLimit = D(100).plus(powerBoosts[1].times(compoundBoosts[2]))
    powerLimit = powerLimit.times(leptonBoost[0])
    for(let i = 0; i < 3; i++) {
        let boosts = [D(4),D(1.25),D(0.5)]
        if(data.coriumMultUps[i].gt(D(0)))
            coriumMultBoosts[i] = boosts[i].times(data.coriumMultUps[i])
        else
            coriumMultBoosts[i] = D(1)

        
    }
    coriumMultBoosts[0] = coriumMultBoosts[0].times(augmentBoosts[1].boost[1])
        coriumMultBoosts[1] = coriumMultBoosts[1].times(augmentBoosts[1].boost[2])
}

function toggleBuyAmount(i) {
    if(i !== 6) {
        if(data.buyAmounts[i] === 1)
            data.buyAmounts[i] = 10
        else if(data.buyAmounts[i] === 10)
            data.buyAmounts[i] = 100
        else if(data.buyAmounts[i] === 100)
            data.buyAmounts[i] = 1000
        else if(data.buyAmounts[i] === 1000)
            data.buyAmounts[i] = 1
    }
    else {
        if(data.buyAmounts[i] === .1)
            data.buyAmounts[i] = .25
        else if(data.buyAmounts[i] === .25)
            data.buyAmounts[i] = .5
        else if(data.buyAmounts[i] === .5)
            data.buyAmounts[i] = 1.0
        else if(data.buyAmounts[i] === 1.0)
            data.buyAmounts[i] = .1
    }
    
}

function toggleButton(i){
    data.settingsToggles[i] = !data.settingsToggles[i]
}

function purchaseFuel(x) {
    switch(x) {
        case 0:
            for(let i = 0; i < data.buyAmounts[5]; i++) {
                if(data.elements[1].level.gte(D(1)) && data.elements[0].level.gte(D(4))) {
                    data.elements[1].level = data.elements[1].level.sub(D(1))
                    data.elements[0].level = data.elements[0].level.sub(D(4))
                    data.fuels[x] = data.fuels[x].add((D(1).times(augmentBoosts[2].boost[1])).times(quarkBoosts[4]).times(leptonBoost[1]))
                }
            }
            break;
        case 1:
            for(let i = 0; i < data.buyAmounts[5]; i++) {
                if(data.elements[1].level.gte(D(12)) && data.elements[0].level.gte(D(6)) && data.elements[2].level.gte(D(1))) {
                    data.elements[1].level = data.elements[1].level.sub(D(12))
                    data.elements[0].level = data.elements[0].level.sub(D(6))
                    data.elements[2].level = data.elements[2].level.sub(D(1))
                    data.fuels[x] = data.fuels[x].add((D(1).times(augmentBoosts[2].boost[1])).times(quarkBoosts[4]).times(leptonBoost[1]))
                }
            }
            break;
        case 2:
            for(let i = 0; i < data.buyAmounts[5]; i++) {
                if(data.elements[1].level.gte(D(15)) && data.elements[0].level.gte(D(28))) {
                    data.elements[1].level = data.elements[1].level.sub(D(15))
                    data.elements[0].level = data.elements[0].level.sub(D(28))
                    data.fuels[x] = data.fuels[x].add((D(1).times(augmentBoosts[2].boost[1])).times(quarkBoosts[4]).times(leptonBoost[1]))
                }
            }
            break;
        case 3:
            for(let i = 0; i < data.buyAmounts[5]; i++) {
                if(data.elements[1].level.gte(D(10)) && data.elements[0].level.gte(D(28)) && data.elements[2].level.gte(D(2)) && data.elements[4].level.gte(D(1))) {
                    data.elements[1].level = data.elements[1].level.sub(D(10))
                    data.elements[0].level = data.elements[0].level.sub(D(28))
                    data.elements[2].level = data.elements[2].level.sub(D(2))
                    data.elements[4].level = data.elements[4].level.sub(D(1))
                    data.fuels[x] = data.fuels[x].add((D(1).times(augmentBoosts[2].boost[1])).times(quarkBoosts[4]).times(leptonBoost[1]))
                }
            }
            break;
    }
}

function closeModal(i) {
    switch(i) {
        case 0:
            DOMCacheGetOrSet('alert').style.display = 'none'
            DOMCacheGetOrSet('modalContainer').style.display = 'none'
            break
    }
}

function createAlert(a,b) {
    document.getElementById('modalContainer').style.border = '4px solid #ad4242'
    document.getElementById('alertTitle').innerHTML = a
    document.getElementById('alertContent').innerHTML = b
    document.getElementById('alert').style.display = 'block'
    document.getElementById('modalContainer').style.display = 'block'
}

function createConfirmation(a) {
    clearConfirmationListeners()
    switch(a) {
        case 'prestige':
            document.getElementById('modalContainer').style.border = `4px solid ${bodyStyles.getPropertyValue(`--melt-tab-color`)}`
            document.getElementById('confirmTitle').innerHTML = 'Are you sure you want to melt down?'
            document.getElementById('confirmContent').innerHTML = 'This will reset all previous layers in exchange for Corium'
            document.getElementById('confirm').style.display = 'block'
            document.getElementById('modalContainer').style.display = 'block'
            document.getElementById('noConfirm').addEventListener('click', () => {DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            document.getElementById('yesConfirm').addEventListener('click', () => {meltDown(); DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            break
        case 'split':
            document.getElementById('modalContainer').style.border = `4px solid ${bodyStyles.getPropertyValue(`--particle-tab-color`)}`
            document.getElementById('confirmTitle').innerHTML = 'Are you sure you want to split?'
            document.getElementById('confirmContent').innerHTML = 'This will reset all Element Generators in exchange for Protons, Neutrons & Electrons'
            document.getElementById('confirm').style.display = 'block'
            document.getElementById('modalContainer').style.display = 'block'
            document.getElementById('noConfirm').addEventListener('click', () => {DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            document.getElementById('yesConfirm').addEventListener('click', () => {splitElements(); DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            break
        case 'shatter':
            document.getElementById('modalContainer').style.border = `4px solid ${bodyStyles.getPropertyValue(`--particle-tab-color`)}`
            document.getElementById('confirmTitle').innerHTML = 'Are you sure you want to shatter?'
            document.getElementById('confirmContent').innerHTML = 'This will reset all Electrons in exchange for Muons & Tau Leptons'
            document.getElementById('confirm').style.display = 'block'
            document.getElementById('modalContainer').style.display = 'block'
            document.getElementById('noConfirm').addEventListener('click', () => {DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            document.getElementById('yesConfirm').addEventListener('click', () => {shatterElectrons(); DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            break
        case 'irridiate':
            document.getElementById('modalContainer').style.border = `4px solid ${bodyStyles.getPropertyValue(`--radiation-tab-color`)}`
            document.getElementById('confirmTitle').innerHTML = 'Are you sure you want to irridiate?'
            document.getElementById('confirmContent').innerHTML = 'This will reset everything from all previous layers in exchange for Radiation'
            document.getElementById('confirm').style.display = 'block'
            document.getElementById('modalContainer').style.display = 'block'
            document.getElementById('noConfirm').addEventListener('click', () => {DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            document.getElementById('yesConfirm').addEventListener('click', () => {irridiate(); DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            break
        case 'rip':
            document.getElementById('modalContainer').style.border = `4px solid ${bodyStyles.getPropertyValue(`--particle-tab-color`)}`
            document.getElementById('confirmTitle').innerHTML = 'Are you sure you want to Rip?'
            document.getElementById('confirmContent').innerHTML = 'This will reset Protons and Neutrons in a lootb.. system<br>I mean.. Surprise mechanic to gain quarks, protons & neutrons back randomly'
            document.getElementById('confirm').style.display = 'block'
            document.getElementById('modalContainer').style.display = 'block'
            document.getElementById('noConfirm').addEventListener('click', () => {DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            document.getElementById('yesConfirm').addEventListener('click', () => {rip(); DOMCacheGetOrSet('confirm').style.display = 'none'; DOMCacheGetOrSet('modalContainer').style.display = 'none';})
            break
    }
}

function clearConfirmationListeners() {
    let old_element = document.getElementById("noConfirm");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    
    let old_element2 = document.getElementById("yesConfirm");
    let new_element2 = old_element2.cloneNode(true);
    old_element2.parentNode.replaceChild(new_element2, old_element2);
}

function prestigeConfirmation(i) {
    switch(i) {
        case 'prestige':
            if(sumOfElements.lt(D(1e8))) return
            if(data.settingsToggles[0])
                createConfirmation('prestige')
            else
                meltDown()
            break
        case 'split':
            if(data.previousSum.gte(sumOfLevels)) return
            if(data.settingsToggles[2])
                createConfirmation('split')
            else
                splitElements()
            break
        case 'shatter':
            if(data.particles[0].electrons.lt(D(1e5))) return
            if(data.settingsToggles[3])
                createConfirmation('shatter')
            else
                shatterElectrons()
            break
        case 'irridiate':
            if(data.corium.lt(D(1e38))) return
            if(data.settingsToggles[4])
                createConfirmation('irridiate')
            else
                irridiate()
            break
        case 'rip':
            if((data.particles[0].protons.plus(data.particles[0].neutrons)).lt(D(5e4))) return
            if(data.settingsToggles[5])
                createConfirmation('rip')
            else
                rip()
            break
    }
}

function openThemePicker() {
    document.getElementById('modalContainer').style.display = 'block'
    document.getElementById('modalContainer').style.border = `4px solid grayr`
    document.getElementById('themeSelector').style.display = 'block'
    document.getElementById('buttonHolder').style.display = 'flex'
}
//Theme Stuff
let themeSrcs = ['chem','chemRound','dark','NoStyle']
const themeButtons = []
for(let i = 0; i < themeSrcs.length; i++)
    themeButtons[i] = document.getElementById(`theme${i+1}`)

for(let i = 0; i < themeSrcs.length; i++)
    themeButtons[i].addEventListener('click', () => {changeTheme(i);document.getElementById('modalContainer').style.display = 'none'; document.getElementById('themeSelector').style.display = 'none'; document.getElementById('buttonHolder').style.display = 'none'; data.currentTheme = i;})
function changeTheme(i) {
    
    let links = document.getElementsByTagName('link')
    if(links[0].getAttribute('href') !== `CSS/${themeSrcs[i]}.css`) {
        links[0].setAttribute('href', `CSS/${themeSrcs[i]}.css`)
    }
}
//Splash Screen
function hideResolver(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 300);
    });
  }
  
  async function f1() {
    var x = await hideResolver(10);
    document.getElementById('hider').style.display = 'none'
  }
changeTheme(data.currentTheme)
f1()

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if(data.currentTab === 1) {
        if(data.currentSubTab[0] === 0) {
            if(key === "1") purchaseElement(0)
            if(key === "2") purchaseElement(1)
            if(key === "3") purchaseElement(2)
            if(key === "4") purchaseElement(3)
            if(key === "5") purchaseElement(4)
            if(key === "6") purchaseElement(5)
            if(key === "7") purchaseElement(6)
            if(key === "8") purchaseElement(7)
        }
        if(data.currentSubTab[0] === 1) {
            if(key === "1") purchaseIsotope(0)
            if(key === "2") purchaseIsotope(1)
            if(key === "3") purchaseIsotope(2)
            if(key === "4") purchaseIsotope(3)
            if(key === "5") purchaseIsotope(4)
            if(key === "6") purchaseIsotope(5)
            if(key === "7") purchaseIsotope(6)
            if(key === "8") purchaseIsotope(7)
        }
    }
    if(data.currentTab === 3) {
        if(key === "1") buyCompound(0)
        if(key === "2") buyCompound(1)
        if(key === "3") buyCompound(2)
        if(key === "4") buyCompound(3)
        if(key === "5") buyCompound(4)
        
    }
}, false);

window.setInterval(function(){
    mainLoop()
}, 10);
