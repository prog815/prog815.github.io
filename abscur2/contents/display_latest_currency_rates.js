
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0603", "AUDJPY": "99.5512", "AUDSEK": "6.1066", "AUDUSD": "0.6513", "CADJPY": "109.2176", "CADSEK": "6.7040", "CHFAUD": "1.9303", "CHFHKD": "9.7682", "CHFJPY": "192.1675", "EURAUD": "1.7846", "EURCAD": "1.6269", "EURCHF": "0.9247", "EURCNY": "8.2783", "EURCZK": "24.2900", "EURGBP": "0.8729", "EURHKD": "9.0322", "EURILS": "3.8058", "EURJPY": "177.6900", "EURNOK": "11.5943", "EURNZD": "2.0221", "EURRUB": "92.7041", "EURSEK": "10.9068", "EURSGD": "1.5090", "EURUSD": "1.1625", "EURZAR": "20.0525", "GBPAUD": "2.0434", "GBPCAD": "1.8626", "GBPCHF": "1.0586", "GBPHKD": "10.3406", "GBPJPY": "203.4281", "GBPNOK": "13.2739", "GBPRUB": "108.2575", "GBPSEK": "12.4868", "GBPSGD": "1.7276", "GBPUSD": "1.3309", "HKDSEK": "1.2075", "HKDSGD": "0.1671", "JPYHKD": "0.0508", "JPYSEK": "0.0614", "NZDSEK": "5.3929", "NZDUSD": "0.5748", "SGDAUD": "1.1828", "SGDCHF": "0.6127", "SGDJPY": "117.7490", "USDAED": "3.6729", "USDARS": "1 491.5000", "USDBRL": "5.3887", "USDCAD": "1.3995", "USDCHF": "0.7954", "USDCLP": "941.1800", "USDCNY": "7.1210", "USDCOP": "3 872.5000", "USDCZK": "20.8950", "USDDKK": "6.4233", "USDEGP": "47.5400", "USDGBP": "0.7514", "USDHKD": "7.7696", "USDHUF": "335.2600", "USDIDR": "16 590.0000", "USDILS": "3.2738", "USDINR": "87.8160", "USDISK": "123.0300", "USDJPY": "152.8500", "USDKRW": "1 438.8200", "USDKWD": "0.3065", "USDKZT": "537.2600", "USDMXN": "18.4418", "USDMYR": "4.2200", "USDNOK": "9.9736", "USDPEN": "3.3826", "USDPHP": "58.7250", "USDPKR": "281.9000", "USDPLN": "3.6443", "USDQAR": "3.6359", "USDRON": "4.3669", "USDRUB": "79.7455", "USDSAR": "3.7500", "USDSEK": "9.3822", "USDSGD": "1.2981", "USDTHB": "32.6400", "USDTRY": "41.9197", "USDTWD": "30.8330", "USDUAH": "42.0604", "USDVND": "26 280.0000", "USDZAR": "17.2495"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 24.10.2025</th></tr>';

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
