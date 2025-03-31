
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8863", "AUDJPY": "94.2190", "AUDSEK": "6.2936", "AUDUSD": "0.6284", "CADJPY": "104.6370", "CADSEK": "6.9806", "CHFAUD": "1.7999", "CHFHKD": "8.8196", "CHFJPY": "170.1540", "EURAUD": "1.7216", "EURCAD": "1.5500", "EURCHF": "0.9525", "EURCNY": "7.8464", "EURCZK": "24.8920", "EURGBP": "0.8366", "EURHKD": "8.3984", "EURILS": "3.9676", "EURJPY": "161.5820", "EURNOK": "11.3512", "EURNZD": "1.8999", "EURRUB": "91.8040", "EURSEK": "10.8295", "EURSGD": "1.4524", "EURUSD": "1.0835", "EURZAR": "19.6625", "GBPAUD": "2.0608", "GBPCAD": "1.8532", "GBPCHF": "1.1387", "GBPHKD": "10.0703", "GBPJPY": "193.9440", "GBPNOK": "13.5949", "GBPRUB": "109.4295", "GBPSEK": "12.9532", "GBPSGD": "1.7367", "GBPUSD": "1.2938", "HKDSEK": "1.2845", "HKDSGD": "0.1726", "JPYHKD": "0.0519", "JPYSEK": "0.0660", "NZDSEK": "5.7284", "NZDUSD": "0.5704", "SGDAUD": "1.1860", "SGDCHF": "0.6581", "SGDJPY": "111.1630", "USDAED": "3.6727", "USDARS": "1 070.5000", "USDBRL": "5.7587", "USDCAD": "1.4317", "USDCHF": "0.8795", "USDCLP": "950.4300", "USDCNY": "7.2623", "USDCOP": "4 198.3999", "USDCZK": "22.9600", "USDDKK": "6.8815", "USDEGP": "50.5200", "USDGBP": "0.7715", "USDHKD": "7.7781", "USDHUF": "370.8100", "USDIDR": "16 554.0000", "USDILS": "3.6871", "USDINR": "85.5140", "USDISK": "131.6800", "USDJPY": "149.1760", "USDKRW": "1 469.4800", "USDKWD": "0.3078", "USDKZT": "496.8660", "USDMXN": "20.3440", "USDMYR": "4.4350", "USDNOK": "10.4810", "USDPEN": "3.6568", "USDPHP": "57.3600", "USDPKR": "278.7420", "USDPLN": "3.8732", "USDQAR": "3.5068", "USDRON": "4.5922", "USDRUB": "84.7000", "USDSAR": "3.7462", "USDSEK": "9.9816", "USDSGD": "1.3424", "USDTHB": "33.8700", "USDTRY": "37.8759", "USDTWD": "33.1850", "USDUAH": "41.4863", "USDVND": "25 550.0000", "USDZAR": "18.3910"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 30.03.2025</th></tr>';

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
