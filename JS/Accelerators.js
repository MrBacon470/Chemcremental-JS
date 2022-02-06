let augmentCosts = [D(2.5e4),D(5e4),D(1.5e5)]
let unlockCosts = [D(0),D(0),D(0)]
let augmentBoosts = [{boost:[D(0),D(0),D(0)]},{boost:[D(0),D(0),D(0)]},{boost:[D(0),D(0),D(0)]}]
let leptonsToGet = [D(0),D(0)]
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
    
   leptonsToGet[0] = Decimal.sqrt(data.particles[0].electrons.divide(D(1e4))).times(D(2))
   leptonsToGet[1] = Decimal.sqrt(data.particles[0].electrons.divide(D(1e5)))
}
const particleDivisor = [D(1e3),D(1e2),D(1e1)]
function calculateAugmentBoost() {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(i === 0)
                augmentBoosts[i].boost[j] = data.augments[i].unlocked[j] === true ? D(1).add(Decimal.sqrt(data.particles[0].protons.divide(particleDivisor[j]))) : D(1)
            if(i === 1)
                augmentBoosts[i].boost[j] = data.augments[i].unlocked[j] === true ? D(1).add(Decimal.sqrt(data.particles[0].neutrons.divide(particleDivisor[j]))) : D(1)
            if(i === 2)
                augmentBoosts[i].boost[j] = data.augments[i].unlocked[j] === true ? D(1).add(Decimal.sqrt(data.particles[0].electrons.divide(particleDivisor[j]))) : D(1)
        }
    }
}

function splitElements() {
    if(sumOfElements.lte(data.previousSum)) return

    data.previousSum = sumOfLevels

    data.particles[0].protons = data.particles[0].protons.plus(data.particlesToGet[0])
    data.particles[0].neutrons = data.particles[0].neutrons.plus(data.particlesToGet[1])
    data.particles[0].electrons = data.particles[0].electrons.plus(data.particlesToGet[2])
    
    for(let i = 7; i > -1; i--) {
        data.elements[i].level = D(0)
        data.elements[i].max = D(0)
        data.elements[i].amt = D(0)
        data.elementGain[i] = D(0)
    }

    for(let i = 0; i < 3; i++)
        data.particlesToGet[i] = D(0)
}

function shatterElectrons() {
    if(data.particles[0].electrons.lt(D(1e5))) return


}

function buyAugment(a,b) {
    switch(a) {
        case 0:
            if(data.particles[0].protons.lt(augmentCosts[b]) || data.augments[a].unlocked[b] === true) return
            data.particles[0].protons = data.particles[0].protons.sub(augmentCosts[b])
            data.augments[a].unlocked[b] = true
            break
        case 1:
            if(data.particles[0].neutrons.lt(augmentCosts[b]) || data.augments[a].unlocked[b] === true) return
            data.particles[0].neutrons = data.particles[0].neutrons.sub(augmentCosts[b])
            data.augments[a].unlocked[b] = true
            break
        case 2:
            if(data.particles[0].electrons.lt(augmentCosts[b]) || data.augments[a].unlocked[b] === true) return
            data.particles[0].electrons = data.particles[0].electrons.sub(augmentCosts[b])
            data.augments[a].unlocked[b] = true
            break
        case 3:
            if(data.particles[0].electrons.lt(augmentCosts[b]) || data.augments[a].unlocked[b] === true) return
            data.particles[0].electrons = data.particles[0].electrons.sub(augmentCosts[b])
            data.augments[a].unlocked[b] = true
            break
        case 4:
            if(data.particles[0].electrons.lt(augmentCosts[b]) || data.augments[a].unlocked[b] === true) return
            data.particles[0].electrons = data.particles[0].electrons.sub(augmentCosts[b])
            data.augments[a].unlocked[b] = true
            break
        case 5:
            if(data.particles[0].electrons.lt(augmentCosts[b]) || data.augments[a].unlocked[b] === true) return
            data.particles[0].electrons = data.particles[0].electrons.sub(augmentCosts[b])
            data.augments[a].unlocked[b] = true
            break
    }
}