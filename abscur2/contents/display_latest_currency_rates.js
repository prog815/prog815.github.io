
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8076", "AUDJPY": "97.4020", "AUDSEK": "6.9328", "AUDUSD": "0.6176", "CADJPY": "109.6590", "CADSEK": "7.8083", "CHFAUD": "1.7659", "CHFHKD": "8.4985", "CHFJPY": "172.1570", "EURAUD": "1.6598", "EURCAD": "1.4746", "EURCHF": "0.9395", "EURCNY": "7.5188", "EURCZK": "25.2946", "EURGBP": "0.8438", "EURHKD": "7.9837", "EURILS": "3.7185", "EURJPY": "161.7820", "EURNOK": "11.7132", "EURNZD": "1.8322", "EURRUB": "105.3400", "EURSEK": "11.5106", "EURSGD": "1.4047", "EURUSD": "1.0257", "EURZAR": "19.4164", "GBPAUD": "1.9662", "GBPCAD": "1.7467", "GBPCHF": "1.1129", "GBPHKD": "9.4560", "GBPJPY": "191.5330", "GBPNOK": "13.8751", "GBPRUB": "124.8500", "GBPSEK": "13.6322", "GBPSGD": "1.6639", "GBPUSD": "1.2150", "HKDSEK": "1.4397", "HKDSGD": "0.1759", "JPYHKD": "0.0491", "JPYSEK": "0.0706", "NZDSEK": "6.2781", "NZDUSD": "0.5596", "SGDAUD": "1.1812", "SGDCHF": "0.6687", "SGDJPY": "115.0870", "USDAED": "3.6727", "USDARS": "1 040.0000", "USDBRL": "6.0700", "USDCAD": "1.4383", "USDCHF": "0.9163", "USDCLP": "1 007.9200", "USDCNY": "7.3312", "USDCOP": "4 301.0100", "USDCZK": "24.6480", "USDDKK": "7.2766", "USDEGP": "50.4000", "USDGBP": "0.8226", "USDHKD": "7.7849", "USDHUF": "401.7400", "USDIDR": "16 260.0000", "USDILS": "3.6297", "USDINR": "86.4980", "USDISK": "141.4000", "USDJPY": "157.7070", "USDKRW": "1 458.9900", "USDKWD": "0.3088", "USDKZT": "529.9300", "USDMXN": "20.5900", "USDMYR": "4.5055", "USDNOK": "11.4219", "USDPEN": "3.7808", "USDPHP": "58.7310", "USDPKR": "278.6550", "USDPLN": "4.1608", "USDQAR": "3.6400", "USDRON": "4.8454", "USDRUB": "102.6800", "USDSAR": "3.7511", "USDSEK": "11.2194", "USDSGD": "1.3693", "USDTHB": "34.6900", "USDTRY": "35.4913", "USDTWD": "32.9830", "USDUAH": "42.2841", "USDVND": "25 388.0000", "USDZAR": "18.9180"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.01.2025</th></tr>';

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
