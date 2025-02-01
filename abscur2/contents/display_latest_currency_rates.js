
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8340", "AUDJPY": "96.3620", "AUDSEK": "6.8836", "AUDUSD": "0.6210", "CADJPY": "106.7010", "CADSEK": "7.6352", "CHFAUD": "1.7635", "CHFHKD": "8.5518", "CHFJPY": "170.3400", "EURAUD": "1.6678", "EURCAD": "1.5061", "EURCHF": "0.9438", "EURCNY": "7.5247", "EURCZK": "25.1461", "EURGBP": "0.8359", "EURHKD": "8.0764", "EURILS": "3.7051", "EURJPY": "160.7340", "EURNOK": "11.7325", "EURNZD": "1.8380", "EURRUB": "102.3840", "EURSEK": "11.4973", "EURSGD": "1.4074", "EURUSD": "1.0358", "EURZAR": "19.3277", "GBPAUD": "1.9951", "GBPCAD": "1.8016", "GBPCHF": "1.1288", "GBPHKD": "9.6530", "GBPJPY": "192.2720", "GBPNOK": "14.0332", "GBPRUB": "122.3680", "GBPSEK": "13.7498", "GBPSGD": "1.6822", "GBPUSD": "1.2391", "HKDSEK": "1.4236", "HKDSGD": "0.1742", "JPYHKD": "0.0500", "JPYSEK": "0.0710", "NZDSEK": "6.2376", "NZDUSD": "0.5634", "SGDAUD": "1.1857", "SGDCHF": "0.6695", "SGDJPY": "114.0630", "USDAED": "3.6726", "USDARS": "1 050.5000", "USDBRL": "5.8410", "USDCAD": "1.4541", "USDCHF": "0.9111", "USDCLP": "980.3800", "USDCNY": "7.2507", "USDCOP": "4 202.5000", "USDCZK": "24.2920", "USDDKK": "7.2012", "USDEGP": "50.1800", "USDGBP": "0.8069", "USDHKD": "7.7919", "USDHUF": "393.3400", "USDIDR": "16 294.0000", "USDILS": "3.5730", "USDINR": "86.6470", "USDISK": "140.8500", "USDJPY": "155.1810", "USDKRW": "1 455.6700", "USDKWD": "0.3085", "USDKZT": "518.4300", "USDMXN": "20.6880", "USDMYR": "4.4500", "USDNOK": "11.3142", "USDPEN": "3.7268", "USDPHP": "58.4110", "USDPKR": "278.7700", "USDPLN": "4.0587", "USDQAR": "3.6400", "USDRON": "4.7988", "USDRUB": "98.3250", "USDSAR": "3.7465", "USDSEK": "11.0982", "USDSGD": "1.3583", "USDTHB": "33.7600", "USDTRY": "35.7898", "USDTWD": "32.9660", "USDUAH": "41.8242", "USDVND": "25 060.0000", "USDZAR": "18.6611"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 01.02.2025</th></tr>';

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
