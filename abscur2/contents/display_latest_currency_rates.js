
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9589", "AUDJPY": "91.8870", "AUDSEK": "6.1902", "AUDUSD": "0.6393", "CADJPY": "103.6670", "CADSEK": "6.9857", "CHFAUD": "1.8885", "CHFHKD": "9.3716", "CHFJPY": "173.5800", "EURAUD": "1.7764", "EURCAD": "1.5742", "EURCHF": "0.9402", "EURCNY": "8.2801", "EURCZK": "24.9280", "EURGBP": "0.8535", "EURHKD": "8.8158", "EURILS": "4.1152", "EURJPY": "163.2860", "EURNOK": "11.8531", "EURNZD": "1.9059", "EURRUB": "94.2360", "EURSEK": "11.0061", "EURSGD": "1.4947", "EURUSD": "1.1364", "EURZAR": "21.2228", "GBPAUD": "2.0818", "GBPCAD": "1.8446", "GBPCHF": "1.1016", "GBPHKD": "10.3260", "GBPJPY": "191.2990", "GBPNOK": "13.8885", "GBPRUB": "110.4070", "GBPSEK": "12.8924", "GBPSGD": "1.7503", "GBPUSD": "1.3314", "HKDSEK": "1.2482", "HKDSGD": "0.1695", "JPYHKD": "0.0537", "JPYSEK": "0.0671", "NZDSEK": "5.7559", "NZDUSD": "0.5959", "SGDAUD": "1.1881", "SGDCHF": "0.6286", "SGDJPY": "109.2040", "USDAED": "3.6729", "USDARS": "1 168.0000", "USDBRL": "5.6888", "USDCAD": "1.3853", "USDCHF": "0.8270", "USDCLP": "934.2500", "USDCNY": "7.2860", "USDCOP": "4 217.4700", "USDCZK": "21.9310", "USDDKK": "6.5683", "USDEGP": "50.9100", "USDGBP": "0.7509", "USDHKD": "7.7566", "USDHUF": "356.7100", "USDIDR": "16 824.0000", "USDILS": "3.6169", "USDINR": "85.3600", "USDISK": "127.7500", "USDJPY": "143.6230", "USDKRW": "1 437.3500", "USDKWD": "0.3063", "USDKZT": "514.4300", "USDMXN": "19.4980", "USDMYR": "4.3700", "USDNOK": "10.4141", "USDPEN": "3.6682", "USDPHP": "56.1800", "USDPKR": "280.8600", "USDPLN": "3.7539", "USDQAR": "3.6400", "USDRON": "4.3788", "USDRUB": "82.5000", "USDSAR": "3.7512", "USDSEK": "9.6680", "USDSGD": "1.3151", "USDTHB": "33.5100", "USDTRY": "38.3947", "USDTWD": "32.5330", "USDUAH": "41.6890", "USDVND": "26 018.0000", "USDZAR": "18.6724"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 25.04.2025</th></tr>';

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
