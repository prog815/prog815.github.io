
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0499", "AUDJPY": "93.5120", "AUDSEK": "6.2497", "AUDUSD": "0.6457", "CADJPY": "103.8660", "CADSEK": "6.9405", "CHFAUD": "1.8543", "CHFHKD": "9.3671", "CHFJPY": "173.5250", "EURAUD": "1.7404", "EURCAD": "1.5670", "EURCHF": "0.9379", "EURCNY": "8.1093", "EURCZK": "24.8560", "EURGBP": "0.8415", "EURHKD": "8.7911", "EURILS": "3.9581", "EURJPY": "162.8640", "EURNOK": "11.5866", "EURNZD": "1.8957", "EURRUB": "90.7680", "EURSEK": "10.8862", "EURSGD": "1.4558", "EURUSD": "1.1243", "EURZAR": "20.3130", "GBPAUD": "2.0686", "GBPCAD": "1.8623", "GBPCHF": "1.1143", "GBPHKD": "10.4450", "GBPJPY": "193.5270", "GBPNOK": "13.7695", "GBPRUB": "107.8780", "GBPSEK": "12.9365", "GBPSGD": "1.7290", "GBPUSD": "1.3361", "HKDSEK": "1.2370", "HKDSGD": "0.1656", "JPYHKD": "0.0537", "JPYSEK": "0.0664", "NZDSEK": "5.7179", "NZDUSD": "0.5926", "SGDAUD": "1.1953", "SGDCHF": "0.6440", "SGDJPY": "111.5690", "USDAED": "3.6727", "USDARS": "1 138.0000", "USDBRL": "5.6457", "USDCAD": "1.3937", "USDCHF": "0.8341", "USDCLP": "937.1900", "USDCNY": "7.2155", "USDCOP": "4 169.4700", "USDCZK": "22.1050", "USDDKK": "6.6343", "USDEGP": "50.0000", "USDGBP": "0.7485", "USDHKD": "7.8203", "USDHUF": "357.6800", "USDIDR": "16 424.0000", "USDILS": "3.5222", "USDINR": "85.3450", "USDISK": "130.7500", "USDJPY": "144.8540", "USDKRW": "1 388.5300", "USDKWD": "0.3071", "USDKZT": "510.9800", "USDMXN": "19.3150", "USDMYR": "4.2870", "USDNOK": "10.2983", "USDPEN": "3.6898", "USDPHP": "55.7820", "USDPKR": "281.5500", "USDPLN": "3.7754", "USDQAR": "3.6400", "USDRON": "4.4822", "USDRUB": "80.6250", "USDSAR": "3.7506", "USDSEK": "9.6815", "USDSGD": "1.2951", "USDTHB": "33.1100", "USDTRY": "38.7454", "USDTWD": "30.1430", "USDUAH": "41.4983", "USDVND": "25 938.0000", "USDZAR": "18.0746"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 19.05.2025</th></tr>';

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
