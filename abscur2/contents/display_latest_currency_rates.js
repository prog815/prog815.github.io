
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.7881", "AUDJPY": "96.6230", "AUDSEK": "6.9367", "AUDUSD": "0.6150", "CADJPY": "109.0130", "CADSEK": "7.8259", "CHFAUD": "1.7730", "CHFHKD": "8.4957", "CHFJPY": "171.4260", "EURAUD": "1.6583", "EURCAD": "1.4699", "EURCHF": "0.9348", "EURCNY": "7.4788", "EURCZK": "25.2266", "EURGBP": "0.8416", "EURHKD": "7.9423", "EURILS": "3.7400", "EURJPY": "160.2700", "EURNOK": "11.7078", "EURNZD": "1.8362", "EURRUB": "104.8260", "EURSEK": "11.5042", "EURSGD": "1.4010", "EURUSD": "1.0200", "EURZAR": "19.5219", "GBPAUD": "1.9711", "GBPCAD": "1.7473", "GBPCHF": "1.1109", "GBPHKD": "9.4360", "GBPJPY": "190.4870", "GBPNOK": "13.9169", "GBPRUB": "124.5130", "GBPSEK": "13.6728", "GBPSGD": "1.6654", "GBPUSD": "1.2126", "HKDSEK": "1.4469", "HKDSGD": "0.1763", "JPYHKD": "0.0493", "JPYSEK": "0.0713", "NZDSEK": "6.2631", "NZDUSD": "0.5556", "SGDAUD": "1.1832", "SGDCHF": "0.6668", "SGDJPY": "114.3130", "USDAED": "3.6727", "USDARS": "1 039.0000", "USDBRL": "6.0952", "USDCAD": "1.4417", "USDCHF": "0.9159", "USDCLP": "1 013.0100", "USDCNY": "7.3319", "USDCOP": "4 337.4200", "USDCZK": "24.7150", "USDDKK": "7.3123", "USDEGP": "50.5075", "USDGBP": "0.8245", "USDHKD": "7.7861", "USDHUF": "405.4600", "USDIDR": "16 270.0000", "USDILS": "3.6704", "USDINR": "86.6440", "USDISK": "140.7100", "USDJPY": "157.0320", "USDKRW": "1 467.1300", "USDKWD": "0.3084", "USDKZT": "530.6300", "USDMXN": "20.7889", "USDMYR": "4.5070", "USDNOK": "11.4753", "USDPEN": "3.7664", "USDPHP": "58.6740", "USDPKR": "278.5625", "USDPLN": "4.1857", "USDQAR": "3.6400", "USDRON": "4.8718", "USDRUB": "102.5300", "USDSAR": "3.7508", "USDSEK": "11.2750", "USDSGD": "1.3732", "USDTHB": "34.7400", "USDTRY": "35.4950", "USDTWD": "33.1010", "USDUAH": "42.2825", "USDVND": "25 360.0000", "USDZAR": "19.1332"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 13.01.2025</th></tr>';

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
