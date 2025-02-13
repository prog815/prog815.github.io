
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8748", "AUDJPY": "96.2970", "AUDSEK": "6.7936", "AUDUSD": "0.6261", "CADJPY": "107.6530", "CADSEK": "7.5986", "CHFAUD": "1.7575", "CHFHKD": "8.5767", "CHFJPY": "169.3430", "EURAUD": "1.6603", "EURCAD": "1.4853", "EURCHF": "0.9442", "EURCNY": "7.5857", "EURCZK": "25.0488", "EURGBP": "0.8337", "EURHKD": "8.0971", "EURILS": "3.7111", "EURJPY": "159.8870", "EURNOK": "11.7275", "EURNZD": "1.8460", "EURRUB": "94.8260", "EURSEK": "11.2889", "EURSGD": "1.4041", "EURUSD": "1.0400", "EURZAR": "19.2429", "GBPAUD": "1.9919", "GBPCAD": "1.7817", "GBPCHF": "1.1322", "GBPHKD": "9.7100", "GBPJPY": "191.8310", "GBPNOK": "14.0619", "GBPRUB": "113.7330", "GBPSEK": "13.5395", "GBPSGD": "1.6838", "GBPUSD": "1.2473", "HKDSEK": "1.3921", "HKDSGD": "0.1733", "JPYHKD": "0.0504", "JPYSEK": "0.0700", "NZDSEK": "6.1139", "NZDUSD": "0.5633", "SGDAUD": "1.1825", "SGDCHF": "0.6722", "SGDJPY": "113.8580", "USDAED": "3.6728", "USDARS": "1 056.2500", "USDBRL": "5.7714", "USDCAD": "1.4284", "USDCHF": "0.9077", "USDCLP": "947.9500", "USDCNY": "7.2920", "USDCOP": "4 166.0900", "USDCZK": "24.0810", "USDDKK": "7.1749", "USDEGP": "50.5900", "USDGBP": "0.8018", "USDHKD": "7.7885", "USDHUF": "386.6900", "USDIDR": "16 350.0000", "USDILS": "3.5744", "USDINR": "86.9400", "USDISK": "140.8800", "USDJPY": "153.7930", "USDKRW": "1 450.5400", "USDKWD": "0.3089", "USDKZT": "499.2300", "USDMXN": "20.6305", "USDMYR": "4.4555", "USDNOK": "11.2792", "USDPEN": "3.7120", "USDPHP": "58.0550", "USDPKR": "279.2284", "USDPLN": "4.0142", "USDQAR": "3.6400", "USDRON": "4.7866", "USDRUB": "91.3800", "USDSAR": "3.7475", "USDSEK": "10.8624", "USDSGD": "1.3507", "USDTHB": "33.8600", "USDTRY": "36.1120", "USDTWD": "32.7990", "USDUAH": "41.6696", "USDVND": "25 550.0000", "USDZAR": "18.5181"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 13.02.2025</th></tr>';

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
