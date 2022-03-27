// region element declarations
let elementSum = D(0)
const elementButtons = []
const isotopeButtons = []
const elementNames = ['Hydrogen','Carbon','Oxygen','Fluorine','Sulfur','Chlorine','Iron','Lead']
const isotopeIds = ['Hydrogen3','Carbon14','Oxygen15','Fluorine18','Sulfur35','Chlorine37','Iron60','Lead212',]
const shortElement = ['H','C','O','F','S','Cl','Fe','Pb']
const compoundButtons = []
const compoundCostStr = ['C3-H8','H2-O','H2-S-O4','Fe-C','Cl-F3']
const compoundBoost = ['Element Boost: ','Power Boost: ','Battery Boost: ','Lead Boost: ','Melt Boost: ']
for (let i=0; i<8; i++){
    elementButtons[i] = DOMCacheGetOrSet(`${elementNames[i]}`)
    isotopeButtons[i] = DOMCacheGetOrSet(`${isotopeIds[i]}`)
}
for(let i = 0; i < 5; i++) {
    compoundButtons[i] = DOMCacheGetOrSet(`${data.compounds[i].name}`)
}
const tabs = []
const tabIDs = ['cB','pB','mB','rB','acB']
for(let i=0; i < 5; i++) {
    tabs[i] = DOMCacheGetOrSet(`${tabIDs[i]}`)
}
const tabNames = ['Compounds','Power','Melting','Refinery','Particles']
//Power & Melting
const powerUpButton = []
for(let i=0; i < 3; i++)
    powerUpButton[i] = DOMCacheGetOrSet(`pu${i+1}`)
const coriumMultDesc =['Increase Atom Production by 4x','Increase Compounds Created by 1.25x','Increase Corium Produced on Melt']
const coriumSingDesc = ['Unlock The Refinery<br>Cost: 1.00e10 Corium','Unlock Particles<br>Cost: 1.00e15 Corium','Unlock Radiation<br>Cost: 1.00e38 Corium']
//'Unlock Passive Power Production<br>Cost: 1.00e15 Corium','Radition Not Implemented'
// Refinery Area
const refineryIDs = ['shard', 'mold', 'mint']
const refineryNames = ['Sharding','Molding','Minting']
const refineryDescriptions = ['Produces Kuaka Shards','Produces Kuaka Fragments','Produces Kuaka Coins']
const currencyNames = ['Shards','Fragments','Coins']
//Accelerator stuf
const romanNumerals = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI']
const augmentBoostNames = [{name:['Element','Lead','Compound']},{name:['Melt Gain','4x Production Upgrade','Compound Creation Upgrade']},{name:['Power Gain','Refinery Creation','Generator Production']}]
const particleTexts = []
const particleTextIds = ['protonsText','neutronsText','electronsText']
const particleNames = ['Protons', 'Neutrons', 'Electrons']
for(let i = 0; i < 3; i++)
    particleTexts[i] = document.getElementById(`${particleTextIds[i]}`)
    const protonGainText = document.getElementById('protonGain')
    const neutronGainText = document.getElementById('neutronGain')
    const electronGainText = document.getElementById('electronGain')
