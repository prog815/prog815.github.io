
// Список возможных валютных пар
const currencyPairs = {"AUDHKD": "AUDHKD", "AUDJPY": "AUDJPY", "AUDSEK": "AUDSEK", "AUDUSD": "AUDUSD", "CADJPY": "CADJPY", "CADSEK": "CADSEK", "CHFAUD": "CHFAUD", "CHFHKD": "CHFHKD", "CHFJPY": "CHFJPY", "EURAUD": "EURAUD", "EURCAD": "EURCAD", "EURCHF": "EURCHF", "EURCNY": "EURCNY", "EURCZK": "EURCZK", "EURGBP": "EURGBP", "EURHKD": "EURHKD", "EURILS": "EURILS", "EURJPY": "EURJPY", "EURNOK": "EURNOK", "EURNZD": "EURNZD", "EURRUB": "EURRUB", "EURSEK": "EURSEK", "EURSGD": "EURSGD", "EURUSD": "EURUSD", "EURZAR": "EURZAR", "GBPAUD": "GBPAUD", "GBPCAD": "GBPCAD", "GBPCHF": "GBPCHF", "GBPHKD": "GBPHKD", "GBPJPY": "GBPJPY", "GBPNOK": "GBPNOK", "GBPRUB": "GBPRUB", "GBPSEK": "GBPSEK", "GBPSGD": "GBPSGD", "GBPUSD": "GBPUSD", "HKDSEK": "HKDSEK", "HKDSGD": "HKDSGD", "JPYHKD": "JPYHKD", "JPYSEK": "JPYSEK", "NZDSEK": "NZDSEK", "NZDUSD": "NZDUSD", "SGDAUD": "SGDAUD", "SGDCHF": "SGDCHF", "SGDJPY": "SGDJPY", "USDAED": "USDAED", "USDARS": "USDARS", "USDBRL": "USDBRL", "USDCAD": "USDCAD", "USDCHF": "USDCHF", "USDCLP": "USDCLP", "USDCNY": "USDCNY", "USDCOP": "USDCOP", "USDCZK": "USDCZK", "USDDKK": "USDDKK", "USDEGP": "USDEGP", "USDGBP": "USDGBP", "USDHKD": "USDHKD", "USDHUF": "USDHUF", "USDIDR": "USDIDR", "USDILS": "USDILS", "USDINR": "USDINR", "USDISK": "USDISK", "USDJPY": "USDJPY", "USDKRW": "USDKRW", "USDKWD": "USDKWD", "USDKZT": "USDKZT", "USDMXN": "USDMXN", "USDMYR": "USDMYR", "USDNOK": "USDNOK", "USDPEN": "USDPEN", "USDPHP": "USDPHP", "USDPKR": "USDPKR", "USDPLN": "USDPLN", "USDQAR": "USDQAR", "USDRON": "USDRON", "USDRUB": "USDRUB", "USDSAR": "USDSAR", "USDSEK": "USDSEK", "USDSGD": "USDSGD", "USDTHB": "USDTHB", "USDTRY": "USDTRY", "USDTWD": "USDTWD", "USDUAH": "USDUAH", "USDVND": "USDVND", "USDZAR": "USDZAR"};

// Функция для получения параметра из URL
function getURLParameter(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Получение текущей валютной пары из параметров
let selectedPair = getURLParameter('pair');

// Проверка наличия валютной пары в списке возможных пар
if (!(selectedPair in currencyPairs)) {
    // Если пара не найдена, выбираем случайную пару
    const pairs = Object.keys(currencyPairs);
    selectedPair = pairs[Math.floor(Math.random() * pairs.length)];
}

// Функция для отображения ссылок на валютные пары
function displayCurrencyPairLinks() {
    const linksContainer = document.getElementById('currency-pair-links');
    let linksHTML = '';
    
    for (const [pair, name] of Object.entries(currencyPairs)) {
        if (pair === selectedPair) {
            linksHTML += `<strong style="background-color: yellow;">${pair}</strong> `;  // Текущая пара без ссылки
        } else {
            linksHTML += `<a href="?pair=${pair}">${pair}</a> `;  // Ссылка на пару
        }
    }

    linksContainer.innerHTML = linksHTML;
}

// Функция для отображения графика валютной пары
function displayCurrencyPairGraph() {
    const graphsContainer = document.getElementById('graphs-container');
    const imgElement = document.createElement('img');
    imgElement.src = `https://prog815.github.io/abscur2/contents/${selectedPair.replace('/', '_')}_exchange_rates_all_periods.png`;
    imgElement.alt = `График для ${selectedPair}`;
    imgElement.style.width = '100%';  // Устанавливаем ширину изображения
    graphsContainer.appendChild(imgElement);
}

// Вызов функций для отображения ссылок и графика
displayCurrencyPairLinks();
displayCurrencyPairGraph();
