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
'<hr>[5] - Hey Stinky<br>Buy your first Sulfur Generator','<hr>[6] - Mmm Mustard Gas<br>Buy your first Chlorine Generator','<hr>[7] - Just Iron<br>Buy your first Iron Generator','<hr>[8] - Definitely not Peanut Butter<br>Buy your first Lead Generator',
//9-16
'<hr>[9] - There must be more to this game<br>Buy 10 Hydrogen Generators','<hr>[10] - Well you can make graphite at least<br>Buy 10 Carbon Generators','<hr>[11] - Still not air<br>Buy 10 Oxygen Generators','<hr>[12] - DiSulfur <b>DecaFloride</b><br>Buy 10 Fluorine Generators',
'<hr>[13] - It just stinks more<br>Buy 10 Sulfur Generators','<hr>[14] - Ph-<br>Buy 10 Chlorine Generators','<hr>[15] - Um make steel or something idk<br>Buy 10 Iron Generators','<hr>[16] - X-Ray Protection<br>Buy 10 Lead Generators',
//17-24
'<hr>[17] - Just go get helium already<br>Buy 50 Hydrogen Generators','<hr>[18] - Diamonds<br>Buy 50 Carbon Generators','<hr>[19] - Nitrogen + Oxygen = Air<br>Buy 50 Oxygen Generators','<hr>[20] - Why are you making this stuff<br>Buy 50 Fluorine Generators',
'<hr>[21] - Reeking Odor<br>Buy 50 Sulfur Generators','<hr>[22] - Ph--<br>Buy 50 Chlorine Generators','<hr>[23] - Steel > Iron<br>Buy 50 Iron Generators','<hr>[24] - ._. Don\'t eat that<br>Buy 50 Lead Generators',
//25-32
'<hr>[25] - Saturated<br>Buy 100 Hydrogen Generators','<hr>[26] - Crude Oil<br>Buy 100 Carbon Generators','<hr>[27] - Still need nitrogen<br>Buy 100 Oxygen Generators','<hr>[28] - All the electrons<br>Buy 100 Fluorine Generators',
'<hr>[29] - Fools Gold<br>Buy 100 Sulfur Generators','<hr>[30] - The pool has had enough<br>Buy 100 Chlorine Generators','<hr>[31] - Solid Investment<br>Buy 100 Iron Generators','<hr>[32] - Lead Paints<br>Buy 100 Lead Generators']
//33-40
function changeDescription(id) {
    switch(id) {
        //All Hydrogen IDs
        case 'H1':
            descriptionText.innerHTML = achieveDescriptions[0]
            break;
        case 'H2':
            descriptionText.innerHTML = achieveDescriptions[8]
            break;
        case 'H3':
            descriptionText.innerHTML = achieveDescriptions[16]
            break;
        case 'H4':
            descriptionText.innerHTML = achieveDescriptions[24]
            break;
        //All Carbon IDs
        case 'C1':
            descriptionText.innerHTML = achieveDescriptions[1]
            break;
        case 'C2':
            descriptionText.innerHTML = achieveDescriptions[9]
            break;
        case 'C3':
            descriptionText.innerHTML = achieveDescriptions[17]
            break;
        case 'C4':
            descriptionText.innerHTML = achieveDescriptions[25]
            break;
        //All Oxygen IDs
        case 'O1':
            descriptionText.innerHTML = achieveDescriptions[2]
            break;
        case 'O2':
            descriptionText.innerHTML = achieveDescriptions[10]
            break;
        case 'O3':
            descriptionText.innerHTML = achieveDescriptions[18]
            break;
        case 'O4':
            descriptionText.innerHTML = achieveDescriptions[26]
            break;
        //All Fluorine IDs
        case 'F1':
            descriptionText.innerHTML = achieveDescriptions[3]
            break;
        case 'F2':
            descriptionText.innerHTML = achieveDescriptions[11]
            break;
        case 'F3':
            descriptionText.innerHTML = achieveDescriptions[19]
            break;
        case 'F4':
            descriptionText.innerHTML = achieveDescriptions[27]
            break;
        //All Sulfur IDs
        case 'S1':
            descriptionText.innerHTML = achieveDescriptions[4]
            break;
        case 'S2':
            descriptionText.innerHTML = achieveDescriptions[12]
            break;
        case 'S3':
            descriptionText.innerHTML = achieveDescriptions[20]
            break;
        case 'S4':
            descriptionText.innerHTML = achieveDescriptions[28]
            break;
        //All Chlorine IDs
        case 'Cl1':
            descriptionText.innerHTML = achieveDescriptions[5]
            break;
        case 'Cl2':
            descriptionText.innerHTML = achieveDescriptions[13]
            break;
        case 'Cl3':
            descriptionText.innerHTML = achieveDescriptions[21]
            break;
        case 'Cl4':
            descriptionText.innerHTML = achieveDescriptions[29]
            break;
        //All Iron IDs
        case 'Fe1':
            descriptionText.innerHTML = achieveDescriptions[6]
            break;
        case 'Fe2':
            descriptionText.innerHTML = achieveDescriptions[14]
            break;
        case 'Fe3':
            descriptionText.innerHTML = achieveDescriptions[30]
            break;
        //All Lead IDs
        case 'Pb1':
            descriptionText.innerHTML = achieveDescriptions[7]
            break;
        case 'Pb2':
            descriptionText.innerHTML = achieveDescriptions[15]
            break;
        case 'Pb3':
            descriptionText.innerHTML = achieveDescriptions[23]
            break;
        case 'Pb4':
            descriptionText.innerHTML = achieveDescriptions[31]
            break;
        //Whatever comes next
    }
}