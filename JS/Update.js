// region element declarations
const elementDisplays = [];
for (let i=1; i<data.derivs.length; i++){
    elementDisplays[i] = document.getElementById(`${data.elements[i].name}`)
}
const tabs = [];

// endregion
function updateHTML(){
    // region constant
    oddityDisplay.innerText = `There are ${format(data.oddities)} Oddities [${format(data.oddityGain)}/s]`
    mysteriesNav.innerText = data.hasTab[0]?'Theories':'???'
    milestoneNav.innerText = data.hasTab[1]?'Legends':'???'
    lostNav.innerText = data.hasTab[2]?'Lost Derivatives':'???'
    stairsNav.innerText = data.hasTab[3]?'The Stairway':'???'
    //endregion
    //derivs
    if (data.currentTab === 1){
        derivI.innerHTML = `Cost: ${format(data.derivs[0].c)} Oddities<br>[${format(data.derivs[0].b)}] ${format(data.derivs[0].amt)}<br>Produces ${format(data.oddityGain.div(data.derivs[0].amt.plus(1)))} Oddities [${format(data.oddityGain)}/s]`
        for (let i=1; i<data.derivs.length; i++){
            derivDisplays[i].innerHTML = data.derivs[i].u ?
                `Cost: ${format(data.derivs[i].c)} Purchased D.${derivNames[i-1]}<br>[${format(data.derivs[i].b)}] ${format(data.derivs[i].amt)}<br>Produces ${format(derivProductions[i-1])} D.${derivNames[i-1]} [${format(data.derivs[i].amt.times(derivProductions[i-1]))}/s]`
                : `Unlock for ${format(derivUnlockCost[i-1])} Oddities`
        }
        //upgrades
        upgrade5.innerHTML = `Upgrade ⬥<br>Requires: ${format(data.upgrades[4].c)} Total Upgrade levels (you have ${formatWhole(data.upgrades[0].amt.plus(data.upgrades[1].amt).plus(data.upgrades[2].amt).plus(data.upgrades[3].amt))})<br>Multiplies all upgrade effects by ${formatWhole(upgradeEffects[4])}x`
        for (let i=0;i<4;i++){
            upgradeDisplays[i].innerHTML =
                `Upgrade ${upgradeNames[i]}<br>Cost: ${format(data.upgrades[i].c)} Oddities<br>Current effect: ${formatWhole(upgradeEffects[i])}x (You have ${formatWhole(data.upgrades[i].amt)})`
        }
        autoBuymax.innerHTML = data.autoToggled?'Auto Buymax: ON':'Auto Buymax: OFF'
        autoBuymax.style.display = data.upgrades[3].amt.gte(1) ? 'flex' : 'none'
        upgrades[4].style.display = data.upgrades[3].amt.gte(1) ? 'flex' : 'none'
    }
    //theories
    if (data.currentTab === 2){
        for (let i=0;i<data.hasTheory.length;i++){
            theoryDisplays[i].style.backgroundColor = data.hasTheory[i] ? '#9d670a' : '#0a629d'
        }
    }
    tabChangeHTML()
}
function unlockTabs(){
    data.hasTab[0] = data.elements[1].amt > 0 || data.hasTab[0]
}
const derivStuff = document.getElementById("bigDerivativeContainer")
const buyMax = document.getElementById("buymaxContainer")
const upgradesBuymax = document.getElementById("upgradeBuymax")
const deriv5 = document.getElementById("derivVButton")
const upgradesStuff = document.getElementById("upgradeContainer")
const theoryStuff = document.getElementById("theoriesContainer")
const theoryRow4 = document.getElementById("theoryRow4")
const legendsStuff = document.getElementById("legendsContainer")
const lostStuff = document.getElementById("bigLostContainer")
const lostCanvas = document.getElementById("animationCanvas")
const settingsStuff = document.getElementById("settingsContainer")
function tabChangeHTML(){
    //derivs
    derivStuff.style.display = data.currentTab===1 ? 'flex' : 'none'
    buyMax.style.display = data.currentTab===1 ? 'flex' : 'none'
    upgradesBuymax.style.display = data.hasLegend[1]?'flex':'none'
    deriv5.style.display = data.hasLostTheory[3]?'flex':'none'
    upgradesStuff.style.display = data.oddities.gte(1e17) || data.upgrades[0].amt.gte(1)?'flex':'none'
    //upgrades
    //theories
    theoryStuff.style.display = data.currentTab===2?'flex':'none'
    theoryRow4.style.display = data.hasLostTheory[3]?'flex':'none'
    //legends
    legendsStuff.style.display = data.currentTab===3?'flex':'none'
    //lost
    lostStuff.style.display = data.currentTab===4?'flex':'none'
    lostCanvas.style.display = data.currentTab===4?'flex':'none'
    //settings
    settingsStuff.style.display = data.currentTab===0 ? 'flex':'none'
    //nav
    milestoneNav.style.display = data.hasTab[0] || data.hasTab[1]?'inline':'none'
    lostNav.style.display = data.hasLegend[0] || data.hasTab[2]?'inline':'none'
    stairsNav.style.display = 'none'
}