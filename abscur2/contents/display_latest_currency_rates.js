
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8953", "AUDJPY": "94.8720", "AUDSEK": "6.3313", "AUDUSD": "0.6300", "CADJPY": "105.2750", "CADSEK": "7.0264", "CHFAUD": "1.7990", "CHFHKD": "8.8102", "CHFJPY": "170.7560", "EURAUD": "1.7111", "EURCAD": "1.5418", "EURCHF": "0.9506", "EURCNY": "7.8212", "EURCZK": "24.9658", "EURGBP": "0.8329", "EURHKD": "8.3752", "EURILS": "3.9629", "EURJPY": "162.2990", "EURNOK": "11.3029", "EURNZD": "1.8838", "EURRUB": "91.1590", "EURSEK": "10.8341", "EURSGD": "1.4456", "EURUSD": "1.0770", "EURZAR": "19.5598", "GBPAUD": "2.0543", "GBPCAD": "1.8474", "GBPCHF": "1.1424", "GBPHKD": "10.0530", "GBPJPY": "194.1010", "GBPNOK": "13.5600", "GBPRUB": "108.5910", "GBPSEK": "12.9600", "GBPSGD": "1.7288", "GBPUSD": "1.2943", "HKDSEK": "1.2908", "HKDSGD": "0.1720", "JPYHKD": "0.0515", "JPYSEK": "0.0664", "NZDSEK": "5.7822", "NZDUSD": "0.5732", "SGDAUD": "1.1886", "SGDCHF": "0.6603", "SGDJPY": "112.2280", "USDAED": "3.6729", "USDARS": "1 070.5000", "USDBRL": "5.6994", "USDCAD": "1.4272", "USDCHF": "0.8827", "USDCLP": "915.4200", "USDCNY": "7.2590", "USDCOP": "4 105.3000", "USDCZK": "23.0450", "USDDKK": "6.9181", "USDEGP": "50.5200", "USDGBP": "0.7732", "USDHKD": "7.7746", "USDHUF": "369.7200", "USDIDR": "16 589.0000", "USDILS": "3.6605", "USDINR": "85.6480", "USDISK": "133.2000", "USDJPY": "149.9630", "USDKRW": "1 461.5400", "USDKWD": "0.3083", "USDKZT": "502.0800", "USDMXN": "20.0444", "USDMYR": "4.4240", "USDNOK": "10.5202", "USDPEN": "3.6291", "USDPHP": "57.6960", "USDPKR": "280.2607", "USDPLN": "3.8560", "USDQAR": "3.6400", "USDRON": "4.6099", "USDRUB": "84.3750", "USDSAR": "3.7485", "USDSEK": "10.0411", "USDSGD": "1.3371", "USDTHB": "33.8100", "USDTRY": "38.0083", "USDTWD": "33.0810", "USDUAH": "41.6446", "USDVND": "25 410.0000", "USDZAR": "18.2594"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 28.03.2025</th></tr>';

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
