
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0812", "AUDJPY": "92.5990", "AUDSEK": "6.1675", "AUDUSD": "0.6486", "CADJPY": "103.8990", "CADSEK": "6.9205", "CHFAUD": "1.8777", "CHFHKD": "9.5484", "CHFJPY": "173.9590", "EURAUD": "1.7538", "EURCAD": "1.5635", "EURCHF": "0.9341", "EURCNY": "8.1805", "EURCZK": "24.8620", "EURGBP": "0.8392", "EURHKD": "8.9198", "EURILS": "4.0420", "EURJPY": "162.5220", "EURNOK": "11.5003", "EURNZD": "1.8985", "EURRUB": "90.7990", "EURSEK": "10.8284", "EURSGD": "1.4617", "EURUSD": "1.1385", "EURZAR": "20.3143", "GBPAUD": "2.0898", "GBPCAD": "1.8625", "GBPCHF": "1.1126", "GBPHKD": "10.6250", "GBPJPY": "193.5780", "GBPNOK": "13.7050", "GBPRUB": "108.1440", "GBPSEK": "12.8973", "GBPSGD": "1.7409", "GBPUSD": "1.3561", "HKDSEK": "1.2126", "HKDSGD": "0.1638", "JPYHKD": "0.0546", "JPYSEK": "0.0661", "NZDSEK": "5.6915", "NZDUSD": "0.5993", "SGDAUD": "1.2001", "SGDCHF": "0.6384", "SGDJPY": "111.1130", "USDAED": "3.6726", "USDARS": "1 143.0000", "USDBRL": "5.6718", "USDCAD": "1.3732", "USDCHF": "0.8200", "USDCLP": "939.7500", "USDCNY": "7.1870", "USDCOP": "4 147.4700", "USDCZK": "21.8340", "USDDKK": "6.5486", "USDEGP": "49.7500", "USDGBP": "0.7371", "USDHKD": "7.8355", "USDHUF": "354.0100", "USDIDR": "16 234.0000", "USDILS": "3.5490", "USDINR": "85.0400", "USDISK": "128.5000", "USDJPY": "142.7400", "USDKRW": "1 368.0500", "USDKWD": "0.3064", "USDKZT": "510.9800", "USDMXN": "19.2400", "USDMYR": "4.2150", "USDNOK": "10.0914", "USDPEN": "3.6568", "USDPHP": "55.3740", "USDPKR": "281.7400", "USDPLN": "3.7244", "USDQAR": "3.6400", "USDRON": "4.4483", "USDRUB": "79.6250", "USDSAR": "3.7506", "USDSEK": "9.5094", "USDSGD": "1.2838", "USDTHB": "32.5800", "USDTRY": "38.9611", "USDTWD": "29.9120", "USDUAH": "41.4999", "USDVND": "25 946.0000", "USDZAR": "17.8446"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 26.05.2025</th></tr>';

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
