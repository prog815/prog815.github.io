
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0367", "AUDJPY": "92.4310", "AUDSEK": "6.1627", "AUDUSD": "0.6434", "CADJPY": "103.6350", "CADSEK": "6.9062", "CHFAUD": "1.8836", "CHFHKD": "9.4927", "CHFJPY": "174.2110", "EURAUD": "1.7596", "EURCAD": "1.5696", "EURCHF": "0.9343", "EURCNY": "8.1693", "EURCZK": "24.8687", "EURGBP": "0.8440", "EURHKD": "8.8706", "EURILS": "4.0255", "EURJPY": "162.7240", "EURNOK": "11.5297", "EURNZD": "1.9078", "EURRUB": "90.3360", "EURSEK": "10.8521", "EURSGD": "1.4599", "EURUSD": "1.1328", "EURZAR": "20.3460", "GBPAUD": "2.0844", "GBPCAD": "1.8591", "GBPCHF": "1.1057", "GBPHKD": "10.5040", "GBPJPY": "192.7420", "GBPNOK": "13.6560", "GBPRUB": "106.9960", "GBPSEK": "12.8505", "GBPSGD": "1.7287", "GBPUSD": "1.3416", "HKDSEK": "1.2220", "HKDSGD": "0.1646", "JPYHKD": "0.0542", "JPYSEK": "0.0662", "NZDSEK": "5.6688", "NZDUSD": "0.5934", "SGDAUD": "1.2051", "SGDCHF": "0.6386", "SGDJPY": "111.3320", "USDAED": "3.6729", "USDARS": "1 146.0000", "USDBRL": "5.6451", "USDCAD": "1.3856", "USDCHF": "0.8243", "USDCLP": "943.2000", "USDCNY": "7.2031", "USDCOP": "4 175.5800", "USDCZK": "21.9400", "USDDKK": "6.5834", "USDEGP": "49.8000", "USDGBP": "0.7452", "USDHKD": "7.8303", "USDHUF": "355.3400", "USDIDR": "16 390.0000", "USDILS": "3.5576", "USDINR": "85.5700", "USDISK": "128.5000", "USDJPY": "143.6480", "USDKRW": "1 373.8400", "USDKWD": "0.3064", "USDKZT": "508.9800", "USDMXN": "19.3670", "USDMYR": "4.2670", "USDNOK": "10.1687", "USDPEN": "3.6776", "USDPHP": "55.6500", "USDPKR": "281.7300", "USDPLN": "3.7398", "USDQAR": "3.6400", "USDRON": "4.4764", "USDRUB": "79.6250", "USDSAR": "3.7505", "USDSEK": "9.5750", "USDSGD": "1.2885", "USDTHB": "32.7100", "USDTRY": "38.7671", "USDTWD": "30.0190", "USDUAH": "41.4851", "USDVND": "25 970.0000", "USDZAR": "17.9555"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 21.05.2025</th></tr>';

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
