let radiationGain = [D(0),D(0),D(0)]

function updateRadiation() {
    radiationGain[0] = Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(data.corium.plus(data.particles[0].protons).plus(data.particles[0].neutrons)).divide(D(1e9))))
    radiationGain[1] = Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(data.corium.plus(data.particles[0].electrons)).divide(D(1e11))))
    radiationGain[2] = Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(data.corium).divide(D(1e13))))

    if(data.research[12])
        for(let i = 0; i < 3; i++)
            radiationGain[i] = radiationGain[i].times(D(2))
}

function irridiate() {
    
    for(let i = 0; i < 3; i++)
        data.radiationParticles[i] = data.radiationParticles[i].plus(radiationGain[i])
    
    data.particles[0].protons = D(0)
    data.particles[0].neutrons = D(0)
    data.particles[0].electrons = D(0)
    data.particles[1].muons = D(0)
    data.particles[1].taus = D(0)
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
                data.augments[i].unlocked[j] = false
                
        }
        if(data.research[8])
            data.augments[i].unlocked[0] = true
        data.leptonUnlocks[i] = false
    }
    for(let i = 0; i < 4; i++) {
        data.fuels[i] = D(0)
        data.fuelStored[i] = D(0)
    }
    for(let i = 0; i < 3; i++) {
        data.coriumMultUps[i] = D(0)
    }
    data.coriumMax = D(0)
    data.corium = D(0)
    
    for(let i = 0; i < 3; i++)
        data.powerUps[i] = D(0)
    data.powerStored = D(0)
    data.power = D(0)
    
    for(let i = 0; i < 5; i++)
        data.compounds[i].amt = D(0)

    for(let i = 7; i > -1; i--) {
        data.elements[i].level = D(0)
        data.elements[i].max = D(0)
        data.elements[i].amt = D(0)
        data.elementGain[i] = D(0)
    }
    data.hasIrridiated = true;
}
const researchCosts = [{alpha:D(10),beta:D(5),gamma:D(1)},{alpha:D(25),beta:D(10),gamma:D(5)},{alpha:D(50),beta:D(25),gamma:D(10)},{alpha:D(100),beta:D(75),gamma:D(25)},
{alpha:D(25),beta:D(10),gamma:D(5)},{alpha:D(125),beta:D(85),gamma:D(35)},{alpha:D(50),beta:D(25),gamma:D(10)},{alpha:D(100),beta:D(75),gamma:D(25)},
{alpha:D(500),beta:D(350),gamma:D(225)},{alpha:D(1.5e3),beta:D(550),gamma:D(325)},{alpha:D(1.25e3),beta:D(450),gamma:D(210)},{alpha:D(1e4),beta:D(1.25e3),gamma:D(500)},
{alpha:D(1.15e4),beta:D(1.3e3),gamma:D(950)},{alpha:D(1.5e4),beta:D(1.6e3),gamma:D(1.15e3)},{alpha:D(1.3e4),beta:D(1.15e3),gamma:D(1.05e3)},{alpha:D(2e4),beta:D(3.5e3),gamma:D(1.35e3)},]
const researchDescs = ['[1x1] - Unlock Element Purchase Automators','[1x2] - Unlock Compound Purchase Automators','[1x3] - Unlock Power Upgrade Purchase Automators','[1x4] - Unlock Melt Upgrade Automators',
'[1x5] - Unlock Refinery Purchase Automators', '[1x6] - Unlock Auto Augment & Lepton Purchase Automators', '[1x7] - Boost Hydrogen - Fluorine by ^1.05', '[1x8] - Boost Sulfur - Lead by ^1.10',
'[2x1] - Keep the first row of Augments Unlocked on Reset', '[2x2] - Remove the Power Limit Entirely', '[2x3] - Generator Fueling Automator / 2x Less Fuel Consumption', '[2x4] - Generate 1% of Corium Per Second',
'[2x5] - AAA not enough Radiation increase gain by 2x', '[2x6] - Unlock Quarks', '[2x7] - Hydrogen is the source of all boost it by ^2.00', '[2x8] - Unlock Challenges']

for(let i = 0; i < researchDescs.length; i++) {
    DOMCacheGetOrSet(`Re${i+1}`).addEventListener('mouseover', () => changeResearchDescription(i))
    DOMCacheGetOrSet(`Re${i+1}`).addEventListener('click', () => purchaseResearch(i))
}

function changeResearchDescription(i) {
    DOMCacheGetOrSet('researchDescText').innerHTML = `<hr>${researchDescs[i]}`
    DOMCacheGetOrSet('researchDescText').style.color = data.research[i] ? `#5b9042` : `#ac3232`
    DOMCacheGetOrSet('researchCostText').innerHTML = `Research Cost<hr>Alpha: ${format(researchCosts[i].alpha)}<br>Beta: ${format(researchCosts[i].beta)}<br>Gamma: ${format(researchCosts[i].gamma)}`
}

function purchaseResearch(i) {
    if(data.research[i] || data.radiationParticles[0].lt(researchCosts[i].alpha) || data.radiationParticles[1].lt(researchCosts[i].beta) || data.radiationParticles[2].lt(researchCosts[i].gamma)) return

    data.radiationParticles[0] = data.radiationParticles[0].sub(researchCosts[i].alpha)
    data.radiationParticles[1] = data.radiationParticles[1].sub(researchCosts[i].beta)
    data.radiationParticles[2] = data.radiationParticles[2].sub(researchCosts[i].gamma)

    data.research[i] = true
}