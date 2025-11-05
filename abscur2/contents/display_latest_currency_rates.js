
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0447", "AUDJPY": "99.7165", "AUDSEK": "6.2133", "AUDUSD": "0.6489", "CADJPY": "108.9626", "CADSEK": "6.7894", "CHFAUD": "1.9021", "CHFHKD": "9.5954", "CHFJPY": "189.6692", "EURAUD": "1.7690", "EURCAD": "1.6192", "EURCHF": "0.9302", "EURCNY": "8.2009", "EURCZK": "24.3060", "EURGBP": "0.8814", "EURHKD": "8.9257", "EURILS": "3.7527", "EURJPY": "176.4200", "EURNOK": "11.6567", "EURNZD": "2.0179", "EURRUB": "92.9909", "EURSEK": "10.9932", "EURSGD": "1.5010", "EURUSD": "1.1482", "EURZAR": "20.1149", "GBPAUD": "2.0062", "GBPCAD": "1.8359", "GBPCHF": "1.0547", "GBPHKD": "10.1204", "GBPJPY": "200.0476", "GBPNOK": "13.2834", "GBPRUB": "105.4399", "GBPSEK": "12.4649", "GBPSGD": "1.7020", "GBPUSD": "1.3018", "HKDSEK": "1.2316", "HKDSGD": "0.1682", "JPYHKD": "0.0506", "JPYSEK": "0.0623", "NZDSEK": "5.4032", "NZDUSD": "0.5643", "SGDAUD": "1.1787", "SGDCHF": "0.6197", "SGDJPY": "117.5386", "USDAED": "3.6729", "USDARS": "1 455.5000", "USDBRL": "5.3972", "USDCAD": "1.4103", "USDCHF": "0.8102", "USDCLP": "946.4900", "USDCNY": "7.1270", "USDCOP": "3 864.5000", "USDCZK": "21.2140", "USDDKK": "6.5007", "USDEGP": "47.2600", "USDGBP": "0.7682", "USDHKD": "7.7742", "USDHUF": "337.9900", "USDIDR": "16 695.0000", "USDILS": "3.2673", "USDINR": "88.7270", "USDISK": "127.3500", "USDJPY": "153.6700", "USDKRW": "1 443.7000", "USDKWD": "0.3072", "USDKZT": "524.2300", "USDMXN": "18.6650", "USDMYR": "4.1950", "USDNOK": "10.2039", "USDPEN": "3.3840", "USDPHP": "58.5120", "USDPKR": "280.8000", "USDPLN": "3.7076", "USDQAR": "3.6359", "USDRON": "4.4264", "USDRUB": "80.9955", "USDSAR": "3.7502", "USDSEK": "9.5751", "USDSGD": "1.3074", "USDTHB": "32.5400", "USDTRY": "42.0393", "USDTWD": "30.9160", "USDUAH": "42.0430", "USDVND": "26 295.0000", "USDZAR": "17.5202"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 05.11.2025</th></tr>';

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
