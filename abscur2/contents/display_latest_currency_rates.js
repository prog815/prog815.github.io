
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0479", "AUDJPY": "92.7680", "AUDSEK": "6.1546", "AUDUSD": "0.6442", "CADJPY": "104.3410", "CADSEK": "6.9181", "CHFAUD": "1.8859", "CHFHKD": "9.5317", "CHFJPY": "175.1920", "EURAUD": "1.7644", "EURCAD": "1.5699", "EURCHF": "0.9350", "EURCNY": "8.1707", "EURCZK": "24.8990", "EURGBP": "0.8424", "EURHKD": "8.9123", "EURILS": "3.9732", "EURJPY": "163.8650", "EURNOK": "11.5135", "EURNZD": "1.9036", "EURRUB": "87.4190", "EURSEK": "10.8630", "EURSGD": "1.4624", "EURUSD": "1.1369", "EURZAR": "20.2302", "GBPAUD": "2.0935", "GBPCAD": "1.8629", "GBPCHF": "1.1089", "GBPHKD": "10.5750", "GBPJPY": "194.4150", "GBPNOK": "13.6598", "GBPRUB": "106.1820", "GBPSEK": "12.8907", "GBPSGD": "1.7349", "GBPUSD": "1.3490", "HKDSEK": "1.2176", "HKDSGD": "0.1641", "JPYHKD": "0.0542", "JPYSEK": "0.0658", "NZDSEK": "5.6705", "NZDUSD": "0.5969", "SGDAUD": "1.2056", "SGDCHF": "0.6381", "SGDJPY": "111.8800", "USDAED": "3.6729", "USDARS": "1 183.0000", "USDBRL": "5.6663", "USDCAD": "1.3807", "USDCHF": "0.8217", "USDCLP": "935.8700", "USDCNY": "7.1865", "USDCOP": "4 121.0000", "USDCZK": "21.8950", "USDDKK": "6.5590", "USDEGP": "49.7100", "USDGBP": "0.7411", "USDHKD": "7.8416", "USDHUF": "354.9700", "USDIDR": "16 296.0000", "USDILS": "3.4933", "USDINR": "85.3670", "USDISK": "128.5000", "USDJPY": "144.1200", "USDKRW": "1 370.2800", "USDKWD": "0.3070", "USDKZT": "508.3800", "USDMXN": "19.3150", "USDMYR": "4.2400", "USDNOK": "10.1147", "USDPEN": "3.6211", "USDPHP": "55.6410", "USDPKR": "281.8400", "USDPLN": "3.7260", "USDQAR": "3.6400", "USDRON": "4.4432", "USDRUB": "76.7750", "USDSAR": "3.7505", "USDSEK": "9.5457", "USDSGD": "1.2868", "USDTHB": "32.5400", "USDTRY": "39.2048", "USDTWD": "29.8170", "USDUAH": "41.5903", "USDVND": "25 995.0000", "USDZAR": "17.7926"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 29.05.2025</th></tr>';

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
