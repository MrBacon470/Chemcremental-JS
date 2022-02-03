
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
    

}


function splitElements() {
    if(sumOfElements.lte(data.previousSum)) return
    if(data.settingsToggles[2])
        if(!confirm('Are you sure you want to do this? It will reset all elements generators')) return

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