
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8466", "AUDJPY": "96.3380", "AUDSEK": "6.8642", "AUDUSD": "0.6220", "CADJPY": "107.0130", "CADSEK": "7.6306", "CHFAUD": "1.7667", "CHFHKD": "8.5681", "CHFJPY": "170.3230", "EURAUD": "1.6702", "EURCAD": "1.5035", "EURCHF": "0.9447", "EURCNY": "7.5212", "EURCZK": "25.1602", "EURGBP": "0.8359", "EURHKD": "8.0983", "EURILS": "3.7130", "EURJPY": "160.9280", "EURNOK": "11.7360", "EURNZD": "1.8388", "EURRUB": "102.4550", "EURSEK": "11.4735", "EURSGD": "1.4089", "EURUSD": "1.0392", "EURZAR": "19.3602", "GBPAUD": "1.9976", "GBPCAD": "1.7979", "GBPCHF": "1.1299", "GBPHKD": "9.6840", "GBPJPY": "192.5170", "GBPNOK": "14.0340", "GBPRUB": "122.5680", "GBPSEK": "13.7210", "GBPSGD": "1.6848", "GBPUSD": "1.2427", "HKDSEK": "1.4155", "HKDSGD": "0.1739", "JPYHKD": "0.0501", "JPYSEK": "0.0708", "NZDSEK": "6.2366", "NZDUSD": "0.5650", "SGDAUD": "1.1853", "SGDCHF": "0.6702", "SGDJPY": "114.2120", "USDAED": "3.6727", "USDARS": "1 051.0000", "USDBRL": "5.8396", "USDCAD": "1.4467", "USDCHF": "0.9093", "USDCLP": "985.8800", "USDCNY": "7.2440", "USDCOP": "4 162.5700", "USDCZK": "24.2110", "USDDKK": "7.1791", "USDEGP": "50.1800", "USDGBP": "0.8045", "USDHKD": "7.7926", "USDHUF": "392.3600", "USDIDR": "16 295.0000", "USDILS": "3.5775", "USDINR": "86.5510", "USDISK": "140.6000", "USDJPY": "154.8780", "USDKRW": "1 449.1400", "USDKWD": "0.3083", "USDKZT": "518.4300", "USDMXN": "20.6595", "USDMYR": "4.4575", "USDNOK": "11.2895", "USDPEN": "3.7138", "USDPHP": "58.3670", "USDPKR": "278.9361", "USDPLN": "4.0547", "USDQAR": "3.6400", "USDRON": "4.7860", "USDRUB": "98.7260", "USDSAR": "3.7476", "USDSEK": "11.0408", "USDSGD": "1.3559", "USDTHB": "33.6000", "USDTRY": "35.8538", "USDTWD": "32.8670", "USDUAH": "42.0195", "USDVND": "25 060.0000", "USDZAR": "18.6435"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 31.01.2025</th></tr>';

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
