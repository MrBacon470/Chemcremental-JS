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
//Add event listeners
for(let i = 0; i < 8; i++) {
    HAchieves[i].addEventListener('mouseover', () => changeDescription(i))
    CAchieves[i].addEventListener('mouseover', () => changeDescription(i+8))
    OAchieves[i].addEventListener('mouseover', () => changeDescription(i+16))
    FAchieves[i].addEventListener('mouseover', () => changeDescription(i+24))
    SAchieves[i].addEventListener('mouseover', () => changeDescription(i+32))
    ClAchieves[i].addEventListener('mouseover', () => changeDescription(i+40))
    FeAchieves[i].addEventListener('mouseover', () => changeDescription(i+48))
    PbAchieves[i].addEventListener('mouseover', () => changeDescription(i+56))
}
for(let i = 0; i < 4; i++) {
    PrAchieves[i].addEventListener('mouseover', () => changeDescription(i+64))
    WtAchieves[i].addEventListener('mouseover', () => changeDescription(i+68))
    SaAchieves[i].addEventListener('mouseover', () => changeDescription(i+72))
    SlAchieves[i].addEventListener('mouseover', () => changeDescription(i+76))
    CfAchieves[i].addEventListener('mouseover', () => changeDescription(i+80))
    PwAchieves[i].addEventListener('mouseover', () => changeDescription(i+84))
    CoAchieves[i].addEventListener('mouseover', () => changeDescription(i+88))
}

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
            if((HAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[0].unlocked[i] === false) || (HAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[0].unlocked[i] === true))
                HAchieves[i].style.backgroundColor = data.achievements[0].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'

            if((CAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[1].unlocked[i] === false) || (CAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[1].unlocked[i] === true))
                CAchieves[i].style.backgroundColor = data.achievements[1].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
            
            if((OAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[2].unlocked[i] === false) || (OAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[2].unlocked[i] === true))
                OAchieves[i].style.backgroundColor = data.achievements[2].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
            
            if((FAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[3].unlocked[i] === false) || (FAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[3].unlocked[i] === true))
                FAchieves[i].style.backgroundColor = data.achievements[3].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
            
            if((SAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[4].unlocked[i] === false) || (SAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[4].unlocked[i] === true))
                SAchieves[i].style.backgroundColor = data.achievements[4].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
            
            if((ClAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[5].unlocked[i] === false) || (ClAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[5].unlocked[i] === true))
                ClAchieves[i].style.backgroundColor = data.achievements[5].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
            
            if((FeAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[6].unlocked[i] === false) || (FeAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[6].unlocked[i] === true))
                FeAchieves[i].style.backgroundColor = data.achievements[6].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
            
            if((PbAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[7].unlocked[i] === false) || (PbAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[7].unlocked[i] === true))
                PbAchieves[i].style.backgroundColor = data.achievements[7].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
        }
        for(let i = 0; i < 4; i++) {
            if((PrAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[8].unlocked[i] === false) || (PrAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[8].unlocked[i] === true))
                PrAchieves[i].style.backgroundColor = data.achievements[8].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'

            if((WtAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[9].unlocked[i] === false) || (WtAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[9].unlocked[i] === true))
                WtAchieves[i].style.backgroundColor = data.achievements[9].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'

            if((SaAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[10].unlocked[i] === false) || (SaAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[10].unlocked[i] === true))
                SaAchieves[i].style.backgroundColor = data.achievements[10].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
            
            if((SlAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[11].unlocked[i] === false) || (SlAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[11].unlocked[i] === true))
                SlAchieves[i].style.backgroundColor = data.achievements[11].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'

            if((CfAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[12].unlocked[i] === false) || (CfAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[12].unlocked[i] === true))
                CfAchieves[i].style.backgroundColor = data.achievements[12].unlocked[12] === false ? 'rgba(0,0,0,0)' : '#23a338'
            
            if((PwAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[13].unlocked[i] === false) || (PwAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[13].unlocked[i] === true))
                PwAchieves[i].style.backgroundColor = data.achievements[13].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
            
            if((CoAchieves[i].style.backgroundColor !== 'rgba(0,0,0,0)' && data.achievements[14].unlocked[i] === false) || (CoAchieves[i].style.backgroundColor !== '#23a338' && data.achievements[14].unlocked[i] === true))
                CoAchieves[i].style.backgroundColor = data.achievements[14].unlocked[i] === false ? 'rgba(0,0,0,0)' : '#23a338'
        }
    }
}

