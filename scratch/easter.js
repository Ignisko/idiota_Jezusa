function getEaster(year) {
    const f = Math.floor,
        G = year % 19,
        C = f(year / 100),
        H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30,
        I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21 - G)/11)),
        J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
        L = I - J,
        month = 3 + f((L + 40)/44),
        day = L + 28 - 31 * f(month / 4);
    return new Date(year, month - 1, day);
}

const year = 2026;
const easter = getEaster(year);
console.log("Easter:", easter.toISOString());
const ashWed = new Date(easter);
ashWed.setDate(easter.getDate() - 46);
console.log("Ash Wed:", ashWed.toISOString());
const pentecost = new Date(easter);
pentecost.setDate(easter.getDate() + 49);
console.log("Pentecost:", pentecost.toISOString());
const corpus = new Date(easter);
corpus.setDate(easter.getDate() + 60);
console.log("Corpus Christi:", corpus.toISOString());
const sacredHeart = new Date(easter);
sacredHeart.setDate(easter.getDate() + 68);
console.log("Sacred Heart:", sacredHeart.toISOString());
