
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8897", "AUDJPY": "96.4280", "AUDSEK": "6.8265", "AUDUSD": "0.6278", "CADJPY": "107.3660", "CADSEK": "7.6014", "CHFAUD": "1.7463", "CHFHKD": "8.5444", "CHFJPY": "168.5080", "EURAUD": "1.6523", "EURCAD": "1.4840", "EURCHF": "0.9456", "EURCNY": "7.5845", "EURCZK": "25.0790", "EURGBP": "0.8329", "EURHKD": "8.0802", "EURILS": "3.7235", "EURJPY": "159.3440", "EURNOK": "11.6599", "EURNZD": "1.8389", "EURRUB": "97.7930", "EURSEK": "11.2823", "EURSGD": "1.4034", "EURUSD": "1.0375", "EURZAR": "19.1145", "GBPAUD": "1.9835", "GBPCAD": "1.7812", "GBPCHF": "1.1351", "GBPHKD": "9.6970", "GBPJPY": "191.2990", "GBPNOK": "13.9950", "GBPRUB": "117.3960", "GBPSEK": "13.5428", "GBPSGD": "1.6841", "GBPUSD": "1.2453", "HKDSEK": "1.3951", "HKDSGD": "0.1736", "JPYHKD": "0.0504", "JPYSEK": "0.0703", "NZDSEK": "6.1340", "NZDUSD": "0.5640", "SGDAUD": "1.1772", "SGDCHF": "0.6738", "SGDJPY": "113.5280", "USDAED": "3.6728", "USDARS": "1 055.5000", "USDBRL": "5.7686", "USDCAD": "1.4304", "USDCHF": "0.9113", "USDCLP": "958.6000", "USDCNY": "7.3091", "USDCOP": "4 136.2700", "USDCZK": "24.1600", "USDDKK": "7.1901", "USDEGP": "50.5800", "USDGBP": "0.8029", "USDHKD": "7.7887", "USDHUF": "387.7900", "USDIDR": "16 363.0000", "USDILS": "3.5902", "USDINR": "86.9300", "USDISK": "141.3500", "USDJPY": "153.5590", "USDKRW": "1 452.0400", "USDKWD": "0.3085", "USDKZT": "504.6200", "USDMXN": "20.5518", "USDMYR": "4.4675", "USDNOK": "11.2372", "USDPEN": "3.7075", "USDPHP": "58.1360", "USDPKR": "279.2285", "USDPLN": "4.0201", "USDQAR": "3.6400", "USDRON": "4.7952", "USDRUB": "94.1310", "USDSAR": "3.7473", "USDSEK": "10.8795", "USDSGD": "1.3526", "USDTHB": "34.0800", "USDTRY": "36.0950", "USDTWD": "32.8230", "USDUAH": "41.5936", "USDVND": "25 530.0000", "USDZAR": "18.4455"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 12.02.2025</th></tr>';

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
