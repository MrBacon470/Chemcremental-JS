let unlockReqs = [D(1),D(10),D(50),D(100),D(500),D(1000),D(10000),D(1000000)]

function unlockAchieves() {
    for(let i = 0; i < 8; i++) {
        if(data.elements[0].level.gte(unlockReqs[i]) && data.achievements[0].unlocked[i] !== true)
            data.achievements[0].unlocked[i] = true
        
        if(data.elements[1].level.gte(unlockReqs[i]) && data.achievements[1].unlocked[i] !== true)
            data.achievements[1].unlocked[i] = true

        if(data.elements[2].level.gte(unlockReqs[i]) && data.achievements[2].unlocked[i] !== true)
            data.achievements[2].unlocked[i] = true

        if(data.elements[3].level.gte(unlockReqs[i]) && data.achievements[3].unlocked[i] !== true)
            data.achievements[3].unlocked[i] = true
        
        if(data.elements[4].level.gte(unlockReqs[i]) && data.achievements[4].unlocked[i] !== true)
            data.achievements[4].unlocked[i] = true
        
        if(data.elements[5].level.gte(unlockReqs[i]) && data.achievements[5].unlocked[i] !== true)
            data.achievements[5].unlocked[i] = true

        if(data.elements[6].level.gte(unlockReqs[i]) && data.achievements[6].unlocked[i] !== true)
            data.achievements[6].unlocked[i] = true

        if(data.elements[7].level.gte(unlockReqs[i]) && data.achievements[7].unlocked[i] !== true)
            data.achievements[7].unlocked[i] = true
    }
    
}

const descriptionText = document.getElementById("achieveText")
const achieveDescriptions = ['<hr>[1] - Hydrogenated<br>Buy your first Hydrogen Generator','<hr>[2] - The Element of Life<br>Buy your first Carbon Generator','<hr>[3] - No this is not air<br>Buy your first Oxygen Generator','<hr>[4] - Gimme your electrons<br>Buy your first Fluorine Generator',
'<hr>[5] - Hey Stinky<br>Buy your first Sulfur Generator','<hr>[6] - Mmm Mustard Gas<br>Buy your first Chlorine Generator','<hr>[7] - Just Iron<br>Buy your first Iron Generator','<hr>[8] - Definitely not Peanut Butter<br>Buy your first Lead Generator']
function changeDescription(id) {
    switch(id) {
        //All Hydrogen IDs
        case 'H1':
            descriptionText.innerHTML = achieveDescriptions[0]
            break;
        //All Carbon IDs
        case 'C1':
            descriptionText.innerHTML = achieveDescriptions[1]
            break;
        //All Oxygen IDs
        case 'O1':
            descriptionText.innerHTML = achieveDescriptions[2]
            break;
        //All Fluorine IDs
        case 'F1':
            descriptionText.innerHTML = achieveDescriptions[3]
            break;
        //All Sulfur IDs
        case 'S1':
            descriptionText.innerHTML = achieveDescriptions[4]
            break;
        //All Chlorine IDs
        case 'Cl1':
            descriptionText.innerHTML = achieveDescriptions[5]
            break;
        //All Iron IDs
        case 'Fe1':
            descriptionText.innerHTML = achieveDescriptions[6]
            break;
        //All Lead IDs
        case 'Pb1':
            descriptionText.innerHTML = achieveDescriptions[7]
            break;
        //Whatever comes next
    }
}