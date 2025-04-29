
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9641", "AUDJPY": "91.3400", "AUDSEK": "6.1526", "AUDUSD": "0.6428", "CADJPY": "102.6870", "CADSEK": "6.9788", "CHFAUD": "1.8957", "CHFHKD": "9.3482", "CHFJPY": "173.2160", "EURAUD": "1.7754", "EURCAD": "1.5793", "EURCHF": "0.9364", "EURCNY": "8.3300", "EURCZK": "24.9240", "EURGBP": "0.8500", "EURHKD": "8.8576", "EURILS": "4.1261", "EURJPY": "162.2340", "EURNOK": "11.8175", "EURNZD": "1.9105", "EURRUB": "94.3780", "EURSEK": "10.9355", "EURSGD": "1.4944", "EURUSD": "1.1420", "EURZAR": "21.1394", "GBPAUD": "2.0894", "GBPCAD": "1.8577", "GBPCHF": "1.1016", "GBPHKD": "10.4220", "GBPJPY": "190.8410", "GBPNOK": "13.9055", "GBPRUB": "111.0580", "GBPSEK": "12.8639", "GBPSGD": "1.7571", "GBPUSD": "1.3434", "HKDSEK": "1.2472", "HKDSGD": "0.1687", "JPYHKD": "0.0538", "JPYSEK": "0.0670", "NZDSEK": "5.7559", "NZDUSD": "0.5976", "SGDAUD": "1.1879", "SGDCHF": "0.6260", "SGDJPY": "108.4150", "USDAED": "3.6729", "USDARS": "1 177.0000", "USDBRL": "5.6537", "USDCAD": "1.3831", "USDCHF": "0.8195", "USDCLP": "943.0000", "USDCNY": "7.2850", "USDCOP": "4 209.9700", "USDCZK": "21.8210", "USDDKK": "6.5355", "USDEGP": "50.8000", "USDGBP": "0.7441", "USDHKD": "7.7562", "USDHUF": "353.7200", "USDIDR": "16 849.0000", "USDILS": "3.6124", "USDINR": "85.1150", "USDISK": "127.7500", "USDJPY": "142.0650", "USDKRW": "1 435.8400", "USDKWD": "0.3064", "USDKZT": "512.7300", "USDMXN": "19.5710", "USDMYR": "4.3600", "USDNOK": "10.3394", "USDPEN": "3.6622", "USDPHP": "56.4040", "USDPKR": "280.7300", "USDPLN": "3.7344", "USDQAR": "3.6400", "USDRON": "4.3827", "USDRUB": "82.4250", "USDSAR": "3.7482", "USDSEK": "9.5722", "USDSGD": "1.3087", "USDTHB": "33.3200", "USDTRY": "38.4149", "USDTWD": "32.4220", "USDUAH": "41.7513", "USDVND": "25 985.0000", "USDZAR": "18.5113"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 28.04.2025</th></tr>';

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
