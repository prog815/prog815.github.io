
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0988", "AUDJPY": "93.2660", "AUDSEK": "6.2180", "AUDUSD": "0.6501", "CADJPY": "104.9340", "CADSEK": "6.9935", "CHFAUD": "1.8756", "CHFHKD": "9.5737", "CHFJPY": "175.1490", "EURAUD": "1.7593", "EURCAD": "1.5649", "EURCHF": "0.9374", "EURCNY": "8.2091", "EURCZK": "24.7840", "EURGBP": "0.8429", "EURHKD": "8.9786", "EURILS": "3.9870", "EURJPY": "164.2270", "EURNOK": "11.5278", "EURNZD": "1.8953", "EURRUB": "88.4230", "EURSEK": "10.9514", "EURSGD": "1.4707", "EURUSD": "1.1442", "EURZAR": "20.2889", "GBPAUD": "2.0869", "GBPCAD": "1.8563", "GBPCHF": "1.1119", "GBPHKD": "10.6490", "GBPJPY": "194.7750", "GBPNOK": "13.6728", "GBPRUB": "104.8350", "GBPSEK": "12.9890", "GBPSGD": "1.7441", "GBPUSD": "1.3575", "HKDSEK": "1.2180", "HKDSGD": "0.1638", "JPYHKD": "0.0544", "JPYSEK": "0.0662", "NZDSEK": "5.7640", "NZDUSD": "0.6032", "SGDAUD": "1.1955", "SGDCHF": "0.6366", "SGDJPY": "111.5990", "USDAED": "3.6729", "USDARS": "1 187.4000", "USDBRL": "5.5845", "USDCAD": "1.3673", "USDCHF": "0.8187", "USDCLP": "929.6500", "USDCNY": "7.1790", "USDCOP": "4 114.4700", "USDCZK": "21.6510", "USDDKK": "6.5172", "USDEGP": "49.6000", "USDGBP": "0.7365", "USDHKD": "7.8459", "USDHUF": "351.8800", "USDIDR": "16 272.0000", "USDILS": "3.4817", "USDINR": "85.8000", "USDISK": "126.0000", "USDJPY": "143.5000", "USDKRW": "1 354.5200", "USDKWD": "0.3060", "USDKZT": "509.9800", "USDMXN": "19.1480", "USDMYR": "4.2270", "USDNOK": "10.0634", "USDPEN": "3.6222", "USDPHP": "55.6350", "USDPKR": "281.9700", "USDPLN": "3.7391", "USDQAR": "3.6400", "USDRON": "4.4091", "USDRUB": "77.1250", "USDSAR": "3.7505", "USDSEK": "9.5562", "USDSGD": "1.2852", "USDTHB": "32.6100", "USDTRY": "39.2810", "USDTWD": "29.9420", "USDUAH": "41.4829", "USDVND": "26 058.0000", "USDZAR": "17.7203"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 05.06.2025</th></tr>';

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
