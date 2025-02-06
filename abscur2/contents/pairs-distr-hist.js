
// Список возможных тикеров валютных пар
const currencyPairs = ["AUDHKD", "AUDJPY", "AUDSEK", "AUDUSD", "CADJPY", "CADSEK", "CHFAUD", "CHFHKD", "CHFJPY", "EURAUD", "EURCAD", "EURCHF", "EURCNY", "EURCZK", "EURGBP", "EURHKD", "EURILS", "EURJPY", "EURNOK", "EURNZD", "EURRUB", "EURSEK", "EURSGD", "EURUSD", "EURZAR", "GBPAUD", "GBPCAD", "GBPCHF", "GBPHKD", "GBPJPY", "GBPNOK", "GBPRUB", "GBPSEK", "GBPSGD", "GBPUSD", "HKDSEK", "HKDSGD", "JPYHKD", "JPYSEK", "NZDSEK", "NZDUSD", "SGDAUD", "SGDCHF", "SGDJPY", "USDAED", "USDARS", "USDBRL", "USDCAD", "USDCHF", "USDCLP", "USDCNY", "USDCOP", "USDCZK", "USDDKK", "USDEGP", "USDGBP", "USDHKD", "USDHUF", "USDIDR", "USDILS", "USDINR", "USDISK", "USDJPY", "USDKRW", "USDKWD", "USDKZT", "USDMXN", "USDMYR", "USDNOK", "USDPEN", "USDPHP", "USDPKR", "USDPLN", "USDQAR", "USDRON", "USDRUB", "USDSAR", "USDSEK", "USDSGD", "USDTHB", "USDTRY", "USDTWD", "USDUAH", "USDVND", "USDZAR"];

// Функция для получения параметра из URL
function getURLParameter(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Получение текущего тикера валютной пары из параметров
let selectedTicker = getURLParameter('pair');

// Проверка наличия тикера в списке возможных валютных пар
if (!currencyPairs.includes(selectedTicker)) {
    // Если тикер не найден, выбираем случайный тикер
    const tickers = currencyPairs;
    selectedTicker = tickers[Math.floor(Math.random() * tickers.length)];
}

// Функция для отображения ссылок на гистограммы распределений валютных пар
function displayCurrencyPairLinks() {
    const linksContainer = document.getElementById('currency-pair-links');
    let linksHTML = '';
    
    for (const ticker of currencyPairs) {
        if (ticker === selectedTicker) {
            linksHTML += `<strong style="background-color: yellow;">${ticker}</strong> `;  // Текущий курс без ссылки
        } else {
            linksHTML += `<a href="?pair=${ticker}">${ticker}</a> `;  // Ссылка на курс
        }
    }

    linksContainer.innerHTML = linksHTML;
}

// Функция для отображения гистограмм распределений валютных пар
function displayCurrencyPairHistograms() {
    const graphsContainer = document.getElementById('graphs-container');
    
    // Создание элемента для графика
    const imgElement = document.createElement('img');
    imgElement.src = `https://prog815.github.io/abscur2/contents/pairs-distr-${selectedTicker}.png`;
    imgElement.alt = `Гистограмма распределения для ${selectedTicker}`;
    imgElement.style.width = '100%';  // Устанавливаем ширину изображения
    graphsContainer.appendChild(imgElement);

    // Создание ссылки на страницу с графиком валютной пары
    const linkElement = document.createElement('a');
    linkElement.href = `https://www.abscur.ru/p/blog-page_54.html?pair=${selectedTicker}`;
    linkElement.textContent = `График валютной пары ${selectedTicker}`;
    linkElement.style.display = 'block';  // Отображаем как блочный элемент
    linkElement.style.marginTop = '5px';   // Добавляем небольшой отступ сверху
    graphsContainer.appendChild(linkElement);
}

// Вызов функций для отображения ссылок и графиков
displayCurrencyPairLinks();
displayCurrencyPairHistograms();
