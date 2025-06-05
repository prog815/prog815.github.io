
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0887", "AUDJPY": "92.5690", "AUDSEK": "6.2127", "AUDUSD": "0.6488", "CADJPY": "104.3780", "CADSEK": "7.0013", "CHFAUD": "1.8829", "CHFHKD": "9.5870", "CHFJPY": "174.4340", "EURAUD": "1.7584", "EURCAD": "1.5600", "EURCHF": "0.9340", "EURCNY": "8.2077", "EURCZK": "24.8140", "EURGBP": "0.8425", "EURHKD": "8.9539", "EURILS": "3.9751", "EURJPY": "162.9780", "EURNOK": "11.5428", "EURNZD": "1.8946", "EURRUB": "90.4740", "EURSEK": "10.9301", "EURSGD": "1.4688", "EURUSD": "1.1416", "EURZAR": "20.3381", "GBPAUD": "2.0874", "GBPCAD": "1.8544", "GBPCHF": "1.1134", "GBPHKD": "10.6090", "GBPJPY": "195.0160", "GBPNOK": "13.6820", "GBPRUB": "105.9670", "GBPSEK": "12.9974", "GBPSGD": "1.7431", "GBPUSD": "1.3522", "HKDSEK": "1.2235", "HKDSGD": "0.1642", "JPYHKD": "0.0541", "JPYSEK": "0.0661", "NZDSEK": "5.7783", "NZDUSD": "0.6011", "SGDAUD": "1.1976", "SGDCHF": "0.6386", "SGDJPY": "111.8280", "USDAED": "3.6726", "USDARS": "1 184.0000", "USDBRL": "5.6352", "USDCAD": "1.3710", "USDCHF": "0.8233", "USDCLP": "940.8500", "USDCNY": "7.1890", "USDCOP": "4 106.4000", "USDCZK": "21.8030", "USDDKK": "6.5489", "USDEGP": "49.5800", "USDGBP": "0.7393", "USDHKD": "7.8463", "USDHUF": "354.3700", "USDIDR": "16 285.0000", "USDILS": "3.4985", "USDINR": "85.8460", "USDISK": "128.5000", "USDJPY": "144.1860", "USDKRW": "1 363.7000", "USDKWD": "0.3066", "USDKZT": "509.6800", "USDMXN": "19.2280", "USDMYR": "4.2435", "USDNOK": "10.1157", "USDPEN": "3.6228", "USDPHP": "55.7370", "USDPKR": "282.1196", "USDPLN": "3.7654", "USDQAR": "3.6400", "USDRON": "4.4384", "USDRUB": "78.3400", "USDSAR": "3.7506", "USDSEK": "9.6072", "USDSGD": "1.2889", "USDTHB": "32.6600", "USDTRY": "39.1191", "USDTWD": "29.9510", "USDUAH": "41.5261", "USDVND": "26 038.0000", "USDZAR": "17.8332"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 04.06.2025</th></tr>';

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
