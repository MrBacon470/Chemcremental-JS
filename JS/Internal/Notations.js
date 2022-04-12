//My Own Custom Notation Switcher Combined with formatting from different games listed below

function notate(x) {
    switch(data.notationIndex) {
        case 0:
            return format(x)
            break
        case 1:
            return formatOmg(x)
            break
        case 2:
            return formatEle(x,2)
    }
}
//All below notations are modified versions of MrRedShark's Incremental Mass Rewritten Game's Notations
//https://mrredshark77.github.io/incremental-mass-rewritten/
//const SUBSCRIPT_NUMBERS = "0123456789"
//const SUPERSCRIPT_NUMBERS = "012346789"

const SUBSCRIPT_NUMBERS = "₀₁₂₃₄₅₆₇₈₉"
const SUPERSCRIPT_NUMBERS = "⁰¹²³⁴⁵⁶⁷⁸⁹"

const ST_NAMES = [
	null, [
		["","U","D","T","Qa","Qt","Sx","Sp","Oc","No"],
		["","Dc","Vg","Tg","Qag","Qtg","Sxg","Spg","Ocg","Nog"],
		["","Ce","De","Te","Qae","Qte","Sxe","Spe","Oce","Noe"],
	],[
		["","Mi","Mc","Na","Pc","Fm","At","Zp","Yc","Xn"],
		["","Me","Du","Tr","Te","Pe","He","Hp","Ot","En"],
		["","c","Ic","TCn","TeC","PCn","HCn","HpC","OCn","ECn"],
		["","Hc","DHe","THt","TeH","PHc","HHe","HpH","OHt","EHc"]
	]
]

function toSubscript(value) {
    return value.toFixed(0).split("")
      .map((x) => x === "-" ? "₋" : SUBSCRIPT_NUMBERS[parseInt(x, 10)])
      .join("");
}

function toSuperscript(value) {
    return value.toFixed(0).split("")
      .map((x) => x === "-" ? "₋" : SUPERSCRIPT_NUMBERS[parseInt(x, 10)])
      .join("");
}
const greek = "αβγδεζηθικλμνξοπρστυφχψω"
const infinity = "Ω"
function formatOmg(value) {
    const step = Decimal.floor(value.div(1000));
    const omegaAmount = Decimal.floor(step.div(greek.length));
    let lastLetter = greek[step.toNumber() % greek.length] + toSubscript(value.toNumber() % 1000);
    const beyondGreekArrayBounds = greek[step.toNumber() % greek.length] === undefined;
    if (beyondGreekArrayBounds || step.toNumber() > Number.MAX_SAFE_INTEGER) {
    lastLetter = "ω";
    }
    const omegaOrder = Decimal.log(value, 8000);
    if (omegaAmount.equals(0)) {
    return lastLetter;
    } else if (omegaAmount.gt(0) && omegaAmount.lte(3)) {
    const omegas = [];
    for (let i = 0; i < omegaAmount.toNumber(); i++) {
        omegas.push("ω");
    }
    return `${omegas.join("^")}^${lastLetter}`;
    } else if (omegaAmount.gt(3) && omegaAmount.lt(10)) {
    return `ω(${omegaAmount.toFixed(0)})^${lastLetter}`;
    } else if (omegaOrder < 3) {
    return `ω(${formatOmg(omegaAmount)})^${lastLetter}`;
    } else if (omegaOrder < 6) {
    return `ω(${formatOmg(omegaAmount)})`;
    }
    const val = Decimal.pow(8000, omegaOrder % 1);
    const orderStr = omegaOrder < 100
    ? Math.floor(omegaOrder).toFixed(0)
    : formatOmg(Decimal.floor(omegaOrder));
    return `ω[${orderStr}](${formatOmg(val)})`;
}

const element_lists = [["H"],
            ["He", "Li", "Be", "B", "C", "N", "O", "F"],
            ["Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl"],
            [
              "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe",
              "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br"
            ],
            [
              "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru",
              "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I"
            ],
            [
              "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm",
              "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm",
              "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir",
              "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At"
            ],
            [
              "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np",
              "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md",
              "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt",
              "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts"
            ],
            ["Og"]]

function getAbbreviationAndValue(x) {
            const abbreviationListIndexUnfloored = Math.log(x) / Math.log(118);
            const abbreviationListIndex = Math.floor(abbreviationListIndexUnfloored);
            const abbreviationList = element_lists[Math.floor(abbreviationListIndex)];
            const abbreviationSublistIndex = Math.floor(
              (abbreviationListIndexUnfloored - abbreviationListIndex) * abbreviationList.length);
            const abbreviation = abbreviationList[abbreviationSublistIndex];
            const value = 118 ** (abbreviationListIndex + abbreviationSublistIndex / abbreviationList.length);
            return [abbreviation, value];
        }
function formatElementalPart(abbreviation, n) {
            if (n === 1) {
              return abbreviation;
            }
            return `${n} ${abbreviation}`;
        }
function formatEle(value,acc) {
            if(value.equals(0)) return "0.00";
            let log = value.log(118);
            const parts = [];
            while (log >= 1 && parts.length < 4) {
              const [abbreviation, value] = getAbbreviationAndValue(log);
              const n = Math.floor(log / value);
              log -= n * value;
              parts.unshift([abbreviation, n]);
            }
            if (parts.length >= 4) {
              return parts.map((x) => formatElementalPart(x[0], x[1])).join(" + ");
            }
            const formattedMantissa = Decimal.pow(118, log).toFixed(acc);
            if (parts.length === 0) {
              return formattedMantissa;
            }
            if (parts.length === 1) {
              return `${formattedMantissa} × ${formatElementalPart(parts[0][0], parts[0][1])}`;
            }
            return `${formattedMantissa} × (${parts.map((x) => formatElementalPart(x[0], x[1])).join(" + ")})`;
        }