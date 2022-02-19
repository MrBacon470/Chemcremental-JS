let radiationGain = [D(0),D(0),D(0)]

function updateRadiation() {
    radiationGain[0] = Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(data.corium.plus(data.particles[0].protons).plus(data.particles[0].neutrons)).divide(D(1e9))))
    radiationGain[1] = Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(data.corium.plus(data.particles[0].electrons)).divide(D(1e11))))
    radiationGain[2] = Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(data.corium).divide(D(1e13))))
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
        for(let j = 0; j < 3; j++)
            data.augments[i].unlocked[j] = false
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
}