
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0157", "AUDJPY": "95.2387", "AUDSEK": "6.1737", "AUDUSD": "0.6419", "CADJPY": "106.6643", "CADSEK": "6.9144", "CHFAUD": "1.9269", "CHFHKD": "9.6646", "CHFJPY": "183.5127", "EURAUD": "1.8066", "EURCAD": "1.6142", "EURCHF": "0.9383", "EURCNY": "8.3318", "EURCZK": "24.5450", "EURGBP": "0.8651", "EURHKD": "9.0672", "EURILS": "3.9470", "EURJPY": "172.1700", "EURNOK": "11.8025", "EURNZD": "1.9938", "EURRUB": "93.4940", "EURSEK": "11.1655", "EURSGD": "1.4949", "EURUSD": "1.1605", "EURZAR": "20.5419", "GBPAUD": "2.0893", "GBPCAD": "1.8655", "GBPCHF": "1.0843", "GBPHKD": "10.4791", "GBPJPY": "198.9790", "GBPNOK": "13.6394", "GBPRUB": "108.0531", "GBPSEK": "12.8986", "GBPSGD": "1.7276", "GBPUSD": "1.3411", "HKDSEK": "1.2309", "HKDSGD": "0.1649", "JPYHKD": "0.0527", "JPYSEK": "0.0648", "NZDSEK": "5.5938", "NZDUSD": "0.5816", "SGDAUD": "1.2093", "SGDCHF": "0.6276", "SGDJPY": "115.1762", "USDAED": "3.6725", "USDARS": "1 314.0000", "USDBRL": "5.4707", "USDCAD": "1.3910", "USDCHF": "0.8085", "USDCLP": "970.1800", "USDCNY": "7.1802", "USDCOP": "4 036.6500", "USDCZK": "21.1510", "USDDKK": "6.4314", "USDEGP": "48.4400", "USDGBP": "0.7457", "USDHKD": "7.8138", "USDHUF": "341.4000", "USDIDR": "16 280.0000", "USDILS": "3.4001", "USDINR": "87.2670", "USDISK": "123.4100", "USDJPY": "148.3700", "USDKRW": "1 401.0600", "USDKWD": "0.3058", "USDKZT": "537.1900", "USDMXN": "18.7350", "USDMYR": "4.2220", "USDNOK": "10.1703", "USDPEN": "3.5146", "USDPHP": "57.1290", "USDPKR": "282.9500", "USDPLN": "3.6655", "USDQAR": "3.6369", "USDRON": "4.3525", "USDRUB": "80.5705", "USDSAR": "3.7527", "USDSEK": "9.6179", "USDSGD": "1.2882", "USDTHB": "32.5900", "USDTRY": "40.9155", "USDTWD": "30.5190", "USDUAH": "41.2000", "USDVND": "26 405.0000", "USDZAR": "17.7078"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 21.08.2025</th></tr>';

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
