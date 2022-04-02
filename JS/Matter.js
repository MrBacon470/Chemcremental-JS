let antiDisplayEffects = [D(0),D(0),D(0)]
let antimatterEffects = [D(0),D(0),D(0)]
let antimatterGain = D(0)
let matterGain = D(0)
let matterBoosts = [D(0),D(0),D(0)]
let darkEnergyGain = D(0)
let darkEnergyEffects = D(0)
let darkMatterGain = D(0)
let darkMatterEffects = [D(1),D(1),D(1),D(1),D(1)]
let strangeMatterGain = D(0)
let strangeMatterEffects = [D(1),D(1),D(0)]
const darkMatterScales = [D(0.01),D(0.15),D(0.025),D(0.015),D(0.001)]
const darkMatterCosts = [D(1e3),D(1e6),D(1e12),D(1e18),D(1e24)]
const darkMatterUpDesc = ['Decrease Antimatter Gain<br>Cost: 1.00 Kilogram','Boost Dark Energy Gain<br>Cost: 1.00 Megagram','Boost Dark Matter Gain<br>Cost: 1.00 Teragram','Boost Corium Gain<br>1.00 Exagram','Boost Element Gain<br>1.00 Yottagram']
const strangePillarCosts = [D(0),D(100),D(1e5),D(1e9),D(1e12)]
const strangePillarDesc = ['A̵c̸t̶i̶v̴a̶t̸e̶ ̸S̸t̸r̸a̸n̶g̴e̸ ̷M̶a̵t̷t̴e̷r̶ ̷P̵r̴o̶d̷u̵c̶t̶i̸o̶n̷','B̶̟̘̎o̴̞̿͝o̶͍̿͌ş̴͔͂t̵̮͑ ̷͕͙̿M̷̼͌̅a̴̱͋ṭ̶̫̅͐t̷̬͛e̶̹̹͒r̷͚̐͝ ̸̏͛͜ȧ̸̭̒n̸̼͌d̴̠̗͒ ̵̙͊̃D̴̖̞͊̀a̶̭̱͋̐r̴͉͒̿k̴͉̲̾ ̸̧̽̒M̵͇͊á̷̲͗t̸̙̫͝t̸̗͖͊e̵̼̜͌r̴͕̀͑ ̴̳̃G̵̼̦̽̏a̶̖͖̒i̴̘͙͗n̷̜̐','B̷̼͇̐̈́̍͝ô̵͍ò̶̕͜͠͝ṣ̴͍͈̓̚t̵̳̘̥͙́̾ ̴̟̘͖͂̽̍̆S̴̬͕͉̈t̵̮̲̮͔̅̄̃͌r̶̭͗̅̂a̶̝̽͊n̸̘̔ġ̵̰̱e̶̼͖̓̐ ̶̨͍́̃̈́M̴̡͓̙̅̒͌a̸̧̯͓̬͋̾͂̚t̸͇̰̔̌͗͝t̴̠̻͍̖͂̿̇͝e̴̘͆͆r̶̳̈́̆̐ ̶̛̮̩̫̐̃͘P̴̨̠̝͚̽r̶͔̫̈́͐o̶̡̩̼͌̓̈d̶͎̯̠̭͌̓͂̓u̴̹̼̱̍̚č̶̡̺̥̣ṫ̴̻͚͍̾͌̐͜ỉ̵͚̦͑̈́̋ͅõ̷̜̙̾͑͠n̷̶̛͉̲̥̦̹̭̏͒̑̿','Į̸̨̯͍̙͔͓̦̪̦̤̆̌̽̓͂̍͜͝ͅͅͅn̴͚̮̖̭̗̜̓̑̓̑̓̃̾̈̑́͜͠͠ͅc̷̛̟͛͆̉͒̄̓͂̒͋̈͘̚̕ṛ̵̡̘̳̳͙̺̮̘͔̰̙̬̈́̓̄́̏͑̾̔͑ẻ̷̮͎̮̏̌̓̍͌ȃ̷̠̠͈̬̲̯͂̕̚͜ş̴̩̣͌̔̂̐͛͗͊̔̐̕e̵̱̝̰̤̮̥̟̹̽͒͑̍͌͐́̅ͅ ̷̢̧̛̫͔̤͋̅̏͐́͛̂͐̈́̐͐̀͐̎͜c̶͎̠͉̦̩͈̣̺̾͒̇̐̎̈́̅̽͜͜͜o̷̡̨̥̬̥̖̝̱̒̇͝ͅͅr̸̢̧̟̜̠̩̬̠̜͔̞̪͉̫̂̊͐̈̚͝r̸̢̡̦̫̫̣̠͖͔̣̖̰̼̠͊̍̓͊̔̐̄̆͛̆u̵̞͔͗̎̾̀͘͜͠p̸̧̺̥̫̻͕̦̻̪̝̞̟̺̺̃̀͌̈́̑͛̈́̾͜͝͝t̸̨̞̣͓̫̼̙̻͋͒̍̒̓̀̽i̷̡̬̩̹̊͊̓o̴̢̘̠͔͈̤̽̽̏̃̍̔͛̒̑̃̔͜͝n̴̨̜̬̥̼̟̝̾̋͆̆͊͂̕̚ ̵̡͓͉͉̟̳̺̲͉̘̼̗̥͚̀̏͛i̶̢͔̦͉̙̰͖̱͕̱͚̹̼̓́̌͝͠ͅń̸̩̫͚̙̟̦̥̜̣͚̈́̓̀͆̄̌̀̎̌̃͘͜͜͠ţ̷̺̭͕͔̳͕̲̳̳̯̐̐́̑̊́̏͋͠ẻ̶̡̢͎̥͚̰̻̲̣̝͉͍͈̠̜̑͆̾̈́͂̂̈́̾͘͝r̴̢̯̲̠̩͉͎̻̙͎͊̊̆͆͗̿̓̊̈̇̈́̅͘͝ͅv̵̢̨̛͔̥̗̪̫̠̮̟̀͂͒̆͐̈̎̈̌̂͋̚͜͝ͅa̶̛̘͓̰͚͎̩̍̔̄͊̉̑̃ͅļ̵̟̗͙̑̇̋̚̕̕ͅ','G̵̡̛̗͇̻̗̲͕̭̰͚͙̥̭̫̹̯̦̠͉̜̳͍̯̼̻̯̼͎͙̯̻̹̪̞̼̓͐̐̑͋̃̚̕͘͜͜ǫ̷̡̧̢̢̨̛̜̪̻̹̫̬̼̬̟̺͉̙̹̻̘̟̤̭͎̥̩̳͍͔̖̭̪͍͕̦̼̰̳̖͍͉̙̘͌͌̄̏͑̎͂̀̐̆͊͗̐̎͆̄͗̓̑̐́̑̀̈̚͝͝͠ͅ ̴̢̛̛͈̻̺͚̦̲̺͙͉̦̦̹̲̝̼̼̱͍̼̩̪̦̘̩͔̖̺̤̜̪͕̳͒͛͗͆̑̂̐̍̇͐͆́̏́́́͊̓̓́̑̇̈́͆̇́͐̀̉̈̆̂̓̚͜͝͝͠͝͝ͅQ̶̢̲̣̝̞͎̝̗͙͕̭̖͌͊̆̆͂̀͌̎̉̒̍̍̿̊͛̊̾̚͘͜ữ̴̜̫̇̆͛͌́̆̈̃͗̂͠a̵̧̡̛͉̱̭̤̹͍̼͍̳̳̬̭͉̓̓̒̍̍̍̉̆̓̐͛̎͂͌͒̄̇́̌̽͛͑̀̈́̀́͛́͑͐̚̚͘̚̕͜͝͝ͅņ̶̢̡̳͔̮̬͎͓̫͕̮͍̬͖̻͍̻̣̪̔̍͐̑́͒̆͆̎̕̚ͅt̵̰̻̐̎̊̓̆̅͠ų̸̨̛̙̪̹̼͈̹͍̟̣̥͎̈̍̈͑̏͋́̆̒͒̅̌̆̆̏͛͗̾̒̉̆̆͆̅͛̏̒̐̇̒̕͜͝͝͝͝͝m̴̧̻̰̝̯͔̙̻̰͚̯̰̭̔̉̉̽̋́̓̑̒̃͌́̈́̄̇͝͠ͅ']
function updateMatter() {
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    antimatterGain = data.hasTab[6] && sumOfElements.gte(D(1e140)) ? Decimal.sqrt(Decimal.sqrt(Decimal.sqrt(sumOfElements.divide(D(1e140))))) : D(0)
    if(data.hasTab[6] && sumOfElements.gte(D(1e140))) {
        antimatterGain = antimatterGain.times(D(1).divide(darkMatterEffects[0]))
    }
    matterGain = sumOfElements.lt(D(1e120)) ? D(0) : Decimal.sqrt(Decimal.sqrt(sumOfElements.divide(D(1e115))))
    matterGain = matterGain.times(strangeMatterEffects[0])

    darkMatterGain = data.darkEnergy.gt(D(0)) && data.matter[1].gt(D(0)) ? (data.matter[0].sub(data.matter[1])).times((data.darkEnergy).divide((data.matter[0].sub(data.matter[1]).mul(D(0.35))))) : D(0)
    darkMatterGain = darkMatterGain.times(darkMatterEffects[2])
    darkMatterGain = darkMatterGain.times(strangeMatterEffects[0])

    darkEnergyGain = Decimal.sqrt(Decimal.sqrt(data.power)).times(D(0.5))
    darkEnergyGain = darkEnergyGain.times(darkMatterEffects[1])
    
    if(data.pillarUnlocked[0]) {
        strangeMatterGain = D(1).plus(Decimal.sqrt(data.matter[1].divide(1e15)))
        strangeMatterGain = Decimal.pow(strangeMatterGain, strangeMatterEffects[1])
        data.matter[3] = data.matter[3].plus(strangeMatterGain.times(diff))
    }
    strangeMatterEffects[0] = data.pillarUnlocked[1] ? D(10) : D(1)
    strangeMatterEffects[1] = data.pillarUnlocked[2] ? D(2) : D(1)
    strangeMatterEffects[2] = data.pillarUnlocked[3] ? D(150) : D(0)

    for(let i = 0; i < 5; i++) 
        darkMatterEffects[i] = data.darkUpUnlocked[i] ? D(1).plus(Decimal.sqrt(data.matter[2]).times(darkMatterScales[i])) : D(1)
    if(data.matterUnlocked[0]) {
        data.darkEnergy = data.darkEnergy.plus(darkEnergyGain)
    }
    if(data.hasTab[6] && sumOfElements.gte(D(1e140))) {
        data.matter[1] = data.matter[1].plus(antimatterGain.times(diff))
    }
}

