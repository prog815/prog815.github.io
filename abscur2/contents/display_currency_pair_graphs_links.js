
// Список возможных валютных пар и их названий
const currencyPairs = ["AUDHKD", "AUDJPY", "AUDSEK", "AUDUSD", "CADJPY", "CADSEK", "CHFAUD", "CHFHKD", "CHFJPY", "EURAUD", "EURCAD", "EURCHF", "EURCNY", "EURCZK", "EURGBP", "EURHKD", "EURILS", "EURJPY", "EURNOK", "EURNZD", "EURRUB", "EURSEK", "EURSGD", "EURUSD", "EURZAR", "GBPAUD", "GBPCAD", "GBPCHF", "GBPHKD", "GBPJPY", "GBPNOK", "GBPRUB", "GBPSEK", "GBPSGD", "GBPUSD", "HKDSEK", "HKDSGD", "JPYHKD", "JPYSEK", "NZDSEK", "NZDUSD", "SGDAUD", "SGDCHF", "SGDJPY", "USDAED", "USDARS", "USDBRL", "USDCAD", "USDCHF", "USDCLP", "USDCNY", "USDCOP", "USDCZK", "USDDKK", "USDEGP", "USDGBP", "USDHKD", "USDHUF", "USDIDR", "USDILS", "USDINR", "USDISK", "USDJPY", "USDKRW", "USDKWD", "USDKZT", "USDMXN", "USDMYR", "USDNOK", "USDPEN", "USDPHP", "USDPKR", "USDPLN", "USDQAR", "USDRON", "USDRUB", "USDSAR", "USDSEK", "USDSGD", "USDTHB", "USDTRY", "USDTWD", "USDUAH", "USDVND", "USDZAR"];

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
    const pairs = currencyPairs;
    selectedPair = pairs[Math.floor(Math.random() * pairs.length)];
}

// Функция для отображения ссылок на валютные пары
function displayCurrencyPairLinks() {
    const linksContainer = document.getElementById('currency-pair-links');
    let linksHTML = '';

    for (const pair of currencyPairs) {
        if (pair === selectedPair) {
            linksHTML += `<strong style="background-color: yellow;">${pair}</strong> `;  // Текущая пара без ссылки
        } else {
            linksHTML += `<a href="?pair=${pair}">${pair}</a> `;  // Ссылка на пару
        }
    }

    linksContainer.innerHTML = linksHTML;
}

// Функция для отображения графиков валютной пары
function displayCurrencyPairGraphs() {
    const graphsContainer = document.getElementById('graphs-container');
    
    // Список временных диапазонов и соответствующих суффиксов
    const periodSuffix = {"\u043c\u0435\u0441\u044f\u0446": "1m", "\u043a\u0432\u0430\u0440\u0442\u0430\u043b": "1q", "\u043f\u043e\u043b\u0433\u043e\u0434\u0430": "y2", "\u0433\u043e\u0434": "1y", "\u0434\u0432\u0430 \u0433\u043e\u0434\u0430": "2y", "\u0442\u0440\u0438 \u0433\u043e\u0434\u0430": "3y", "\u043f\u044f\u0442\u044c \u043b\u0435\u0442": "5y", "\u0434\u0435\u0441\u044f\u0442\u044c \u043b\u0435\u0442": "10y"};
    
    for (const [period, suffix] of Object.entries(periodSuffix)) {
        const imgElement = document.createElement('img');
        imgElement.src = `https://prog815.github.io/abscur2/contents/${selectedPair.replace('/', '_')}_${suffix}_exchange_rate.png`;
        imgElement.alt = `График за ${period} для ${selectedPair}`;
        imgElement.style.width = '100%';  // Устанавливаем ширину изображения
        graphsContainer.appendChild(imgElement);
    }
}

// Вызов функций для отображения ссылок и графиков
displayCurrencyPairLinks();
displayCurrencyPairGraphs();
