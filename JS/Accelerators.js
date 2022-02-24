let augmentCosts = [D(2.5e4),D(5e4),D(1.5e5)]
let unlockCosts = [D(0),D(0),D(0)]
let augmentBoosts = [{boost:[D(0),D(0),D(0)]},{boost:[D(0),D(0),D(0)]},{boost:[D(0),D(0),D(0)]}]
let quarkBoosts = [D(0),D(0),D(0),D(0),D(0),D(0)]
let leptonsToGet = [D(0),D(0)]
const particleGains = [D(1),D(6),D(8),D(9),D(16),D(17),D(26),D(82)]
let sumOfLevels = data.elements[0].level.plus(data.elements[1].level).plus(data.elements[2].level).plus(data.elements[3].level).plus(data.elements[4].level).plus(data.elements[5].level).plus(data.elements[6].level).plus(data.elements[7].level)
function updateAccelStuff() {
   sumOfLevels = data.elements[0].level.plus(data.elements[1].level).plus(data.elements[2].level).plus(data.elements[3].level).plus(data.elements[4].level).plus(data.elements[5].level).plus(data.elements[6].level).plus(data.elements[7].level)
   gainMult = sumOfLevels.divide(data.previousSum).lte(D(1)) ? (sumOfLevels.divide(data.previousSum)) : (sumOfLevels.divide(data.previousSum))
   for(let i = 0; i < 3; i++)
   data.particlesToGet[i] = D(0)
   for(let i = 0; i < 8; i++) {
        data.particlesToGet[0] = data.particlesToGet[0].plus(particleGains[i].times(data.elements[i].level))
        if(i !== 0)
            data.particlesToGet[1] = data.particlesToGet[1].plus(particleGains[i].times(data.elements[i].level))
        
            data.particlesToGet[2] = data.particlesToGet[2].plus(particleGains[i].times(data.elements[i].level))
   }
   for(let i = 0; i < 3; i++) {
       data.particlesToGet[i] = data.particlesToGet[i].times(quarkBoosts[2])
   }
    
   leptonsToGet[0] = Decimal.sqrt(data.particles[0].electrons.divide(D(105))).multiply(D(2))
   leptonsToGet[1] = Decimal.sqrt(data.particles[0].electrons.divide(D(1776))).multiply(D(2))
   for(let i = 0; i < 2; i++)
    leptonsToGet[i] = leptonsToGet[i].times(quarkBoosts[5])

   for(let i = 0; i < quarkBoosts.length; i++) {
       quarkBoosts[i] = Decimal.sqrt(((Decimal.sqrt(data.particles[2].quarks[i]))))
       quarkBoosts[i] = quarkBoosts[i].sub(quarkBoosts[i].times(D(.5)))
       quarkBoosts[i] = D(1).plus(quarkBoosts[i])
   }
}
const particleDivisor = [D(1e4),D(5e3),D(1e3)]
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

    data.particles[1].muons = data.particles[1].muons.add(leptonsToGet[0])
    data.particles[1].taus = data.particles[1].taus.add(leptonsToGet[1])
    data.particles[0].electrons = D(0)
    data.previousSum = D(1)
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
    }
}

function buyLepton(a) {
    switch(a) {
        case 0:
            if(data.particles[0].electrons.lt(D(2.5e5)) || data.leptonUnlocks[a] === true) return 
            data.particles[0].electrons = data.particles[0].electrons.sub(D(2.5e5))
            data.leptonUnlocks[a] = true
            break
        case 1:
            if(data.particles[1].muons.lt(D(250)) || data.leptonUnlocks[a] === true) return 
            data.particles[1].muons = data.particles[1].muons.sub(D(250))
            data.leptonUnlocks[a] = true
            break
        case 2:
            if(data.particles[1].taus.lt(D(200)) || data.leptonUnlocks[a] === true) return 
            data.particles[1].taus = data.particles[1].taus.sub(D(200))
            data.leptonUnlocks[a] = true
            break
    }
}

function rip() {
    let sum = data.particles[0].protons.plus(data.particles[0].neutrons)
    sum = sum.divide(D(8))
    let ripParticleGain = [D(0),D(0)]

    for(let i = 0; i <= sum; i++) {
        let random = getRandomInt(8)
        if(random < 6)
            data.particles[2].quarks[random] = data.particles[2].quarks[random].plus(D(1))
        else 
            ripParticleGain[random - 6] = ripParticleGain[random - 6].plus(D(1))
    }

    data.particles[0].protons = ripParticleGain[0]
    data.particles[0].neutrons = ripParticleGain[1]
    data.previousSum = D(1)
}