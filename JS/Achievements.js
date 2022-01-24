let unlockReqs = [D(1),D(10),D(50),D(100),D(500),D(1000),D(10000),D(1000000)]
let prevAmount = D(0)
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
    let amountUnlocked
    amountUnlocked = D(0)
    for(let i = 0; i < data.achievements.length; i++) {
        for(let j = 0; j < 8; j++) {
            if(data.achievements[i].unlocked[j] === true)
                amountUnlocked = amountUnlocked.plus(D(1))
        }
    }
    if(amountUnlocked.gt(prevAmount)) {
        prevAmount = amountUnlocked
        document.getElementById('percentageText').innerHTML = `Achievements Unlocked: ${toPlaces(prevAmount, 0, 65)}/64 (${format((prevAmount.divide(D(64)).times(D(100))))}%)`
    }
}

const descriptionText = document.getElementById("achieveText")
// Element Achieves Row 1
const achieveDescriptions = ['<hr>[1] - Hydrogenated<br>Buy your first Hydrogen Generator','<hr>[9] - The Element of Life<br>Buy your first Carbon Generator','<hr>[17] - No this is not air<br>Buy your first Oxygen Generator','<hr>[25] - Gimme your electrons<br>Buy your first Fluorine Generator',
'<hr>[33] - Hey Stinky<br>Buy your first Sulfur Generator','<hr>[41] - Mmm Mustard Gas<br>Buy your first Chlorine Generator','<hr>[49] - Just Iron<br>Buy your first Iron Generator','<hr>[57] - Definitely not Peanut Butter<br>Buy your first Lead Generator',
//EA 2
'<hr>[2] - There must be more to this game<br>Buy 10 Hydrogen Generators','<hr>[10] - Well you can make graphite at least<br>Buy 10 Carbon Generators','<hr>[18] - Still not air<br>Buy 10 Oxygen Generators','<hr>[26] - DiSulfur <b>DecaFluoride</b><br>Buy 10 Fluorine Generators',
'<hr>[34] - It just stinks more<br>Buy 10 Sulfur Generators','<hr>[42] - Ph-<br>Buy 10 Chlorine Generators','<hr>[50] - Um make steel or something idk<br>Buy 10 Iron Generators','<hr>[58] - X-Ray Protection<br>Buy 10 Lead Generators',
//EA 3
'<hr>[3] - Just go get helium already<br>Buy 50 Hydrogen Generators','<hr>[11] - Diamonds<br>Buy 50 Carbon Generators','<hr>[19] - Nitrogen + Oxygen = Air<br>Buy 50 Oxygen Generators','<hr>[27] - Why are you making this stuff<br>Buy 50 Fluorine Generators',
'<hr>[35] - Reeking Odor<br>Buy 50 Sulfur Generators','<hr>[43] - Ph--<br>Buy 50 Chlorine Generators','<hr>[51] - Steel > Iron<br>Buy 50 Iron Generators','<hr>[59] - ._. Don\'t eat that<br>Buy 50 Lead Generators',
//EA 4
'<hr>[4] - Saturated<br>Buy 100 Hydrogen Generators','<hr>[12] - Crude Oil<br>Buy 100 Carbon Generators','<hr>[20] - Still need nitrogen<br>Buy 100 Oxygen Generators','<hr>[28] - All the electrons<br>Buy 100 Fluorine Generators',
'<hr>[36] - Fools Gold<br>Buy 100 Sulfur Generators','<hr>[44] - The pool has had enough<br>Buy 100 Chlorine Generators','<hr>[52] - Solid Investment<br>Buy 100 Iron Generators','<hr>[60] - Lead Paints<br>Buy 100 Lead Generators',
//EA 5
'<hr>[5] - The Hydrogen Strikes Back<br>Buy 500 Hydrogen Generators','<hr>[13] - Ubër Oil<br>Buy 500 Carbon Generators','<hr>[21] - More O<sub>2</sub> Please<br>Buy 500 Oxygen Generators','<hr>[29] - Burning Concrete<br>Buy 500 Fluorine Generators',
'<hr>[37] - You\'ve been struck by you\'ve been hit by, Sulfur<br>Buy 500 Sulfur Generators','<hr>[45] - Not Alkaline<br>Buy 500 Chlorine Generators','<hr>[53] - Kaiser Steel<br>Buy 500 Iron Generators','<hr>[61] - Mad Hatters Disease<br>Buy 500 Lead Generators',
//EA 6
'<hr>[6] - Return of the Hydrogen<br>Buy 1e3 Hydrogen Generators','<hr>[14] - Lucrative<br>Buy 1e3 Carbon Generators','<hr>[22] - Air Monopoly<br>Buy 1e3 Oxygen Generators','<hr>[30] - Disintegrated<br>Buy 1e3 Fluorine Generators',
'<hr>[38] - Stanky Leg<br>Buy 1e3 Sulfur Generators','<hr>[46] - Spicy Air<br>Buy 1e3 Chlorine Generators','<hr>[54] - The might of German... Iron?<br>Buy 1e3 Iron Generators','<hr>[62] - Powder it too<br>Buy 1e3 Lead Generators',
//EA 7
'<hr>[7] - Hindenberg 2.0<br>Buy 1e4 Hydrogen Generators','<hr>[15] -  All life<br>Buy 1e4 Carbon Generators','<hr>[23] - Bottled Air<br>Buy 1e4 Oxygen Generators','<hr>[31] - Fluorinating<br>Buy 1e4 Fluorine Generators',
'<hr>[39] - Oh the stench<br>Buy 1e4 Sulfur Generators','<hr>[47] - Out of Bounds Exception: Ph below 0<br>Buy 1e4 Chlorine Generators','<hr>[55] - Carnegie<br>Buy 100 Iron Generators','<hr>[63] - Lotta Lead<br>Buy 1e4 Lead Generators',
//EA 8
'<hr>[8] - Millionaire I<br>Buy 1e6 Hydrogen Generators','<hr>[16] - Millionaire II<br>Buy 1e6 Carbon Generators','<hr>[24] - Millionaire III<br>Buy 1e6 Oxygen Generators','<hr>[32] - Millionaire IV<br>Buy 1e6 Fluorine Generators',
'<hr>[40] - Millionaire V<br>Buy 1e6 Sulfur Generators','<hr>[48] - Millionaire VI<br>Buy 1e6 Chlorine Generators','<hr>[56] - Millionaire VII<br>Buy 1e6 Iron Generators','<hr>[64] - Millionaire VIII<br>Buy 1e6 Lead Generators']
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
        case 'H5':
            descriptionText.innerHTML = achieveDescriptions[32]
            break;
        case 'H6':
            descriptionText.innerHTML = achieveDescriptions[40]
            break;
        case 'H7':
            descriptionText.innerHTML = achieveDescriptions[48]
            break;
        case 'H8':
            descriptionText.innerHTML = achieveDescriptions[56]
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
        case 'C5':
            descriptionText.innerHTML = achieveDescriptions[33]
            break;
        case 'C6':
            descriptionText.innerHTML = achieveDescriptions[41]
            break;
        case 'C7':
            descriptionText.innerHTML = achieveDescriptions[49]
            break;
        case 'C8':
            descriptionText.innerHTML = achieveDescriptions[57]
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
        case 'O5':
            descriptionText.innerHTML = achieveDescriptions[34]
            break;
        case 'O6':
            descriptionText.innerHTML = achieveDescriptions[42]
            break;
        case 'O7':
            descriptionText.innerHTML = achieveDescriptions[50]
            break;
        case 'O8':
            descriptionText.innerHTML = achieveDescriptions[58]
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
        case 'F5':
            descriptionText.innerHTML = achieveDescriptions[35]
            break;
        case 'F6':
            descriptionText.innerHTML = achieveDescriptions[43]
            break;
        case 'F7':
            descriptionText.innerHTML = achieveDescriptions[51]
            break;
        case 'F8':
            descriptionText.innerHTML = achieveDescriptions[59]
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
        case 'S5':
            descriptionText.innerHTML = achieveDescriptions[36]
            break;
        case 'S6':
            descriptionText.innerHTML = achieveDescriptions[44]
            break;
        case 'S7':
            descriptionText.innerHTML = achieveDescriptions[52]
            break;
        case 'S8':
            descriptionText.innerHTML = achieveDescriptions[60]
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
        case 'Cl5':
            descriptionText.innerHTML = achieveDescriptions[37]
            break;
        case 'Cl6':
            descriptionText.innerHTML = achieveDescriptions[45]
            break;
        case 'Cl7':
            descriptionText.innerHTML = achieveDescriptions[53]
            break;
        case 'Cl8':
            descriptionText.innerHTML = achieveDescriptions[61]
            break;
        //All Iron IDs
        case 'Fe1':
            descriptionText.innerHTML = achieveDescriptions[6]
            break;
        case 'Fe2':
            descriptionText.innerHTML = achieveDescriptions[14]
            break;
        case 'Fe3':
            descriptionText.innerHTML = achieveDescriptions[22]
            break;
        case 'Fe4':
            descriptionText.innerHTML = achieveDescriptions[30]
            break;
        case 'Fe5':
            descriptionText.innerHTML = achieveDescriptions[38]
            break;
        case 'Fe6':
            descriptionText.innerHTML = achieveDescriptions[46]
            break;
        case 'Fe7':
            descriptionText.innerHTML = achieveDescriptions[54]
            break;
        case 'Fe8':
            descriptionText.innerHTML = achieveDescriptions[62]
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
        case 'Pb5':
            descriptionText.innerHTML = achieveDescriptions[39]
            break;
        case 'Pb6':
            descriptionText.innerHTML = achieveDescriptions[47]
            break;
        case 'Pb7':
            descriptionText.innerHTML = achieveDescriptions[55]
            break;
        case 'Pb8':
            descriptionText.innerHTML = achieveDescriptions[63]
            break;
        //Whatever comes next
    }
}