
// Список возможных тикеров валютных пар
const currencyPairs = ["AUDHKD", "AUDJPY", "AUDSEK", "AUDUSD", "CADJPY", "CADSEK", "CHFAUD", "CHFHKD", "CHFJPY", "EURAUD", "EURCAD", "EURCHF", "EURCNY", "EURCZK", "EURGBP", "EURHKD", "EURILS", "EURJPY", "EURNOK", "EURNZD", "EURRUB", "EURSEK", "EURSGD", "EURUSD", "EURZAR", "GBPAUD", "GBPCAD", "GBPCHF", "GBPHKD", "GBPJPY", "GBPNOK", "GBPRUB", "GBPSEK", "GBPSGD", "GBPUSD", "HKDSEK", "HKDSGD", "JPYHKD", "JPYSEK", "NZDSEK", "NZDUSD", "SGDAUD", "SGDCHF", "SGDJPY", "USDAED", "USDARS", "USDBRL", "USDCAD", "USDCHF", "USDCLP", "USDCNY", "USDCOP", "USDCZK", "USDDKK", "USDEGP", "USDGBP", "USDHKD", "USDHUF", "USDIDR", "USDILS", "USDINR", "USDISK", "USDJPY", "USDKRW", "USDKWD", "USDKZT", "USDMXN", "USDMYR", "USDNOK", "USDPEN", "USDPHP", "USDPKR", "USDPLN", "USDQAR", "USDRON", "USDRUB", "USDSAR", "USDSEK", "USDSGD", "USDTHB", "USDTRY", "USDTWD", "USDUAH", "USDVND", "USDZAR"];

// Данные по временным диапазонам и соответствующим тикерам с наименьшей нормой
const periodData = {"\u043c\u0435\u0441\u044f\u0446": {"suffix": "1m", "lowestNormTickers": ["EURSGD", "USDISK", "AUDHKD", "USDTWD", "NZDSEK"]}, "\u043a\u0432\u0430\u0440\u0442\u0430\u043b": {"suffix": "1q", "lowestNormTickers": ["GBPUSD", "EURCNY", "EURCHF", "USDPLN", "USDGBP"]}, "\u0433\u043e\u0434": {"suffix": "1y", "lowestNormTickers": ["USDCLP", "AUDSEK", "SGDCHF", "SGDJPY", "USDPLN"]}, "\u0442\u0440\u0438 \u0433\u043e\u0434\u0430": {"suffix": "3y", "lowestNormTickers": ["AUDSEK", "NZDSEK", "GBPRUB", "USDRUB", "USDKRW"]}, "\u043f\u044f\u0442\u044c \u043b\u0435\u0442": {"suffix": "5y", "lowestNormTickers": ["USDDKK", "CHFHKD", "GBPUSD", "GBPHKD", "USDPEN"]}, "\u0434\u0435\u0441\u044f\u0442\u044c \u043b\u0435\u0442": {"suffix": "10y", "lowestNormTickers": ["USDKWD", "EURUSD", "USDCAD", "USDDKK", "USDMYR"]}};

// Функция для отображения диаграмм и списков тикеров
function displayCharts() {
    const graphsContainer = document.getElementById('graphs-container');
    
    for (const [periodName, data] of Object.entries(periodData)) {
        const {suffix, lowestNormTickers} = data;

        // Создание заголовка для временного диапазона
        const header = document.createElement('h2');
        header.textContent = periodName;
        graphsContainer.appendChild(header);

        // Создание элемента для графика
        const chartDiv = document.createElement('div');
        chartDiv.className = 'chart';
        
        // Генерация имени файла графика
        const imgElement = document.createElement('img');
        imgElement.src = `https://prog815.github.io/abscur2/contents/pairs-distr-${suffix}.png`;
        imgElement.alt = `Асимметрия и эксцесс валютных пар (${periodName})`;
        imgElement.style.width = '100%';  // Устанавливаем ширину изображения
        chartDiv.appendChild(imgElement);
        
        // Выводим список тикеров с наименьшей нормой (из lowest_norm_tickers)
        const tickerLinks = lowestNormTickers.map(ticker => 
            `<a href="https://www.abscur.ru/p/blog-page_71.html?pair=${ticker}">${ticker}</a>`
        ).join(' ');  // Объединяем ссылки через пробел
        
        const tickerContainer = document.createElement('div');
        tickerContainer.innerHTML = tickerLinks;  // Добавляем HTML со ссылками
        chartDiv.appendChild(tickerContainer);
        
        graphsContainer.appendChild(chartDiv);
    }
}

// Вызов функции для отображения графиков
displayCharts();
