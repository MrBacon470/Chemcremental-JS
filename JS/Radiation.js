let radiationGain = [D(0),D(0),D(0)]

function updateRadiation() {
    radiationGain[0] = Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(data.corium.plus(data.particles[0].protons).plus(data.particles[0].neutrons)).divide(D(1e9))))
    radiationGain[1] = Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(data.corium.plus(data.particles[0].electrons)).divide(D(1e11))))
    radiationGain[2] = Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(data.corium).divide(D(1e13))))
}

function irridiate() {
    if(!data.coriumSingUps[2]) return
    for(let i = 0; i < 3; i++)
        data.radiationParticles[i] = data.radiationParticles[i].plus(radiationGain[i])
    
    data.particles[0].protons = data.particles[0].neutrons = data.particles[0].electrons = data.particles[1].muons = data.particles[1].taus = D(0)
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++)
            data.augments[i].unlocked[j] = false
        data.leptonUnlocks[i] = false
    }
    for(let i = 0; i < 4; i++) {
        data.fuels[i] = D(0)
        data.fuelStored[i] = D(0)
    }
        
        
}