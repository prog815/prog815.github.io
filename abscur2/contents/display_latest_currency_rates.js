
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9567", "AUDJPY": "95.2990", "AUDSEK": "6.4201", "AUDUSD": "0.6383", "CADJPY": "104.4630", "CADSEK": "7.0543", "CHFAUD": "1.7809", "CHFHKD": "8.8347", "CHFJPY": "169.4800", "EURAUD": "1.7106", "EURCAD": "1.5602", "EURCHF": "0.9619", "EURCNY": "7.8903", "EURCZK": "25.0490", "EURGBP": "0.8407", "EURHKD": "8.4774", "EURILS": "3.9812", "EURJPY": "163.0250", "EURNOK": "11.5078", "EURNZD": "1.8747", "EURRUB": "91.0050", "EURSEK": "11.0230", "EURSGD": "1.4533", "EURUSD": "1.0920", "EURZAR": "19.7475", "GBPAUD": "2.0341", "GBPCAD": "1.8556", "GBPCHF": "1.1441", "GBPHKD": "10.0810", "GBPJPY": "193.8940", "GBPNOK": "13.6738", "GBPRUB": "108.2400", "GBPSEK": "13.1102", "GBPSGD": "1.7285", "GBPUSD": "1.2970", "HKDSEK": "1.2965", "HKDSGD": "0.1713", "JPYHKD": "0.0517", "JPYSEK": "0.0668", "NZDSEK": "5.8615", "NZDUSD": "0.5823", "SGDAUD": "1.1779", "SGDCHF": "0.6613", "SGDJPY": "112.2450", "USDAED": "3.6724", "USDARS": "1 067.5000", "USDBRL": "5.6870", "USDCAD": "1.4294", "USDCHF": "0.8810", "USDCLP": "920.7500", "USDCNY": "7.2240", "USDCOP": "4 069.5700", "USDCZK": "22.9619", "USDDKK": "6.8336", "USDEGP": "50.4800", "USDGBP": "0.7702", "USDHKD": "7.7695", "USDHUF": "364.8300", "USDIDR": "16 389.0000", "USDILS": "3.6464", "USDINR": "86.6310", "USDISK": "133.6400", "USDJPY": "149.2640", "USDKRW": "1 444.4800", "USDKWD": "0.3078", "USDKZT": "496.4300", "USDMXN": "19.9530", "USDMYR": "4.4420", "USDNOK": "10.5427", "USDPEN": "3.6408", "USDPHP": "57.2760", "USDPKR": "280.1001", "USDPLN": "3.8336", "USDQAR": "3.6400", "USDRON": "4.5595", "USDRUB": "83.4000", "USDSAR": "3.7474", "USDSEK": "10.0968", "USDSGD": "1.3302", "USDTHB": "33.5200", "USDTRY": "36.6355", "USDTWD": "32.9600", "USDUAH": "41.4395", "USDVND": "25 520.0000", "USDZAR": "18.0972"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 18.03.2025</th></tr>';

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
