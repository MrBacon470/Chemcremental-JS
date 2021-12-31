let powerGain = D(0)
let powerLimit = D(100).plus(10 * data.powerUps[1])

function generatePower() {
    if(data.compounds[0].amt.lt(3) || data.compounds[1].amt.lt(1)) return

    data.power = data.power.plus(powerGain)
    data.compounds[0].amt = D(0)
    data.compounds[1].amt = D(0)

    if(data.power.gt(powerLimit))
        data.power = powerLimit
}