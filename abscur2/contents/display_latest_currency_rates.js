
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0009", "AUDJPY": "93.2380", "AUDSEK": "6.2575", "AUDUSD": "0.6400", "CADJPY": "104.2490", "CADSEK": "6.9864", "CHFAUD": "1.8639", "CHFHKD": "9.3280", "CHFJPY": "173.8440", "EURAUD": "1.7434", "EURCAD": "1.5589", "EURCHF": "0.9348", "EURCNY": "8.0390", "EURCZK": "24.8850", "EURGBP": "0.8407", "EURHKD": "8.7251", "EURILS": "3.9689", "EURJPY": "162.6090", "EURNOK": "11.5904", "EURNZD": "1.8979", "EURRUB": "90.5070", "EURSEK": "10.9189", "EURSGD": "1.4510", "EURUSD": "1.1164", "EURZAR": "20.1351", "GBPAUD": "2.0741", "GBPCAD": "1.8545", "GBPCHF": "1.1120", "GBPHKD": "10.3760", "GBPJPY": "193.4030", "GBPNOK": "13.7873", "GBPRUB": "107.6510", "GBPSEK": "12.9848", "GBPSGD": "1.7249", "GBPUSD": "1.3277", "HKDSEK": "1.2501", "HKDSGD": "0.1663", "JPYHKD": "0.0534", "JPYSEK": "0.0665", "NZDSEK": "5.7600", "NZDUSD": "0.5881", "SGDAUD": "1.2012", "SGDCHF": "0.6443", "SGDJPY": "112.0300", "USDAED": "3.6729", "USDARS": "1 142.0000", "USDBRL": "5.6677", "USDCAD": "1.3965", "USDCHF": "0.8375", "USDCLP": "943.6300", "USDCNY": "7.2100", "USDCOP": "4 170.5000", "USDCZK": "22.2840", "USDDKK": "6.6817", "USDEGP": "50.0800", "USDGBP": "0.7527", "USDHKD": "7.8136", "USDHUF": "360.5000", "USDIDR": "16 434.0000", "USDILS": "3.5504", "USDINR": "85.5520", "USDISK": "130.7500", "USDJPY": "145.5810", "USDKRW": "1 398.1000", "USDKWD": "0.3072", "USDKZT": "508.8300", "USDMXN": "19.4510", "USDMYR": "4.2920", "USDNOK": "10.3723", "USDPEN": "3.6862", "USDPHP": "55.7980", "USDPKR": "281.4600", "USDPLN": "3.8200", "USDQAR": "3.6400", "USDRON": "4.5768", "USDRUB": "80.8750", "USDSAR": "3.7503", "USDSEK": "9.7680", "USDSGD": "1.2994", "USDTHB": "33.2300", "USDTRY": "38.8527", "USDTWD": "30.2000", "USDUAH": "41.5376", "USDVND": "25 917.0000", "USDZAR": "18.0312"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 16.05.2025</th></tr>';

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
