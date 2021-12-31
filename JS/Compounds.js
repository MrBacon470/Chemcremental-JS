function buyCompound(i) {
    for(let x = 0; x < data.buyAmounts[1]; x++) {
    switch(i) {
        case 0:
            if(data.elements[1].level.gte(3) && data.elements[0].level.gte(8)) {
                data.elements[1].level = data.elements[1].level.sub(3)
                data.elements[0].level = data.elements[0].level.sub(8)
                data.compounds[i].amt = data.compounds[i].amt.add(1)
            }
        break
        case 1:
            if(data.elements[2].level.gte(1) && data.elements[0].level.gte(2)) {
                data.elements[2].level = data.elements[2].level.sub(1)
                data.elements[0].level = data.elements[0].level.sub(2)
                data.compounds[i].amt = data.compounds[i].amt.add(1)
            }
        break
        case 2:
            if(data.elements[2].level.gte(4) && data.elements[0].level.gte(2) && data.elements[4].level.gte(1)) {
                data.elements[2].level = data.elements[2].level.sub(4)
                data.elements[0].level = data.elements[0].level.sub(2)
                data.elements[4].level = data.elements[4].level.sub(1)
                data.compounds[i].amt = data.compounds[i].amt.add(1)
            }
        break
        case 3:
            if(data.elements[6].level.gte(1) && data.elements[1].level.gte(1)) {
                data.elements[6].level = data.elements[6].level.sub(1)
                data.elements[1].level = data.elements[1].level.sub(1)
                data.compounds[i].amt = data.compounds[i].amt.add(1)
            }
        break
        case 4:
            if(data.elements[5].level.gte(1) && data.elements[3].level.gte(3)) {
                data.elements[5].level = data.elements[5].level.sub(1)
                data.elements[3].level = data.elements[3].level.sub(3)
                data.compounds[i].amt = data.compounds[i].amt.add(1)
            }
            break
        }
    }
}