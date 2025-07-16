
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1119", "AUDJPY": "96.9376", "AUDSEK": "6.3295", "AUDUSD": "0.6512", "CADJPY": "108.4827", "CADSEK": "7.0834", "CHFAUD": "1.9159", "CHFHKD": "9.7940", "CHFJPY": "185.7268", "EURAUD": "1.7798", "EURCAD": "1.5916", "EURCHF": "0.9297", "EURCNY": "8.3198", "EURCZK": "24.6460", "EURGBP": "0.8664", "EURHKD": "9.1051", "EURILS": "3.8922", "EURJPY": "172.6600", "EURNOK": "11.8860", "EURNZD": "1.9501", "EURRUB": "90.5540", "EURSEK": "11.2740", "EURSGD": "1.4907", "EURUSD": "1.1599", "EURZAR": "20.7895", "GBPAUD": "2.0545", "GBPCAD": "1.8359", "GBPCHF": "1.0723", "GBPHKD": "10.5024", "GBPJPY": "199.1598", "GBPNOK": "13.7100", "GBPRUB": "104.4505", "GBPSEK": "13.0041", "GBPSGD": "1.7195", "GBPUSD": "1.3379", "HKDSEK": "1.2382", "HKDSGD": "0.1637", "JPYHKD": "0.0527", "JPYSEK": "0.0653", "NZDSEK": "5.7784", "NZDUSD": "0.5945", "SGDAUD": "1.1948", "SGDCHF": "0.6236", "SGDJPY": "115.8263", "USDAED": "3.6729", "USDARS": "1 259.0000", "USDBRL": "5.5566", "USDCAD": "1.3722", "USDCHF": "0.8015", "USDCLP": "966.1400", "USDCNY": "7.1810", "USDCOP": "4 028.5000", "USDCZK": "21.2480", "USDDKK": "6.4328", "USDEGP": "49.3600", "USDGBP": "0.7474", "USDHKD": "7.8499", "USDHUF": "345.0700", "USDIDR": "16 255.0000", "USDILS": "3.3556", "USDINR": "85.9630", "USDISK": "122.6000", "USDJPY": "148.8600", "USDKRW": "1 386.1100", "USDKWD": "0.3054", "USDKZT": "525.4700", "USDMXN": "18.8200", "USDMYR": "4.2390", "USDNOK": "10.2474", "USDPEN": "3.5600", "USDPHP": "56.7600", "USDPKR": "284.4500", "USDPLN": "3.6739", "USDQAR": "3.6355", "USDRON": "4.3736", "USDRUB": "78.0705", "USDSAR": "3.7504", "USDSEK": "9.7198", "USDSGD": "1.2852", "USDTHB": "32.5400", "USDTRY": "39.9800", "USDTWD": "29.3900", "USDUAH": "41.7900", "USDVND": "26 120.0000", "USDZAR": "17.9235"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 15.07.2025</th></tr>';

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
