for(let i = 0; i < 7; i++) {
    DOMCacheGetOrSet(`Auto${i}`).addEventListener('click', () => toggleAuto(i))
}

function toggleAuto(i) {
    data.autoActive[i] = !data.autoActive[i]
}



function automate() {
    if(data.research[0] && data.autoActive[0]) {
        purchaseElement(7)
        purchaseElement(6)
        purchaseElement(5)
        purchaseElement(4)
        purchaseElement(3)
        purchaseElement(2)
        purchaseElement(1)
        purchaseElement(0)
    }
    if(data.research[1] && data.autoActive[1]) {
        buyCompound(4)
        buyCompound(3)
        buyCompound(0)
        buyCompound(2)
        buyCompound(1)
        
    }
    if(data.research[2] && data.autoActive[2]) {
        purchasePowerUp(2)
        purchasePowerUp(1)
        purchasePowerUp(0)
    }
    if(data.research[3] && data.autoActive[3]) {
        purchaseMeltUp('m3')
        purchaseMeltUp('m2')
        purchaseMeltUp('m1')
    }
    if(data.research[4] && data.autoActive[4]) {
        if(data.leptonUnlocks[2])
            purchaseFuel(3)
        if(data.leptonUnlocks[1])
            purchaseFuel(2)
        if(data.leptonUnlocks[0])
            purchaseFuel(1)
        purchaseFuel(0)
    }
    if(data.research[5] && data.autoActive[5]) {
        if(!data.augments[0].unlocked[0])
            buyAugment(0,0)
        if(!data.augments[0].unlocked[1])
            buyAugment(0,1)
        if(!data.augments[0].unlocked[2])
            buyAugment(0,2)

        if(!data.augments[1].unlocked[0])
            buyAugment(1,0)
        if(!data.augments[1].unlocked[1])
            buyAugment(1,1)
        if(!data.augments[1].unlocked[2])
            buyAugment(1,2)
        
        if(!data.augments[2].unlocked[0])
            buyAugment(2,0)
        if(!data.augments[2].unlocked[1])
            buyAugment(2,1)
        if(!data.augments[2].unlocked[2])
            buyAugment(2,2)

        if(!data.leptonUnlocks[2])
            buyLepton(2)
        if(!data.leptonUnlocks[1])
            buyLepton(1)
        if(!data.leptonUnlocks[0])
            buyLepton(0)
    }
    if(data.research[10] && data.autoActive[6]) {
        if(data.fuel[0].gt(D(0)))
            fuelGenerator(0)
        if(data.fuel[1].gt(D(0)) && data.leptonUnlocks[0])
            fuelGenerator(1)
        if(data.fuel[2].gt(D(0)) && data.leptonUnlocks[1])
            fuelGenerator(2)
        if(data.fuel[3].gt(D(0)) && data.leptonUnlocks[2])
            fuelGenerator(3)
    }
}