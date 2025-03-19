
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9422", "AUDJPY": "95.1930", "AUDSEK": "6.3815", "AUDUSD": "0.6362", "CADJPY": "104.4620", "CADSEK": "7.0357", "CHFAUD": "1.7923", "CHFHKD": "8.8430", "CHFJPY": "170.5250", "EURAUD": "1.7189", "EURCAD": "1.5632", "EURCHF": "0.9592", "EURCNY": "7.8917", "EURCZK": "25.0090", "EURGBP": "0.8412", "EURHKD": "8.4929", "EURILS": "3.9987", "EURJPY": "163.3390", "EURNOK": "11.5571", "EURNZD": "1.8795", "EURRUB": "89.5070", "EURSEK": "10.9948", "EURSGD": "1.4555", "EURUSD": "1.0938", "EURZAR": "19.8248", "GBPAUD": "2.0431", "GBPCAD": "1.8581", "GBPCHF": "1.1403", "GBPHKD": "10.0850", "GBPJPY": "194.1880", "GBPNOK": "13.7294", "GBPRUB": "108.7160", "GBPSEK": "13.0606", "GBPSGD": "1.7297", "GBPUSD": "1.3001", "HKDSEK": "1.2949", "HKDSGD": "0.1714", "JPYHKD": "0.0517", "JPYSEK": "0.0667", "NZDSEK": "5.8364", "NZDUSD": "0.5791", "SGDAUD": "1.1803", "SGDCHF": "0.6584", "SGDJPY": "112.3890", "USDAED": "3.6727", "USDARS": "1 067.7500", "USDBRL": "5.6674", "USDCAD": "1.4296", "USDCHF": "0.8769", "USDCLP": "916.6200", "USDCNY": "7.2230", "USDCOP": "4 115.4700", "USDCZK": "22.8590", "USDDKK": "6.8213", "USDEGP": "50.4500", "USDGBP": "0.7695", "USDHKD": "7.7688", "USDHUF": "363.4100", "USDIDR": "16 419.0000", "USDILS": "3.6635", "USDINR": "86.5840", "USDISK": "133.0000", "USDJPY": "149.3100", "USDKRW": "1 450.5800", "USDKWD": "0.3079", "USDKZT": "498.5300", "USDMXN": "19.8990", "USDMYR": "4.4325", "USDNOK": "10.5693", "USDPEN": "3.6238", "USDPHP": "57.1700", "USDPKR": "280.1344", "USDPLN": "3.8257", "USDQAR": "3.6400", "USDRON": "4.5578", "USDRUB": "81.8260", "USDSAR": "3.7475", "USDSEK": "10.0803", "USDSGD": "1.3311", "USDTHB": "33.6100", "USDTRY": "36.6927", "USDTWD": "32.9790", "USDUAH": "41.4395", "USDVND": "25 320.0000", "USDZAR": "18.1140"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 19.03.2025</th></tr>';

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
