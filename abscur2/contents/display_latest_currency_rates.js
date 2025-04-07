
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.6500", "AUDJPY": "87.1300", "AUDSEK": "6.0331", "AUDUSD": "0.5983", "CADJPY": "102.1530", "CADSEK": "7.0202", "CHFAUD": "1.9219", "CHFHKD": "9.0514", "CHFJPY": "170.7670", "EURAUD": "1.8316", "EURCAD": "1.5592", "EURCHF": "0.9355", "EURCNY": "8.0202", "EURCZK": "25.2351", "EURGBP": "0.8489", "EURHKD": "8.5889", "EURILS": "4.1128", "EURJPY": "159.3900", "EURNOK": "11.8916", "EURNZD": "1.9775", "EURRUB": "92.8990", "EURSEK": "11.0617", "EURSGD": "1.4745", "EURUSD": "1.0960", "EURZAR": "20.6932", "GBPAUD": "2.1574", "GBPCAD": "1.8376", "GBPCHF": "1.1020", "GBPHKD": "10.1787", "GBPJPY": "187.7300", "GBPNOK": "13.9907", "GBPRUB": "109.8369", "GBPSEK": "12.9962", "GBPSGD": "1.7475", "GBPUSD": "1.2892", "HKDSEK": "1.2586", "HKDSGD": "0.1717", "JPYHKD": "0.0529", "JPYSEK": "0.0668", "NZDSEK": "5.6635", "NZDUSD": "0.5544", "SGDAUD": "1.2370", "SGDCHF": "0.6434", "SGDJPY": "108.0260", "USDAED": "3.6729", "USDARS": "1 073.2500", "USDBRL": "5.8443", "USDCAD": "1.4238", "USDCHF": "0.8532", "USDCLP": "979.4800", "USDCNY": "7.2810", "USDCOP": "4 277.9702", "USDCZK": "23.0230", "USDDKK": "6.8044", "USDEGP": "51.0800", "USDGBP": "0.7750", "USDHKD": "7.7719", "USDHUF": "370.2300", "USDIDR": "16 554.0000", "USDILS": "3.7383", "USDINR": "85.4820", "USDISK": "130.8000", "USDJPY": "146.9350", "USDKRW": "1 458.4900", "USDKWD": "0.3075", "USDKZT": "510.3300", "USDMXN": "20.6412", "USDMYR": "4.4340", "USDNOK": "10.8523", "USDPEN": "3.6760", "USDPHP": "56.9150", "USDPKR": "278.8442", "USDPLN": "3.8242", "USDQAR": "3.6400", "USDRON": "4.5008", "USDRUB": "84.4760", "USDSAR": "3.7473", "USDSEK": "10.1074", "USDSGD": "1.3484", "USDTHB": "34.2300", "USDTRY": "38.0057", "USDTWD": "33.2550", "USDUAH": "41.3426", "USDVND": "25 777.0000", "USDZAR": "18.7391"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 06.04.2025</th></tr>';

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
