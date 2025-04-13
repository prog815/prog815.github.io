
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8742", "AUDJPY": "90.2680", "AUDSEK": "6.1424", "AUDUSD": "0.6286", "CADJPY": "103.4950", "CADSEK": "7.0445", "CHFAUD": "1.9493", "CHFHKD": "9.5081", "CHFJPY": "176.0130", "EURAUD": "1.8057", "EURCAD": "1.5746", "EURCHF": "0.9258", "EURCNY": "8.2813", "EURCZK": "25.0840", "EURGBP": "0.8679", "EURHKD": "8.8081", "EURILS": "4.2233", "EURJPY": "163.0550", "EURNOK": "12.1097", "EURNZD": "1.9499", "EURRUB": "94.5520", "EURSEK": "11.1013", "EURSGD": "1.4981", "EURUSD": "1.1358", "EURZAR": "21.7327", "GBPAUD": "2.0808", "GBPCAD": "1.8143", "GBPCHF": "1.0667", "GBPHKD": "10.1460", "GBPJPY": "187.8460", "GBPNOK": "13.9527", "GBPRUB": "108.9310", "GBPSEK": "12.7677", "GBPSGD": "1.7249", "GBPUSD": "1.3085", "HKDSEK": "1.2591", "HKDSGD": "0.1720", "JPYHKD": "0.0537", "JPYSEK": "0.0676", "NZDSEK": "5.6524", "NZDUSD": "0.5824", "SGDAUD": "1.2050", "SGDCHF": "0.6177", "SGDJPY": "108.8080", "USDAED": "3.6727", "USDARS": "1 074.0000", "USDBRL": "5.8658", "USDCAD": "1.3864", "USDCHF": "0.8148", "USDCLP": "970.2600", "USDCNY": "7.2920", "USDCOP": "4 276.2700", "USDCZK": "22.0580", "USDDKK": "6.5710", "USDEGP": "51.2800", "USDGBP": "0.7640", "USDHKD": "7.7532", "USDHUF": "360.5200", "USDIDR": "16 789.0000", "USDILS": "3.7136", "USDINR": "86.1600", "USDISK": "129.2500", "USDJPY": "143.4900", "USDKRW": "1 418.6200", "USDKWD": "0.3060", "USDKZT": "518.0300", "USDMXN": "20.3130", "USDMYR": "4.4200", "USDNOK": "10.6492", "USDPEN": "3.7261", "USDPHP": "57.2310", "USDPKR": "280.2400", "USDPLN": "3.7696", "USDQAR": "3.6400", "USDRON": "4.3883", "USDRUB": "83.0000", "USDSAR": "3.7508", "USDSEK": "9.7616", "USDSGD": "1.3186", "USDTHB": "33.5040", "USDTRY": "38.0542", "USDTWD": "32.3590", "USDUAH": "41.4031", "USDVND": "25 715.0000", "USDZAR": "19.1195"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 11.04.2025</th></tr>';

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
