
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1043", "AUDJPY": "96.9035", "AUDSEK": "6.1644", "AUDUSD": "0.6544", "CADJPY": "107.3588", "CADSEK": "6.8295", "CHFAUD": "1.9009", "CHFHKD": "9.7026", "CHFJPY": "184.2020", "EURAUD": "1.7817", "EURCAD": "1.6084", "EURCHF": "0.9374", "EURCNY": "8.3277", "EURCZK": "24.3960", "EURGBP": "0.8672", "EURHKD": "9.0955", "EURILS": "3.9144", "EURJPY": "172.6800", "EURNOK": "11.7072", "EURNZD": "1.9835", "EURRUB": "94.4489", "EURSEK": "10.9845", "EURSGD": "1.5011", "EURUSD": "1.1661", "EURZAR": "20.5894", "GBPAUD": "2.0544", "GBPCAD": "1.8543", "GBPCHF": "1.0808", "GBPHKD": "10.4862", "GBPJPY": "199.0788", "GBPNOK": "13.4972", "GBPRUB": "108.8903", "GBPSEK": "12.6641", "GBPSGD": "1.7307", "GBPUSD": "1.3444", "HKDSEK": "1.2077", "HKDSGD": "0.1650", "JPYHKD": "0.0527", "JPYSEK": "0.0636", "NZDSEK": "5.5361", "NZDUSD": "0.5877", "SGDAUD": "1.1871", "SGDCHF": "0.6245", "SGDJPY": "115.0315", "USDAED": "3.6729", "USDARS": "1 361.0000", "USDBRL": "5.4513", "USDCAD": "1.3793", "USDCHF": "0.8039", "USDCLP": "968.6800", "USDCNY": "7.1420", "USDCOP": "4 005.1500", "USDCZK": "20.9210", "USDDKK": "6.4007", "USDEGP": "48.4900", "USDGBP": "0.7438", "USDHKD": "7.7999", "USDHUF": "337.3800", "USDIDR": "16 410.0000", "USDILS": "3.3565", "USDINR": "88.0430", "USDISK": "123.0100", "USDJPY": "148.0800", "USDKRW": "1 390.1300", "USDKWD": "0.3055", "USDKZT": "539.4600", "USDMXN": "18.6810", "USDMYR": "4.2250", "USDNOK": "10.0396", "USDPEN": "3.5318", "USDPHP": "57.2010", "USDPKR": "283.2000", "USDPLN": "3.6444", "USDQAR": "3.6369", "USDRON": "4.3501", "USDRUB": "80.9955", "USDSAR": "3.7521", "USDSEK": "9.4199", "USDSGD": "1.2873", "USDTHB": "32.2600", "USDTRY": "41.1338", "USDTWD": "30.7220", "USDUAH": "41.3000", "USDVND": "26 365.0000", "USDZAR": "17.6566"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 04.09.2025</th></tr>';

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
