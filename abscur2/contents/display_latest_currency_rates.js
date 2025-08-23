
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0697", "AUDJPY": "95.3282", "AUDSEK": "6.1547", "AUDUSD": "0.6488", "CADJPY": "106.2708", "CADSEK": "6.8612", "CHFAUD": "1.9235", "CHFHKD": "9.7515", "CHFJPY": "183.3645", "EURAUD": "1.8045", "EURCAD": "1.6197", "EURCHF": "0.9387", "EURCNY": "8.3939", "EURCZK": "24.4930", "EURGBP": "0.8658", "EURHKD": "9.1540", "EURILS": "3.9473", "EURJPY": "172.1300", "EURNOK": "11.7804", "EURNZD": "1.9964", "EURRUB": "94.3591", "EURSEK": "11.1132", "EURSGD": "1.5008", "EURUSD": "1.1715", "EURZAR": "20.4211", "GBPAUD": "2.0842", "GBPCAD": "1.8696", "GBPCHF": "1.0835", "GBPHKD": "10.5660", "GBPJPY": "198.6788", "GBPNOK": "13.5975", "GBPRUB": "108.9136", "GBPSEK": "12.8274", "GBPSGD": "1.7323", "GBPUSD": "1.3522", "HKDSEK": "1.2140", "HKDSGD": "0.1640", "JPYHKD": "0.0532", "JPYSEK": "0.0646", "NZDSEK": "5.5656", "NZDUSD": "0.5867", "SGDAUD": "1.2031", "SGDCHF": "0.6255", "SGDJPY": "114.6905", "USDAED": "3.6726", "USDARS": "1 320.0000", "USDBRL": "5.4217", "USDCAD": "1.3826", "USDCHF": "0.8013", "USDCLP": "957.4000", "USDCNY": "7.1660", "USDCOP": "4 014.5000", "USDCZK": "20.9070", "USDDKK": "6.3685", "USDEGP": "48.4500", "USDGBP": "0.7395", "USDHKD": "7.8139", "USDHUF": "336.9400", "USDIDR": "16 335.0000", "USDILS": "3.3694", "USDINR": "87.3260", "USDISK": "122.2400", "USDJPY": "146.9300", "USDKRW": "1 383.8200", "USDKWD": "0.3053", "USDKZT": "537.1100", "USDMXN": "18.5810", "USDMYR": "4.2250", "USDNOK": "10.0558", "USDPEN": "3.4876", "USDPHP": "56.4010", "USDPKR": "282.9000", "USDPLN": "3.6351", "USDQAR": "3.6177", "USDRON": "4.3087", "USDRUB": "80.5455", "USDSAR": "3.7527", "USDSEK": "9.4863", "USDSGD": "1.2811", "USDTHB": "32.3700", "USDTRY": "40.9307", "USDTWD": "30.3670", "USDUAH": "41.3500", "USDVND": "26 300.0000", "USDZAR": "17.4316"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 22.08.2025</th></tr>';

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
