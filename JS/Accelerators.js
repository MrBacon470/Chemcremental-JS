let accelUpCosts = [{a:D(3e3),b:D(5e3),c:D(0),d:D(0)},{a:D(5e3),b:D(1e4),c:D(5e3),d:D(0)},{a:D(1e4),b:D(3e4),c:D(1e4),d:D(5e3)}]
let accelCosts = [D(0),D(0),D(0)]
let accelCostBase = [D(1e3),D(1e4),D(5e3)]
let accelBoosts = [{a:D(0),b:D(0),c:D(0),d:D(0)},{a:D(0),b:D(0),c:D(0),d:D(0)},{a:D(0),b:D(0),c:D(0),d:D(0)}]
let gainMult = D(0)
const particleGains = [D(1),D(6),D(8),D(9),D(16),D(17),D(26),D(82)]
let sumOfLevels = data.elements[0].level.plus(data.elements[1].level).plus(data.elements[2].level).plus(data.elements[3].level).plus(data.elements[4].level).plus(data.elements[5].level).plus(data.elements[6].level).plus(data.elements[7].level)
function updateAccelStuff() {
   sumOfLevels = data.elements[0].level.plus(data.elements[1].level).plus(data.elements[2].level).plus(data.elements[3].level).plus(data.elements[4].level).plus(data.elements[5].level).plus(data.elements[6].level).plus(data.elements[7].level)
   gainMult = sumOfLevels.divide(data.previousSum).lte(D(1)) ? D(1) : (sumOfLevels.divide(data.previousSum))
   for(let i = 0; i < 3; i++)
   data.particlesToGet[i] = D(0)
   for(let i = 0; i < 8; i++) {
        data.particlesToGet[0] = data.particlesToGet[0].plus(particleGains[i].times(data.elements[i].level))
        if(i !== 0)
            data.particlesToGet[1] = data.particlesToGet[1].plus(particleGains[i].times(data.elements[i].level))
        
            data.particlesToGet[2] = data.particlesToGet[2].plus(particleGains[i].times(data.elements[i].level))
   }

   for(let i = 0; i < 3; i++) {
        accelCosts[i] = accelCostBase[i].times(Decimal.pow(1.5, data.accelerators[i].level))
        accelBoosts[i].a = D(1).plus(Decimal.sqrt(data.accelerators[i].level.times(D(2))))
        accelBoosts[i].b = D(1).plus(Decimal.sqrt(data.accelerators[i].level.times(D(3))))
        accelBoosts[i].c = D(1).plus(Decimal.sqrt(data.accelerators[i].level.times(D(4))))
        accelBoosts[i].d = D(1).plus(Decimal.sqrt(data.accelerators[i].level.times(D(6))))
   }
    

}


function splitElements() {
    if(sumOfElements.lte(data.previousSum)) return
    if(data.settingsToggles[2])
        if(!confirm('Are you sure you want to do this? It will reset all elements generators')) return

    data.previousSum = sumOfLevels

    for(let i = 0; i < 3; i++)
        data.particles[i] = data.particles[i].plus(data.particlesToGet[i])
    
    for(let i = 7; i > -1; i--) {
        data.elements[i].level = D(0)
        data.elements[i].max = D(0)
        data.elements[i].amt = D(0)
        data.elementGain[i] = D(0)
    }

    for(let i = 0; i < 3; i++)
        data.particlesToGet[i] = D(0)
}

function accelerate(i) {
    if(data.particles[i].lt(accelCosts[i])) return

    data.particles[i] = data.particles[i].sub(accelCosts[i])
    data.accelerators[i].level = data.accelerators[i].level.add(D(1))
}

