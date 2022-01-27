// region element declarations
let elementSum = D(0)
const elementButtons = []
const isotopeButtons = []
const elementNames = ['Hydrogen','Carbon','Oxygen','Fluorine','Sulfur','Chlorine','Iron','Lead']
const isotopeIds = ['Hydrogen3','Carbon14','Oxygen15','Fluorine18','Sulfur35','Chlorine37','Iron60','Lead212',]
const shortElement = ['H','C','O','F','S','Cl','Fe','Pb']
const compoundButtons = []
const compoundBoost = ['Element Boost: ','Power Boost: ','Battery Boost: ','Lead Boost: ','Melt Boost: ']
for (let i=0; i<8; i++){
    elementButtons[i] = document.getElementById(`${elementNames[i]}`)
    isotopeButtons[i] = document.getElementById(`${isotopeIds[i]}`)
}
for(let i = 0; i < 5; i++) {
    compoundButtons[i] = document.getElementById(`${data.compounds[i].name}`)
}
const tabs = []
const tabIDs = ['cB','pB','mB','rB']
const tabNames = ['Compounds','Power','Melting','Refinery']
const colors = ['3a5b99','b0b835','68368a','583793']
for(let i=0; i < 4; i++) {
    tabs[i] = document.getElementById(`${tabIDs[i]}`)
}
const powerUpButton = []
for(let i=0; i < 3; i++)
    powerUpButton[i] = document.getElementById(`pu${i+1}`)
const coriumMultDesc =['Increase Atom Production by 4x','Increase Compounds Created by 1.25x','Increase Corium Produced on Melt']
const coriumSingDesc = ['Unlock the Refinery<br>Cost: 1.00e10 Corium','Not Avalible','Not Avalible']
//'Unlock Passive Power Production<br>Cost: 1.00e15 Corium','Radition Not Implemented'
// Refinery Area
const refineryIDs = ['shard', 'mold', 'mint']
const refineryNames = ['Sharding','Molding','Minting']
const refineryDescriptions = ['Produces Kuaka Shards','Produces Kuaka Fragments','Produces Kuaka Coins']
const currencyNames = ['Shards','Fragments','Coins']



