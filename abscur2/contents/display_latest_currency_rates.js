
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1451", "AUDJPY": "97.7767", "AUDSEK": "6.2168", "AUDUSD": "0.6611", "CADJPY": "106.2500", "CADSEK": "6.7556", "CHFAUD": "1.9001", "CHFHKD": "9.7760", "CHFJPY": "185.7807", "EURAUD": "1.7734", "EURCAD": "1.6332", "EURCHF": "0.9341", "EURCNY": "8.3527", "EURCZK": "24.2930", "EURGBP": "0.8723", "EURHKD": "9.1313", "EURILS": "3.8763", "EURJPY": "173.5300", "EURNOK": "11.7139", "EURNZD": "2.0247", "EURRUB": "97.2613", "EURSEK": "11.0405", "EURSGD": "1.5130", "EURUSD": "1.1733", "EURZAR": "20.2473", "GBPAUD": "2.0331", "GBPCAD": "1.8710", "GBPCHF": "1.0700", "GBPHKD": "10.4607", "GBPJPY": "198.7924", "GBPNOK": "13.4191", "GBPRUB": "111.4198", "GBPSEK": "12.6396", "GBPSGD": "1.7332", "GBPUSD": "1.3441", "HKDSEK": "1.2083", "HKDSGD": "0.1657", "JPYHKD": "0.0526", "JPYSEK": "0.0636", "NZDSEK": "5.4486", "NZDUSD": "0.5794", "SGDAUD": "1.1730", "SGDCHF": "0.6174", "SGDJPY": "114.6956", "USDAED": "3.6729", "USDARS": "1 379.5000", "USDBRL": "5.3224", "USDCAD": "1.3920", "USDCHF": "0.7961", "USDCLP": "961.6000", "USDCNY": "7.1220", "USDCOP": "3 920.5000", "USDCZK": "20.7050", "USDDKK": "6.3613", "USDEGP": "47.8000", "USDGBP": "0.7440", "USDHKD": "7.7827", "USDHUF": "332.2100", "USDIDR": "16 660.0000", "USDILS": "3.3039", "USDINR": "88.8110", "USDISK": "121.2200", "USDJPY": "147.9000", "USDKRW": "1 403.8500", "USDKWD": "0.3054", "USDKZT": "548.6200", "USDMXN": "18.3074", "USDMYR": "4.2060", "USDNOK": "9.9837", "USDPEN": "3.4699", "USDPHP": "58.2790", "USDPKR": "282.1800", "USDPLN": "3.6340", "USDQAR": "3.6315", "USDRON": "4.3303", "USDRUB": "82.8955", "USDSAR": "3.7501", "USDSEK": "9.4038", "USDSGD": "1.2895", "USDTHB": "32.4400", "USDTRY": "41.5658", "USDTWD": "30.4480", "USDUAH": "41.1014", "USDVND": "26 425.0000", "USDZAR": "17.2491"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 01.10.2025</th></tr>';

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
