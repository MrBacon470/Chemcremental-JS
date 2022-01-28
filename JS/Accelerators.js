const leftButton = document.getElementById('leftSplit')
const rightButton = document.getElementById('rightSplit')
const protonGainText = document.getElementById('protonGain')
const neutronGainText = document.getElementById('neutronGain')
const electronGainText = document.getElementById('electronGain')
const currentDisplay = document.getElementById('currentSplit')
const splitImage = document.getElementById('imageSplit')
const buttonColors = ['adadad','ad4242','ae8042','abaf42','62af41','4182af','9541af','b04192']
const splitImgSources = ['CHEM Achieves/Hydrogen/H1-Locked.png','CHEM Achieves/Carbon/C2-Locked.png',
'CHEM Achieves/Oxygen/O3-Locked.png','CHEM Achieves/Fluorine/F4-Locked.png','Chem Achieves/Sulfur/S5-Locked.png','CHEM Achieves/Chlorine/Cl6-Locked.png',
'CHEM Achieves/Iron/I7-Locked.png','CHEM Achieves/Lead/Pb8-Locked.png']
const protonGainStr = ['1','6','8','9','16','17','26','82']
const neutronGainStr = ['0','6','8','9','16','17','26','82']
const electronGainStr = ['1','6','8','9','16','17','26','82']

function changeElement(i) {
    if(i == 0) {
        data.currentElement = data.currentElement + 1 < 8 ? data.currentElement + 1 : 0
    }
    else {
        data.currentElement = data.currentElement - 1 > -1 ? data.currentElement - 1 : 7
    }
}

function splitElement(i) {
    
}

