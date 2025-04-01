
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8555", "AUDJPY": "93.5930", "AUDSEK": "6.2852", "AUDUSD": "0.6246", "CADJPY": "104.1310", "CADSEK": "6.9932", "CHFAUD": "1.8112", "CHFHKD": "8.8291", "CHFJPY": "169.6860", "EURAUD": "1.7337", "EURCAD": "1.5576", "EURCHF": "0.9560", "EURCNY": "7.8481", "EURCZK": "24.9220", "EURGBP": "0.8373", "EURHKD": "8.4187", "EURILS": "4.0241", "EURJPY": "162.1560", "EURNOK": "11.3667", "EURNZD": "1.9082", "EURRUB": "89.7850", "EURSEK": "10.8588", "EURSGD": "1.4530", "EURUSD": "1.0828", "EURZAR": "19.7868", "GBPAUD": "2.0702", "GBPCAD": "1.8578", "GBPCHF": "1.1417", "GBPHKD": "10.0630", "GBPJPY": "193.7070", "GBPNOK": "13.5737", "GBPRUB": "107.2030", "GBPSEK": "12.9657", "GBPSGD": "1.7355", "GBPUSD": "1.2927", "HKDSEK": "1.2866", "HKDSGD": "0.1726", "JPYHKD": "0.0517", "JPYSEK": "0.0665", "NZDSEK": "5.7101", "NZDUSD": "0.5674", "SGDAUD": "1.1931", "SGDCHF": "0.6560", "SGDJPY": "111.5900", "USDAED": "3.6729", "USDARS": "1 073.0000", "USDBRL": "5.6999", "USDCAD": "1.4392", "USDCHF": "0.8834", "USDCLP": "947.8800", "USDCNY": "7.2562", "USDCOP": "4 169.4702", "USDCZK": "23.0290", "USDDKK": "6.8908", "USDEGP": "50.5200", "USDGBP": "0.7738", "USDHKD": "7.7797", "USDHUF": "371.9400", "USDIDR": "16 554.0000", "USDILS": "3.7190", "USDINR": "85.4430", "USDISK": "132.0000", "USDJPY": "149.8420", "USDKRW": "1 472.0300", "USDKWD": "0.3080", "USDKZT": "497.6701", "USDMXN": "20.4696", "USDMYR": "4.4350", "USDNOK": "10.4996", "USDPEN": "3.6715", "USDPHP": "57.3700", "USDPKR": "276.8863", "USDPLN": "3.8684", "USDQAR": "3.6400", "USDRON": "4.5938", "USDRUB": "82.7500", "USDSAR": "3.7480", "USDSEK": "10.0319", "USDSGD": "1.3434", "USDTHB": "34.0200", "USDTRY": "37.9242", "USDTWD": "33.2360", "USDUAH": "41.4787", "USDVND": "25 565.0000", "USDZAR": "18.3130"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 31.03.2025</th></tr>';

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
