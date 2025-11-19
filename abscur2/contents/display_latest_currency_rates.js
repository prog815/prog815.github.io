
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0645", "AUDJPY": "101.1683", "AUDSEK": "6.1598", "AUDUSD": "0.6506", "CADJPY": "111.1826", "CADSEK": "6.7696", "CHFAUD": "1.9227", "CHFHKD": "9.7378", "CHFJPY": "194.5209", "EURAUD": "1.7789", "EURCAD": "1.6196", "EURCHF": "0.9256", "EURCNY": "8.2297", "EURCZK": "24.1620", "EURGBP": "0.8807", "EURHKD": "9.0136", "EURILS": "3.7863", "EURJPY": "180.0500", "EURNOK": "11.6818", "EURNZD": "2.0461", "EURRUB": "93.7320", "EURSEK": "10.9610", "EURSGD": "1.5071", "EURUSD": "1.1579", "EURZAR": "19.8814", "GBPAUD": "2.0200", "GBPCAD": "1.8380", "GBPCHF": "1.0506", "GBPHKD": "10.2303", "GBPJPY": "204.3581", "GBPNOK": "13.2688", "GBPRUB": "106.3845", "GBPSEK": "12.4427", "GBPSGD": "1.7106", "GBPUSD": "1.3142", "HKDSEK": "1.2163", "HKDSGD": "0.1672", "JPYHKD": "0.0501", "JPYSEK": "0.0609", "NZDSEK": "5.3569", "NZDUSD": "0.5658", "SGDAUD": "1.1809", "SGDCHF": "0.6142", "SGDJPY": "119.4684", "USDAED": "3.6727", "USDARS": "1 397.0000", "USDBRL": "5.3218", "USDCAD": "1.3986", "USDCHF": "0.7994", "USDCLP": "931.5200", "USDCNY": "7.1100", "USDCOP": "3 721.1000", "USDCZK": "20.8670", "USDDKK": "6.4484", "USDEGP": "47.1100", "USDGBP": "0.7609", "USDHKD": "7.7844", "USDHUF": "331.2700", "USDIDR": "16 735.0000", "USDILS": "3.2716", "USDINR": "88.5230", "USDISK": "126.6100", "USDJPY": "155.5000", "USDKRW": "1 459.2900", "USDKWD": "0.3069", "USDKZT": "519.1900", "USDMXN": "18.3405", "USDMYR": "4.1600", "USDNOK": "10.0965", "USDPEN": "3.3670", "USDPHP": "58.7950", "USDPKR": "280.7000", "USDPLN": "3.6576", "USDQAR": "3.6414", "USDRON": "4.3910", "USDRUB": "80.9500", "USDSAR": "3.7500", "USDSEK": "9.4679", "USDSGD": "1.3016", "USDTHB": "32.3600", "USDTRY": "42.3385", "USDTWD": "31.1030", "USDUAH": "42.0889", "USDVND": "26 378.0000", "USDZAR": "17.1702"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 19.11.2025</th></tr>';

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