function upgradeAccel(i) {
    if(data.accelerators[i].upgradeLevel.eq(D(3))) return
    if(data.compounds[3].amt.lt(accelUpCosts[data.accelerators[i].upgradeLevel].a)) return
    if(data.particles[0].lt(accelUpCosts[data.accelerators[i].upgradeLevel].b)) return
    if(data.particles[1].lt(accelUpCosts[data.accelerators[i].upgradeLevel].c)) return
    if(data.particles[2].lt(accelUpCosts[data.accelerators[i].upgradeLevel].d)) return

    data.compounds[3].amt = data.compounds[3].amt.minus(accelUpCosts[data.accelerators[i].upgradeLevel].a)
    data.particles[0] = data.particles[0].minus(accelUpCosts[data.accelerators[i].upgradeLevel].b)
    data.particles[1] = data.particles[1].minus(accelUpCosts[data.accelerators[i].upgradeLevel].c)
    data.particles[2] = data.particles[2].minus(accelUpCosts[data.accelerators[i].upgradeLevel].d)
    data.accelerators[i].upgradeLevel = data.accelerators[i].upgradeLevel.plus(D(1))
}

for(let i = 0; i < 3; i++) {
    DOMCacheGetOrSet(`accel${i+1}UpB`).addEventListener('mouseover', () => acceleratorHover(`up${i+1}`))
    DOMCacheGetOrSet(`accel${i+1}UpB`).addEventListener('click', () => upgradeAccel(i))
    DOMCacheGetOrSet(`accel${i+1}B`).addEventListener('mouseover', () => acceleratorHover(`ac${i+1}`))
    DOMCacheGetOrSet(`accel${i+1}B`).addEventListener('click', () => accelerate(i))
}

function acceleratorHover(i) {
    switch(i) {
        case 'ac1':
            DOMCacheGetOrSet('accelUpgradeText').innerHTML = data.accelerators[0].level.eq(data.accelerators[0].lvlCap) ? `Max Level` :`Accelerate Cost<br>${format(accelCosts[0])} Protons`
            break
        case 'ac2':
            DOMCacheGetOrSet('accelUpgradeText').innerHTML = data.accelerators[1].level.eq(data.accelerators[1].lvlCap) ? `Max Level` :`Accelerate Cost<br>${format(accelCosts[1])} Neutrons`
            break
        case 'ac3':
            DOMCacheGetOrSet('accelUpgradeText').innerHTML = data.accelerators[2].level.eq(data.accelerators[2].lvlCap) ? `Max Level` :`Accelerate Cost<br>${format(accelCosts[2])} Electrons`
            break
        case 'up1':
            DOMCacheGetOrSet('accelUpgradeText').innerHTML = data.accelerators[0].upgradeLevel.eq(D(3)) ? 'Maxed Out' : `Upgrade Cost<br>${format(accelUpCosts[data.accelerators[0].upgradeLevel].a)} Steel<br>${format(accelUpCosts[data.accelerators[0].upgradeLevel].b)} Protons<br>${format(accelUpCosts[data.accelerators[0].upgradeLevel].c)} Neutrons<br>${format(accelUpCosts[data.accelerators[0].upgradeLevel].d)} Electrons`
            break
        case 'up2':
            DOMCacheGetOrSet('accelUpgradeText').innerHTML = data.accelerators[1].upgradeLevel.eq(D(3)) ? 'Maxed Out' : `Upgrade Cost<br>${format(accelUpCosts[data.accelerators[1].upgradeLevel].a)} Steel<br>${format(accelUpCosts[data.accelerators[1].upgradeLevel].b)} Protons<br>${format(accelUpCosts[data.accelerators[1].upgradeLevel].c)} Neutrons<br>${format(accelUpCosts[data.accelerators[1].upgradeLevel].d)} Electrons`
            break
        case 'up3':
            DOMCacheGetOrSet('accelUpgradeText').innerHTML = data.accelerators[0].upgradeLevel.eq(D(3)) ? 'Maxed Out' : `Upgrade Cost<br>${format(accelUpCosts[data.accelerators[2].upgradeLevel].a)} Steel<br>${format(accelUpCosts[data.accelerators[2].upgradeLevel].b)} Protons<br>${format(accelUpCosts[data.accelerators[2].upgradeLevel].c)} Neutrons<br>${format(accelUpCosts[data.accelerators[0].upgradeLevel].d)} Electrons`
            break
    }    
}