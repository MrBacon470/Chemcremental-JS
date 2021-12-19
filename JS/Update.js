// region element declarations
const elementButtons = [];
const elementNames = ['Hydrogen','Carbon','Oxygen','Fluorine','Sulfur','Chlorine','Iron','Lead']
const shortElement = ['H','C','O','F','S','Cl','Fe','Pb']
for (let i=0; i<8; i++){
    elementButtons[i] = document.getElementById(`${elementNames[i]}`)
}
const tabs = [];

// endregion
function updateHTML(){
    if (data.currentTab === 1){
        for(let i = 0;i < 8;i++) {
            if(i == 0)
                elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]})<br>Cost: 10 Hydrogen | Level:0`
            else if(i == 1)
            elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | 1.00x)<br>Cost: 10 Hydrogen | Level:0`

            else
                elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | 1.00x)<br>Cost: 10 ${data.elements[i - 1].name} | Level:0`
        }
        
    }
    tabChangeHTML()
}

function unlockTabs(){
    data.hasTab[0] = data.elements[1].amt > 0 || data.hasTab[0]
}
function tabChangeHTML(){
    
}