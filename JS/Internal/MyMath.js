function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function minimum(value, min){
    if (value.lt(min)) value = D(min)
    return value
}
function maximum(value, max){
    if (value.gt(max)) value = D(max)
    return value
}
function formatPrefix(a,b) {
    const prefixes = ['Kilo','Mega','Giga','Tera','Peta','Exa','Zetta','Yotta']
    let amts = [D(1e3),D(1e6),D(1e9),D(1e12),D(1e15),D(1e18),D(1e21),D(1e24)]
    let index = -1;
    for(let i = prefixes.length - 1; i > -1; i--) {
        if(a.divide(amts[i]).gte(D(1))) {
            index = i;
            break;
        }
    }
    if(index === -1) {
        return `${format(a)} ${b}`
    }
    else {
        return `${format(a.divide(amts[index]))} ${prefixes[index]}${b.toLowerCase()}`
    }
}