function consolidate() {
    data.matter[0] = data.matter[0].plus(matterGain)

    for(let i = 0; i < 3; i++) {
        data.coriumMultUps[i] = D(0)
    }
    
    data.coriumMax = D(0)
    data.corium = D(0)
    
    for(let i = 0; i < 5; i++)
        data.compounds[i].amt = D(0)

    for(let i = 7; i > -1; i--) {
        data.elements[i].level = D(0)
        data.elements[i].max = D(0)
        data.elements[i].amt = D(0)
        data.elementGain[i] = D(0)
    }
}

function darken() {
    consolidate()
    data.matter[2] = data.matter[2].plus(darkMatterGain)
    data.matter[0] = data.matter[1] = data.darkEnergy = D(0)
}

function purchaseDarkUp(i) {
    if(data.matter[2].lt(darkMatterCosts[i]) && !data.darkUpUnlocked[i]) return
    data.matter[2] = data.matter[2].sub(darkMatterCosts[i])
    data.darkUpUnlocked[i] = true
}

function purchasePillar(i) {
    if(data.matter[3].lt(strangePillarCosts[i]) && !data.pillarUnlocked[i]) return
    data.matter[3] = data.matter[3].sub(strangePillarCosts[i])
    data.pillarUnlocked[i] = true
}