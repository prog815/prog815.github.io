
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1362", "AUDJPY": "96.6401", "AUDSEK": "6.2823", "AUDUSD": "0.6543", "CADJPY": "107.7866", "CADSEK": "7.0069", "CHFAUD": "1.9162", "CHFHKD": "9.8419", "CHFJPY": "185.1805", "EURAUD": "1.7814", "EURCAD": "1.5982", "EURCHF": "0.9302", "EURCNY": "8.3589", "EURCZK": "24.6300", "EURGBP": "0.8685", "EURHKD": "9.1553", "EURILS": "3.9005", "EURJPY": "172.2600", "EURNOK": "11.8111", "EURNZD": "1.9523", "EURRUB": "91.0828", "EURSEK": "11.1982", "EURSGD": "1.4947", "EURUSD": "1.1663", "EURZAR": "20.8709", "GBPAUD": "2.0521", "GBPCAD": "1.8399", "GBPCHF": "1.0709", "GBPHKD": "10.5401", "GBPJPY": "198.3168", "GBPNOK": "13.5975", "GBPRUB": "104.8588", "GBPSEK": "12.8919", "GBPSGD": "1.7208", "GBPUSD": "1.3427", "HKDSEK": "1.2231", "HKDSGD": "0.1633", "JPYHKD": "0.0532", "JPYSEK": "0.0650", "NZDSEK": "5.7340", "NZDUSD": "0.5972", "SGDAUD": "1.1925", "SGDCHF": "0.6223", "SGDJPY": "115.2466", "USDAED": "3.6729", "USDARS": "1 278.0000", "USDBRL": "5.5888", "USDCAD": "1.3703", "USDCHF": "0.7976", "USDCLP": "967.0000", "USDCNY": "7.1723", "USDCOP": "3 995.6900", "USDCZK": "21.1180", "USDDKK": "6.3981", "USDEGP": "49.4100", "USDGBP": "0.7448", "USDHKD": "7.8499", "USDHUF": "342.5700", "USDIDR": "16 240.0000", "USDILS": "3.3443", "USDINR": "85.9890", "USDISK": "121.9400", "USDJPY": "147.7000", "USDKRW": "1 382.3000", "USDKWD": "0.3054", "USDKZT": "523.8500", "USDMXN": "18.7390", "USDMYR": "4.2500", "USDNOK": "10.1270", "USDPEN": "3.5657", "USDPHP": "56.6740", "USDPKR": "284.1200", "USDPLN": "3.6441", "USDQAR": "3.6367", "USDRON": "4.3507", "USDRUB": "78.0955", "USDSAR": "3.7503", "USDSEK": "9.6015", "USDSGD": "1.2816", "USDTHB": "32.4600", "USDTRY": "40.1685", "USDTWD": "29.3740", "USDUAH": "41.7800", "USDVND": "26 100.0000", "USDZAR": "17.8950"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.07.2025</th></tr>';

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
