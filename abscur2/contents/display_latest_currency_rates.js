
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1100", "AUDJPY": "96.5928", "AUDSEK": "6.1430", "AUDUSD": "0.6554", "CADJPY": "106.5731", "CADSEK": "6.7777", "CHFAUD": "1.9060", "CHFHKD": "9.7692", "CHFJPY": "184.6636", "EURAUD": "1.7861", "EURCAD": "1.6203", "EURCHF": "0.9351", "EURCNY": "8.3572", "EURCZK": "24.3640", "EURGBP": "0.8671", "EURHKD": "9.1355", "EURILS": "3.8988", "EURJPY": "172.6900", "EURNOK": "11.7502", "EURNZD": "1.9880", "EURRUB": "95.1954", "EURSEK": "10.9794", "EURSGD": "1.5048", "EURUSD": "1.1717", "EURZAR": "20.6170", "GBPAUD": "2.0607", "GBPCAD": "1.8677", "GBPCHF": "1.0779", "GBPHKD": "10.5304", "GBPJPY": "199.0514", "GBPNOK": "13.5442", "GBPRUB": "109.7302", "GBPSEK": "12.6590", "GBPSGD": "1.7346", "GBPUSD": "1.3506", "HKDSEK": "1.2022", "HKDSGD": "0.1647", "JPYHKD": "0.0529", "JPYSEK": "0.0636", "NZDSEK": "5.5288", "NZDUSD": "0.5893", "SGDAUD": "1.1880", "SGDCHF": "0.6245", "SGDJPY": "114.7551", "USDAED": "3.6729", "USDARS": "1 364.0000", "USDBRL": "5.4127", "USDCAD": "1.3829", "USDCHF": "0.7981", "USDCLP": "964.7500", "USDCNY": "7.1320", "USDCOP": "3 982.0000", "USDCZK": "20.7940", "USDDKK": "6.3705", "USDEGP": "48.5300", "USDGBP": "0.7404", "USDHKD": "7.7968", "USDHUF": "335.0900", "USDIDR": "16 415.0000", "USDILS": "3.3275", "USDINR": "88.1630", "USDISK": "121.9100", "USDJPY": "147.3800", "USDKRW": "1 386.1800", "USDKWD": "0.3052", "USDKZT": "535.8900", "USDMXN": "18.6980", "USDMYR": "4.2200", "USDNOK": "10.0283", "USDPEN": "3.5200", "USDPHP": "56.6350", "USDPKR": "283.0000", "USDPLN": "3.6218", "USDQAR": "3.6268", "USDRON": "4.3544", "USDRUB": "81.2455", "USDSAR": "3.7520", "USDSEK": "9.3729", "USDSGD": "1.2843", "USDTHB": "32.0400", "USDTRY": "41.2056", "USDTWD": "30.4780", "USDUAH": "41.1800", "USDVND": "26 375.0000", "USDZAR": "17.5958"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 05.09.2025</th></tr>';

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
