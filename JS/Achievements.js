///Achievements Area
let imgIds = ['H','C','O','F','S','Cl','I','Pb']
let aIds = ['H','C','O','F','S','Cl','Fe','Pb']
let caIds = ['Pr','Wt','Sa','Sl','Cf']
//Elements
const HAchieves = []
const CAchieves = []
const OAchieves = []
const FAchieves = []
const SAchieves = []
const ClAchieves = []
const FeAchieves = []
const PbAchieves = []
//Compounds
const PrAchieves = []
const WtAchieves = []
const SaAchieves = []
const SlAchieves = []
const CfAchieves = []
//Resources
const PwAchieves = []
const CoAchieves = []

for(let i = 0; i < 8; i++) {
    HAchieves[i] = DOMCacheGetOrSet(`H${i+1}`)
    CAchieves[i] = DOMCacheGetOrSet(`C${i+1}`)
    OAchieves[i] = DOMCacheGetOrSet(`O${i+1}`)
    FAchieves[i] = DOMCacheGetOrSet(`F${i+1}`)
    SAchieves[i] = DOMCacheGetOrSet(`S${i+1}`)
    ClAchieves[i] = DOMCacheGetOrSet(`Cl${i+1}`)
    FeAchieves[i] = DOMCacheGetOrSet(`Fe${i+1}`)
    PbAchieves[i] = DOMCacheGetOrSet(`Pb${i+1}`)
}
for(let i = 0; i < 4; i++) {
    PrAchieves[i] = DOMCacheGetOrSet(`Pr${i+1}`)
    WtAchieves[i] = DOMCacheGetOrSet(`Wt${i+1}`)
    SaAchieves[i] = DOMCacheGetOrSet(`Sa${i+1}`)
    SlAchieves[i] = DOMCacheGetOrSet(`Sl${i+1}`)
    CfAchieves[i] = DOMCacheGetOrSet(`Cf${i+1}`)
    PwAchieves[i] = DOMCacheGetOrSet(`Pw${i+1}`)
    CoAchieves[i] = DOMCacheGetOrSet(`Co${i+1}`)
}

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
        //Compounds
    }
    for(let i = 0; i < 4; i++) {
            if(data.compounds[0].amt.gte(unlockReqs[i]) && data.achievements[8].unlocked[i] !== true)
            data.achievements[8].unlocked[i] = true
        
            if(data.compounds[1].amt.gte(unlockReqs[i]) && data.achievements[9].unlocked[i] !== true)
            data.achievements[9].unlocked[i] = true
        
            if(data.compounds[2].amt.gte(unlockReqs[i]) && data.achievements[10].unlocked[i] !== true)
            data.achievements[10].unlocked[i] = true
        
            if(data.compounds[3].amt.gte(unlockReqs[i]) && data.achievements[11].unlocked[i] !== true)
            data.achievements[11].unlocked[i] = true

            if(data.compounds[4].amt.gte(unlockReqs[i]) && data.achievements[12].unlocked[i] !== true)
            data.achievements[12].unlocked[i] = true

            if(data.power.gte(unlockReqs[i]) && data.achievements[13].unlocked[i] !== true)
            data.achievements[13].unlocked[i] = true
            
            if(data.corium.gte(unlockReqs[i+4]) && data.achievements[14].unlocked[i] !== true)
            data.achievements[14].unlocked[i] = true
    }
    let amountUnlocked
    amountUnlocked = D(0)
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            if(data.achievements[i].unlocked[j] === true)
                amountUnlocked = amountUnlocked.plus(D(1))
        }
    }
    for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 4; j++) {
            if(data.achievements[i+8].unlocked[j] === true)
                amountUnlocked = amountUnlocked.plus(D(1))
        }
    }
    if(amountUnlocked.gt(prevAmount)) {
        prevAmount = amountUnlocked
        DOMCacheGetOrSet('percentageText').innerHTML = `Achievements Unlocked: ${toPlaces(prevAmount, 0, 93)}/92 (${format((prevAmount.divide(D(92)).times(D(100))))}%)`
    }
}

