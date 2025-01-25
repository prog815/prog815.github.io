
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9129", "AUDJPY": "98.4540", "AUDSEK": "6.8936", "AUDUSD": "0.6315", "CADJPY": "108.7010", "CADSEK": "7.6001", "CHFAUD": "1.7454", "CHFHKD": "8.5981", "CHFJPY": "172.1230", "EURAUD": "1.6618", "EURCAD": "1.5053", "EURCHF": "0.9507", "EURCNY": "7.5997", "EURCZK": "25.0787", "EURGBP": "0.8406", "EURHKD": "8.1699", "EURILS": "3.7579", "EURJPY": "163.6650", "EURNOK": "11.7470", "EURNZD": "1.8375", "EURRUB": "102.6070", "EURSEK": "11.4603", "EURSGD": "1.4112", "EURUSD": "1.0495", "EURZAR": "19.2875", "GBPAUD": "1.9767", "GBPCAD": "1.7780", "GBPCHF": "1.1245", "GBPHKD": "9.6630", "GBPJPY": "194.0620", "GBPNOK": "13.9182", "GBPRUB": "121.7960", "GBPSEK": "13.5706", "GBPSGD": "1.6736", "GBPUSD": "1.2408", "HKDSEK": "1.4033", "HKDSGD": "0.1731", "JPYHKD": "0.0495", "JPYSEK": "0.0694", "NZDSEK": "6.2380", "NZDUSD": "0.5704", "SGDAUD": "1.1745", "SGDCHF": "0.6717", "SGDJPY": "115.8960", "USDAED": "3.6727", "USDARS": "1 047.0000", "USDBRL": "5.8825", "USDCAD": "1.4325", "USDCHF": "0.9063", "USDCLP": "982.7800", "USDCNY": "7.2480", "USDCOP": "4 193.5300", "USDCZK": "23.9530", "USDDKK": "7.1275", "USDEGP": "50.2400", "USDGBP": "0.8059", "USDHKD": "7.7893", "USDHUF": "390.6000", "USDIDR": "16 170.0000", "USDILS": "3.5895", "USDINR": "86.2210", "USDISK": "139.8000", "USDJPY": "156.3440", "USDKRW": "1 433.5600", "USDKWD": "0.3079", "USDKZT": "517.6300", "USDMXN": "20.2110", "USDMYR": "4.3714", "USDNOK": "11.2198", "USDPEN": "3.7120", "USDPHP": "58.3120", "USDPKR": "278.6864", "USDPLN": "4.0247", "USDQAR": "3.6400", "USDRON": "4.7518", "USDRUB": "97.9760", "USDSAR": "3.7479", "USDSEK": "10.9422", "USDSGD": "1.3490", "USDTHB": "33.6100", "USDTRY": "35.6878", "USDTWD": "32.7050", "USDUAH": "42.0325", "USDVND": "25 070.0000", "USDZAR": "18.3666"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 24.01.2025</th></tr>';

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
