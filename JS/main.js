function switchTab(i){
    data.currentTab = i
    let x=i-2
    if (x >= 0) data.hasTab[x] ? data.currentTab=i : data.currentTab=1
    tabChangeHTML()
}

function mainLoop(){
    let diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    updateHTML()
}

function elementProduction(){
    data.elements[0].amt += data.elements[0].level * (1 + Math.sqrt(data.elements[1].max))

    data.elements[1].amt += data.elements[1].level * (1 + Math.sqrt(data.elements[2].max))
    data.elements[1].max += data.elements[1].level * (1 + Math.sqrt(data.elements[2].max))

    data.elements[2].amt += data.elements[2].level * (1 + Math.sqrt(data.elements[3].max))
    data.elements[2].max += data.elements[2].level * (1 + Math.sqrt(data.elements[3].max))
    
    data.elements[3].amt += data.elements[3].level * (1 + Math.sqrt(data.elements[4].max))
    data.elements[3].max += data.elements[3].level * (1 + Math.sqrt(data.elements[4].max))

    data.elements[4].amt += data.elements[4].level * (1 + Math.sqrt(data.elements[5].max))
    data.elements[4].max += data.elements[4].level * (1 + Math.sqrt(data.elements[5].max))

    data.elements[5].amt += data.elements[5].level * (1 + Math.sqrt(data.elements[6].max))
    data.elements[5].max += data.elements[5].level * (1 + Math.sqrt(data.elements[6].max))

    data.elements[6].amt += data.elements[6].level * (1 + Math.sqrt(data.elements[7].max))
    data.elements[6].max += data.elements[6].level * (1 + Math.sqrt(data.elements[7].max))

    data.elements[7].amt += data.elements[7].level
    data.elements[7].max += data.elements[7].level
}

window.setInterval(function(){
    mainLoop()
}, 10);