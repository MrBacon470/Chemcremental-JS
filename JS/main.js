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

window.setInterval(function(){
}, 10);