function updateAchievementHTML() {
    if(data.currentTab === 2) {
        for(let i = 0; i < 8; i++) {
            if((HAchieves[i].getAttribute('src') !== `CHEM Achieves/Hydrogen/H${i+1}-Locked.png` && data.achievements[0].unlocked[i] === false) || (HAchieves[i].getAttribute('src') !== `CHEM Achieves/Hydrogen/H${i+1}-UnLocked.png` && data.achievements[0].unlocked[i] === true))
                HAchieves[i].src = data.achievements[0].unlocked[i] === false ? `CHEM Achieves/Hydrogen/H${i+1}-Locked.png` : `CHEM Achieves/Hydrogen/H${i+1}-UnLocked.png`

            if((CAchieves[i].getAttribute('src') !== `CHEM Achieves/Carbon/C${i+1}-Locked.png` && data.achievements[1].unlocked[i] === false) || (CAchieves[i].getAttribute('src') !== `CHEM Achieves/Carbon/C${i+1}-UnLocked.png` && data.achievements[1].unlocked[i] === true))
                CAchieves[i].src = data.achievements[1].unlocked[i] === false ? `CHEM Achieves/Carbon/C${i+1}-Locked.png` : `CHEM Achieves/Carbon/C${i+1}-UnLocked.png`

            if((OAchieves[i].getAttribute('src') !== `CHEM Achieves/Oxygen/O${i+1}-Locked.png` && data.achievements[2].unlocked[i] === false) || (OAchieves[i].getAttribute('src') !== `CHEM Achieves/Oxygen/O${i+1}-UnLocked.png` && data.achievements[2].unlocked[i] === true))
                OAchieves[i].src = data.achievements[2].unlocked[i] === false ? `CHEM Achieves/Oxygen/O${i+1}-Locked.png` : `CHEM Achieves/Oxygen/O${i+1}-UnLocked.png`

            if((FAchieves[i].getAttribute('src') !== `CHEM Achieves/Fluorine/F${i+1}-Locked.png` && data.achievements[3].unlocked[i] === false) || (FAchieves[i].getAttribute('src') !== `CHEM Achieves/Fluorine/F${i+1}-UnLocked.png` && data.achievements[3].unlocked[i] === true))
                FAchieves[i].src = data.achievements[3].unlocked[i] === false ? `CHEM Achieves/Fluorine/F${i+1}-Locked.png` : `CHEM Achieves/Fluorine/F${i+1}-UnLocked.png`

            if((SAchieves[i].getAttribute('src') !== `CHEM Achieves/Sulfur/S${i+1}-Locked.png` && data.achievements[4].unlocked[i] === false) || (SAchieves[i].getAttribute('src') !== `CHEM Achieves/Sulfur/S${i+1}-UnLocked.png` && data.achievements[4].unlocked[i] === true))
                SAchieves[i].src = data.achievements[4].unlocked[i] === false ? `CHEM Achieves/Sulfur/S${i+1}-Locked.png` : `CHEM Achieves/Sulfur/S${i+1}-UnLocked.png`

            if((ClAchieves[i].getAttribute('src') !== `CHEM Achieves/Chlorine/Cl${i+1}-Locked.png` && data.achievements[5].unlocked[i] === false) || (ClAchieves[i].getAttribute('src') !== `CHEM Achieves/Chlorine/Cl${i+1}-UnLocked.png` && data.achievements[5].unlocked[i] === true))
                ClAchieves[i].src = data.achievements[5].unlocked[i] === false ? `CHEM Achieves/Chlorine/Cl${i+1}-Locked.png` : `CHEM Achieves/Chlorine/Cl${i+1}-UnLocked.png`

            if((FeAchieves[i].getAttribute('src') !== `CHEM Achieves/Iron/I${i+1}-Locked.png` && data.achievements[6].unlocked[i] === false) || (FeAchieves[i].getAttribute('src') !== `CHEM Achieves/Iron/I${i+1}-UnLocked.png` && data.achievements[6].unlocked[i] === true))
                FeAchieves[i].src = data.achievements[6].unlocked[i] === false ? `CHEM Achieves/Iron/I${i+1}-Locked.png` : `CHEM Achieves/Iron/I${i+1}-UnLocked.png`

            if((PbAchieves[i].getAttribute('src') !== `CHEM Achieves/Lead/Pb${i+1}-Locked.png` && data.achievements[7].unlocked[i] === false) || (PbAchieves[i].getAttribute('src') !== `CHEM Achieves/Lead/Pb${i+1}-UnLocked.png` && data.achievements[7].unlocked[i] === true))
                PbAchieves[i].src = data.achievements[7].unlocked[i] === false ? `CHEM Achieves/Lead/Pb${i+1}-Locked.png` : `CHEM Achieves/Lead/Pb${i+1}-UnLocked.png`
            
        }
        for(let i = 0; i < 4; i++) {
            if((PrAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Pr${i+1}-Locked.png` && data.achievements[8].unlocked[i] === false) || (PrAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Pr${i+1}-UnLocked.png` && data.achievements[8].unlocked[i] === true))
                    PrAchieves[i].src = data.achievements[8].unlocked[i] === false ? `CHEM Achieves/Compounds/Pr${i+1}-Locked.png` : `CHEM Achieves/Compounds/Pr${i+1}-UnLocked.png`

                if((WtAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Wt${i+1}-Locked.png` && data.achievements[9].unlocked[i] === false) || (WtAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Cl${i+1}-UnLocked.png` && data.achievements[9].unlocked[i] === true))
                    WtAchieves[i].src = data.achievements[9].unlocked[i] === false ? `CHEM Achieves/Compounds/Wt${i+1}-Locked.png` : `CHEM Achieves/Compounds/Wt${i+1}-UnLocked.png`

                if((SaAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Sa${i+1}-Locked.png` && data.achievements[10].unlocked[i] === false) || (SaAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Sa${i+1}-UnLocked.png` && data.achievements[10].unlocked[i] === true))
                    SaAchieves[i].src = data.achievements[10].unlocked[i] === false ? `CHEM Achieves/Compounds/Sa${i+1}-Locked.png` : `CHEM Achieves/Compounds/Sa${i+1}-UnLocked.png`

                if((SlAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Sl${i+1}-Locked.png` && data.achievements[11].unlocked[i] === false) || (SlAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Sl${i+1}-UnLocked.png` && data.achievements[11].unlocked[i] === true))
                    SlAchieves[i].src = data.achievements[11].unlocked[i] === false ? `CHEM Achieves/Compounds/Sl${i+1}-Locked.png` : `CHEM Achieves/Compounds/Sl${i+1}-UnLocked.png`
                
                if((CfAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Cf${i+1}-Locked.png` && data.achievements[12].unlocked[i] === false) || (CfAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Cf${i+1}-UnLocked.png` && data.achievements[12].unlocked[i] === true))
                    CfAchieves[i].src = data.achievements[12].unlocked[i] === false ? `CHEM Achieves/Compounds/Cf${i+1}-Locked.png` : `CHEM Achieves/Compounds/Cf${i+1}-UnLocked.png`
                
                if((PwAchieves[i].getAttribute('src') !== `CHEM Achieves/Resources/Power${i+1}-Locked.png` && data.achievements[13].unlocked[i] === false) || (PwAchieves[i].getAttribute('src') !== `CHEM Achieves/Resources/Power${i+1}-UnLocked.png` && data.achievements[13].unlocked[i] === true))
                    PwAchieves[i].src = data.achievements[11].unlocked[i] === false ? `CHEM Achieves/Resources/Power${i+1}-Locked.png` : `CHEM Achieves/Resources/Power${i+1}-UnLocked.png`
                
                if((CoAchieves[i].getAttribute('src') !== `CHEM Achieves/Compounds/Corium${i+1}-Locked.png` && data.achievements[14].unlocked[i] === false) || (CoAchieves[i].getAttribute('src') !== `CHEM Achieves/Resources/Corium${i+1}-UnLocked.png` && data.achievements[14].unlocked[i] === true))
                    CoAchieves[i].src = data.achievements[12].unlocked[i] === false ? `CHEM Achieves/Resources/Corium${i+1}-Locked.png` : `CHEM Achieves/Resources/Corium${i+1}-UnLocked.png`
        }
    }
}

