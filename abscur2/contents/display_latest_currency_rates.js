
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1328", "AUDJPY": "97.0982", "AUDSEK": "6.1957", "AUDUSD": "0.6595", "CADJPY": "105.4203", "CADSEK": "6.7267", "CHFAUD": "1.9011", "CHFHKD": "9.7578", "CHFJPY": "184.5913", "EURAUD": "1.7757", "EURCAD": "1.6360", "EURCHF": "0.9343", "EURCNY": "8.3392", "EURCZK": "24.2430", "EURGBP": "0.8713", "EURHKD": "9.1168", "EURILS": "3.8810", "EURJPY": "172.4700", "EURNOK": "11.6662", "EURNZD": "2.0134", "EURRUB": "96.6938", "EURSEK": "11.0047", "EURSGD": "1.5093", "EURUSD": "1.1714", "EURZAR": "20.2576", "GBPAUD": "2.0372", "GBPCAD": "1.8763", "GBPCHF": "1.0716", "GBPHKD": "10.4562", "GBPJPY": "197.8035", "GBPNOK": "13.3802", "GBPRUB": "110.8999", "GBPSEK": "12.6215", "GBPSGD": "1.7311", "GBPUSD": "1.3435", "HKDSEK": "1.2071", "HKDSGD": "0.1656", "JPYHKD": "0.0529", "JPYSEK": "0.0638", "NZDSEK": "5.4648", "NZDUSD": "0.5817", "SGDAUD": "1.1768", "SGDCHF": "0.6190", "SGDJPY": "114.2647", "USDAED": "3.6729", "USDARS": "1 424.0000", "USDBRL": "5.3380", "USDCAD": "1.3966", "USDCHF": "0.7976", "USDCLP": "961.2900", "USDCNY": "7.1220", "USDCOP": "3 883.5000", "USDCZK": "20.6960", "USDDKK": "6.3724", "USDEGP": "47.6700", "USDGBP": "0.7443", "USDHKD": "7.7828", "USDHUF": "331.9500", "USDIDR": "16 580.0000", "USDILS": "3.3131", "USDINR": "88.6910", "USDISK": "121.2300", "USDJPY": "147.2300", "USDKRW": "1 405.8600", "USDKWD": "0.3057", "USDKZT": "546.5200", "USDMXN": "18.4210", "USDMYR": "4.2030", "USDNOK": "9.9592", "USDPEN": "3.4737", "USDPHP": "58.0410", "USDPKR": "283.1000", "USDPLN": "3.6330", "USDQAR": "3.6269", "USDRON": "4.3385", "USDRUB": "82.5455", "USDSAR": "3.7502", "USDSEK": "9.3945", "USDSGD": "1.2885", "USDTHB": "32.4200", "USDTRY": "41.5726", "USDTWD": "30.4510", "USDUAH": "41.0807", "USDVND": "26 393.0000", "USDZAR": "17.2935"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 03.10.2025</th></tr>';

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
