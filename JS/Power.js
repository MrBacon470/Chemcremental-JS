let powerGain = D(0)
let powerLimit = D(100).plus(10 * data.powerUps[1])

function generatePower() {
    if(data.compounds[0].lt(3) || data.compounds[1].lt(1)) return

    data.power = power.plus(powerGain)
    data.compounds[0] = D(0)
    data.compounds[1] = D(0)

    if(data.power.gt(powerLimit))
        data.power = powerLimit
}