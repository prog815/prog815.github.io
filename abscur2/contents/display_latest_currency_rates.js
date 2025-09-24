
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1305", "AUDJPY": "97.3997", "AUDSEK": "6.1514", "AUDUSD": "0.6598", "CADJPY": "106.7158", "CADSEK": "6.7398", "CHFAUD": "1.9161", "CHFHKD": "9.8303", "CHFJPY": "186.6245", "EURAUD": "1.7904", "EURCAD": "1.6344", "EURCHF": "0.9346", "EURCNY": "8.4024", "EURCZK": "24.2300", "EURGBP": "0.8732", "EURHKD": "9.1871", "EURILS": "3.9477", "EURJPY": "174.4100", "EURNOK": "11.6691", "EURNZD": "2.0162", "EURRUB": "98.8272", "EURSEK": "11.0154", "EURSGD": "1.5155", "EURUSD": "1.1815", "EURZAR": "20.3659", "GBPAUD": "2.0494", "GBPCAD": "1.8705", "GBPCHF": "1.0696", "GBPHKD": "10.5144", "GBPJPY": "199.6118", "GBPNOK": "13.3550", "GBPRUB": "113.1055", "GBPSEK": "12.6068", "GBPSGD": "1.7345", "GBPUSD": "1.3522", "HKDSEK": "1.1990", "HKDSGD": "0.1650", "JPYHKD": "0.0527", "JPYSEK": "0.0632", "NZDSEK": "5.4597", "NZDUSD": "0.5856", "SGDAUD": "1.1816", "SGDCHF": "0.6167", "SGDJPY": "115.0854", "USDAED": "3.6728", "USDARS": "1 366.0000", "USDBRL": "5.2826", "USDCAD": "1.3833", "USDCHF": "0.7910", "USDCLP": "948.5200", "USDCNY": "7.1150", "USDCOP": "3 853.7500", "USDCZK": "20.5080", "USDDKK": "6.3163", "USDEGP": "48.1000", "USDGBP": "0.7395", "USDHKD": "7.7758", "USDHUF": "329.7900", "USDIDR": "16 660.0000", "USDILS": "3.3413", "USDINR": "88.7880", "USDISK": "120.5600", "USDJPY": "147.6200", "USDKRW": "1 394.1600", "USDKWD": "0.3046", "USDKZT": "543.8100", "USDMXN": "18.3550", "USDMYR": "4.1960", "USDNOK": "9.8765", "USDPEN": "3.4979", "USDPHP": "57.2520", "USDPKR": "282.4800", "USDPLN": "3.6036", "USDQAR": "3.6357", "USDRON": "4.2941", "USDRUB": "83.6455", "USDSAR": "3.7507", "USDSEK": "9.3232", "USDSGD": "1.2827", "USDTHB": "31.8400", "USDTRY": "41.3851", "USDTWD": "30.2990", "USDUAH": "41.4107", "USDVND": "26 395.0000", "USDZAR": "17.2373"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 24.09.2025</th></tr>';

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
