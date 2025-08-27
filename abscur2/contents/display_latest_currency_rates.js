
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0592", "AUDJPY": "95.6921", "AUDSEK": "6.2013", "AUDUSD": "0.6492", "CADJPY": "106.5183", "CADSEK": "6.9029", "CHFAUD": "1.9183", "CHFHKD": "9.7049", "CHFJPY": "183.5616", "EURAUD": "1.7918", "EURCAD": "1.6109", "EURCHF": "0.9348", "EURCNY": "8.3256", "EURCZK": "24.4760", "EURGBP": "0.8635", "EURHKD": "9.0718", "EURILS": "3.8958", "EURJPY": "171.5900", "EURNOK": "11.7881", "EURNZD": "1.9858", "EURRUB": "93.7048", "EURSEK": "11.1197", "EURSGD": "1.4954", "EURUSD": "1.1642", "EURZAR": "20.5114", "GBPAUD": "2.0764", "GBPCAD": "1.8654", "GBPCHF": "1.0824", "GBPHKD": "10.5050", "GBPJPY": "198.6952", "GBPNOK": "13.6504", "GBPRUB": "108.5079", "GBPSEK": "12.8764", "GBPSGD": "1.7316", "GBPUSD": "1.3480", "HKDSEK": "1.2257", "HKDSGD": "0.1648", "JPYHKD": "0.0529", "JPYSEK": "0.0648", "NZDSEK": "5.5966", "NZDUSD": "0.5859", "SGDAUD": "1.1991", "SGDCHF": "0.6251", "SGDJPY": "114.7439", "USDAED": "3.6726", "USDARS": "1 355.5000", "USDBRL": "5.4307", "USDCAD": "1.3838", "USDCHF": "0.8030", "USDCLP": "966.2000", "USDCNY": "7.1550", "USDCOP": "4 042.0000", "USDCZK": "21.0260", "USDDKK": "6.4117", "USDEGP": "48.5500", "USDGBP": "0.7418", "USDHKD": "7.7930", "USDHUF": "340.0000", "USDIDR": "16 290.0000", "USDILS": "3.3487", "USDINR": "87.6120", "USDISK": "122.8600", "USDJPY": "147.4000", "USDKRW": "1 394.7900", "USDKWD": "0.3055", "USDKZT": "535.6000", "USDMXN": "18.6520", "USDMYR": "4.2140", "USDNOK": "10.1264", "USDPEN": "3.5483", "USDPHP": "56.9080", "USDPKR": "282.9000", "USDPLN": "3.6552", "USDQAR": "3.6274", "USDRON": "4.3414", "USDRUB": "80.4955", "USDSAR": "3.7520", "USDSEK": "9.5522", "USDSGD": "1.2846", "USDTHB": "32.4400", "USDTRY": "41.0164", "USDTWD": "30.5800", "USDUAH": "41.3000", "USDVND": "26 340.0000", "USDZAR": "17.6200"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 27.08.2025</th></tr>';

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
