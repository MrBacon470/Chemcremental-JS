// region element declarations
const elementButtons = []
const elementNames = ['Hydrogen','Carbon','Oxygen','Fluorine','Sulfur','Chlorine','Iron','Lead']
const shortElement = ['H','C','O','F','S','Cl','Fe','Pb']
const compoundButtons = []
const compoundBoost = ['Element Boost: ','Power Boost: ','Battery Boost: ','Lead Boost: ','Melt Boost: ']
for (let i=0; i<8; i++){
    elementButtons[i] = document.getElementById(`${elementNames[i]}`)
}
for(let i = 0; i < 5; i++) {
    compoundButtons[i] = document.getElementById(`${data.compounds[i].name}`)
}
const tabs = []
const tabIDs = ['cB','pB','mB']
const tabNames = ['Compounds','Power','Melting']
const colors = ['3a5b99','b0b835','68368a']
for(let i=0; i < 3; i++) {
    tabs[i] = document.getElementById(`${tabIDs[i]}`)
}
const powerUpButton = []
for(let i=0; i < 3; i++)
    powerUpButton[i] = document.getElementById(`pu${i+1}`)
// endregion
function updateHTML(){
    document.getElementById('powerText').innerHTML = `Power: ${format(data.power)} / ${format(powerLimit)}`
    for(let i = 0; i < 3; i++) {
        tabs[i].innerHTML = data.hasTab[i] ? `${tabNames[i]}` : '???'
        tabs[i].style.backgroundColor = !data.hasTab[i] ? 'gray' : 'none'
        tabs[i].style.border = !data.hasTab[i] ? '4px solid gray' : `4px solid #${colors[i]}`
    }
    for(let i = 0; i < data.buyAmounts.length; i++)
        document.getElementById(`bA${i}`).innerHTML = `Buy Amount<br>${data.buyAmounts[i]}`

    if (data.currentTab === 1) {
        for(let i = 0;i < 8;i++) {
            if(i == 0)
                elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]})<br>Cost: ${format(elementCost[i])} Hydrogen | Level:${format(data.elements[i].level)}`
            else if(i == 1)
            elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | ${format(D(1).add(Decimal.sqrt(data.elements[i].max)))}x)<br>Cost: ${format(elementCost[i])} Hydrogen | Level:${format(data.elements[i].level)}`

            else
                elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | ${format(D(1).add(Decimal.sqrt(data.elements[i].max)))}x)<br>Cost: ${format(elementCost[i])} ${data.elements[i - 1].name} | Level:${format(data.elements[i].level)}`
        }
        
    }
    else if(data.currentTab === 2) {
        for(let i = 0; i < 5; i++) {
            compoundButtons[i].innerHTML = `${data.compounds[i].name}<br>${data.compounds[i].cost}<br>Total: ${format(data.compounds[i].amt)}<br>${compoundBoost[i]} ${format(compoundBoosts[i])}x`
        }
    }
    else if(data.currentTab === 3) {
        document.getElementById('generator').innerHTML = `Generate Power<br>Requires 3 Propane & 1 Water<br>+${format(powerGain)} Power`
        powerUpButton[0].innerHTML = `Super Charge<br>Increase Atom Production by 2x<br>Cost: ${format(powerCosts[0])} Power<br>Level: ${format(data.powerUps[0])}`
        powerUpButton[1].innerHTML = `Battery<br>Increase Power Capacity by 10<br>Cost: ${format(powerCosts[1])} Sulfuric Acid<br>Level: ${format(data.powerUps[1])}`
        powerUpButton[2].innerHTML = `Heat Shields<br>Increase Power Production by 0.1x<br>Cost: ${format(powerCosts[2])} Lead Gens<br>Level: ${format(data.powerUps[2])}`
    }
    unlockTabs()
    tabChangeHTML()
}

function unlockTabs(){
    
    data.hasTab[0] = data.elements[1].amt > 0 || data.hasTab[0]
    data.hasTab[1] = data.compounds[0].amt > 0 || data.hasTab[1]
    data.hasTab[2] = data.elements[6].level > 0 || data.hasTab[2]
}
const elementTab = document.getElementById("elementHolder")
const compoundTab = document.getElementById("compoundHolder")
const powerTab = document.getElementById("powerHolder")
const meltingTab = document.getElementById("meltingHolder")
const settingTab = document.getElementById("settingsHolder")

function tabChangeHTML(){
    elementTab.style.display = data.currentTab === 1 ? 'flex': 'none'
    compoundTab.style.display = data.currentTab === 2 ? 'flex': 'none'   
    powerTab.style.display = data.currentTab === 3? 'flex' : 'none'
    meltingTab.style.display = data.currentTab === 4? 'flex' : 'none'
    settingTab.style.display = data.currentTab === 0? 'flex' : 'none'
}