
// Список возможных тикеров и их названий
const commodityTickers = {"GC=F": "\u0417\u043e\u043b\u043e\u0442\u043e", "SI=F": "\u0421\u0435\u0440\u0435\u0431\u0440\u043e", "PL=F": "\u041f\u043b\u0430\u0442\u0438\u043d\u0430", "CL=F": "\u041d\u0435\u0444\u0442\u044c WTI", "HG=F": "\u041c\u0435\u0434\u044c", "ALI=F": "\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439", "ZN=F": "\u0426\u0438\u043d\u043a", "ZW=F": "\u041f\u0448\u0435\u043d\u0438\u0446\u0430", "ZC=F": "\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430", "ZS=F": "\u0421\u043e\u044f", "KC=F": "\u041a\u043e\u0444\u0435", "SB=F": "\u0421\u0430\u0445\u0430\u0440", "NG=F": "\u041f\u0440\u0438\u0440\u043e\u0434\u043d\u044b\u0439 \u0433\u0430\u0437"};

// Функция для получения параметра из URL
function getURLParameter(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Получение текущего тикера товара из параметров
let selectedTicker = getURLParameter('tovar');

// Проверка наличия тикера в списке возможных товаров
if (!(selectedTicker in commodityTickers)) {
    // Если тикер не найден, выбираем случайный тикер
    const tickers = Object.keys(commodityTickers);
    selectedTicker = tickers[Math.floor(Math.random() * tickers.length)];
}

// Функция для отображения ссылок на товары
function displayCommodityLinks() {
    const linksContainer = document.getElementById('commodity-links');
    let linksHTML = '';

    for (const [ticker, name] of Object.entries(commodityTickers)) {
        if (ticker === selectedTicker) {
            linksHTML += `<strong style="background-color: yellow;">${name}</strong> `;  // Текущий товар без ссылки
        } else {
            linksHTML += `<a href="?tovar=${ticker}">${name}</a> `;  // Ссылка на товар
        }
    }

    linksContainer.innerHTML = linksHTML;
}

// Функция для отображения графиков товара
function displayCommodityGraphs() {
    const graphsContainer = document.getElementById('graphs-container');
    
    // Список временных диапазонов и соответствующих суффиксов
    const periodSuffix = {"\u043c\u0435\u0441\u044f\u0446": "1m", "\u043a\u0432\u0430\u0440\u0442\u0430\u043b": "1q", "\u0433\u043e\u0434": "1y", "\u0442\u0440\u0438 \u0433\u043e\u0434\u0430": "3y", "\u043f\u044f\u0442\u044c \u043b\u0435\u0442": "5y", "\u0434\u0435\u0441\u044f\u0442\u044c \u043b\u0435\u0442": "10y"};
    
    for (const [period, suffix] of Object.entries(periodSuffix)) {
        const imgElement = document.createElement('img');
        imgElement.src = `https://prog815.github.io/abscur2/contents/${selectedTicker}_${suffix}_commodity.png`;
        imgElement.alt = `График за ${period} для ${selectedTicker}`;
        imgElement.style.width = '100%';  // Устанавливаем ширину изображения
        graphsContainer.appendChild(imgElement);
    }
}

// Вызов функций для отображения ссылок и графиков
displayCommodityLinks();
displayCommodityGraphs();
