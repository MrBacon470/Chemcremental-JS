const challengeInfo = [{name:'Crushed Compounds',desc:'You\'ve become too dependent on them',effect:'Compounds no longer have an effect',reward:''},
{name:'Renewable Energy',desc:'Think green energy is so good now',effect:'Get locked out of all power production methods',reward:''},
{name:'Advanced Reactors',desc:'Chernobyl-B-Gon',effect:'Corium Production and Boost is decreased significantly',reward:''},
{name:'Anti-Challenge',desc:'Say hello to Anti-Particles',effect:'Augments have no effect now along with Lepton Buffs',reward:''},
{name:'Elemental Decay',desc:'The worst challenge returns',effect:'Lose 1% of your Element Generators per second',reward:''}]
const challengeGoalBases = [D(0),D(0),D(0),D(0),D(0)]
let challengeGoals = [D(0),D(0),D(0),D(0),D(0)]
let currentChallengeDisplay = -1
let challengeGoalResources = [D(0),D(0),D(0),D(0),D(0)]
const challengeResourceNames = ['Corium','Muons','Corium','Protons','Hydrogen']
for(let i = 0; i < 5; i++)
    DOMCacheGetOrSet(`chal${i+1}Img`).addEventListener('mouseover', () => changeChallengeDisplay(i))

function changeChallengeDisplay(i) {
    clearChallengeListeners(0)
    currentChallengeDisplay = i
    document.getElementById("challengeButton").addEventListener('click', () => startChallenge(i))
}

function updateChallengeHTML() {
    if(data.currentTab === 8 && data.currentSubTab[4] === 2) {
        DOMCacheGetOrSet('challengeButton').style.display = currentChallengeDisplay === -1 ? 'none' : 'inline'
        if(currentChallengeDisplay === -1) {
            DOMCacheGetOrSet('challengeNameText').innerHTML = ''
            DOMCacheGetOrSet('challengeDescText').innerHTML = ''
            DOMCacheGetOrSet('challengeEffectText').innerHTML = ''
            DOMCacheGetOrSet('challengeGoalText').innerHTML = ''
            DOMCacheGetOrSet('challengeRewardText').innerHTML = ''
        }
        else {
            DOMCacheGetOrSet('challengeButton').innerHTML = `Start [${challengeInfo[currentChallengeDisplay].name}]`
            DOMCacheGetOrSet('challengeNameText').innerHTML = `${challengeInfo[currentChallengeDisplay].name} | ${toPlaces(data.challengeCompletions[currentChallengeDisplay], 0, 28)}/25`
            DOMCacheGetOrSet('challengeDescText').innerHTML = `${challengeInfo[currentChallengeDisplay].desc}`
            DOMCacheGetOrSet('challengeEffectText').innerHTML = `${challengeInfo[currentChallengeDisplay].effect}`
            DOMCacheGetOrSet('challengeGoalText').innerHTML = `Goal: ${format(challengeGoals[i])} ${challengeResourceNames[i]}`
            DOMCacheGetOrSet('challengeRewardText').innerHTML = `${challengeInfo[currentChallengeDisplay].reward}`
        }
    }
    let count = 0
    for(let i = 0; i < data.activeChallenge.length; i++) {
        DOMCacheGetOrSet(`chal${i+1}Img`).style.backgroundColor = data.activeChallenge[i] ? '#ffffff' : 'rgba(0,0,0,0)'
        if(data.activeChallenge[i]) {
            count++;
            document.getElementById('challengeStatusImg').style.backgroundColor = '#ffffff'
            DOMCacheGetOrSet('challengeStatusText').innerHTML = `Goal: ${format(challengeGoalResources[i])}/${format(challengeGoals[i])} ${challengeResourceNames[i]}`
        }
    }
    if(count === 0) {
        document.getElementById('challengeStatusImg').style.backgroundColor = 'rgba(0,0,0,0)'
        DOMCacheGetOrSet('challengeStatusText').innerHTML = 'Not in a Challenge'
    }
    
}

function runChallenge() {
    let currentChallengeIndex;
    for(let i = 0; i < 5; i++)  
        if(data.activeChallenge[i]) currentChallengeIndex = i;
    
    switch(currentChallengeIndex) {
        case 0:
            for(let i = 0; i < 5; i++) {
                compoundBoosts[i] = D(1)
            }
            break
        case 1:
            DOMCacheGetOrSet('pB').style.display = 'none'
            break
        //Chal 3 in Main.js
        //Chal 4 in Main.js & Accelerators.js
        case 4:
            for(let i = 0; i < 8; i++) {
                if(data.elements[i].level.gt(D(0)))
                data.elements[i].level = data.elements[i].level.sub((data.elements[i].level.times(D(0.01))).times(diff))
                if(data.elements[i].level.lt(D(0)))
                    data.elements[i].level = D(0)
            }
    }
}

function startChallenge(a) {
    clearChallengeListeners(1)
    document.getElementById("challengeStatusImg").addEventListener('click', () => exitChallenge(a))
    irridiate() 
    for(let i = 0; i < 5; i++) {
        if(i == a)
            data.activeChallenge[i] = true
        else
            data.activeChallenge[i] = false
    }
    switch(a) {
        case 0:
            data.autoActive[1] = false
            break
        case 1:
            data.autoActive[2] = false
            data.autoActive[6] = false
            DOMCacheGetOrSet('pB').style.display = 'none'
            data.power = D(0)
            data.powerStored = D(0)
            for(let i = 0; i < 4; i++) {
                data.fuels[i] = D(0)
                data.fuelStored[i] = D(0)
            }
            break
        //No things needed for Chal 3
        case 3:
            data.autoActive[5] = false
            break
        //No Things needed for Chal 5
    }
}

function exitChallenge(a) {

}

function clearChallengeListeners(a) {
    let old_element = a === 1 ? document.getElementById("challengeStatusImg") : document.getElementById("challengeButton");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
}