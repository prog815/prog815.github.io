
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0894", "AUDJPY": "96.6963", "AUDSEK": "6.1576", "AUDUSD": "0.6519", "CADJPY": "107.6415", "CADSEK": "6.8546", "CHFAUD": "1.9077", "CHFHKD": "9.7090", "CHFJPY": "184.4671", "EURAUD": "1.7846", "EURCAD": "1.6039", "EURCHF": "0.9360", "EURCNY": "8.3091", "EURCZK": "24.4500", "EURGBP": "0.8686", "EURHKD": "9.0866", "EURILS": "3.9253", "EURJPY": "172.6800", "EURNOK": "11.6789", "EURNZD": "1.9838", "EURRUB": "93.7469", "EURSEK": "11.0014", "EURSGD": "1.4992", "EURUSD": "1.1638", "EURZAR": "20.5737", "GBPAUD": "2.0541", "GBPCAD": "1.8453", "GBPCHF": "1.0768", "GBPHKD": "10.4543", "GBPJPY": "198.6287", "GBPNOK": "13.4369", "GBPRUB": "107.8585", "GBPSEK": "12.6486", "GBPSGD": "1.7249", "GBPUSD": "1.3391", "HKDSEK": "1.2099", "HKDSGD": "0.1650", "JPYHKD": "0.0526", "JPYSEK": "0.0637", "NZDSEK": "5.5398", "NZDUSD": "0.5865", "SGDAUD": "1.1909", "SGDCHF": "0.6242", "SGDJPY": "115.1541", "USDAED": "3.6727", "USDARS": "1 358.0000", "USDBRL": "5.4646", "USDCAD": "1.3780", "USDCHF": "0.8041", "USDCLP": "973.2500", "USDCNY": "7.1450", "USDCOP": "3 999.5000", "USDCZK": "21.0070", "USDDKK": "6.4108", "USDEGP": "48.4700", "USDGBP": "0.7468", "USDHKD": "7.8070", "USDHUF": "339.4300", "USDIDR": "16 395.0000", "USDILS": "3.3718", "USDINR": "87.9780", "USDISK": "123.2100", "USDJPY": "148.3300", "USDKRW": "1 395.4200", "USDKWD": "0.3056", "USDKZT": "539.1000", "USDMXN": "18.7000", "USDMYR": "4.2250", "USDNOK": "10.0343", "USDPEN": "3.5379", "USDPHP": "57.3720", "USDPKR": "283.0500", "USDPLN": "3.6587", "USDQAR": "3.6182", "USDRON": "4.3607", "USDRUB": "80.5455", "USDSAR": "3.7521", "USDSEK": "9.4456", "USDSGD": "1.2881", "USDTHB": "32.3400", "USDTRY": "41.1051", "USDTWD": "30.7420", "USDUAH": "41.3800", "USDVND": "26 340.0000", "USDZAR": "17.6775"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 03.09.2025</th></tr>';

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
