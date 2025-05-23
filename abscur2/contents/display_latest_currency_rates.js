
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0149", "AUDJPY": "92.3140", "AUDSEK": "6.1749", "AUDUSD": "0.6409", "CADJPY": "103.8970", "CADSEK": "6.9487", "CHFAUD": "1.8814", "CHFHKD": "9.4422", "CHFJPY": "173.8440", "EURAUD": "1.7590", "EURCAD": "1.5631", "EURCHF": "0.9345", "EURCNY": "8.1255", "EURCZK": "24.8854", "EURGBP": "0.8404", "EURHKD": "8.8264", "EURILS": "4.0509", "EURJPY": "162.4780", "EURNOK": "11.5045", "EURNZD": "1.9131", "EURRUB": "89.8710", "EURSEK": "10.8716", "EURSGD": "1.4582", "EURUSD": "1.1279", "EURZAR": "20.3122", "GBPAUD": "2.0928", "GBPCAD": "1.8594", "GBPCHF": "1.1114", "GBPHKD": "10.5030", "GBPJPY": "193.2870", "GBPNOK": "13.6940", "GBPRUB": "106.9040", "GBPSEK": "12.9305", "GBPSGD": "1.7343", "GBPUSD": "1.3418", "HKDSEK": "1.2301", "HKDSGD": "0.1651", "JPYHKD": "0.0541", "JPYSEK": "0.0664", "NZDSEK": "5.6675", "NZDUSD": "0.5894", "SGDAUD": "1.2063", "SGDCHF": "0.6404", "SGDJPY": "111.3040", "USDAED": "3.6729", "USDARS": "1 135.5000", "USDBRL": "5.7172", "USDCAD": "1.3858", "USDCHF": "0.8282", "USDCLP": "942.7200", "USDCNY": "7.2060", "USDCOP": "4 179.4700", "USDCZK": "22.0500", "USDDKK": "6.6111", "USDEGP": "49.8500", "USDGBP": "0.7451", "USDHKD": "7.8259", "USDHUF": "357.1000", "USDIDR": "16 324.0000", "USDILS": "3.5934", "USDINR": "85.9480", "USDISK": "128.5000", "USDJPY": "144.0290", "USDKRW": "1 381.2800", "USDKWD": "0.3068", "USDKZT": "507.4800", "USDMXN": "19.3131", "USDMYR": "4.2700", "USDNOK": "10.1934", "USDPEN": "3.6573", "USDPHP": "55.7390", "USDPKR": "281.8500", "USDPLN": "3.7630", "USDQAR": "3.6400", "USDRON": "4.4839", "USDRUB": "79.5500", "USDSAR": "3.7498", "USDSEK": "9.6337", "USDSGD": "1.2928", "USDTHB": "32.8100", "USDTRY": "39.0083", "USDTWD": "30.0430", "USDUAH": "41.4360", "USDVND": "25 973.0000", "USDZAR": "18.0022"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 22.05.2025</th></tr>';

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
