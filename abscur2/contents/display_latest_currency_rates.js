
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0309", "AUDJPY": "92.8550", "AUDSEK": "6.2448", "AUDUSD": "0.6461", "CADJPY": "103.9280", "CADSEK": "6.9663", "CHFAUD": "1.8788", "CHFHKD": "9.4165", "CHFJPY": "174.6360", "EURAUD": "1.7499", "EURCAD": "1.5640", "EURCHF": "0.9308", "EURCNY": "8.2255", "EURCZK": "24.8880", "EURGBP": "0.8511", "EURHKD": "8.7680", "EURILS": "4.0834", "EURJPY": "162.6220", "EURNOK": "11.7539", "EURNZD": "1.8961", "EURRUB": "91.0890", "EURSEK": "10.9376", "EURSGD": "1.4583", "EURUSD": "1.1314", "EURZAR": "20.6615", "GBPAUD": "2.0550", "GBPCAD": "1.8365", "GBPCHF": "1.0922", "GBPHKD": "10.3020", "GBPJPY": "190.9940", "GBPNOK": "13.8081", "GBPRUB": "108.0420", "GBPSEK": "12.8488", "GBPSGD": "1.7110", "GBPUSD": "1.3289", "HKDSEK": "1.2459", "HKDSGD": "0.1663", "JPYHKD": "0.0536", "JPYSEK": "0.0663", "NZDSEK": "5.7382", "NZDUSD": "0.5964", "SGDAUD": "1.1953", "SGDCHF": "0.6369", "SGDJPY": "111.2810", "USDAED": "3.6729", "USDARS": "1 200.0000", "USDBRL": "5.6878", "USDCAD": "1.3821", "USDCHF": "0.8223", "USDCLP": "940.5700", "USDCNY": "7.2706", "USDCOP": "4 293.9700", "USDCZK": "21.9910", "USDDKK": "6.5923", "USDEGP": "50.6200", "USDGBP": "0.7524", "USDHKD": "7.7498", "USDHUF": "356.1200", "USDIDR": "16 429.0000", "USDILS": "3.6083", "USDINR": "84.2550", "USDISK": "129.6000", "USDJPY": "143.7000", "USDKRW": "1 374.3400", "USDKWD": "0.3065", "USDKZT": "516.3300", "USDMXN": "19.6830", "USDMYR": "4.1950", "USDNOK": "10.3622", "USDPEN": "3.6487", "USDPHP": "55.6480", "USDPKR": "280.8500", "USDPLN": "3.7671", "USDQAR": "3.6400", "USDRON": "4.3970", "USDRUB": "80.3750", "USDSAR": "3.7504", "USDSEK": "9.6444", "USDSGD": "1.2887", "USDTHB": "32.7990", "USDTRY": "38.5419", "USDTWD": "29.1570", "USDUAH": "41.7091", "USDVND": "25 942.0000", "USDZAR": "18.2595"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 05.05.2025</th></tr>';

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
