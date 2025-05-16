
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9966", "AUDJPY": "93.1900", "AUDSEK": "6.2226", "AUDUSD": "0.6403", "CADJPY": "104.2610", "CADSEK": "6.9667", "CHFAUD": "1.8665", "CHFHKD": "9.3347", "CHFJPY": "174.1030", "EURAUD": "1.7463", "EURCAD": "1.5617", "EURCHF": "0.9352", "EURCNY": "8.0511", "EURCZK": "24.9160", "EURGBP": "0.8408", "EURHKD": "8.7300", "EURILS": "3.9717", "EURJPY": "162.8630", "EURNOK": "11.6642", "EURNZD": "1.9040", "EURRUB": "89.5100", "EURSEK": "10.8884", "EURSGD": "1.4509", "EURUSD": "1.1187", "EURZAR": "20.1662", "GBPAUD": "2.0764", "GBPCAD": "1.8563", "GBPCHF": "1.1119", "GBPHKD": "10.3860", "GBPJPY": "193.6580", "GBPNOK": "13.8720", "GBPRUB": "106.4120", "GBPSEK": "12.9458", "GBPSGD": "1.7253", "GBPUSD": "1.3300", "HKDSEK": "1.2442", "HKDSGD": "0.1662", "JPYHKD": "0.0534", "JPYSEK": "0.0663", "NZDSEK": "5.6941", "NZDUSD": "0.5872", "SGDAUD": "1.2030", "SGDCHF": "0.6436", "SGDJPY": "111.9980", "USDAED": "3.6729", "USDARS": "1 137.5000", "USDBRL": "5.6817", "USDCAD": "1.3959", "USDCHF": "0.8357", "USDCLP": "937.8300", "USDCNY": "7.2067", "USDCOP": "4 202.4700", "USDCZK": "22.2640", "USDDKK": "6.6657", "USDEGP": "50.1000", "USDGBP": "0.7516", "USDHKD": "7.8063", "USDHUF": "359.7000", "USDIDR": "16 509.0000", "USDILS": "3.5514", "USDINR": "85.4960", "USDISK": "129.3900", "USDJPY": "145.5920", "USDKRW": "1 396.9800", "USDKWD": "0.3074", "USDKZT": "510.2800", "USDMXN": "19.4765", "USDMYR": "4.2800", "USDNOK": "10.4059", "USDPEN": "3.6808", "USDPHP": "55.7860", "USDPKR": "281.3900", "USDPLN": "3.7917", "USDQAR": "3.6400", "USDRON": "4.5608", "USDRUB": "79.8750", "USDSAR": "3.7507", "USDSEK": "9.7156", "USDSGD": "1.2974", "USDTHB": "33.1790", "USDTRY": "38.8213", "USDTWD": "30.1630", "USDUAH": "41.5376", "USDVND": "25 920.0000", "USDZAR": "18.0388"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 15.05.2025</th></tr>';

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
