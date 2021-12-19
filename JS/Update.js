// region element declarations
const elementButtons = [];
const elementNames = ['Hydrogen','Carbon','Oxygen','Fluorine','Sulfur','Chlorine','Iron','Lead']
for (let i=1; i<data.derivs.length; i++){
    elementButtons[i] = document.getElementById(`${elementNames[i]}`)
}
const tabs = [];

// endregion
function updateHTML(){
    if (data.currentTab === 1){
        for(let i = 0;i < 8;i++) {
            if(i == 0 || i == 1)
                elementButtons[i].innerHTML = `${data.elements[i].name}  Generator<br>Cost: 10 Hydrogen | Level:0`
            else
                elementButtons[i].innerHTML = `${data.elements[i].name}  Generator<br>Cost: 10 ${data.elements[i - 1].name} | Level:0`
        }
        
    }
    tabChangeHTML()
}

function unlockTabs(){
    data.hasTab[0] = data.elements[1].amt > 0 || data.hasTab[0]
}
function tabChangeHTML(){
    
}