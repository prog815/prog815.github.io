
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0441", "AUDJPY": "97.8126", "AUDSEK": "6.1222", "AUDUSD": "0.6494", "CADJPY": "107.4322", "CADSEK": "6.7243", "CHFAUD": "1.9421", "CHFHKD": "9.7961", "CHFJPY": "189.9609", "EURAUD": "1.7925", "EURCAD": "1.6335", "EURCHF": "0.9238", "EURCNY": "8.3030", "EURCZK": "24.2740", "EURGBP": "0.8677", "EURHKD": "9.0497", "EURILS": "3.8381", "EURJPY": "175.4900", "EURNOK": "11.6905", "EURNZD": "2.0344", "EURRUB": "94.5717", "EURSEK": "10.9840", "EURSGD": "1.5086", "EURUSD": "1.1651", "EURZAR": "20.2175", "GBPAUD": "2.0671", "GBPCAD": "1.8820", "GBPCHF": "1.0644", "GBPHKD": "10.4268", "GBPJPY": "202.1923", "GBPNOK": "13.4695", "GBPRUB": "108.9633", "GBPSEK": "12.6555", "GBPSGD": "1.7381", "GBPUSD": "1.3424", "HKDSEK": "1.2137", "HKDSGD": "0.1667", "JPYHKD": "0.0516", "JPYSEK": "0.0626", "NZDSEK": "5.3982", "NZDUSD": "0.5726", "SGDAUD": "1.1893", "SGDCHF": "0.6124", "SGDJPY": "116.3268", "USDAED": "3.6721", "USDARS": "1 450.0000", "USDBRL": "5.4080", "USDCAD": "1.4020", "USDCHF": "0.7929", "USDCLP": "955.7800", "USDCNY": "7.1230", "USDCOP": "3 829.3200", "USDCZK": "20.8340", "USDDKK": "6.4082", "USDEGP": "47.5300", "USDGBP": "0.7449", "USDHKD": "7.7673", "USDHUF": "333.7900", "USDIDR": "16 575.0000", "USDILS": "3.2942", "USDINR": "87.9740", "USDISK": "121.5700", "USDJPY": "150.6200", "USDKRW": "1 421.5800", "USDKWD": "0.3056", "USDKZT": "537.2400", "USDMXN": "18.3570", "USDMYR": "4.2240", "USDNOK": "10.0339", "USDPEN": "3.3781", "USDPHP": "58.1050", "USDPKR": "282.0800", "USDPLN": "3.6345", "USDQAR": "3.6270", "USDRON": "4.3651", "USDRUB": "81.1705", "USDSAR": "3.7503", "USDSEK": "9.4275", "USDSGD": "1.2948", "USDTHB": "32.7100", "USDTRY": "41.8951", "USDTWD": "30.6220", "USDUAH": "41.7430", "USDVND": "26 337.0000", "USDZAR": "17.3526"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 20.10.2025</th></tr>';

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