const descriptionText = DOMCacheGetOrSet("achieveText")
const achieveDescriptions = ['<hr>[1] - Hydrogenated<br>Buy your first Hydrogen Generator','<hr>[2] - There must be more to this game<br>Buy 10 Hydrogen Generators','<hr>[3] - Just go get helium already<br>Buy 50 Hydrogen Generators','<hr>[4] - Saturated<br>Buy 100 Hydrogen Generators',
    '<hr>[5] - The Hydrogen Strikes Back<br>Buy 500 Hydrogen Generators','<hr>[6] - Return of the Hydrogen<br>Buy 1e3 Hydrogen Generators','<hr>[7] - Hindenberg 2.0<br>Buy 1e4 Hydrogen Generators','<hr>[8] - Millionaire I<br>Buy 1e6 Hydrogen Generators',
    '<hr>[9] - The Element of Life<br>Buy your first Carbon Generator', '<hr>[10] - Well you can make graphite at least<br>Buy 10 Carbon Generators','<hr>[11] - Diamonds<br>Buy 50 Carbon Generators','<hr>[12] - Crude Oil<br>Buy 100 Carbon Generators',
    '<hr>[13] - Ubër Oil<br>Buy 500 Carbon Generators', '<hr>[14] - Lucrative<br>Buy 1e3 Carbon Generators','<hr>[15] -  All life<br>Buy 1e4 Carbon Generators','<hr>[16] - Millionaire II<br>Buy 1e6 Carbon Generators', '<hr>[17] - No this is not air<br>Buy your first Oxygen Generator',
    '<hr>[18] - Still not air<br>Buy 10 Oxygen Generators','<hr>[19] - Nitrogen + Oxygen = Air<br>Buy 50 Oxygen Generators','<hr>[20] - Still need nitrogen<br>Buy 100 Oxygen Generators','<hr>[21] - More O<sub>2</sub> Please<br>Buy 500 Oxygen Generators',
    '<hr>[22] - Air Monopoly<br>Buy 1e3 Oxygen Generators','<hr>[23] - Bottled Air<br>Buy 1e4 Oxygen Generators','<hr>[24] - Millionaire III<br>Buy 1e6 Oxygen Generators', '<hr>[25] - Gimme your electrons<br>Buy your first Fluorine Generator',
    '<hr>[26] - DiSulfur <b>DecaFluoride</b><br>Buy 10 Fluorine Generators','<hr>[27] - Why are you making this stuff<br>Buy 50 Fluorine Generators','<hr>[28] - All the electrons<br>Buy 100 Fluorine Generators','<hr>[29] - Burning Concrete<br>Buy 500 Fluorine Generators',
    '<hr>[30] - Disintegrated<br>Buy 1e3 Fluorine Generators','<hr>[31] - Fluorinating<br>Buy 1e4 Fluorine Generators','<hr>[32] - Millionaire IV<br>Buy 1e6 Fluorine Generators','<hr>[33] - Hey Stinky<br>Buy your first Sulfur Generator',
    '<hr>[34] - It just stinks more<br>Buy 10 Sulfur Generators','<hr>[35] - Reeking Odor<br>Buy 50 Sulfur Generators','<hr>[36] - Fools Gold<br>Buy 100 Sulfur Generators','<hr>[37] - You\'ve been struck by you\'ve been hit by, Sulfur<br>Buy 500 Sulfur Generators',
    '<hr>[38] - Stanky Leg<br>Buy 1e3 Sulfur Generators','<hr>[39] - Oh the stench<br>Buy 1e4 Sulfur Generators','<hr>[40] - Millionaire V<br>Buy 1e6 Sulfur Generators', '<hr>[41] - Mmm Mustard Gas<br>Buy your first Chlorine Generator',
    '<hr>[42] - Ph-<br>Buy 10 Chlorine Generators','<hr>[43] - Ph--<br>Buy 50 Chlorine Generators','<hr>[44] - The pool has had enough<br>Buy 100 Chlorine Generators','<hr>[45] - Not Alkaline<br>Buy 500 Chlorine Generators',
    '<hr>[46] - Spicy Air<br>Buy 1e3 Chlorine Generators','<hr>[47] - Out of Bounds Exception: Ph below 0<br>Buy 1e4 Chlorine Generators','<hr>[48] - Millionaire VI<br>Buy 1e6 Chlorine Generators','<hr>[49] - Just Iron<br>Buy your first Iron Generator',
    '<hr>[50] - Um make steel or something idk<br>Buy 10 Iron Generators','<hr>[51] - Steel > Iron<br>Buy 50 Iron Generators','<hr>[52] - Solid Investment<br>Buy 100 Iron Generators','<hr>[53] - Kaiser Steel<br>Buy 500 Iron Generators',
    '<hr>[54] - The might of German... Iron?<br>Buy 1e3 Iron Generators','<hr>[55] - Carnegie<br>Buy 1e4 Iron Generators','<hr>[56] - Millionaire VII<br>Buy 1e6 Iron Generators','<hr>[57] - Definitely not Peanut Butter<br>Buy your first Lead Generator',
    '<hr>[58] - X-Ray Protection<br>Buy 10 Lead Generators','<hr>[59] - ._. Don\'t eat that<br>Buy 50 Lead Generators', '<hr>[60] - Lead Paints<br>Buy 100 Lead Generators', '<hr>[61] - Mad Hatters Disease<br>Buy 500 Lead Generators',
    '<hr>[62] - Powder it too<br>Buy 1e3 Lead Generators', '<hr>[63] - Lotta Lead<br>Buy 1e4 Lead Generators', '<hr>[64] - Millionaire VIII<br>Buy 1e6 Lead Generators', '<hr>[65] - A new chapter<br>Create your first Propane','<hr>' +
    '<hr>[66] - Do you sell propane?<br>Create 10 Propane','<hr>[67] - What about propane accessories?<br>Create Propane','<hr>[68] - Strickland Propane<br>Create 1e3 Propane',
    '<hr>[69] - Dihydrogen Monoxide (also funni number)<br>Create your first Water','<hr>[70] - Unlimited Power<br>Create 10 Water','<hr>[71] - Moar Water<br>Create 100 Water','<hr>[72] - Hydroelectric<br>Create 1e3 Water',
    '<hr>[73] - Battery<br>Create your first Sulfuric Acid','<hr>[74] - Energizer Battery<br>Create 10 Sulfuric Acid','<hr>[75] - Energizer Max<br>Create 100 Sulfuric Acid','<hr>[76] - Energizer Pro Max<br>Create 1e3 Sulfuric Acid',
    '<hr>[77] - Follow the iron trail<br>Create your first Steel','<hr>[78] - Carnegie Steel<br>Create 10 Steel','<hr>[79] - What do you even do with this?<br>Create 100 Steel','<hr>[80] - All the steel<br>Create 1e3 Steel',
    '<hr>[81] - The last compound<br>Create your first Chlorine Trifluoride','<hr>[82] - A terrible idea<br>Create 10 Chlorine Trifluoride','<hr>[83] - You need to stop<br>Create 100 Chlorine Trifluoride','<hr>[84] - Burning Asbestos?!?<br>Create 1e3 Chlorine Trifluoride',
    '<hr>[85] - New tabs?!?<br>Generate 1 Power','<hr>[86] - I got the power<br>Generate 10 Power','<hr>[87] - The power of the steam engine<br>Generate 100 Power','<hr>[88] - It never changes<br>Generate 1e3 Power',
    '<hr>[89] - Three Mile Island<br>Melt for 500 Corium','<hr>[90] - Fukushima<br>Melt for 1e3 Corium','<hr>[91] - Chernobyl<br>Melt for 1e4 Corium','<hr>[92] - The elephants foot<br>Melt for 1e6 Corium']
function changeDescription(id) {
    descriptionText.innerHTML = achieveDescriptions[id]
}