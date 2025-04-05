
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9173", "AUDJPY": "88.8270", "AUDSEK": "6.1901", "AUDUSD": "0.6046", "CADJPY": "103.3290", "CADSEK": "6.9510", "CHFAUD": "1.9219", "CHFHKD": "9.0326", "CHFJPY": "170.7670", "EURAUD": "1.8135", "EURCAD": "1.5585", "EURCHF": "0.9430", "EURCNY": "7.9615", "EURCZK": "25.2270", "EURGBP": "0.8502", "EURHKD": "8.5231", "EURILS": "4.0944", "EURJPY": "161.1340", "EURNOK": "11.7926", "EURNZD": "1.9588", "EURRUB": "92.3960", "EURSEK": "10.9503", "EURSGD": "1.4751", "EURUSD": "1.0962", "EURZAR": "20.9268", "GBPAUD": "2.1335", "GBPCAD": "1.8334", "GBPCHF": "1.1093", "GBPHKD": "10.0230", "GBPJPY": "189.5190", "GBPNOK": "13.8719", "GBPRUB": "108.6680", "GBPSEK": "12.8774", "GBPSGD": "1.7341", "GBPUSD": "1.2892", "HKDSEK": "1.2586", "HKDSGD": "0.1730", "JPYHKD": "0.0527", "JPYSEK": "0.0674", "NZDSEK": "5.5705", "NZDUSD": "0.5597", "SGDAUD": "1.2290", "SGDCHF": "0.6389", "SGDJPY": "109.1960", "USDAED": "3.6729", "USDARS": "1 073.2500", "USDBRL": "5.8443", "USDCAD": "1.4200", "USDCHF": "0.8599", "USDCLP": "979.4800", "USDCNY": "7.2813", "USDCOP": "4 277.9700", "USDCZK": "23.0090", "USDDKK": "6.8031", "USDEGP": "50.5400", "USDGBP": "0.7751", "USDHKD": "7.7740", "USDHUF": "370.2300", "USDIDR": "16 554.0000", "USDILS": "3.7300", "USDINR": "85.4820", "USDISK": "130.8000", "USDJPY": "146.9350", "USDKRW": "1 458.4900", "USDKWD": "0.3075", "USDKZT": "510.3300", "USDMXN": "20.4130", "USDMYR": "4.4340", "USDNOK": "10.7438", "USDPEN": "3.6760", "USDPHP": "57.4000", "USDPKR": "280.2400", "USDPLN": "3.8861", "USDQAR": "3.6400", "USDRON": "4.5411", "USDRUB": "84.2500", "USDSAR": "3.7494", "USDSEK": "9.9777", "USDSGD": "1.3455", "USDTHB": "34.3500", "USDTRY": "37.9907", "USDTWD": "33.1580", "USDUAH": "41.3426", "USDVND": "25 780.0000", "USDZAR": "19.0873"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 04.04.2025</th></tr>';

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
