
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8985", "AUDJPY": "93.2900", "AUDSEK": "6.3549", "AUDUSD": "0.6303", "CADJPY": "102.9760", "CADSEK": "7.0182", "CHFAUD": "1.8017", "CHFHKD": "8.8306", "CHFJPY": "168.2340", "EURAUD": "1.7168", "EURCAD": "1.5558", "EURCHF": "0.9528", "EURCNY": "7.8413", "EURCZK": "24.9020", "EURGBP": "0.8381", "EURHKD": "8.4168", "EURILS": "3.9192", "EURJPY": "160.3320", "EURNOK": "11.7638", "EURNZD": "1.8966", "EURRUB": "97.4890", "EURSEK": "10.9309", "EURSGD": "1.4417", "EURUSD": "1.0830", "EURZAR": "19.7292", "GBPAUD": "2.0483", "GBPCAD": "1.8568", "GBPCHF": "1.1367", "GBPHKD": "10.0390", "GBPJPY": "191.2920", "GBPNOK": "14.0360", "GBPRUB": "116.2820", "GBPSEK": "13.0387", "GBPSGD": "1.7191", "GBPUSD": "1.2919", "HKDSEK": "1.2966", "HKDSGD": "0.1712", "JPYHKD": "0.0522", "JPYSEK": "0.0676", "NZDSEK": "5.7458", "NZDUSD": "0.5707", "SGDAUD": "1.1906", "SGDCHF": "0.6604", "SGDJPY": "111.1800", "USDAED": "3.6724", "USDARS": "1 064.7500", "USDBRL": "5.7905", "USDCAD": "1.4367", "USDCHF": "0.8792", "USDCLP": "926.3400", "USDCNY": "7.2430", "USDCOP": "4 129.9100", "USDCZK": "22.9870", "USDDKK": "6.8824", "USDEGP": "50.6300", "USDGBP": "0.7739", "USDHKD": "7.7702", "USDHUF": "367.1100", "USDIDR": "16 289.0000", "USDILS": "3.6180", "USDINR": "87.0680", "USDISK": "135.6000", "USDJPY": "148.0180", "USDKRW": "1 449.2800", "USDKWD": "0.3076", "USDKZT": "490.5800", "USDMXN": "20.2350", "USDMYR": "4.4120", "USDNOK": "10.8529", "USDPEN": "3.6530", "USDPHP": "57.4570", "USDPKR": "279.7500", "USDPLN": "3.8451", "USDQAR": "3.6385", "USDRON": "4.5872", "USDRUB": "89.9900", "USDSAR": "3.7505", "USDSEK": "10.0808", "USDSGD": "1.3307", "USDTHB": "33.5700", "USDTRY": "36.4861", "USDTWD": "32.8240", "USDUAH": "41.2742", "USDVND": "25 480.0000", "USDZAR": "18.1973"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 07.03.2025</th></tr>';

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
