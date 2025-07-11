
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1707", "AUDJPY": "96.3349", "AUDSEK": "6.2507", "AUDUSD": "0.6587", "CADJPY": "107.1115", "CADSEK": "6.9499", "CHFAUD": "1.9051", "CHFHKD": "9.8506", "CHFJPY": "183.5237", "EURAUD": "1.7760", "EURCAD": "1.5975", "EURCHF": "0.9324", "EURCNY": "8.3945", "EURCZK": "24.6170", "EURGBP": "0.8616", "EURHKD": "9.1844", "EURILS": "3.8686", "EURJPY": "171.1100", "EURNOK": "11.7751", "EURNZD": "1.9384", "EURRUB": "90.7282", "EURSEK": "11.1026", "EURSGD": "1.4970", "EURUSD": "1.1700", "EURZAR": "20.7478", "GBPAUD": "2.0606", "GBPCAD": "1.8533", "GBPCHF": "1.0816", "GBPHKD": "10.6547", "GBPJPY": "198.5051", "GBPNOK": "13.6601", "GBPRUB": "105.2525", "GBPSEK": "12.8800", "GBPSGD": "1.7367", "GBPUSD": "1.3573", "HKDSEK": "1.2089", "HKDSGD": "0.1630", "JPYHKD": "0.0537", "JPYSEK": "0.0649", "NZDSEK": "5.7268", "NZDUSD": "0.6035", "SGDAUD": "1.1865", "SGDCHF": "0.6228", "SGDJPY": "114.3025", "USDAED": "3.6729", "USDARS": "1 255.0000", "USDBRL": "5.5313", "USDCAD": "1.3654", "USDCHF": "0.7969", "USDCLP": "950.0500", "USDCNY": "7.1780", "USDCOP": "4 009.5000", "USDCZK": "21.0400", "USDDKK": "6.3763", "USDEGP": "49.4600", "USDGBP": "0.7368", "USDHKD": "7.8499", "USDHUF": "340.4600", "USDIDR": "16 215.0000", "USDILS": "3.3065", "USDINR": "85.7210", "USDISK": "121.9000", "USDJPY": "146.2500", "USDKRW": "1 371.3700", "USDKWD": "0.3054", "USDKZT": "518.8200", "USDMXN": "18.6050", "USDMYR": "4.2450", "USDNOK": "10.0642", "USDPEN": "3.5450", "USDPHP": "56.4790", "USDPKR": "284.2500", "USDPLN": "3.6321", "USDQAR": "3.6500", "USDRON": "4.3334", "USDRUB": "77.5455", "USDSAR": "3.7505", "USDSEK": "9.4894", "USDSGD": "1.2795", "USDTHB": "32.6000", "USDTRY": "40.0429", "USDTWD": "29.2260", "USDUAH": "41.8200", "USDVND": "26 113.0000", "USDZAR": "17.7332"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 10.07.2025</th></tr>';

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
