
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0912", "AUDJPY": "100.9948", "AUDSEK": "6.1824", "AUDUSD": "0.6553", "CADJPY": "110.2038", "CADSEK": "6.7462", "CHFAUD": "1.9035", "CHFHKD": "9.6910", "CHFJPY": "192.2415", "EURAUD": "1.7640", "EURCAD": "1.6174", "EURCHF": "0.9272", "EURCNY": "8.2224", "EURCZK": "24.3100", "EURGBP": "0.8790", "EURHKD": "8.9852", "EURILS": "3.7575", "EURJPY": "178.2400", "EURNOK": "11.6146", "EURNZD": "2.0138", "EURRUB": "92.4570", "EURSEK": "10.9110", "EURSGD": "1.5039", "EURUSD": "1.1565", "EURZAR": "19.9710", "GBPAUD": "2.0067", "GBPCAD": "1.8390", "GBPCHF": "1.0542", "GBPHKD": "10.2166", "GBPJPY": "202.6678", "GBPNOK": "13.2064", "GBPRUB": "105.1283", "GBPSEK": "12.4064", "GBPSGD": "1.7100", "GBPUSD": "1.3150", "HKDSEK": "1.2143", "HKDSGD": "0.1674", "JPYHKD": "0.0504", "JPYSEK": "0.0612", "NZDSEK": "5.4164", "NZDUSD": "0.5741", "SGDAUD": "1.1735", "SGDCHF": "0.6165", "SGDJPY": "118.5174", "USDAED": "3.6727", "USDARS": "1 438.0000", "USDBRL": "5.3807", "USDCAD": "1.3985", "USDCHF": "0.8017", "USDCLP": "942.2400", "USDCNY": "7.1090", "USDCOP": "3 852.5000", "USDCZK": "21.0200", "USDDKK": "6.4549", "USDEGP": "47.1800", "USDGBP": "0.7605", "USDHKD": "7.7693", "USDHUF": "335.5800", "USDIDR": "16 635.0000", "USDILS": "3.2490", "USDINR": "88.6050", "USDISK": "125.0800", "USDJPY": "154.1200", "USDKRW": "1 429.2500", "USDKWD": "0.3068", "USDKZT": "529.8500", "USDMXN": "18.5220", "USDMYR": "4.1950", "USDNOK": "10.0429", "USDPEN": "3.3811", "USDPHP": "58.8170", "USDPKR": "281.8000", "USDPLN": "3.6688", "USDQAR": "3.6271", "USDRON": "4.3953", "USDRUB": "79.9455", "USDSAR": "3.7501", "USDSEK": "9.4345", "USDSGD": "1.3004", "USDTHB": "32.3700", "USDTRY": "41.9596", "USDTWD": "30.6860", "USDUAH": "41.8500", "USDVND": "26 315.0000", "USDZAR": "17.2685"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 31.10.2025</th></tr>';

for (const [ticker, rate] of Object.entries(currencyRates)) {
    tableHTML += `<tr>
        <td style="border: 1px solid black; text-align: center;">
            <a href="https://www.abscur.ru/p/blog-page_54.html?pair=${ticker}">${ticker}</a>
        </td>
        <td style="border: 1px solid black; text-align: right;">${rate}</td>
    </tr>`;
}

tableHTML += '</table>';

// Вставка таблицы в div с id "currency-rates-table"
document.getElementById('currency-rates-table').innerHTML = tableHTML;
