
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9686", "AUDJPY": "93.3830", "AUDSEK": "6.1964", "AUDUSD": "0.6399", "CADJPY": "104.7730", "CADSEK": "6.9840", "CHFAUD": "1.8790", "CHFHKD": "9.3509", "CHFJPY": "175.5380", "EURAUD": "1.7539", "EURCAD": "1.5629", "EURCHF": "0.9328", "EURCNY": "8.1193", "EURCZK": "24.8600", "EURGBP": "0.8469", "EURHKD": "8.7220", "EURILS": "4.0049", "EURJPY": "163.8040", "EURNOK": "11.7142", "EURNZD": "1.9011", "EURRUB": "92.6060", "EURSEK": "10.9235", "EURSGD": "1.4584", "EURUSD": "1.1226", "EURZAR": "20.4149", "GBPAUD": "2.0694", "GBPCAD": "1.8444", "GBPCHF": "1.1004", "GBPHKD": "10.2990", "GBPJPY": "193.3380", "GBPNOK": "13.8278", "GBPRUB": "109.3070", "GBPSEK": "12.8899", "GBPSGD": "1.7218", "GBPUSD": "1.3247", "HKDSEK": "1.2504", "HKDSGD": "0.1672", "JPYHKD": "0.0530", "JPYSEK": "0.0662", "NZDSEK": "5.7128", "NZDUSD": "0.5900", "SGDAUD": "1.2016", "SGDCHF": "0.6377", "SGDJPY": "112.0500", "USDAED": "3.6727", "USDARS": "1 110.0000", "USDBRL": "5.6777", "USDCAD": "1.3921", "USDCHF": "0.8304", "USDCLP": "934.0200", "USDCNY": "7.2450", "USDCOP": "4 246.0600", "USDCZK": "22.1420", "USDDKK": "6.6431", "USDEGP": "50.5700", "USDGBP": "0.7546", "USDHKD": "7.7732", "USDHUF": "360.8900", "USDIDR": "16 489.0000", "USDILS": "3.5694", "USDINR": "85.4880", "USDISK": "129.0800", "USDJPY": "145.9100", "USDKRW": "1 403.8400", "USDKWD": "0.3066", "USDKZT": "515.8300", "USDMXN": "19.5205", "USDMYR": "4.2770", "USDNOK": "10.4251", "USDPEN": "3.6281", "USDPHP": "55.6250", "USDPKR": "281.2300", "USDPLN": "3.7869", "USDQAR": "3.6400", "USDRON": "4.5550", "USDRUB": "82.3750", "USDSAR": "3.7507", "USDSEK": "9.7196", "USDSGD": "1.2998", "USDTHB": "32.8990", "USDTRY": "38.7130", "USDTWD": "30.2480", "USDUAH": "41.4388", "USDVND": "25 958.0000", "USDZAR": "18.1481"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 08.05.2025</th></tr>';

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
