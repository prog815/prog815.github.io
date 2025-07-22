
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1204", "AUDJPY": "96.1360", "AUDSEK": "6.2454", "AUDUSD": "0.6523", "CADJPY": "107.7418", "CADSEK": "6.9994", "CHFAUD": "1.9213", "CHFHKD": "9.8381", "CHFJPY": "184.7099", "EURAUD": "1.7918", "EURCAD": "1.5998", "EURCHF": "0.9331", "EURCNY": "8.3923", "EURCZK": "24.5900", "EURGBP": "0.8666", "EURHKD": "9.1803", "EURILS": "3.9089", "EURJPY": "172.3600", "EURNOK": "11.8752", "EURNZD": "1.9593", "EURRUB": "91.4496", "EURSEK": "11.1974", "EURSGD": "1.4968", "EURUSD": "1.1695", "EURZAR": "20.5949", "GBPAUD": "2.0678", "GBPCAD": "1.8450", "GBPCHF": "1.0762", "GBPHKD": "10.5878", "GBPJPY": "198.7861", "GBPNOK": "13.6959", "GBPRUB": "105.4701", "GBPSEK": "12.9141", "GBPSGD": "1.7263", "GBPUSD": "1.3488", "HKDSEK": "1.2197", "HKDSGD": "0.1631", "JPYHKD": "0.0533", "JPYSEK": "0.0650", "NZDSEK": "5.7141", "NZDUSD": "0.5968", "SGDAUD": "1.1978", "SGDCHF": "0.6234", "SGDJPY": "115.1496", "USDAED": "3.6728", "USDARS": "1 273.0000", "USDBRL": "5.5666", "USDCAD": "1.3679", "USDCHF": "0.7979", "USDCLP": "953.7000", "USDCNY": "7.1707", "USDCOP": "4 045.4900", "USDCZK": "21.0260", "USDDKK": "6.3826", "USDEGP": "49.2000", "USDGBP": "0.7414", "USDHKD": "7.8498", "USDHUF": "340.9900", "USDIDR": "16 305.0000", "USDILS": "3.3423", "USDINR": "86.1800", "USDISK": "121.6200", "USDJPY": "147.3800", "USDKRW": "1 382.5800", "USDKWD": "0.3050", "USDKZT": "529.8900", "USDMXN": "18.6656", "USDMYR": "4.2330", "USDNOK": "10.1541", "USDPEN": "3.5593", "USDPHP": "57.0400", "USDPKR": "284.7500", "USDPLN": "3.6251", "USDQAR": "3.6361", "USDRON": "4.3306", "USDRUB": "78.1955", "USDSAR": "3.7512", "USDSEK": "9.5745", "USDSGD": "1.2799", "USDTHB": "32.2100", "USDTRY": "40.3795", "USDTWD": "29.3530", "USDUAH": "41.7000", "USDVND": "26 130.0000", "USDZAR": "17.6100"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 21.07.2025</th></tr>';

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
