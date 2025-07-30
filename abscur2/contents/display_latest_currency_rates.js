
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1095", "AUDJPY": "96.6196", "AUDSEK": "6.2816", "AUDUSD": "0.6509", "CADJPY": "107.7996", "CADSEK": "7.0084", "CHFAUD": "1.9068", "CHFHKD": "9.7430", "CHFJPY": "184.2373", "EURAUD": "1.7734", "EURCAD": "1.5897", "EURCHF": "0.9302", "EURCNY": "8.2857", "EURCZK": "24.5770", "EURGBP": "0.8645", "EURHKD": "9.0627", "EURILS": "3.8843", "EURJPY": "171.3700", "EURNOK": "11.7543", "EURNZD": "1.9384", "EURRUB": "93.6248", "EURSEK": "11.1416", "EURSGD": "1.4866", "EURUSD": "1.1545", "EURZAR": "20.6280", "GBPAUD": "2.0507", "GBPCAD": "1.8380", "GBPCHF": "1.0755", "GBPHKD": "10.4780", "GBPJPY": "198.1377", "GBPNOK": "13.5900", "GBPRUB": "108.2463", "GBPSEK": "12.8816", "GBPSGD": "1.7188", "GBPUSD": "1.3348", "HKDSEK": "1.2294", "HKDSGD": "0.1640", "JPYHKD": "0.0529", "JPYSEK": "0.0650", "NZDSEK": "5.7469", "NZDUSD": "0.5955", "SGDAUD": "1.1931", "SGDCHF": "0.6257", "SGDJPY": "115.2753", "USDAED": "3.6729", "USDARS": "1 291.0000", "USDBRL": "5.5742", "USDCAD": "1.3770", "USDCHF": "0.8057", "USDCLP": "970.8800", "USDCNY": "7.1774", "USDCOP": "4 133.8000", "USDCZK": "21.2880", "USDDKK": "6.4633", "USDEGP": "48.6000", "USDGBP": "0.7492", "USDHKD": "7.8499", "USDHUF": "345.9900", "USDIDR": "16 390.0000", "USDILS": "3.3645", "USDINR": "87.0810", "USDISK": "123.0200", "USDJPY": "148.4400", "USDKRW": "1 388.0900", "USDKWD": "0.3054", "USDKZT": "543.0200", "USDMXN": "18.7460", "USDMYR": "4.2310", "USDNOK": "10.1813", "USDPEN": "3.5500", "USDPHP": "57.2950", "USDPKR": "283.0000", "USDPLN": "3.7020", "USDQAR": "3.6272", "USDRON": "4.3939", "USDRUB": "81.0955", "USDSAR": "3.7507", "USDSEK": "9.6506", "USDSGD": "1.2877", "USDTHB": "32.3500", "USDTRY": "40.5591", "USDTWD": "29.6420", "USDUAH": "41.7500", "USDVND": "26 195.0000", "USDZAR": "17.8675"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 29.07.2025</th></tr>';

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
