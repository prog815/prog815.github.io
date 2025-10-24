
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0607", "AUDJPY": "99.3601", "AUDSEK": "6.1066", "AUDUSD": "0.6512", "CADJPY": "109.0714", "CADSEK": "6.7034", "CHFAUD": "1.9316", "CHFHKD": "9.7752", "CHFJPY": "191.9245", "EURAUD": "1.7837", "EURCAD": "1.6252", "EURCHF": "0.9236", "EURCNY": "8.2745", "EURCZK": "24.3060", "EURGBP": "0.8715", "EURHKD": "9.0287", "EURILS": "3.8127", "EURJPY": "177.2300", "EURNOK": "11.5792", "EURNZD": "2.0198", "EURRUB": "94.3963", "EURSEK": "10.8937", "EURSGD": "1.5084", "EURUSD": "1.1617", "EURZAR": "20.1147", "GBPAUD": "2.0461", "GBPCAD": "1.8639", "GBPCHF": "1.0593", "GBPHKD": "10.3545", "GBPJPY": "203.2976", "GBPNOK": "13.2654", "GBPRUB": "108.2575", "GBPSEK": "12.4945", "GBPSGD": "1.7299", "GBPUSD": "1.3324", "HKDSEK": "1.2067", "HKDSGD": "0.1671", "JPYHKD": "0.0509", "JPYSEK": "0.0615", "NZDSEK": "5.3920", "NZDUSD": "0.5750", "SGDAUD": "1.1828", "SGDCHF": "0.6123", "SGDJPY": "117.5229", "USDAED": "3.6728", "USDARS": "1 479.0000", "USDBRL": "5.3821", "USDCAD": "1.3989", "USDCHF": "0.7950", "USDCLP": "944.3000", "USDCNY": "7.1260", "USDCOP": "3 877.5000", "USDCZK": "20.9210", "USDDKK": "6.4282", "USDEGP": "47.5400", "USDGBP": "0.7505", "USDHKD": "7.7713", "USDHUF": "335.7700", "USDIDR": "16 615.0000", "USDILS": "3.2817", "USDINR": "87.7590", "USDISK": "122.2600", "USDJPY": "152.5800", "USDKRW": "1 436.5500", "USDKWD": "0.3065", "USDKZT": "537.3300", "USDMXN": "18.3943", "USDMYR": "4.2280", "USDNOK": "9.9560", "USDPEN": "3.3878", "USDPHP": "58.5650", "USDPKR": "282.1000", "USDPLN": "3.6379", "USDQAR": "3.6269", "USDRON": "4.3733", "USDRUB": "81.2500", "USDSAR": "3.7502", "USDSEK": "9.3774", "USDSGD": "1.2983", "USDTHB": "32.7200", "USDTRY": "41.9754", "USDTWD": "30.7500", "USDUAH": "41.8907", "USDVND": "26 312.0000", "USDZAR": "17.3187"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 24.10.2025</th></tr>';

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
