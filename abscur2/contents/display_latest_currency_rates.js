
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9163", "AUDJPY": "92.5460", "AUDSEK": "6.1776", "AUDUSD": "0.6324", "CADJPY": "103.5260", "CADSEK": "6.9501", "CHFAUD": "1.8431", "CHFHKD": "9.0560", "CHFJPY": "170.1630", "EURAUD": "1.7463", "EURCAD": "1.5541", "EURCHF": "0.9486", "EURCNY": "8.0441", "EURCZK": "25.0620", "EURGBP": "0.8431", "EURHKD": "8.6058", "EURILS": "4.0850", "EURJPY": "161.4500", "EURNOK": "11.4037", "EURNZD": "1.9085", "EURRUB": "92.9150", "EURSEK": "10.8119", "EURSGD": "1.4740", "EURUSD": "1.1045", "EURZAR": "20.6928", "GBPAUD": "2.0700", "GBPCAD": "1.8423", "GBPCHF": "1.1245", "GBPHKD": "10.1900", "GBPJPY": "191.4020", "GBPNOK": "13.5152", "GBPRUB": "110.1760", "GBPSEK": "12.7948", "GBPSGD": "1.7452", "GBPUSD": "1.3088", "HKDSEK": "1.2545", "HKDSGD": "0.1714", "JPYHKD": "0.0530", "JPYSEK": "0.0664", "NZDSEK": "5.5968", "NZDUSD": "0.5786", "SGDAUD": "1.1848", "SGDCHF": "0.6411", "SGDJPY": "109.4380", "USDAED": "3.6729", "USDARS": "1 074.2500", "USDBRL": "5.6321", "USDCAD": "1.4077", "USDCHF": "0.8592", "USDCLP": "949.3300", "USDCNY": "7.2808", "USDCOP": "4 162.3701", "USDCZK": "22.6550", "USDDKK": "6.7455", "USDEGP": "50.5400", "USDGBP": "0.7632", "USDHKD": "7.7768", "USDHUF": "364.3000", "USDIDR": "16 554.0000", "USDILS": "3.6967", "USDINR": "85.2270", "USDISK": "130.8000", "USDJPY": "146.2070", "USDKRW": "1 437.6800", "USDKWD": "0.3074", "USDKZT": "501.6800", "USDMXN": "19.9390", "USDMYR": "4.4180", "USDNOK": "10.3171", "USDPEN": "3.6728", "USDPHP": "56.8330", "USDPKR": "280.5551", "USDPLN": "3.8166", "USDQAR": "3.6400", "USDRON": "4.4871", "USDRUB": "83.8510", "USDSAR": "3.7475", "USDSEK": "9.7912", "USDSGD": "1.3358", "USDTHB": "34.1800", "USDTRY": "37.9878", "USDTWD": "32.9940", "USDUAH": "41.3162", "USDVND": "25 790.0000", "USDZAR": "18.7329"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 03.04.2025</th></tr>';

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
