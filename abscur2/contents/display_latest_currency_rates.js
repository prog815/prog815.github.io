
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1268", "AUDJPY": "97.4591", "AUDSEK": "6.1689", "AUDUSD": "0.6598", "CADJPY": "106.8968", "CADSEK": "6.7663", "CHFAUD": "1.9132", "CHFHKD": "9.8084", "CHFJPY": "186.4554", "EURAUD": "1.7879", "EURCAD": "1.6308", "EURCHF": "0.9350", "EURCNY": "8.3959", "EURCZK": "24.2150", "EURGBP": "0.8733", "EURHKD": "9.1704", "EURILS": "3.9420", "EURJPY": "174.3300", "EURNOK": "11.6960", "EURNZD": "2.0106", "EURRUB": "98.6889", "EURSEK": "11.0345", "EURSGD": "1.5124", "EURUSD": "1.1802", "EURZAR": "20.4466", "GBPAUD": "2.0479", "GBPCAD": "1.8671", "GBPCHF": "1.0704", "GBPHKD": "10.4991", "GBPJPY": "199.5857", "GBPNOK": "13.3907", "GBPRUB": "112.9880", "GBPSEK": "12.6333", "GBPSGD": "1.7316", "GBPUSD": "1.3512", "HKDSEK": "1.2033", "HKDSGD": "0.1649", "JPYHKD": "0.0526", "JPYSEK": "0.0633", "NZDSEK": "5.4827", "NZDUSD": "0.5864", "SGDAUD": "1.1827", "SGDCHF": "0.6182", "SGDJPY": "115.2634", "USDAED": "3.6729", "USDARS": "1 408.5000", "USDBRL": "5.3345", "USDCAD": "1.3818", "USDCHF": "0.7922", "USDCLP": "956.2200", "USDCNY": "7.1130", "USDCOP": "3 847.5000", "USDCZK": "20.5180", "USDDKK": "6.3229", "USDEGP": "48.1600", "USDGBP": "0.7401", "USDHKD": "7.7702", "USDHUF": "329.4000", "USDIDR": "16 600.0000", "USDILS": "3.3401", "USDINR": "88.2830", "USDISK": "120.6700", "USDJPY": "147.7100", "USDKRW": "1 390.8900", "USDKWD": "0.3046", "USDKZT": "542.7500", "USDMXN": "18.3506", "USDMYR": "4.2000", "USDNOK": "9.9102", "USDPEN": "3.5010", "USDPHP": "56.8790", "USDPKR": "283.1000", "USDPLN": "3.6050", "USDQAR": "3.6357", "USDRON": "4.2984", "USDRUB": "83.6205", "USDSAR": "3.7491", "USDSEK": "9.3497", "USDSGD": "1.2815", "USDTHB": "31.7300", "USDTRY": "41.3509", "USDTWD": "30.2090", "USDUAH": "41.3468", "USDVND": "26 395.0000", "USDZAR": "17.3247"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 23.09.2025</th></tr>';

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
