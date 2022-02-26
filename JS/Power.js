let powerGain = D(0)
let powerBoosts = []
let powerLimit = D(100).plus(powerBoosts[1])
let powerCosts = [D(5),D(5),D(5)]

function generatePower() {
    if(data.compounds[0].amt.lt(3) || data.compounds[1].amt.lt(1)) return

    data.power = data.power.plus(powerGain)
    if(data.research[9] === false)
        if(powerGain.gt(powerLimit))
            data.powerStored = data.powerStored.plus(powerGain.minus(powerLimit))
    data.compounds[0].amt = D(0)
    data.compounds[1].amt = D(0)

    if(data.power.gt(powerLimit) && data.research[9] === false)
        data.power = powerLimit
}
let percentUse = D(0)
function updatePowerCosts() {
    if(data.research[9] === false) {
        if(data.power.lt(powerLimit) && data.powerStored.gt(D(0))) {
            let powerNeeded = powerLimit.minus(data.power)
            data.power = data.power.plus(data.powerStored)
            if(data.power.gt(powerLimit))
                data.power = powerLimit
            data.powerStored = data.powerStored.minus(powerNeeded)
        }
        if(data.powerStored.lt(D(0)))
            data.powerStored = D(0)
    }
    else {
        if(data.powerStored.gt(D(0))) {
            data.power = data.power.plus(data.powerStored)
            data.powerStored = D(0)
        }
            
    }
    for(let x = 0; x < 3; x++) {
        powerCosts[x] = D(5).plus(Decimal.pow(D(2), data.powerUps[x]) - 1)
    }
    if(data.buyAmounts[6] === 0.1)
        percentUse = D(0.1)
    else if(data.buyAmounts[6] === 0.25)
        percentUse = D(0.25)
    else if(data.buyAmounts[6] === 0.5)
        percentUse = D(0.5)
    else if(data.buyAmounts[6] === 1)
        percentUse = D(1.0)

   
        
    
    
}

function fuelGenerator(i) {
    if(data.fuels[i].gt(D(0)))
    data.fuelStored[i] = data.fuelStored[i].plus(data.fuels[i].times(percentUse))
    data.fuels[i] = data.fuels[i].minus(data.fuels[i].times(percentUse))
}

function purchasePowerUp(i) {
    switch(i) {
        case 0:
            for(let x = 0; x < data.buyAmounts[3]; x++){
            if(data.power.lt(powerCosts[0])) return

            data.power = data.power.sub(powerCosts[0])
            data.powerUps[0] = data.powerUps[0].plus(1)
            updatePowerCosts()
            }
            break;
        case 1:
            for(let x = 0; x < data.buyAmounts[3]; x++){
            if(data.compounds[2].amt.lt(powerCosts[1])) return

            data.compounds[2].amt = data.compounds[2].amt.sub(powerCosts[1])
            data.powerUps[1] = data.powerUps[1].plus(1)
            updatePowerCosts()
            }
            break;
        case 2:
            for(let x = 0; x < data.buyAmounts[3]; x++){
            if(data.elements[7].level.lt(powerCosts[2])) return

            data.elements[7].level = data.elements[7].level.sub(powerCosts[2])
            data.powerUps[2] = data.powerUps[2].plus(1)
            updatePowerCosts()
            }
            break;
    }
}