
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1228", "AUDJPY": "96.4739", "AUDSEK": "6.2265", "AUDUSD": "0.6526", "CADJPY": "107.3410", "CADSEK": "6.9279", "CHFAUD": "1.9007", "CHFHKD": "9.7369", "CHFJPY": "183.3664", "EURAUD": "1.7870", "EURCAD": "1.6076", "EURCHF": "0.9411", "EURCNY": "8.3795", "EURCZK": "24.4470", "EURGBP": "0.8644", "EURHKD": "9.1632", "EURILS": "3.9777", "EURJPY": "172.5600", "EURNOK": "11.9128", "EURNZD": "1.9599", "EURRUB": "92.7367", "EURSEK": "11.1373", "EURSGD": "1.4979", "EURUSD": "1.1673", "EURZAR": "20.5263", "GBPAUD": "2.0679", "GBPCAD": "1.8585", "GBPCHF": "1.0880", "GBPHKD": "10.5934", "GBPJPY": "199.4966", "GBPNOK": "13.7722", "GBPRUB": "107.2117", "GBPSEK": "12.8757", "GBPSGD": "1.7317", "GBPUSD": "1.3495", "HKDSEK": "1.2154", "HKDSGD": "0.1635", "JPYHKD": "0.0531", "JPYSEK": "0.0645", "NZDSEK": "5.6817", "NZDUSD": "0.5955", "SGDAUD": "1.1942", "SGDCHF": "0.6283", "SGDJPY": "115.2042", "USDAED": "3.6727", "USDARS": "1 316.0000", "USDBRL": "5.3890", "USDCAD": "1.3772", "USDCHF": "0.8062", "USDCLP": "954.0000", "USDCNY": "7.1829", "USDCOP": "4 014.5000", "USDCZK": "20.9430", "USDDKK": "6.3913", "USDEGP": "48.4000", "USDGBP": "0.7410", "USDHKD": "7.8499", "USDHUF": "338.4500", "USDIDR": "16 280.0000", "USDILS": "3.4076", "USDINR": "87.5860", "USDISK": "122.5400", "USDJPY": "147.8300", "USDKRW": "1 384.0200", "USDKWD": "0.3052", "USDKZT": "540.8900", "USDMXN": "18.5960", "USDMYR": "4.2280", "USDNOK": "10.2054", "USDPEN": "3.5280", "USDPHP": "56.8860", "USDPKR": "283.2500", "USDPLN": "3.6422", "USDQAR": "3.6268", "USDRON": "4.3332", "USDRUB": "79.4455", "USDSAR": "3.7526", "USDSEK": "9.5411", "USDSGD": "1.2832", "USDTHB": "32.3900", "USDTRY": "40.7028", "USDTWD": "29.9170", "USDUAH": "41.4500", "USDVND": "26 245.0000", "USDZAR": "17.5844"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 12.08.2025</th></tr>';

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
