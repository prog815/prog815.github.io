
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8243", "AUDJPY": "93.4460", "AUDSEK": "6.6727", "AUDUSD": "0.6202", "CADJPY": "104.0730", "CADSEK": "7.4273", "CHFAUD": "1.7817", "CHFHKD": "8.6109", "CHFJPY": "166.7920", "EURAUD": "1.6704", "EURCAD": "1.5005", "EURCHF": "0.9368", "EURCNY": "7.5547", "EURCZK": "25.0540", "EURGBP": "0.8246", "EURHKD": "8.0706", "EURILS": "3.7241", "EURJPY": "156.2360", "EURNOK": "11.6785", "EURNZD": "1.8520", "EURRUB": "92.7200", "EURSEK": "11.1733", "EURSGD": "1.4013", "EURUSD": "1.0374", "EURZAR": "19.3946", "GBPAUD": "2.0259", "GBPCAD": "1.8196", "GBPCHF": "1.1353", "GBPHKD": "9.7810", "GBPJPY": "189.3800", "GBPNOK": "14.1606", "GBPRUB": "112.4150", "GBPSEK": "13.5451", "GBPSGD": "1.6964", "GBPUSD": "1.2574", "HKDSEK": "1.3825", "HKDSGD": "0.1737", "JPYHKD": "0.0514", "JPYSEK": "0.0710", "NZDSEK": "6.0159", "NZDUSD": "0.5597", "SGDAUD": "1.1913", "SGDCHF": "0.6674", "SGDJPY": "111.3400", "USDAED": "3.6725", "USDARS": "1 063.5000", "USDBRL": "5.9031", "USDCAD": "1.4464", "USDCHF": "0.9024", "USDCLP": "958.1800", "USDCNY": "7.2790", "USDCOP": "4 152.3200", "USDCZK": "24.1470", "USDDKK": "7.1864", "USDEGP": "50.6000", "USDGBP": "0.7949", "USDHKD": "7.7783", "USDHUF": "388.7000", "USDIDR": "16 574.0000", "USDILS": "3.5939", "USDINR": "87.4470", "USDISK": "139.6500", "USDJPY": "150.5450", "USDKRW": "1 461.2600", "USDKWD": "0.3086", "USDKZT": "498.0200", "USDMXN": "20.5291", "USDMYR": "4.4600", "USDNOK": "11.2459", "USDPEN": "3.7200", "USDPHP": "57.9500", "USDPKR": "279.5000", "USDPLN": "4.0359", "USDQAR": "3.6390", "USDRON": "4.7947", "USDRUB": "89.3700", "USDSAR": "3.7503", "USDSEK": "10.7410", "USDSGD": "1.3507", "USDTHB": "34.2000", "USDTRY": "36.3935", "USDTWD": "32.9020", "USDUAH": "41.5140", "USDVND": "25 530.0000", "USDZAR": "18.6566"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 01.03.2025</th></tr>';

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
