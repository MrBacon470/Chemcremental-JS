const leftButton = document.getElementById('leftSplit')
const rightButton = document.getElementById('rightSplit')
const currentDisplay = document.getElementById('currentSplit')
const splitImage = document.getElementById('imageSplit')
const buttonColors = ['adadad','ad4242','ae8042','abaf42','62af41','4182af','9541af','b04192']
const splitImgSources = ['CHEM Achieves/Hydrogen/H1-Locked.png','CHEM Achieves/Carbon/C2-Locked.png',
'CHEM Achieves/Oxygen/O3-Locked.png','CHEM Achieves/Fluorine/F4-Locked.png','Chem Achieves/Sulfur/S5-Locked.png','CHEM Achieves/Chlorine/Cl6-Locked.png',
'CHEM Achieves/Iron/I7-Locked.png','CHEM Achieves/Lead/Pb8-Locked.png']

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

