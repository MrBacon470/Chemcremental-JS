const challengeInfo = [{name:'Crushed Compounds',desc:'You\'ve become too dependent on them',effect:'Compounds no longer have an effect'},
{name:'Renewable Energy',desc:'Think green energy is so good now',effect:'Get locked out of all power production methods'},
{name:'Advanced Reactors',desc:'Chernobyl-B-Gon',effect:'Corium Production and Boost is decreased significantly'},
{name:'Anti-Challenge',desc:'Say hello to Anti-Particles',effect:'Augments have no effect now along with Lepton Buffs'},
{name:'Elemental Decay',desc:'The worst challenge returns',effect:'Lose 1% of your Element Generators per second'}]
const challengeRewards = []
let currentChallengeDisplay = -1

function changeChallengeDisplay(i) {
    currentChallengeDisplay = i
}