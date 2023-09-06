// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears(humanYears) {
    let dogYears = humanYears * 7
    let output =`${humanYears} žmogaus metai yra ${dogYears} šuns metai.`
    return output
}

console.log(humanToDogYears(5))
 



// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function howLongBookGoal(booksWantToRead) {
    let goal = 365 / booksWantToRead
    let output =`Norint perskaityti ${booksWantToRead} knygų per metus, vienai knygai perskaityti turėsi ${goal} dienas`
    return output
}

console.log(howLongBookGoal(10))



// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function daysToWeeks(days) {
    let weeks = days / 7
    let output = `${days} dienos yra ${weeks} savaitės`
    return output
}

console.log(daysToWeeks(35))


// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function daysToYears(days) {
    let years = Math.round (days / 365)
    let output = `${days} dienos yra ${years} metai`
    return output
}
console.log(daysToYears(400))

 
// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours(years) {
    let hours = years * 8760
    let output =`${years} metai turi ${hours} valandas`
    return output
}
console.log(yearsToHours(5))
 
// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthToHours(months) {
    let hours = months * 730
    let output =`${months} mėnesiai turi ${hours} valandas`
    return output
}
console.log(monthToHours(3))
 
// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMins(months) {
    let mins = months * 43800
    let output =`${months} mėnesiai turi ${mins} minutes.`
    return output
}
console.log(monthsToMins(2))