const descriptionText = DOMCacheGetOrSet("achieveText")
const achieveDescriptions = ['<hr>[H-1] - Hydrogenated<br>Buy your first Hydrogen Generator','<hr>[H-2] - There must be more to this game<br>Buy 10 Hydrogen Generators','<hr>[H-3] - Just go get helium already<br>Buy 50 Hydrogen Generators','<hr>[H-4] - Saturated<br>Buy 100 Hydrogen Generators',
    '<hr>[H-5] - The Hydrogen Strikes Back<br>Buy 500 Hydrogen Generators','<hr>[H-6] - Return of the Hydrogen<br>Buy 1e3 Hydrogen Generators','<hr>[H-7] - Hindenberg 2.0<br>Buy 1e4 Hydrogen Generators','<hr>[H-8] - Millionaire I<br>Buy 1e6 Hydrogen Generators',
    '<hr>[C-1] - The Element of Life<br>Buy your first Carbon Generator', '<hr>[C-2] - Well you can make graphite at least<br>Buy 10 Carbon Generators','<hr>[C-3] - Diamonds<br>Buy 50 Carbon Generators','<hr>[C-4] - Crude Oil<br>Buy 100 Carbon Generators',
    '<hr>[C-5] - Ubër Oil<br>Buy 500 Carbon Generators', '<hr>[C-6] - Lucrative<br>Buy 1e3 Carbon Generators','<hr>[C-7] -  All life<br>Buy 1e4 Carbon Generators','<hr>[C-8] - Millionaire II<br>Buy 1e6 Carbon Generators', '<hr>[O-1] - No this is not air<br>Buy your first Oxygen Generator',
    '<hr>[O-2] - Still not air<br>Buy 10 Oxygen Generators','<hr>[O-3] - Nitrogen + Oxygen = Air<br>Buy 50 Oxygen Generators','<hr>[O-4] - Still need nitrogen<br>Buy 100 Oxygen Generators','<hr>[O-5] - More O<sub>2</sub> Please<br>Buy 500 Oxygen Generators',
    '<hr>[O-6] - Air Monopoly<br>Buy 1e3 Oxygen Generators','<hr>[O-7] - Bottled Air<br>Buy 1e4 Oxygen Generators','<hr>[O-8] - Millionaire III<br>Buy 1e6 Oxygen Generators', '<hr>[F-1] - Gimme your electrons<br>Buy your first Fluorine Generator',
    '<hr>[F-2] - DiSulfur <b>DecaFluoride</b><br>Buy 10 Fluorine Generators','<hr>[F-3] - Why are you making this stuff<br>Buy 50 Fluorine Generators','<hr>[F-4] - All the electrons<br>Buy 100 Fluorine Generators','<hr>[F-5] - Burning Concrete<br>Buy 500 Fluorine Generators',
    '<hr>[F-6] - Disintegrated<br>Buy 1e3 Fluorine Generators','<hr>[F-7] - Fluorinating<br>Buy 1e4 Fluorine Generators','<hr>[F-8] - Millionaire IV<br>Buy 1e6 Fluorine Generators','<hr>[S-1] - Hey Stinky<br>Buy your first Sulfur Generator',
    '<hr>[S-2] - It just stinks more<br>Buy 10 Sulfur Generators','<hr>[S-3] - Reeking Odor<br>Buy 50 Sulfur Generators','<hr>[S-4] - Fools Gold<br>Buy 100 Sulfur Generators','<hr>[S-5] - You\'ve been struck by you\'ve been hit by, Sulfur<br>Buy 500 Sulfur Generators',
    '<hr>[S-6] - Stanky Leg<br>Buy 1e3 Sulfur Generators','<hr>[S-7] - Oh the stench<br>Buy 1e4 Sulfur Generators','<hr>[S-8] - Millionaire V<br>Buy 1e6 Sulfur Generators', '<hr>[Cl-1] - Mmm Mustard Gas<br>Buy your first Chlorine Generator',
    '<hr>[Cl-2] - Ph-<br>Buy 10 Chlorine Generators','<hr>[Cl-3] - Ph--<br>Buy 50 Chlorine Generators','<hr>[Cl-4] - The pool has had enough<br>Buy 100 Chlorine Generators','<hr>[Cl-5] - Not Alkaline<br>Buy 500 Chlorine Generators',
    '<hr>[Cl-6] - Spicy Air<br>Buy 1e3 Chlorine Generators','<hr>[Cl-7] - Out of Bounds Exception: Ph below 0<br>Buy 1e4 Chlorine Generators','<hr>[Cl-8] - Millionaire VI<br>Buy 1e6 Chlorine Generators','<hr>[Fe-1] - Just Iron<br>Buy your first Iron Generator',
    '<hr>[Fe-2] - Um make steel or something idk<br>Buy 10 Iron Generators','<hr>[Fe-3] - Steel > Iron<br>Buy 50 Iron Generators','<hr>[Fe-4] - Solid Investment<br>Buy 100 Iron Generators','<hr>[Fe-5] - Kaiser Steel<br>Buy 500 Iron Generators',
    '<hr>[Fe-6] - The might of German... Iron?<br>Buy 1e3 Iron Generators','<hr>[Fe-7] - Carnegie<br>Buy 1e4 Iron Generators','<hr>[Fe-8] - Millionaire VII<br>Buy 1e6 Iron Generators','<hr>[Pb-1] - Definitely not Peanut Butter<br>Buy your first Lead Generator',
    '<hr>[Pb-2] - X-Ray Protection<br>Buy 10 Lead Generators','<hr>[Pb-3] - ._. Don\'t eat that<br>Buy 50 Lead Generators', '<hr>[Pb-4] - Lead Paints<br>Buy 100 Lead Generators', '<hr>[Pb-5] - Mad Hatters Disease<br>Buy 500 Lead Generators',
    '<hr>[Pb-6] - Powder it too<br>Buy 1e3 Lead Generators', '<hr>[Pb-7] - Lotta Lead<br>Buy 1e4 Lead Generators', '<hr>[Pb-8] - Millionaire VIII<br>Buy 1e6 Lead Generators', '<hr>[Pr-1] - A new chapter<br>Create your first Propane','<hr>' +
    '<hr>[Pr-2] - Do you sell propane?<br>Create 10 Propane','<hr>[Pr-3] - What about propane accessories?<br>Create Propane','<hr>[Pr-4] - Strickland Propane<br>Create 1e3 Propane',
    '<hr>[Wt-1] - Dihydrogen Monoxide<br>Create your first Water','<hr>[Wt-2] - Unlimited Power<br>Create 10 Water','<hr>[Wt-3] - Moar Water<br>Create 100 Water','<hr>[Wt-4] - Hydroelectric<br>Create 1e3 Water',
    '<hr>[Sa-1] - Battery<br>Create your first Sulfuric Acid','<hr>[Sa-2] - Energizer Battery<br>Create 10 Sulfuric Acid','<hr>[Sa-3] - Energizer Max<br>Create 100 Sulfuric Acid','<hr>[Sa-4] - Energizer Pro Max<br>Create 1e3 Sulfuric Acid',
    '<hr>[Sl-1] - Follow the iron trail<br>Create your first Steel','<hr>[Sl-2] - Carnegie Steel<br>Create 10 Steel','<hr>[Sl-3] - What do you even do with this?<br>Create 100 Steel','<hr>[Sl-4] - All the steel<br>Create 1e3 Steel',
    '<hr>[Cf-1] - The last compound<br>Create your first Chlorine Trifluoride','<hr>[Cf-2] - A terrible idea<br>Create 10 Chlorine Trifluoride','<hr>[Cf-3] - You need to stop<br>Create 100 Chlorine Trifluoride','<hr>[Cf-4] - Burning Asbestos?!?<br>Create 1e3 Chlorine Trifluoride',
    '<hr>[Pw-1] - New tabs?!?<br>Generate 1 Power','<hr>[Pw-2] - I got the power<br>Generate 10 Power','<hr>[Pw-4] - The power of the steam engine<br>Generate 100 Power','<hr>[Pw-4] - It never changes<br>Generate 1e3 Power',
    '<hr>[Co-1] - Three Mile Island<br>Melt for 500 Corium','<hr>[Co-2] - Fukushima<br>Melt for 1e3 Corium','<hr>[Co-3] - Chernobyl<br>Melt for 1e4 Corium','<hr>[Co-4] - The elephants foot<br>Melt for 1e6 Corium']
function changeDescription(id) {
    descriptionText.innerHTML = achieveDescriptions[id]
}