let currencyDisplayIndex = 0
function updateHTML(){
    for(let i = 0; i < 5; i++) {
        tabs[i].innerHTML = data.hasTab[i] ? tabNames[i] : '???'
    }
    DOMCacheGetOrSet('radB').style.display = !data.coriumSingUps[2] ? 'none' : 'inline'
    DOMCacheGetOrSet('matB').style.display = !data.hasTab[6] ? 'none' : 'inline'
    sumOfElements = data.elements[0].amt.plus(data.elements[1].amt.plus(data.elements[2].amt.plus(data.elements[3].amt.plus(data.elements[4].amt.plus(data.elements[5].amt.plus(data.elements[6].amt.plus(data.elements[7].amt)))))))
    //Power Text
    if(!data.research[9]) {
        DOMCacheGetOrSet('powerText').innerHTML = `${formatPrefix(data.power,'Watts')} / ${formatPrefix(powerLimit,'Watts')} | Excess: ${formatPrefix(data.powerStored, 'Watts')}<br>${formatPrefix(genGain[0].plus(genGain[1]).plus(genGain[2]).plus(genGain[3]),'Watts')}/s`
    }
    else
        DOMCacheGetOrSet('powerText').innerHTML = `${formatPrefix(data.power, 'Watts')} | ${formatPrefix(genGain[0].plus(genGain[1]).plus(genGain[2]).plus(genGain[3]),'Watts')}/s`
    //Corium
    DOMCacheGetOrSet('coriumText').innerHTML = `Corium: ${format(data.corium)} [${format(coriumBoost)}x]`
    DOMCacheGetOrSet('challengeStatusHolder').style.display = data.hasIrridiated ? 'flex' : 'none'
    for(let i = 0; i < data.buyAmounts.length; i++)
        DOMCacheGetOrSet(`bA${i}`).innerHTML = i !== 6 ? `Buy Amount<br>${data.buyAmounts[i]}` : `Fuel Percent Used<br>${data.buyAmounts[i]*100.0}%`
        //Different Header Texts
        
        
    if(data.currentTab === 0) {
        DOMCacheGetOrSet('toggle1').innerHTML = data.settingsToggles[0] ? 'Melting Confirmation [ON]' : 'Melting Confirmation [OFF]'
        DOMCacheGetOrSet('toggle2').innerHTML = data.settingsToggles[1] ? 'Enable Offline Progress [ON]' : 'Enable Offline Progress [OFF]'
        DOMCacheGetOrSet('toggle3').innerHTML = data.settingsToggles[2] ? 'Splitter Confirmation [ON]' : 'Splitter Confirmation [OFF]'
        DOMCacheGetOrSet('toggle4').innerHTML = data.settingsToggles[3] ? 'Shatter Confirmation [ON]' : 'Shatter Confirmation [OFF]'
        DOMCacheGetOrSet('toggle5').innerHTML = data.settingsToggles[4] ? 'Irridiate Confirmation [ON]' : 'Irridiate Confirmation [OFF]'
        DOMCacheGetOrSet('toggle6').innerHTML = data.settingsToggles[5] ? 'Ripper Confirmation [ON]' : 'Ripper Confirmation [OFF]'
        DOMCacheGetOrSet('toggle7').innerHTML = data.settingsToggles[6] ? 'Consolidate Confirmation [ON]' : 'Consolidate Confirmation [OFF]'
        DOMCacheGetOrSet('toggle8').innerHTML = data.settingsToggles[7] ? 'Darken Confirmation [ON]' : 'Darken Confirmation [OFF]'
        if(data.currentSubTab[2] === 3) {
            DOMCacheGetOrSet('midGameHelp').style.display = data.hasTab[3] ? 'block' : 'none'
            DOMCacheGetOrSet('lateGameHelp').style.display = data.research[15] ? 'block' : 'none'
        }
    }
    else if (data.currentTab === 1) {
        document.getElementById('RaE').style.display = data.hasIrridiated ? 'inline' : 'none'
        document.getElementById('ReE').style.display = data.hasIrridiated ? 'inline' : 'none'
        if(data.currentSubTab[0] === 0) {
            for(let i = 0;i < 8;i++) {
                if(i == 0)
                    elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]})<br>Cost: ${format(elementCost[i])} Hydrogen | Level:${format(data.elements[i].level)}`
                else if(i == 1)
                    elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | ${format(D(1).add(Decimal.sqrt(data.elements[i].max)))}x)<br>Cost: ${format(elementCost[i])} Hydrogen | Level:${format(data.elements[i].level)}`
                else
                    elementButtons[i].innerHTML = `${data.elements[i].name}  Generator (${format(data.elements[i].amt)} ${shortElement[i]} | ${format(D(1).add(Decimal.sqrt(data.elements[i].max)))}x)<br>Cost: ${format(elementCost[i])} ${data.elements[i - 1].name} | Level:${format(data.elements[i].level)}`
            }

            DOMCacheGetOrSet('Auto0').style.display = data.research[0] ? 'inline' : 'none'
            DOMCacheGetOrSet('Auto0').innerHTML = data.autoActive[0] ? `Automators: [ON]` : `Automators: [OFF]`
            DOMCacheGetOrSet('Auto0').style.borderColor = data.autoActive[0] ? '#438043' : '#963a2e'
        }
        else if(data.currentSubTab[0] === 1) {
            for(let i = 0;i < 8;i++) {
                if(i == 0)
                    isotopeButtons[i].innerHTML = `${data.isotopes[i].name}  Generator (${format(data.isotopes[i].amt)} ${data.isotopes[i].name} | ${format(D(1).add(Decimal.sqrt(data.isotopes[i].max)))}x)<br>Cost: ${format(isotopeCost[i])} Lead | Level:${format(data.isotopes[i].level)}`
                else
                isotopeButtons[i].innerHTML = `${data.isotopes[i].name}  Generator (${format(data.isotopes[i].amt)} ${data.isotopes[i].name} | ${format(D(1).add(Decimal.sqrt(data.isotopes[i].max)))}x)<br>Cost: ${format(isotopeCost[i])} ${data.isotopes[i - 1].name} | Level:${format(data.isotopes[i].level)}`
            }
        }
    }
    else if(data.currentTab === 2) {
        //Moved
    }
    else if(data.currentTab === 3) {
        for(let i = 0; i < 5; i++) {
            compoundButtons[i].innerHTML = `${data.compounds[i].name}<br>${compoundCostStr[i]}<br>Total: ${format(data.compounds[i].amt)}<br>${compoundBoost[i]} ${format(compoundBoosts[i])}x`
        }
        DOMCacheGetOrSet('Auto1').style.display = data.research[1] ? 'inline' : 'none'
        DOMCacheGetOrSet('Auto1').innerHTML = data.autoActive[1] ? `Automators: [ON]` : `Automators: [OFF]`
        DOMCacheGetOrSet('Auto1').style.borderColor = data.autoActive[1] ? '#438043' : '#963a2e'
    }
    else if(data.currentTab === 4) {
        DOMCacheGetOrSet('gA').style.display = data.coriumSingUps[0] === true ? 'inline' : 'none'
        if(data.currentSubTab[3] === 0) {
            DOMCacheGetOrSet('generator').innerHTML = data.compounds[1].amt.gte(1) && data.compounds[0].amt.gte(3) ? `Generate Power<br>+${formatPrefix(powerGain, 'Watts')}` : "Generate Power<br>Req: 3 Propane + 1 Water"
            powerUpButton[0].innerHTML = `Super Charge<br>Increase Atom Production by ${format(D(2).times(darkEnergyEffects[1]))}x<br>Cost: ${formatPrefix(powerCosts[0], 'Watts')}<br>Level: ${format(data.powerUps[0])}`
            powerUpButton[1].innerHTML = `Battery<br>Increase Power Capacity by 10<br>Cost: ${format(powerCosts[1])} Sulfuric Acid<br>Level: ${format(data.powerUps[1])}`
            powerUpButton[2].innerHTML = `Heat Shields<br>Increase Power Production by 1.5x<br>Cost: ${format(powerCosts[2])} Lead Gens<br>Level: ${format(data.powerUps[2])}`

            DOMCacheGetOrSet('Auto2').style.display = data.research[2] ? 'inline' : 'none'
            DOMCacheGetOrSet('Auto2').innerHTML = data.autoActive[2] ? `Automators: [ON]` : `Automators: [OFF]`
            DOMCacheGetOrSet('Auto2').style.borderColor = data.autoActive[2] ? '#438043' : '#963a2e'
        }
        else if(data.currentSubTab[3] === 1) {
            DOMCacheGetOrSet('coalGenHolder').style.display = data.leptonUnlocks[0] === true ? 'flex' : 'none'
            DOMCacheGetOrSet('petroleumGenHolder').style.display = data.leptonUnlocks[1] === true ? 'flex' : 'none'
            DOMCacheGetOrSet('gasGenHolder').style.display = data.leptonUnlocks[2] === true ? 'flex' : 'none'

            DOMCacheGetOrSet('methaneFuel').innerHTML = data.fuelStored[0].gt(D(0)) ? `Fuel: ${format(data.fuelStored[0])} Methane<br>${formatPrefix(genGain[0], 'Watts')}/s` : `Fuel: ${format(data.fuelStored[0])} Methane<br>0.00 Watts/s`
            DOMCacheGetOrSet('coalFuel').innerHTML = data.fuelStored[1].gt(D(0)) ? `Fuel: ${format(data.fuelStored[1])} Coal<br>${formatPrefix(genGain[1], 'Watts')}/s` : `Fuel: ${format(data.fuelStored[1])} Coal<br>0.00 Watts/s`
            DOMCacheGetOrSet('petroleumFuel').innerHTML = data.fuelStored[2].gt(D(0)) ? `Fuel: ${format(data.fuelStored[2])} Petroleum<br>${formatPrefix(genGain[2], 'Watts')}/s` : `Fuel: ${format(data.fuelStored[2])} Petroleum<br>0.00 Watts/s`
            DOMCacheGetOrSet('gasFuel').innerHTML = data.fuelStored[3].gt(D(0)) ? `Fuel: ${format(data.fuelStored[3])} Natural Gas<br>${formatPrefix(genGain[3], 'Watts')}/s` : `Fuel: ${format(data.fuelStored[3])} Natural Gas<br>0.00 Watts/s`

            DOMCacheGetOrSet('Auto6').style.display = data.research[10] ? 'inline' : 'none'
            DOMCacheGetOrSet('Auto6').innerHTML = data.autoActive[6] ? `Automators: [ON]` : `Automators: [OFF]`
            DOMCacheGetOrSet('Auto6').style.borderColor = data.autoActive[6] ? '#438043' : '#963a2e'
        }
    }
    else if(data.currentTab === 5) {
        
        DOMCacheGetOrSet('meltDown').innerHTML = sumOfElements >= 1e8 ? `Melt Down<br>Create +${format(coriumToGet)}<br>Corium` : "Melt Down<br>Requires 1e8<br>Total Elements"
        for(let i = 0; i < 3; i++) {
            DOMCacheGetOrSet(`cm${i+1}`).innerHTML = `${coriumMultDesc[i]}<br>Cost: ${format(coriumMultCosts[i])} Corium<br>Level: ${format(data.coriumMultUps[i])}`
            DOMCacheGetOrSet(`cs${i+1}`).innerHTML = data.coriumSingUps[i] ? 'Unlocked' : `${coriumSingDesc[i]}`
        }
        DOMCacheGetOrSet('Auto3').style.display = data.research[3] ? 'inline' : 'none'
        DOMCacheGetOrSet('Auto3').innerHTML = data.autoActive[3] ? `Automators: [ON]` : `Automators: [OFF]`
        DOMCacheGetOrSet('Auto3').style.borderColor = data.autoActive[3] ? '#438043' : '#963a2e'
    }
    else if(data.currentTab === 6) {
       DOMCacheGetOrSet('Methane').innerHTML = `Methane<br>C-H4<br>Total ${format(data.fuels[0])}`
       DOMCacheGetOrSet('Coal').innerHTML = `Coal<br>C12-H6-O<br>Total ${format(data.fuels[1])}`
       DOMCacheGetOrSet('Petroleum').innerHTML = `Petroleum<br>C15-H28<br>Total ${format(data.fuels[2])}`
       DOMCacheGetOrSet('Natural Gas').innerHTML = `Natural Gas<br>C10-H28-O2-S<br>Total ${format(data.fuels[3])}`

       DOMCacheGetOrSet('Auto4').style.display = data.research[4] ? 'inline' : 'none'
       DOMCacheGetOrSet('Auto4').innerHTML = data.autoActive[4] ? `Automators: [ON]` : `Automators: [OFF]`
       DOMCacheGetOrSet('Auto4').style.borderColor = data.autoActive[4] ? '#438043' : '#963a2e'
    }
    else if(data.currentTab === 7) {
        particleTexts[0].innerHTML = `${format(data.particles[0].protons)} ${particleNames[0]}(+)`
        particleTexts[1].innerHTML = `${format(data.particles[0].neutrons)} ${particleNames[1]}(0)`
        particleTexts[2].innerHTML = `${format(data.particles[0].electrons)} ${particleNames[2]}(e<sup style="color:${bodyStyles.getPropertyValue(`--electron-color`)}">-</sup>)`
        DOMCacheGetOrSet('lpA').style.display = data.augments[2].unlocked[0] === true ? 'inline' : 'none'
        DOMCacheGetOrSet('quA').style.display = data.research[13] ? 'inline' : 'none'
        if(data.currentSubTab[1] === 0) {
            DOMCacheGetOrSet('gainMult').innerHTML = `${format(gainMult)}x more to gain`
            protonGainText.innerHTML = `+${format(data.particlesToGet[0])} Protons`
            neutronGainText.innerHTML = `+${format(data.particlesToGet[1])} Neutrons`
            electronGainText.innerHTML = `+${format(data.particlesToGet[2])} Electrons`
            DOMCacheGetOrSet('splitImage').style.backgroundColor = gainMult.gt(D(1)) ? '#379337' : '#934237'
        }
        else if(data.currentSubTab[1] === 1) {
                
                for(let i = 0; i < 3; i++) {
                    DOMCacheGetOrSet(`proAug${i+1}`).innerHTML = data.augments[0].unlocked[i] === false ? `Augment ${romanNumerals[i]}<br><br>Cost: ${format(augmentCosts[i])} Protons` : `Augment ${romanNumerals[i]}<br><br>${augmentBoostNames[0].name[i]} Boost: ${format(augmentBoosts[0].boost[i])}x`
                    DOMCacheGetOrSet(`neuAug${i+1}`).innerHTML = data.augments[1].unlocked[i] === false ? `Augment ${romanNumerals[i]}<br><br>Cost: ${format(augmentCosts[i])} Neutrons` : `Augment ${romanNumerals[i]}<br><br>${augmentBoostNames[1].name[i]} Boost: ${format(augmentBoosts[1].boost[i])}x`
                    DOMCacheGetOrSet(`eleAug${i+1}`).innerHTML = data.augments[2].unlocked[i] === false ? `Augment ${romanNumerals[i]}<br><br>Cost: ${format(augmentCosts[i])} Electrons` : `Augment ${romanNumerals[i]}<br><br>${augmentBoostNames[2].name[i]} Boost: ${format(augmentBoosts[2].boost[i])}x`
                }
                DOMCacheGetOrSet('Auto5').style.display = data.research[5] ? 'inline' : 'none'
                DOMCacheGetOrSet('Auto5').innerHTML = data.autoActive[5] ? `Automators: [ON]` : `Automators: [OFF]`
                DOMCacheGetOrSet('Auto5').style.borderColor = data.autoActive[5] ? '#438043' : '#963a2e'
        }
        else if(data.currentSubTab[1] === 2) {
                DOMCacheGetOrSet('muonsText').innerHTML = `${format(data.particles[1].muons)} Muons(μ<sup style="color: ${bodyStyles.getPropertyValue(`--muon-color`)}">-</sup>)`
                DOMCacheGetOrSet('tausText').innerHTML = `${format(data.particles[1].taus)} Taus(τ<sup style="color: ${bodyStyles.getPropertyValue(`--tau-color`)}">-</sup>)`
                DOMCacheGetOrSet('shatterImage').style.backgroundColor = data.particles[0].electrons.gte(D(1e5)) ? '#379337' : '#934237'
                DOMCacheGetOrSet('shatterGainText').innerHTML = `+${format(leptonsToGet[0])} Muons<br>+${format(leptonsToGet[1])} Taus<br><br>`

                DOMCacheGetOrSet('lepUnlock1').innerHTML = data.leptonUnlocks[0] === true ? `Unlocked<br>No Extra Boost` : `Unlock Coal Generator<br>Cost: 250,000 Electrons`
                DOMCacheGetOrSet('lepUnlock2').innerHTML = data.leptonUnlocks[1] === true ? `Unlocked<br>Power Capacity Buff: ${format(leptonBoost[0])}x` : `Unlock Petroleum Generator<br>Cost: 250 Muons`
                DOMCacheGetOrSet('lepUnlock3').innerHTML = data.leptonUnlocks[2] === true ? `Unlocked<br>Fuel Production Buff: ${format(leptonBoost[1])}x` : `Unlock Natural Gas Generator<br>Cost: 100 Taus`
        }
        else if(data.currentSubTab[1] === 3) {
            //row1
                DOMCacheGetOrSet('upQuark').innerHTML = `${format(data.particles[2].quarks[0])} Up Quarks (Hydrogen ${format(quarkBoosts[0])}x)`
                DOMCacheGetOrSet('charmQuark').innerHTML = `${format(data.particles[2].quarks[1])} Charm Quarks (Compound Boost ${format(quarkBoosts[1])}x)`
                DOMCacheGetOrSet('topQuark').innerHTML = `${format(data.particles[2].quarks[2])} Top Quarks (Particle Gain ${format(quarkBoosts[2])}x)`
            //row2
                DOMCacheGetOrSet('downQuark').innerHTML = `${format(data.particles[2].quarks[3])} Down Quarks (Lead ${format(quarkBoosts[3])}x)`
                DOMCacheGetOrSet('strangeQuark').innerHTML = `${format(data.particles[2].quarks[4])} Strange Quarks (Refinery Gain ${format(quarkBoosts[4])}x)`
                DOMCacheGetOrSet('bottomQuark').innerHTML = `${format(data.particles[2].quarks[5])} Bottom Quarks (Lepton Gain ${format(quarkBoosts[5])}x)`
                
                DOMCacheGetOrSet('ripperImage').style.backgroundColor = (data.particles[0].protons.plus(data.particles[0].neutrons)).gte(D(5e4)) ? '#379337' : '#934237'
                let sum = data.particles[0].protons.plus(data.particles[0].neutrons)
                DOMCacheGetOrSet('ripInfo').innerHTML = sum.lt(D(1e10)) ? `Ripper<br>Requires at least<br>50,000 Protons and Neutrons combined<br><i style="font-size:xx-small;">This is definitely not scientifically accurate</i>` : `Ripper<br>Requires at least<br>50,000 Protons and Neutrons combined<br>Due to your particle amount Quark Gain has been Softcapped<br><i style="font-size:xx-small;">This is definitely not scientifically accurate</i>`
        }
    }
    else if(data.currentTab === 8) {
        DOMCacheGetOrSet('chlA').style.display = data.research[15] ? 'inline' : 'none'
        DOMCacheGetOrSet('alphaText').innerHTML = `${format(data.radiationParticles[0])} Alpha Radiation`
        DOMCacheGetOrSet('betaText').innerHTML = `${format(data.radiationParticles[1])} Beta Radiation`
        DOMCacheGetOrSet('gammaText').innerHTML = `${format(data.radiationParticles[2])} Gamma Radiation`
        if(data.currentSubTab[4] === 0) {
            DOMCacheGetOrSet('irridiateImage').style.backgroundColor = data.corium.gte(D(1e38)) ? '#438043' : '#963a2e'
            DOMCacheGetOrSet('alphaGainText').innerHTML = `+${format(radiationGain[0])} Alpha Radiation` 
            DOMCacheGetOrSet('betaGainText').innerHTML = `+${format(radiationGain[1])} Beta Radiation` 
            DOMCacheGetOrSet('gammaGainText').innerHTML = `+${format(radiationGain[2])} Gamma Radiation` 
        }
        if(data.currentSubTab[4] === 1) {
            for(let i = 0; i < researchDescs.length; i++)
                DOMCacheGetOrSet(`Re${i+1}`).style.backgroundColor = data.research[i] ? '#ffffff' : 'none'
        }
    }
    else if(data.currentTab === 9) {
        DOMCacheGetOrSet('darA').style.display = data.matterUnlocked[0] ? `inline` : `none`
        DOMCacheGetOrSet('strA').style.display = data.matterUnlocked[1] ? `inline` : `none`
        if(data.currentSubTab[5] === 0) {
            DOMCacheGetOrSet('matterText').innerHTML = `You have ${formatPrefix(data.matter[0],'Grams')} of Matter`
            DOMCacheGetOrSet('matterGainText').innerHTML = sumOfElements.gt(D(1e120)) ? `Consolidate your materials and gain ${formatPrefix(matterGain,'Grams')} of Matter` : `You need 1.00e120 Total Elements to Consolidate<br>You have ${format(sumOfElements)} Total Elements Currently`
            DOMCacheGetOrSet('matterEffectText').innerHTML = data.matter[0].gt(D(0)) ? `Due to matter you have these effects<br>${format(matterBoosts[0])}x More Element/Isotope Production<br>${format(matterBoosts[1])}x More Corium<br>${format(matterBoosts[2])}x More Particles` : ``
            DOMCacheGetOrSet('antiMatterText').innerHTML = data.matter[1].gt(D(0)) || sumOfElements.gte(D(1e140)) ? `You have ${formatPrefix(data.matter[1],'Grams')} of Antimatter` : ``
            DOMCacheGetOrSet('antiGainText').innerHTML = data.matter[1].gt(D(0)) || sumOfElements.gte(D(1e140)) ? `Due to your production you are gaining<br>${formatPrefix(antimatterGain,'Grams')} of Antimatter/s` : `${format(sumOfElements)}/1.00e140`
            DOMCacheGetOrSet('antiEffectText').innerHTML = data.matter[1].gt(D(0)) || sumOfElements.gte(D(1e140)) ? `Antimatter is effecting these things<br>${format(antiDisplayEffects[0])}x Less Element Production<br>${format(antiDisplayEffects[1])}x Less Compound Boost<br>${format(antiDisplayEffects[2])}x Less Corium Boost` : ``
        }
        else if(data.currentSubTab[5] === 1) {
            DOMCacheGetOrSet('darkMatterText').innerHTML = `You have ${formatPrefix(data.matter[2],'Grams')} of Dark Matter`
            if(data.matter[1].gt(D(0)))
                DOMCacheGetOrSet('darkMatGainText').innerHTML = data.darkEnergy.gt(D(0)) ? `Darken and Gain ${formatPrefix(darkMatterGain, 'Grams')} of Dark Matter` : `You Need Dark Energy for This`
            else
                DOMCacheGetOrSet('darkMatGainText').innerHTML = `You need Anti Matter To Gain`
            DOMCacheGetOrSet('darkEnergyText').innerHTML = `You have ${formatPrefix(data.darkEnergy,'Joules')} of Dark Energy`
            DOMCacheGetOrSet('darkEnGainText').innerHTML = `Due to how much power you have<br>Gain +${formatPrefix(darkEnergyGain,'Joules')}/s`
            DOMCacheGetOrSet('darkEnEffectText').innerHTML = data.darkEnergy.gt(D(0)) ? `Dark Energy Effects<br>${format(darkEnergyEffects[0])}x More Power Generation<br>${format(darkEnergyEffects[1])}x Boost to 2x Upgrade` : ``
            for(let i = 0; i < 5; i++) 
                DOMCacheGetOrSet(`darkUp${i+1}`).innerHTML = data.darkUpUnlocked[i] ? `${romanNumerals[i]} - Unlocked<br>Current Effect:` : `${romanNumerals[i]} - Locked<br>${darkMatterUpDesc[i]}`
        }
        if(data.currentSubTab[5] === 2) {
            DOMCacheGetOrSet('strangeMatterText').innerHTML = `You have ${formatPrefix(data.matter[3],'Grams')} of Strange Matter`
        }
    }
    unlockTabs()
    tabChangeHTML()
    subTabChangeHTML()

    
}

