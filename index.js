const cities = ['Москва', 'Санкт-Петербург', 'Токио', 'Мадрид', 'Нью-Йорк', ''];
let temperatureOfCities = [];
for( let i = 0; i < cities.length; i ++){
    let city = prompt(`Введите температуру для города ${cities[i]}`);
    cities.push(Number(city));
}
let minTemperaturOfCities = -5;
for (let i = 0; i < cities.length; i++){
    minTemperaturOfCities += cities[i];
}