const challengeInfo = [{name:'Crushed Compounds',desc:'You\'ve become too dependent on them',effect:'Compounds no longer have an effect',reward:''},
{name:'Renewable Energy',desc:'Think green energy is so good now',effect:'Get locked out of all power production methods',reward:''},
{name:'Advanced Reactors',desc:'Chernobyl-B-Gon',effect:'Corium Production and Boost is decreased significantly',reward:''},
{name:'Anti-Challenge',desc:'Say hello to Anti-Particles',effect:'Augments have no effect now along with Lepton Buffs',reward:''},
{name:'Elemental Decay',desc:'The worst challenge returns',effect:'Lose 1% of your Element Generators per second',reward:''}]
const challengeRewards = []
let currentChallengeDisplay = -1

for(let i = 0; i < 5; i++)
    DOMCacheGetOrSet(`chal${i+1}Img`).addEventListener('mouseover', () => changeChallengeDisplay(i))

function changeChallengeDisplay(i) {
    currentChallengeDisplay = i
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
            DOMCacheGetOrSet('challengeGoalText').innerHTML = ``
            DOMCacheGetOrSet('challengeRewardText').innerHTML = `${challengeInfo[currentChallengeDisplay].reward}`
        }
    }
    for(let i = 0; i < data.activeChallenge.length; i++) {
        DOMCacheGetOrSet(`chal${i+1}Img`).style.backgroundColor = data.activeChallenge[i] ? '#ffffff' : 'rgba(0,0,0,0)'
    }
}