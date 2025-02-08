
// Список возможных тикеров и их названий
const stockTickers = {"AFKS": "\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u043e", "AFLT": "\u0410\u044d\u0440\u043e\u0444\u043b\u043e\u0442", "ALRS": "\u0410\u041b\u0420\u041e\u0421\u0410 \u0430\u043e", "BSPB": "\u0411\u0421\u041f \u0430\u043e", "CHMF": "\u0421\u0435\u0432\u0421\u0442-\u0430\u043e", "GAZP": "\u0413\u0410\u0417\u041f\u0420\u041e\u041c \u0430\u043e", "GMKN": "\u0413\u041c\u041a\u041d\u043e\u0440\u041d\u0438\u043a", "HYDR": "\u0420\u0443\u0441\u0413\u0438\u0434\u0440\u043e", "IRAO": "\u0418\u043d\u0442\u0435\u0440\u0420\u0410\u041e\u0430\u043e", "LKOH": "\u041b\u0423\u041a\u041e\u0419\u041b", "LSRG": "\u041b\u0421\u0420 \u0430\u043e", "MAGN": "\u041c\u041c\u041a", "MOEX": "\u041c\u043e\u0441\u0411\u0438\u0440\u0436\u0430", "MSNG": "+\u041c\u043e\u0441\u042d\u043d\u0435\u0440\u0433\u043e", "MTLR": "\u041c\u0435\u0447\u0435\u043b \u0430\u043e", "MTLRP": "\u041c\u0435\u0447\u0435\u043b \u0430\u043f", "MTSS": "\u041c\u0422\u0421-\u0430\u043e", "MVID": "\u041c.\u0432\u0438\u0434\u0435\u043e", "NLMK": "\u041d\u041b\u041c\u041a \u0430\u043e", "NVTK": "\u041d\u043e\u0432\u0430\u0442\u044d\u043a \u0430\u043e", "PHOR": "\u0424\u043e\u0441\u0410\u0433\u0440\u043e \u0430\u043e", "PIKK": "\u041f\u0418\u041a \u0430\u043e", "PLZL": "\u041f\u043e\u043b\u044e\u0441", "ROSN": "\u0420\u043e\u0441\u043d\u0435\u0444\u0442\u044c", "RTKM": "\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043e", "RTKMP": "\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043f", "SBER": "\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a", "SBERP": "\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a-\u043f", "SELG": "\u0421\u0435\u043b\u0438\u0433\u0434\u0430\u0440", "TATN": "\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043e", "TATNP": "\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043f", "TGKA": "\u0422\u0413\u041a-1", "TRNFP": "\u0422\u0440\u0430\u043d\u0441\u043d\u0444 \u0430\u043f", "VTBR": "\u0412\u0422\u0411 \u0430\u043e"};

// Функция для получения параметра из URL
function getURLParameter(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Получение текущего тикера акции из параметров
let selectedTicker = getURLParameter('akcia');

// Проверка наличия тикера в списке возможных акций
if (!(selectedTicker in stockTickers)) {
    // Если тикер не найден, выбираем случайный тикер
    const tickers = Object.keys(stockTickers);
    selectedTicker = tickers[Math.floor(Math.random() * tickers.length)];
}

// Функция для отображения ссылок на акции
function displayStockLinks() {
    const linksContainer = document.getElementById('stock-links');
    let linksHTML = '';

    for (const [ticker, name] of Object.entries(stockTickers)) {
        if (ticker === selectedTicker) {
            linksHTML += `<strong style="background-color: yellow;">${name}</strong> `;  // Текущая акция с желтой подложкой
        } else {
            linksHTML += `<a href="?akcia=${ticker}">${name}</a> `;  // Ссылка на акцию
        }
    }

    linksContainer.innerHTML = linksHTML;
}

// Функция для отображения графиков акции
function displayStockGraphs() {
    const graphsContainer = document.getElementById('graphs-container');
    
    // Список временных диапазонов и соответствующих суффиксов
    const periodSuffix = {"\u043c\u0435\u0441\u044f\u0446": "1m", "\u043a\u0432\u0430\u0440\u0442\u0430\u043b": "1q", "\u0433\u043e\u0434": "1y", "\u0442\u0440\u0438 \u0433\u043e\u0434\u0430": "3y", "\u043f\u044f\u0442\u044c \u043b\u0435\u0442": "5y", "\u0434\u0435\u0441\u044f\u0442\u044c \u043b\u0435\u0442": "10y"};
    
    for (const [period, suffix] of Object.entries(periodSuffix)) {
        const imgElement = document.createElement('img');
        imgElement.src = `https://prog815.github.io/abscur2/contents/moex_${selectedTicker}_${suffix}_stock.png`;
        imgElement.alt = `График за ${period} для ${selectedTicker}`;
        imgElement.style.width = '100%';  // Устанавливаем ширину изображения
        graphsContainer.appendChild(imgElement);
    }
}

// Вызов функций для отображения ссылок и графиков
displayStockLinks();
displayStockGraphs();
