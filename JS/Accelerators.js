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
    switch(data.currentElement) {
        case 0:
            leftButton.style.border = `3px solid #${buttonColors[7]}`
            rightButton.style.border = `3px solid #${buttonColors[2]}`
            currentDisplay.innerHTML = "Hydrogen"
            splitImage.src = splitImgSources[data.currentElement]
            break;
        case 1:
            leftButton.style.border = `3px solid #${buttonColors[0]}`
            rightButton.style.border = `3px solid #${buttonColors[2]}`
            currentDisplay.innerHTML = "Carbon"
            splitImage.src = splitImgSources[data.currentElement]
            break;
        case 2:
            leftButton.style.border = `3px solid #${buttonColors[1]}`
            rightButton.style.border = `3px solid #${buttonColors[3]}`
            currentDisplay.innerHTML = "Oxygen"
            splitImage.src = splitImgSources[data.currentElement]
            break;
        case 3:
            leftButton.style.border = `3px solid #${buttonColors[2]}`
            rightButton.style.border = `3px solid #${buttonColors[4]}`
            currentDisplay.innerHTML = "Fluorine"
            splitImage.src = splitImgSources[data.currentElement]
            break;
        case 4:
            leftButton.style.border = `3px solid #${buttonColors[3]}`
            rightButton.style.border = `3px solid #${buttonColors[5]}`
            currentDisplay.innerHTML = "Sulfur"
            splitImage.src = splitImgSources[data.currentElement]
            break;
        case 5:
            leftButton.style.border = `3px solid #${buttonColors[4]}`
            rightButton.style.border = `3px solid #${buttonColors[6]}`
            currentDisplay.innerHTML = "Chlorine"
            splitImage.src = splitImgSources[data.currentElement]
            break;
        case 6:
            leftButton.style.border = `3px solid #${buttonColors[5]}`
            rightButton.style.border = `3px solid #${buttonColors[7]}`
            currentDisplay.innerHTML = "Iron"
            splitImage.src = splitImgSources[data.currentElement]
            break;
        case 7:
            leftButton.style.border = `3px solid #${buttonColors[6]}`
            rightButton.style.border = `3px solid #${buttonColors[0]}`
            currentDisplay.innerHTML = "Lead"
            splitImage.src = splitImgSources[data.currentElement]
            break;
    }
}