function unlockTabs(){
    
    data.hasTab[0] = data.elements[1].amt > 0 || data.hasTab[0]
    data.hasTab[1] = data.compounds[0].amt > 0 || data.hasTab[1]
    data.hasTab[2] = sumOfElements.gte(D(1e8)) || data.hasTab[2]
    data.hasTab[3] = data.coriumSingUps[0] === true || data.hasTab[3]
    data.hasTab[4] = data.coriumSingUps[1] === true || data.hasTab[4]
    data.hasTab[5] = data.coriumSingUps[2] === true || data.hasTab[5]
    data.hasTab[6] = (data.challengeCompletions[0].eq(D(5)) && data.challengeCompletions[1].eq(D(5)) && 
    data.challengeCompletions[2].eq(D(5)) && data.challengeCompletions[3].eq(D(5)) && 
    data.challengeCompletions[4].eq(D(5))) || data.hasTab[6]
    
}
const seperator = DOMCacheGetOrSet('tabSeperator')
const elementTab = DOMCacheGetOrSet("elementHolder")
const compoundTab = DOMCacheGetOrSet("compoundHolder")
const powerTab = DOMCacheGetOrSet("powerHolder")
const meltingTab = DOMCacheGetOrSet("meltingHolder")
const settingTab = DOMCacheGetOrSet("settingsHolder")
const refineryTab = DOMCacheGetOrSet("refineryHolder")
const achievementTab = DOMCacheGetOrSet("achievementHolder")
const acceleratorTab = DOMCacheGetOrSet("acceleratorHolder")
const radiationTab = DOMCacheGetOrSet("radiationHolder")
const matterTab = DOMCacheGetOrSet("matterHolder")
const quantumTab = DOMCacheGetOrSet("quantumHolder")
let bodyStyles = window.getComputedStyle(document.body)
const colorVariableIDs = ['settings','element','achievement','compound','power','melt','refinery','particle','radiation',
'matter','quantum']
let seperatorColors = []


