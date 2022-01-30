let powerGain = D(0)
let powerBoosts = []
let powerLimit = D(100).plus(powerBoosts[1])
let powerCosts = [5,5,5]

function generatePower() {
    if(data.compounds[0].amt.lt(3) || data.compounds[1].amt.lt(1)) return

    data.power = data.power.plus(powerGain)
    data.compounds[0].amt = D(0)
    data.compounds[1].amt = D(0)

    if(data.power.gt(powerLimit))
        data.power = powerLimit
}

function updatePowerCosts() {
    for(let x = 0; x < 3; x++) {
        powerCosts[x] = D(5).plus(Decimal.pow(D(2), data.powerUps[x]) - 1)
    }
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
            if(data.elements[2].level.lt(powerCosts[1])) return

            data.compounds[2].amt = data.compounds[2].amt.sub(powerCosts[1])
            data.powerUps[1] = data.powerUps[1].plus(1)
            updatePowerCosts()
            }
            break;
    }
}