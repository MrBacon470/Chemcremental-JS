const D = x => new Decimal(x)
//create all the variables in a data object for saving
function getDefaultObject() {
    return {
        buyAmounts: [1,1,1,1,1,1,1],
        //Elements
        elements: [{amt:D(10),name:"Hydrogen",level:D(0),max:D(0)},{amt:D(0),name:"Carbon",level:D(0),max:D(0)},{amt:D(0),name:"Oxygen",
        level:D(0),max:D(0)},{amt:D(0),name:"Fluorine",level:D(0),max:D(0)},{amt:D(0),name:"Sulfur",level:D(0),max:D(0)},{amt:D(0),name:"Chlorine",
        level:D(0),max:D(0)},{amt:D(0),name:"Iron",level:D(0),max:D(0)},{amt:D(0),name:"Lead",level:D(0),max:D(0)}],
        elementGain: [D(0),D(0),D(0),D(0),D(0),D(0),D(0),D(0)],
        isotopes: [{amt:D(0),name:"H-3",level:D(0),max:D(0)},{amt:D(0),name:"C-14",level:D(0),max:D(0)},{amt:D(0),name:"O-15",
        level:D(0),max:D(0)},{amt:D(0),name:"F-18",level:D(0),max:D(0)},{amt:D(0),name:"S-35",level:D(0),max:D(0)},{amt:D(0),name:"Cl-37",
        level:D(0),max:D(0)},{amt:D(0),name:"Fe-60",level:D(0),max:D(0)},{amt:D(0),name:"Pb-212",level:D(0),max:D(0)}],
        isotopeGain: [D(0),D(0),D(0),D(0),D(0),D(0),D(0),D(0)],
        //Compounds
        compounds: [{amt:D(0),name:"Propane",cost:"C3H8"},{amt:D(0),name:"Water",cost:"H20"},
        {amt:D(0),name:"Sulfuric Acid",cost:"H2SO4"},{amt:D(0),name:"Steel",cost:"FeC"},
        {amt:D(0),name:"Chlorine Trifluoride",cost:"ClF3"}],
        //Power
        power: D(0),
        powerStored: D(0),
        powerUps: [D(0),D(0),D(0)],
        fuelStored: [D(0),D(0),D(0),D(0)],
        generatorGain: [D(0),D(0),D(0),D(0)],
        //Melting
        corium: D(0),
        coriumMax: D(0),
        coriumMultUps: [D(0),D(0),D(0)],
        coriumSingUps: [false,false,false],
        //Refinery
        fuels: [D(0),D(0),D(0),D(0)],
        //Particles
        particlesToGet: [D(0),D(0),D(0)],
        particles: [{name:'theBigThree',protons:D(0),neutrons:D(0),electrons:D(0)},{name:'leptons',muons:D(0),taus:D(0)},{name:'quarks',quarks:[D(0),D(0),D(0),D(0),D(0),D(0)]}],
        previousSum: D(1),
        augments: [{unlocked:[false,false,false]},{unlocked:[false,false,false]},{unlocked:[false,false,false]}],
        leptonUnlocks: [false,false,false],
        //Radiation Vars
        hasIrridiated: false,
        radiationParticles: [D(0),D(0),D(0)],
        autoActive: [false,false,false,false,false,false,false],
        research: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        challengeCompletions: [D(0),D(0),D(0),D(0),D(0)],
        activeChallenge: [false,false,false,false,false],
        //Matter
        matter: [D(0),D(0),D(0),D(0)],
        darkEnergy: D(0),
        matterUnlocked: [false,false],
        darkUpUnlocked: [false,false,false,false,false],
        pillarUnlocked: [false,false,false,false,false],
        corruptTimer: D(0),
        corruptIndex: -1,
        //Achievements
        achievements: [{name:"H",unlocked:[false,false,false,false,false,false,false,false]},{name:"C",unlocked:[false,false,false,false,false,false,false,false]},{name:"O",unlocked:[false,false,false,false,false,false,false,false]},
        {name:"F",unlocked:[false,false,false,false,false,false,false,false]},{name:"S",unlocked:[false,false,false,false,false,false,false,false]},{name:"Cl",unlocked:[false,false,false,false,false,false,false,false]},
        {name:"Fe",unlocked:[false,false,false,false,false,false,false,false]},{name:"Pb",unlocked:[false,false,false,false,false,false,false,false]},
        {name:"Pr",unlocked:[false,false,false,false]},{name:"Wt",unlocked:[false,false,false,false]},{name:"Sa",unlocked:[false,false,false,false]},{name:"Sl",unlocked:[false,false,false,false]},{name:"Cf",unlocked:[false,false,false,false]},
        {name:"Pw",unlocked:[false,false,false,false]},{name:"Co",unlocked:[false,false,false,false]},{name:"Pro",unlocked:[false,false,false,false]},{name:"Neu",unlocked:[false,false,false,false]},
        {name:"Ele",unlocked:[false,false,false,false]},{name:"Muo",unlocked:[false,false,false,false]},{name:"Tau",unlocked:[false,false,false,false]}],
        scrtAchievements: [false,false,false,false,false,false,false,false,false,false,false],
        //Settings things
        currentTheme: 0,
        alerted: false,
        hasTab: [false, false, false, false, false, false, false],
        time: Date.now(),
        currentTab: 1,
        currentSubTab: [0,0,0,0,0,0,0],
        currentElement: 0,
        settingsToggles: [true,true,true,true,true,true,true,true],
        currentUpdate: 'v0.6.1',
        notationIndex: 0,
        devSpeed: 1,
    }
}
let data = getDefaultObject()
//saving and loading
function save(){
    window.localStorage.setItem('chemJSSave', JSON.stringify(data))
}
function load() {
    let savedata = JSON.parse(window.localStorage.getItem('chemJSSave'))
    if (savedata !== undefined) fixSave(data, savedata)
    /*
    if(data.currentUpdate === 'v0.1.0' || data.currentUpdate === 'v0.1.1' || data.currentUpdate === 'v0.1.2' || data.currentUpdate === 'v0.1.3' || data.currentUpdate === 'v0.1.4') {
        alert(`Welcome Back! The Current Version is v0.6.1, If you are seeing this message this update reset all saves older than Beta 2.0 due to major changes that affect all gameplay.`)
        createAlert('Welcome Back!','I detected your save is older than Beta 2.0 so it has been deleted because of major changes in newer updates')
        noConfirmDelete()
    }
    */
    else if(data.currentUpdate !== 'v0.6.1') {
        createAlert('Welcome Back!','The current version is Beta 6.1<br>Check the changelog for more details')
        data.currentUpdate = 'v0.6.1' 
        //if(data.alerted === true) 
            //data.alerted === false
    }
}
//fix saves
function fixSave(main=getDefaultObject(), data) {
    if (typeof data === "object") {
        Object.keys(data).forEach(i => {
            if (main[i] instanceof Decimal) {
                main[i] = D(data[i]!==null?data[i]:main[i])
            } else if (typeof main[i]  == "object") {
                fixSave(main[i], data[i])
            } else {
                main[i] = data[i]
            }
        })
        return main
    }
    else return getDefaultObject()
}
function exportSave(){
    save()
    let exportedData = btoa(JSON.stringify(data));
    const exportedDataText = document.createElement("textarea");
    exportedDataText.value = exportedData;
    document.body.appendChild(exportedDataText);
    exportedDataText.select();
    exportedDataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(exportedDataText);
}
function importSave(){
    let importedData = prompt("Paste your save data here!")
    data = Object.assign(getDefaultObject(), JSON.parse(atob(importedData)))
    save()
    location.reload()
}
window.setInterval(function(){
    save()
}, 10000);
window.onload = function (){
    load()
    generateEventHandlers()
    console.log("EventListeners Initialized.")
}
//full reset
function fullReset(){
    exportSave()
    window.localStorage.removeItem('chemJSSave')
    prevAmount = D(0)
    location.reload()
}
function deleteSave(){
        window.localStorage.removeItem('chemJSSave')
        location.reload()
}

function noConfirmDelete(){
    window.localStorage.removeItem('chemJSSave')
    location.reload()
}

