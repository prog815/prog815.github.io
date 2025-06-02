
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0358", "AUDJPY": "92.6030", "AUDSEK": "6.1593", "AUDUSD": "0.6484", "CADJPY": "104.1950", "CADSEK": "6.9344", "CHFAUD": "1.8848", "CHFHKD": "9.5906", "CHFJPY": "174.4650", "EURAUD": "1.7613", "EURCAD": "1.5640", "EURCHF": "0.9340", "EURCNY": "8.1781", "EURCZK": "24.9082", "EURGBP": "0.8437", "EURHKD": "8.9585", "EURILS": "4.0339", "EURJPY": "162.9740", "EURNOK": "11.5197", "EURNZD": "1.8974", "EURRUB": "90.3400", "EURSEK": "10.8571", "EURSGD": "1.4689", "EURUSD": "1.1422", "EURZAR": "20.4173", "GBPAUD": "2.0920", "GBPCAD": "1.8485", "GBPCHF": "1.1062", "GBPHKD": "10.5470", "GBPJPY": "193.8290", "GBPNOK": "13.7354", "GBPRUB": "103.6040", "GBPSEK": "12.9002", "GBPSGD": "1.7357", "GBPUSD": "1.3451", "HKDSEK": "1.2218", "HKDSGD": "0.1646", "JPYHKD": "0.0541", "JPYSEK": "0.0660", "NZDSEK": "5.7096", "NZDUSD": "0.5958", "SGDAUD": "1.2039", "SGDCHF": "0.6366", "SGDJPY": "111.5740", "USDAED": "3.6726", "USDARS": "1 188.0000", "USDBRL": "5.7302", "USDCAD": "1.3740", "USDCHF": "0.8217", "USDCLP": "944.7800", "USDCNY": "7.1960", "USDCOP": "4 156.1300", "USDCZK": "21.9420", "USDDKK": "6.5716", "USDEGP": "49.7100", "USDGBP": "0.7432", "USDHKD": "7.8401", "USDHUF": "355.5300", "USDIDR": "16 295.0000", "USDILS": "3.5103", "USDINR": "85.4770", "USDISK": "128.5000", "USDJPY": "144.0210", "USDKRW": "1 381.9700", "USDKWD": "0.3067", "USDKZT": "510.5300", "USDMXN": "19.4110", "USDMYR": "4.2530", "USDNOK": "10.2049", "USDPEN": "3.6169", "USDPHP": "55.7760", "USDPKR": "281.7800", "USDPLN": "3.7412", "USDQAR": "3.6400", "USDRON": "4.4572", "USDRUB": "77.3750", "USDSAR": "3.7505", "USDSEK": "9.5785", "USDSGD": "1.2907", "USDTHB": "32.8000", "USDTRY": "39.2048", "USDTWD": "29.8990", "USDUAH": "41.5903", "USDVND": "26 030.0000", "USDZAR": "17.9922"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 02.06.2025</th></tr>';

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
