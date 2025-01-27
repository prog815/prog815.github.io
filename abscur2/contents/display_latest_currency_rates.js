
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9103", "AUDJPY": "97.1110", "AUDSEK": "6.8906", "AUDUSD": "0.6305", "CADJPY": "107.4160", "CADSEK": "7.6219", "CHFAUD": "1.7653", "CHFHKD": "8.6710", "CHFJPY": "171.5260", "EURAUD": "1.6690", "EURCAD": "1.5088", "EURCHF": "0.9449", "EURCNY": "7.6193", "EURCZK": "25.1010", "EURGBP": "0.8408", "EURHKD": "8.1913", "EURILS": "3.7948", "EURJPY": "162.0720", "EURNOK": "11.8107", "EURNZD": "1.8451", "EURRUB": "101.9490", "EURSEK": "11.5016", "EURSGD": "1.4127", "EURUSD": "1.0520", "EURZAR": "19.6257", "GBPAUD": "1.9850", "GBPCAD": "1.7945", "GBPCHF": "1.1236", "GBPHKD": "9.7400", "GBPJPY": "192.6320", "GBPNOK": "14.0442", "GBPRUB": "121.2310", "GBPSEK": "13.6772", "GBPSGD": "1.6800", "GBPUSD": "1.2512", "HKDSEK": "1.4022", "HKDSGD": "0.1724", "JPYHKD": "0.0503", "JPYSEK": "0.0705", "NZDSEK": "6.2289", "NZDUSD": "0.5702", "SGDAUD": "1.1811", "SGDCHF": "0.6685", "SGDJPY": "114.6410", "USDAED": "3.6727", "USDARS": "1 046.0000", "USDBRL": "5.9330", "USDCAD": "1.4342", "USDCHF": "0.8979", "USDCLP": "983.2700", "USDCNY": "7.2430", "USDCOP": "4 243.5000", "USDCZK": "23.8420", "USDDKK": "7.0901", "USDEGP": "50.2350", "USDGBP": "0.7988", "USDHKD": "7.7864", "USDHUF": "388.2300", "USDIDR": "16 170.0000", "USDILS": "3.6115", "USDINR": "86.2600", "USDISK": "139.3200", "USDJPY": "154.0140", "USDKRW": "1 431.8500", "USDKWD": "0.3079", "USDKZT": "516.0300", "USDMXN": "20.5008", "USDMYR": "4.3780", "USDNOK": "11.2198", "USDPEN": "3.7178", "USDPHP": "58.3160", "USDPKR": "278.7261", "USDPLN": "4.0074", "USDQAR": "3.6400", "USDRON": "4.7232", "USDRUB": "96.5800", "USDSAR": "3.7479", "USDSEK": "10.9207", "USDSGD": "1.3422", "USDTHB": "33.6100", "USDTRY": "35.7290", "USDTWD": "32.7940", "USDUAH": "41.9751", "USDVND": "25 062.0000", "USDZAR": "18.6613"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 27.01.2025</th></tr>';

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