function tabChangeHTML(){
    for(let i = 0; i < colorVariableIDs.length; i++) {
        seperatorColors[i] = bodyStyles.getPropertyValue(`--${colorVariableIDs[i]}-tab-color`)
    }
    elementTab.style.display = data.currentTab === 1 ? 'flex': 'none'
    compoundTab.style.display = data.currentTab === 3 ? 'flex': 'none'   
    powerTab.style.display = data.currentTab === 4 ? 'flex' : 'none'
    meltingTab.style.display = data.currentTab === 5 ? 'flex' : 'none'
    settingTab.style.display = data.currentTab === 0? 'flex' : 'none'
    achievementTab.style.display = data.currentTab === 2 ? 'flex' : 'none'
    refineryTab.style.display = data.currentTab === 6 ? 'flex' : 'none'
    acceleratorTab.style.display = data.currentTab === 7 ? 'flex' : 'none'
    radiationTab.style.display = data.currentTab === 8 ? 'flex' : 'none'
    matterTab.style.display = data.currentTab === 9 ? 'flex' : 'none'
    quantumTab.style.display = data.currentTab === 10 ? 'flex' : 'none'
    seperator.style.color = `${seperatorColors[data.currentTab]}`
    DOMCacheGetOrSet('particleTextHolder').style.display = data.coriumSingUps[1] === true ? 'flex' : 'none'
}
//Elements Subs
const regularElementHolder = DOMCacheGetOrSet('regularElementsHolder')
const isotopeElementHolder = DOMCacheGetOrSet('isotopeElementsHolder')
//Particle Subs
const splitterHolder = DOMCacheGetOrSet('splitterHolder')
const fundamentalHolder = DOMCacheGetOrSet('fundamentalHolder')
const leptonsHolder = DOMCacheGetOrSet('leptonsHolder')
const quarksHolder = DOMCacheGetOrSet('quarksHolder')
//Achievement Subs
const achieveArea = DOMCacheGetOrSet('achArea')
const scrtArea = DOMCacheGetOrSet('scrtArea')
//Settings Subs
const settingsArea = DOMCacheGetOrSet("settingsArea")
const creditsArea = DOMCacheGetOrSet("creditsArea")
const roadmapArea = DOMCacheGetOrSet("roadmapArea")
const helpArea = DOMCacheGetOrSet("helpArea")
//Power Subs
const powerArea = DOMCacheGetOrSet('powerArea')
const generatorArea = DOMCacheGetOrSet('generatorArea')
//Radiation Subs
const irridiatorArea = DOMCacheGetOrSet('irridiatorArea')
const researchArea = DOMCacheGetOrSet('researchArea')
const challengeArea = DOMCacheGetOrSet('challengeArea')
//Matter Subs
const matterArea = DOMCacheGetOrSet('matterArea')
const darkMatterArea = DOMCacheGetOrSet('darkMatterArea')
const strangeMatterArea = DOMCacheGetOrSet('strangeMatterArea')
function subTabChangeHTML() {
        regularElementHolder.style.display = data.currentSubTab[0] === 0 ? 'flex' : 'none'
        isotopeElementHolder.style.display = data.currentSubTab[0] === 1? 'flex' : 'none'

        splitterHolder.style.display = data.currentSubTab[1] === 0 ? 'flex' : 'none'
        fundamentalHolder.style.display = data.currentSubTab[1] === 1 ? 'flex' : 'none'
        leptonsHolder.style.display = data.currentSubTab[1] === 2 ? 'flex' : 'none'
        quarksHolder.style.display = data.currentSubTab[1] === 3 ? 'flex' : 'none'

        achieveArea.style.display = data.currentSubTab[6] === 0 ? 'flex' : 'none'
        scrtArea.style.display = data.currentSubTab[6] === 1 ? 'flex' : 'none'

        settingsArea.style.display = data.currentSubTab[2] === 0 ? 'flex' : 'none'
        creditsArea.style.display = data.currentSubTab[2] === 1  ? 'flex' : 'none'
        roadmapArea.style.display = data.currentSubTab[2] === 2 ? 'flex' : 'none'
        helpArea.style.display = data.currentSubTab[2] === 3  ? 'flex' : 'none'

        powerArea.style.display = data.currentSubTab[3] === 0 ? 'flex' : 'none'
        generatorArea.style.display = data.currentSubTab[3] === 1 ? 'flex' : 'none'
        
        irridiatorArea.style.display = data.currentSubTab[4] === 0 ? 'flex' : 'none'
        researchArea.style.display = data.currentSubTab[4] === 1 ? 'flex' : 'none'
        challengeArea.style.display = data.currentSubTab[4] === 2 ? 'flex' : 'none'

        matterArea.style.display = data.currentSubTab[5] === 0 ? 'flex' : 'none'
        darkMatterArea.style.display = data.currentSubTab[5] === 1 ? 'flex' : 'none'
        strangeMatterArea.style.display = data.currentSubTab[5] === 2 ? 'flex' : 'none'
}