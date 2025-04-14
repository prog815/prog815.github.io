
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8742", "AUDJPY": "90.4650", "AUDSEK": "6.1424", "AUDUSD": "0.6322", "CADJPY": "103.2440", "CADSEK": "7.0445", "CHFAUD": "1.9396", "CHFHKD": "9.5081", "CHFJPY": "175.0550", "EURAUD": "1.8029", "EURCAD": "1.5802", "EURCHF": "0.9318", "EURCNY": "8.3079", "EURCZK": "25.0840", "EURGBP": "0.8635", "EURHKD": "8.8081", "EURILS": "4.1906", "EURJPY": "163.0250", "EURNOK": "12.0102", "EURNZD": "1.9401", "EURRUB": "93.7480", "EURSEK": "11.0873", "EURSGD": "1.4967", "EURUSD": "1.1389", "EURZAR": "21.7327", "GBPAUD": "2.0870", "GBPCAD": "1.8280", "GBPCHF": "1.0801", "GBPHKD": "10.1800", "GBPJPY": "188.8270", "GBPNOK": "13.9527", "GBPRUB": "109.2600", "GBPSEK": "12.7700", "GBPSGD": "1.7336", "GBPUSD": "1.3184", "HKDSEK": "1.2460", "HKDSGD": "0.1720", "JPYHKD": "0.0537", "JPYSEK": "0.0676", "NZDSEK": "5.6524", "NZDUSD": "0.5861", "SGDAUD": "1.2050", "SGDCHF": "0.6203", "SGDJPY": "108.8000", "USDAED": "3.6728", "USDARS": "1 074.0000", "USDBRL": "5.8658", "USDCAD": "1.3853", "USDCHF": "0.8195", "USDCLP": "970.4200", "USDCNY": "7.3130", "USDCOP": "4 276.3000", "USDCZK": "22.0090", "USDDKK": "6.5538", "USDEGP": "50.9500", "USDGBP": "0.7575", "USDHKD": "7.7561", "USDHUF": "360.5200", "USDIDR": "16 769.0000", "USDILS": "3.7136", "USDINR": "85.9380", "USDISK": "129.2500", "USDJPY": "143.2400", "USDKRW": "1 423.1900", "USDKWD": "0.3060", "USDKZT": "518.0300", "USDMXN": "20.1780", "USDMYR": "4.4100", "USDNOK": "10.5646", "USDPEN": "3.7261", "USDPHP": "56.9730", "USDPKR": "280.2400", "USDPLN": "3.7671", "USDQAR": "3.6400", "USDRON": "4.3883", "USDRUB": "82.2300", "USDSAR": "3.7508", "USDSEK": "9.7616", "USDSGD": "1.3186", "USDTHB": "33.5040", "USDTRY": "38.0404", "USDTWD": "32.3590", "USDUAH": "41.4031", "USDVND": "25 715.0000", "USDZAR": "18.9146"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.04.2025</th></tr>';

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
