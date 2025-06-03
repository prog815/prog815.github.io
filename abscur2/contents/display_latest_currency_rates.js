
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0641", "AUDJPY": "92.3630", "AUDSEK": "6.1905", "AUDUSD": "0.6455", "CADJPY": "104.1700", "CADSEK": "6.9822", "CHFAUD": "1.8864", "CHFHKD": "9.5563", "CHFJPY": "174.2910", "EURAUD": "1.7644", "EURCAD": "1.5648", "EURCHF": "0.9352", "EURCNY": "8.1891", "EURCZK": "24.8720", "EURGBP": "0.8434", "EURHKD": "8.9368", "EURILS": "4.0141", "EURJPY": "163.0330", "EURNOK": "11.5406", "EURNZD": "1.9001", "EURRUB": "89.7230", "EURSEK": "10.9311", "EURSGD": "1.4675", "EURUSD": "1.1392", "EURZAR": "20.3934", "GBPAUD": "2.0919", "GBPCAD": "1.8485", "GBPCHF": "1.1062", "GBPHKD": "10.5470", "GBPJPY": "193.8290", "GBPNOK": "13.7354", "GBPRUB": "103.6040", "GBPSEK": "12.9002", "GBPSGD": "1.7357", "GBPUSD": "1.3451", "HKDSEK": "1.2218", "HKDSGD": "0.1646", "JPYHKD": "0.0541", "JPYSEK": "0.0660", "NZDSEK": "5.7096", "NZDUSD": "0.5958", "SGDAUD": "1.2039", "SGDCHF": "0.6366", "SGDJPY": "111.5740", "USDAED": "3.6726", "USDARS": "1 188.0000", "USDBRL": "5.7302", "USDCAD": "1.3740", "USDCHF": "0.8217", "USDCLP": "944.7800", "USDCNY": "7.1960", "USDCOP": "4 156.1300", "USDCZK": "21.9420", "USDDKK": "6.5716", "USDEGP": "49.7100", "USDGBP": "0.7432", "USDHKD": "7.8401", "USDHUF": "355.5300", "USDIDR": "16 295.0000", "USDILS": "3.5103", "USDINR": "85.4770", "USDISK": "128.5000", "USDJPY": "144.0210", "USDKRW": "1 381.9700", "USDKWD": "0.3067", "USDKZT": "510.5300", "USDMXN": "19.4110", "USDMYR": "4.2530", "USDNOK": "10.2049", "USDPEN": "3.6169", "USDPHP": "55.7760", "USDPKR": "281.7800", "USDPLN": "3.7412", "USDQAR": "3.6400", "USDRON": "4.4572", "USDRUB": "77.3750", "USDSAR": "3.7505", "USDSEK": "9.5785", "USDSGD": "1.2907", "USDTHB": "32.8000", "USDTRY": "39.2048", "USDTWD": "29.8990", "USDUAH": "41.5903", "USDVND": "26 030.0000", "USDZAR": "17.9922"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 03.06.2025</th></tr>';

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
