
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0502", "AUDJPY": "92.9460", "AUDSEK": "6.1991", "AUDUSD": "0.6443", "CADJPY": "104.4450", "CADSEK": "6.9655", "CHFAUD": "1.8754", "CHFHKD": "9.4759", "CHFJPY": "174.4450", "EURAUD": "1.7579", "EURCAD": "1.5641", "EURCHF": "0.9373", "EURCNY": "8.1659", "EURCZK": "24.8883", "EURGBP": "0.8386", "EURHKD": "8.8810", "EURILS": "4.0005", "EURJPY": "163.4690", "EURNOK": "11.5142", "EURNZD": "1.9043", "EURRUB": "90.9160", "EURSEK": "10.9052", "EURSGD": "1.4601", "EURUSD": "1.1330", "EURZAR": "20.3261", "GBPAUD": "2.0953", "GBPCAD": "1.8648", "GBPCHF": "1.1167", "GBPHKD": "10.5870", "GBPJPY": "194.9040", "GBPNOK": "13.7293", "GBPRUB": "108.4110", "GBPSEK": "13.0004", "GBPSGD": "1.7402", "GBPUSD": "1.3510", "HKDSEK": "1.2266", "HKDSGD": "0.1644", "JPYHKD": "0.0541", "JPYSEK": "0.0662", "NZDSEK": "5.7109", "NZDUSD": "0.5947", "SGDAUD": "1.2035", "SGDCHF": "0.6411", "SGDJPY": "111.8640", "USDAED": "3.6726", "USDARS": "1 138.0000", "USDBRL": "5.6412", "USDCAD": "1.3808", "USDCHF": "0.8265", "USDCLP": "936.9300", "USDCNY": "7.1955", "USDCOP": "4 109.0100", "USDCZK": "21.9590", "USDDKK": "6.5783", "USDEGP": "49.7500", "USDGBP": "0.7401", "USDHKD": "7.8379", "USDHUF": "356.0700", "USDIDR": "16 269.0000", "USDILS": "3.5330", "USDINR": "85.3260", "USDISK": "128.5000", "USDJPY": "144.2630", "USDKRW": "1 372.8100", "USDKWD": "0.3064", "USDKZT": "511.8800", "USDMXN": "19.2616", "USDMYR": "4.2350", "USDNOK": "10.1483", "USDPEN": "3.6498", "USDPHP": "55.4880", "USDPKR": "281.7400", "USDPLN": "3.7451", "USDQAR": "3.6400", "USDRON": "4.4697", "USDRUB": "80.1250", "USDSAR": "3.7508", "USDSEK": "9.6103", "USDSGD": "1.2884", "USDTHB": "32.7440", "USDTRY": "39.0304", "USDTWD": "29.9510", "USDUAH": "41.4999", "USDVND": "25 945.0000", "USDZAR": "17.9271"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 27.05.2025</th></tr>';

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
