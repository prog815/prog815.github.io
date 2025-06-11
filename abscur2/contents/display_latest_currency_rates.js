
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1195", "AUDJPY": "94.4920", "AUDSEK": "6.2573", "AUDUSD": "0.6522", "CADJPY": "105.9290", "CADSEK": "7.0155", "CHFAUD": "1.8626", "CHFHKD": "9.5602", "CHFJPY": "176.0830", "EURAUD": "1.7502", "EURCAD": "1.5618", "EURCHF": "0.9398", "EURCNY": "8.2041", "EURCZK": "24.7580", "EURGBP": "0.8459", "EURHKD": "8.9655", "EURILS": "3.9846", "EURJPY": "165.4560", "EURNOK": "11.5497", "EURNZD": "1.8875", "EURRUB": "89.6440", "EURSEK": "10.9641", "EURSGD": "1.4692", "EURUSD": "1.1424", "EURZAR": "20.1967", "GBPAUD": "2.0687", "GBPCAD": "1.8455", "GBPCHF": "1.1105", "GBPHKD": "10.5940", "GBPJPY": "195.5350", "GBPNOK": "13.6534", "GBPRUB": "105.9350", "GBPSEK": "12.9540", "GBPSGD": "1.7357", "GBPUSD": "1.3497", "HKDSEK": "1.2215", "HKDSGD": "0.1639", "JPYHKD": "0.0539", "JPYSEK": "0.0658", "NZDSEK": "5.7907", "NZDUSD": "0.6050", "SGDAUD": "1.1910", "SGDCHF": "0.6390", "SGDJPY": "112.6040", "USDAED": "3.6728", "USDARS": "1 187.5000", "USDBRL": "5.5697", "USDCAD": "1.3670", "USDCHF": "0.8223", "USDCLP": "940.1000", "USDCNY": "7.1870", "USDCOP": "4 204.4700", "USDCZK": "21.6590", "USDDKK": "6.5285", "USDEGP": "49.4800", "USDGBP": "0.7406", "USDHKD": "7.8477", "USDHUF": "350.6900", "USDIDR": "16 271.0000", "USDILS": "3.4858", "USDINR": "85.5470", "USDISK": "125.8000", "USDJPY": "144.8590", "USDKRW": "1 363.2300", "USDKWD": "0.3061", "USDKZT": "508.3300", "USDMXN": "19.0580", "USDMYR": "4.2330", "USDNOK": "10.1053", "USDPEN": "3.6237", "USDPHP": "55.7400", "USDPKR": "281.9700", "USDPLN": "3.7247", "USDQAR": "3.6400", "USDRON": "4.4029", "USDRUB": "78.3500", "USDSAR": "3.7504", "USDSEK": "9.5927", "USDSGD": "1.2863", "USDTHB": "32.5800", "USDTRY": "39.1604", "USDTWD": "29.8950", "USDUAH": "41.4919", "USDVND": "25 990.0000", "USDZAR": "17.6946"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 10.06.2025</th></tr>';

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
