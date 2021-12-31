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
// endregion
function updateHTML(){
    for(let i = 0; i < 3; i++) {
        tabs[i].innerHTML = data.hasTab[i] ? `${tabNames[i]}` : '???'
        tabs[i].style.backgroundColor = !data.hasTab[i] ? '' : 'none'
        tabs[i].style.border = !data.hasTab[i] ? '4px solid gray' : `4px solid #${colors[i]}`
    }

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
            compoundButtons[i].innerHTML = `${data.compounds[i].name}<br>${data.compounds[i].cost}<br>Total: ${format(data.compounds[i].amt)}<br>${compoundBoost[i]} ${format(D(1).add(Decimal.sqrt(data.compounds[i].amt / 4)))}x`
        }
    }
    unlockTabs()
    tabChangeHTML()
}

function unlockTabs(){
    data.hasTab[0] = data.elements[1].amt > 0 || data.hasTab[0]
    data.hasTab[1] = data.compounds[0].amt > 0 || data.hasTab[1]
}
const elementTab = document.getElementById("elementHolder")
const compoundTab = document.getElementById("compoundHolder")
const powerTab = document.getElementById("powerHolder")

function tabChangeHTML(){
    elementTab.style.display = data.currentTab === 1 ? 'flex': 'none'
    compoundTab.style.display = data.currentTab === 2 ? 'flex': 'none'   
    powerTab.style.display = data.currentTab === 3? 'flex' : 'none'
}