
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.7957", "AUDJPY": "88.9340", "AUDSEK": "6.1266", "AUDUSD": "0.6228", "CADJPY": "102.7540", "CADSEK": "7.0269", "CHFAUD": "1.8895", "CHFHKD": "9.2129", "CHFJPY": "174.9240", "EURAUD": "1.8195", "EURCAD": "1.5789", "EURCHF": "0.9262", "EURCNY": "8.1163", "EURCZK": "25.1361", "EURGBP": "0.8678", "EURHKD": "8.5182", "EURILS": "4.1562", "EURJPY": "162.4130", "EURNOK": "12.1120", "EURNZD": "1.9533", "EURRUB": "94.0830", "EURSEK": "11.1301", "EURSGD": "1.4980", "EURUSD": "1.1359", "EURZAR": "21.8530", "GBPAUD": "2.0981", "GBPCAD": "1.8197", "GBPCHF": "1.0716", "GBPHKD": "9.9780", "GBPJPY": "186.8850", "GBPNOK": "13.9654", "GBPRUB": "109.7860", "GBPSEK": "12.7000", "GBPSGD": "1.7273", "GBPUSD": "1.3067", "HKDSEK": "1.2980", "HKDSGD": "0.1720", "JPYHKD": "0.0531", "JPYSEK": "0.0684", "NZDSEK": "5.6558", "NZDUSD": "0.5799", "SGDAUD": "1.2130", "SGDCHF": "0.6298", "SGDJPY": "109.2810", "USDAED": "3.6728", "USDARS": "1 076.0000", "USDBRL": "5.8853", "USDCAD": "1.3909", "USDCHF": "0.8187", "USDCLP": "986.9800", "USDCNY": "7.3180", "USDCOP": "4 353.3700", "USDCZK": "22.1530", "USDDKK": "6.5658", "USDEGP": "51.2800", "USDGBP": "0.7641", "USDHKD": "7.7569", "USDHUF": "360.9300", "USDIDR": "16 790.0000", "USDILS": "3.7569", "USDINR": "86.0025", "USDISK": "129.2500", "USDJPY": "142.6250", "USDKRW": "1 428.8900", "USDKWD": "0.3073", "USDKZT": "515.8800", "USDMXN": "20.4250", "USDMYR": "4.4660", "USDNOK": "10.7328", "USDPEN": "3.7148", "USDPHP": "57.2210", "USDPKR": "280.5600", "USDPLN": "3.7784", "USDQAR": "3.6400", "USDRON": "4.4917", "USDRUB": "84.2300", "USDSAR": "3.7506", "USDSEK": "9.7789", "USDSGD": "1.3261", "USDTHB": "34.0800", "USDTRY": "38.0586", "USDTWD": "32.4900", "USDUAH": "41.1740", "USDVND": "25 740.0000", "USDZAR": "19.3690"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 11.04.2025</th></tr>';

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