function updateHTML(){
    
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    document.getElementById('powerText').innerHTML = `Power: ${format(data.power)} / ${format(powerLimit)}`
    document.getElementById('coriumText').innerHTML = `Corium: ${format(data.corium)}<br>Boost: ${format(D(1).plus(Decimal.sqrt(data.coriumMax)))}x`
    for(let i = 0; i < 4; i++) {
        tabs[i].innerHTML = data.hasTab[i] ? `${tabNames[i]}` : '???'
        tabs[i].style.backgroundColor = !data.hasTab[i] ? 'gray' : 'none'
        tabs[i].style.border = !data.hasTab[i] ? '4px solid gray' : `4px solid #${colors[i]}`
    }
    for(let i = 0; i < data.buyAmounts.length; i++)
        document.getElementById(`bA${i}`).innerHTML = `Buy Amount<br>${data.buyAmounts[i]}`

    if(data.currentTab === 0) {
        document.getElementById('toggle1').innerHTML = data.settingsToggles[0] ? 'Melting Confirmation [ON]' : 'Melting Confirmation [OFF]'
        document.getElementById('toggle2').innerHTML = data.settingsToggles[1] ? 'Enable Offline Progress [ON]' : 'Enable Offline Progress [OFF]'
    }
    else if (data.currentTab === 1) {
        document.getElementById('RaE').style.display = data.coriumSingUps[2] ? 'flex' : 'none'
        document.getElementById('ReE').style.display = data.coriumSingUps[2] ? 'flex' : 'none'
        if(data.currentSubTab[0] === 0) {
            for(let i = 0;i < 8;i++) {
                if(i == 0)
                    elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]})<br>Cost: ${format(elementCost[i])} Hydrogen | Level:${format(data.elements[i].level)}`
                else if(i == 1)
                    elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | ${format(D(1).add(Decimal.sqrt(data.elements[i].max)))}x)<br>Cost: ${format(elementCost[i])} Hydrogen | Level:${format(data.elements[i].level)}`
                else
                    elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | ${format(D(1).add(Decimal.sqrt(data.elements[i].max)))}x)<br>Cost: ${format(elementCost[i])} ${data.elements[i - 1].name} | Level:${format(data.elements[i].level)}`
            }
        }
        else if(data.currentSubTab[0] === 1) {
            for(let i = 0;i < 8;i++) {
                if(i == 0)
                    isotopeButtons[i].innerHTML = `${data.isotopes[i].name}  Generator (${format(data.isotopes[i].amt)} ${data.isotopes[i].name})<br>Cost: ${format(isotopeCost[i])} Lead | Level:${format(data.isotopes[i].level)}`
                else
                isotopeButtons[i].innerHTML = `${data.isotopes[i].name}  Generator (${format(data.isotopes[i].amt)} ${data.isotopes[i].name} | ${format(D(1).add(Decimal.sqrt(data.isotopes[i].max)))}x)<br>Cost: ${format(isotopeCost[i])} ${data.isotopes[i - 1].name} | Level:${format(data.isotopes[i].level)}`
            }
        }
    }
    else if(data.currentTab === 2) {
        //Moved
    }
    else if(data.currentTab === 3) {
        for(let i = 0; i < 5; i++) {
            compoundButtons[i].innerHTML = `${data.compounds[i].name}<br>${data.compounds[i].cost}<br>Total: ${format(data.compounds[i].amt)}<br>${compoundBoost[i]} ${format(compoundBoosts[i])}x`
        }
    }
    else if(data.currentTab === 4) {
        document.getElementById('generator').innerHTML = data.compounds[1].amt.gte(1) ? `Generate Power<br>+${format(powerGain)} Power` : "Generate Power<br>Req: 3 Propane + 1 Water"
        powerUpButton[0].innerHTML = `Super Charge<br>Increase Atom Production by 2x<br>Cost: ${format(powerCosts[0])} Power<br>Level: ${format(data.powerUps[0])}`
        powerUpButton[1].innerHTML = `Battery<br>Increase Power Capacity by 10<br>Cost: ${format(powerCosts[1])} Sulfuric Acid<br>Level: ${format(data.powerUps[1])}`
        powerUpButton[2].innerHTML = `Heat Shields<br>Increase Power Production by 0.1x<br>Cost: ${format(powerCosts[2])} Lead Gens<br>Level: ${format(data.powerUps[2])}`
    }
    else if(data.currentTab === 5) {
        
        document.getElementById('meltDown').innerHTML = sumOfElements >= 1e8 ? `Melt Down<br>Create +${format(coriumToGet)}<br>Corium` : "Melt Down<br>Requires 1e8<br>Total Elements"
        for(let i = 0; i < 3; i++) {
            document.getElementById(`cm${i+1}`).innerHTML = `${coriumMultDesc[i]}<br>Cost: ${format(coriumMultCosts[i])} Corium<br>Level: ${format(data.coriumMultUps[i])}`
            document.getElementById(`cs${i+1}`).innerHTML = data.coriumSingUps[i] ? 'Unlocked' : `${coriumSingDesc[i]}`
        }
    }
    else if(data.currentTab === 6) {
        document.getElementById(`${refineryIDs[0]}`).innerHTML = `${refineryNames[0]}<br><br>${refineryDescriptions[0]}<br><br>+${format(shardsToGet)} ${currencyNames[0]}<br><br>${format(data.refineryCurrencies[0])} ${currencyNames[0]} Avalible`
        document.getElementById(`${refineryIDs[1]}`).innerHTML = `${refineryNames[1]}<br><br>${refineryDescriptions[1]}<br><br>+${format(fragmentsToGet)} ${currencyNames[1]}<br><br>${format(data.refineryCurrencies[1])} ${currencyNames[1]} Avalible`
        document.getElementById(`${refineryIDs[2]}`).innerHTML = `${refineryNames[2]}<br><br>${refineryDescriptions[2]}<br><br>+${format(coinsToGet)} ${currencyNames[2]}<br><br>${format(data.refineryCurrencies[2])} ${currencyNames[2]} Avalible<br><br>${format(Decimal.sqrt(data.refineryCurrencies[2].times(D(2))))}x Boost`
    }
    unlockTabs()
    tabChangeHTML()
    subTabChangeHTML()
}

function unlockTabs(){
    
    data.hasTab[0] = data.elements[1].amt > 0 || data.hasTab[0]
    data.hasTab[1] = data.compounds[0].amt > 0 || data.hasTab[1]
    data.hasTab[2] = sumOfElements.gte(D(1e8)) || data.hasTab[2]
    data.hasTab[3] = data.coriumSingUps[0] === true || data.hasTab[3]
    
    for(let i = 0; i < 4; i++)
        tabs[i].style.backgroundColor = !data.hasTab[i] ? 'gray' : 'none'
}
const seperator = document.getElementById('tabSeperator')
const elementTab = document.getElementById("elementHolder")
const compoundTab = document.getElementById("compoundHolder")
const powerTab = document.getElementById("powerHolder")
const meltingTab = document.getElementById("meltingHolder")
const settingTab = document.getElementById("settingsHolder")
const achievementTab = document.getElementById("achievementHolder")
const refineryTab = document.getElementById("refineryHolder")
const seperatorColors = ['808080','3c9f45','7fccff','3a5b99','b0b835','68368a','583793']
function tabChangeHTML(){
    elementTab.style.display = data.currentTab === 1 ? 'flex': 'none'
    compoundTab.style.display = data.currentTab === 3 ? 'flex': 'none'   
    powerTab.style.display = data.currentTab === 4 ? 'flex' : 'none'
    meltingTab.style.display = data.currentTab === 5 ? 'flex' : 'none'
    settingTab.style.display = data.currentTab === 0? 'flex' : 'none'
    achievementTab.style.display = data.currentTab === 2 ? 'flex' : 'none'
    refineryTab.style.display = data.currentTab === 6 ? 'flex' : 'none'
    seperator.style.color = `#${seperatorColors[data.currentTab]}`
}
const regularElementHolder = document.getElementById('regularElementsHolder')
const isotopeElementHolder = document.getElementById('isotopeElementsHolder')
function subTabChangeHTML() {
        regularElementHolder.style.display = data.currentSubTab[0] === 0 ? 'flex' : 'none'
        isotopeElementHolder.style.display = data.currentSubTab[0] === 1 ? 'flex' : 'none'
}