
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1118", "AUDJPY": "96.4688", "AUDSEK": "6.2717", "AUDUSD": "0.6512", "CADJPY": "107.5192", "CADSEK": "6.9901", "CHFAUD": "1.8902", "CHFHKD": "9.6625", "CHFJPY": "182.3486", "EURAUD": "1.7827", "EURCAD": "1.6002", "EURCHF": "0.9435", "EURCNY": "8.3483", "EURCZK": "24.4360", "EURGBP": "0.8646", "EURHKD": "9.1169", "EURILS": "3.9613", "EURJPY": "172.0500", "EURNOK": "11.8716", "EURNZD": "1.9555", "EURRUB": "92.3261", "EURSEK": "11.1854", "EURSGD": "1.4943", "EURUSD": "1.1614", "EURZAR": "20.6043", "GBPAUD": "2.0620", "GBPCAD": "1.8501", "GBPCHF": "1.0909", "GBPHKD": "10.5407", "GBPJPY": "198.9224", "GBPNOK": "13.7262", "GBPRUB": "106.7466", "GBPSEK": "12.9325", "GBPSGD": "1.7276", "GBPUSD": "1.3428", "HKDSEK": "1.2269", "HKDSGD": "0.1639", "JPYHKD": "0.0530", "JPYSEK": "0.0650", "NZDSEK": "5.7179", "NZDUSD": "0.5937", "SGDAUD": "1.1936", "SGDCHF": "0.6314", "SGDJPY": "115.1407", "USDAED": "3.6727", "USDARS": "1 320.5000", "USDBRL": "5.4419", "USDCAD": "1.3778", "USDCHF": "0.8124", "USDCLP": "969.3400", "USDCNY": "7.1881", "USDCOP": "4 032.5000", "USDCZK": "21.0400", "USDDKK": "6.4253", "USDEGP": "48.4400", "USDGBP": "0.7447", "USDHKD": "7.8498", "USDHUF": "340.5600", "USDIDR": "16 265.0000", "USDILS": "3.4097", "USDINR": "87.6500", "USDISK": "123.0200", "USDJPY": "148.1400", "USDKRW": "1 390.6100", "USDKWD": "0.3055", "USDKZT": "543.4100", "USDMXN": "18.6470", "USDMYR": "4.2310", "USDNOK": "10.2221", "USDPEN": "3.5325", "USDPHP": "57.0630", "USDPKR": "283.2500", "USDPLN": "3.6631", "USDQAR": "3.6268", "USDRON": "4.3577", "USDRUB": "79.4955", "USDSAR": "3.7528", "USDSEK": "9.6310", "USDSGD": "1.2866", "USDTHB": "32.4500", "USDTRY": "40.5448", "USDTWD": "29.9480", "USDUAH": "41.3000", "USDVND": "26 231.0000", "USDZAR": "17.7324"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 11.08.2025</th></tr>';

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
