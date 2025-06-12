
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1026", "AUDJPY": "93.9520", "AUDSEK": "6.2107", "AUDUSD": "0.6500", "CADJPY": "105.6890", "CADSEK": "6.9862", "CHFAUD": "1.8745", "CHFHKD": "9.5685", "CHFJPY": "176.1830", "EURAUD": "1.7665", "EURCAD": "1.5704", "EURCHF": "0.9419", "EURCNY": "8.2601", "EURCZK": "24.7590", "EURGBP": "0.8476", "EURHKD": "9.0144", "EURILS": "4.0537", "EURJPY": "166.0040", "EURNOK": "11.5634", "EURNZD": "1.9055", "EURRUB": "91.3180", "EURSEK": "10.9798", "EURSGD": "1.4749", "EURUSD": "1.1488", "EURZAR": "20.3359", "GBPAUD": "2.0833", "GBPCAD": "1.8520", "GBPCHF": "1.1110", "GBPHKD": "10.6320", "GBPJPY": "195.7650", "GBPNOK": "13.6385", "GBPRUB": "107.6780", "GBPSEK": "12.9465", "GBPSGD": "1.7392", "GBPUSD": "1.3548", "HKDSEK": "1.2164", "HKDSGD": "0.1636", "JPYHKD": "0.0541", "JPYSEK": "0.0656", "NZDSEK": "5.7467", "NZDUSD": "0.6027", "SGDAUD": "1.1967", "SGDCHF": "0.6379", "SGDJPY": "112.2880", "USDAED": "3.6729", "USDARS": "1 181.5000", "USDBRL": "5.5384", "USDCAD": "1.3671", "USDCHF": "0.8200", "USDCLP": "933.7500", "USDCNY": "7.1890", "USDCOP": "4 177.5300", "USDCZK": "21.5400", "USDDKK": "6.4924", "USDEGP": "49.4600", "USDGBP": "0.7379", "USDHKD": "7.8483", "USDHUF": "347.9000", "USDIDR": "16 260.0000", "USDILS": "3.5272", "USDINR": "85.4210", "USDISK": "125.6000", "USDJPY": "144.5300", "USDKRW": "1 369.0000", "USDKWD": "0.3059", "USDKZT": "510.4300", "USDMXN": "18.8890", "USDMYR": "4.2350", "USDNOK": "10.0571", "USDPEN": "3.6328", "USDPHP": "55.7800", "USDPKR": "281.9700", "USDPLN": "3.6978", "USDQAR": "3.6400", "USDRON": "4.3716", "USDRUB": "79.3750", "USDSAR": "3.7505", "USDSEK": "9.5535", "USDSGD": "1.2844", "USDTHB": "32.5700", "USDTRY": "39.1594", "USDTWD": "29.8580", "USDUAH": "41.5566", "USDVND": "26 010.0000", "USDZAR": "17.7051"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 11.06.2025</th></tr>';

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
