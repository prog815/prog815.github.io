
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8888", "AUDJPY": "98.3060", "AUDSEK": "6.9006", "AUDUSD": "0.6281", "CADJPY": "109.0310", "CADSEK": "7.6578", "CHFAUD": "1.7559", "CHFHKD": "8.5939", "CHFJPY": "172.7190", "EURAUD": "1.6589", "EURCAD": "1.4958", "EURCHF": "0.9442", "EURCNY": "7.5770", "EURCZK": "25.1340", "EURGBP": "0.8452", "EURHKD": "8.1140", "EURILS": "3.6801", "EURJPY": "163.1000", "EURNOK": "11.7392", "EURNZD": "1.8387", "EURRUB": "103.3810", "EURSEK": "11.4556", "EURSGD": "1.4114", "EURUSD": "1.0419", "EURZAR": "19.2471", "GBPAUD": "1.9627", "GBPCAD": "1.7699", "GBPCHF": "1.1169", "GBPHKD": "9.5970", "GBPJPY": "192.9780", "GBPNOK": "13.8870", "GBPRUB": "122.3070", "GBPSEK": "13.5491", "GBPSGD": "1.6653", "GBPUSD": "1.2167", "HKDSEK": "1.4103", "HKDSGD": "0.1738", "JPYHKD": "0.0495", "JPYSEK": "0.0697", "NZDSEK": "6.2309", "NZDUSD": "0.5669", "SGDAUD": "1.1796", "SGDCHF": "0.6683", "SGDJPY": "114.1050", "USDAED": "3.6727", "USDARS": "1 041.5000", "USDBRL": "5.9310", "USDCAD": "1.4480", "USDCHF": "0.9143", "USDCLP": "1 005.7800", "USDCNY": "7.3240", "USDCOP": "4 335.5000", "USDCZK": "24.5530", "USDDKK": "7.2646", "USDEGP": "50.3500", "USDGBP": "0.8217", "USDHKD": "7.7857", "USDHUF": "401.8700", "USDIDR": "16 359.0000", "USDILS": "3.5614", "USDINR": "86.5510", "USDISK": "140.6000", "USDJPY": "156.5280", "USDKRW": "1 435.7600", "USDKWD": "0.3081", "USDKZT": "520.7300", "USDMXN": "20.4703", "USDMYR": "4.4330", "USDNOK": "11.2662", "USDPEN": "3.7188", "USDPHP": "58.5420", "USDPKR": "278.6600", "USDPLN": "4.0496", "USDQAR": "3.6400", "USDRON": "4.7727", "USDRUB": "99.2010", "USDSAR": "3.7506", "USDSEK": "10.9927", "USDSGD": "1.3546", "USDTHB": "34.3600", "USDTRY": "35.4307", "USDTWD": "32.8870", "USDUAH": "42.1729", "USDVND": "25 315.0000", "USDZAR": "18.7328"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 22.01.2025</th></tr>';

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
