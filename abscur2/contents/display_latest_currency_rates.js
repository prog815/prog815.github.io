
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8946", "AUDJPY": "94.2570", "AUDSEK": "6.7131", "AUDUSD": "0.6296", "CADJPY": "104.3520", "CADSEK": "7.4328", "CHFAUD": "1.7684", "CHFHKD": "8.6598", "CHFJPY": "166.7030", "EURAUD": "1.6638", "EURCAD": "1.5029", "EURCHF": "0.9404", "EURCNY": "7.6134", "EURCZK": "24.9750", "EURGBP": "0.8265", "EURHKD": "8.1446", "EURILS": "3.7161", "EURJPY": "156.7620", "EURNOK": "11.6936", "EURNZD": "1.8442", "EURRUB": "90.8310", "EURSEK": "11.1726", "EURSGD": "1.4055", "EURUSD": "1.0476", "EURZAR": "19.3245", "GBPAUD": "2.0131", "GBPCAD": "1.8183", "GBPCHF": "1.1379", "GBPHKD": "9.8530", "GBPJPY": "189.6960", "GBPNOK": "14.1477", "GBPRUB": "109.8850", "GBPSEK": "13.5166", "GBPSGD": "1.6999", "GBPUSD": "1.2675", "HKDSEK": "1.3701", "HKDSGD": "0.1724", "JPYHKD": "0.0517", "JPYSEK": "0.0707", "NZDSEK": "6.0566", "NZDUSD": "0.5681", "SGDAUD": "1.1839", "SGDCHF": "0.6692", "SGDJPY": "111.5260", "USDAED": "3.6722", "USDARS": "1 061.0000", "USDBRL": "5.8127", "USDCAD": "1.4347", "USDCHF": "0.8976", "USDCLP": "941.1900", "USDCNY": "7.2680", "USDCOP": "4 102.4000", "USDCZK": "23.8370", "USDDKK": "7.1159", "USDEGP": "50.6200", "USDGBP": "0.7887", "USDHKD": "7.7738", "USDHUF": "380.6800", "USDIDR": "16 382.0000", "USDILS": "3.5426", "USDINR": "87.1220", "USDISK": "138.2500", "USDJPY": "149.6260", "USDKRW": "1 442.2000", "USDKWD": "0.3082", "USDKZT": "499.2300", "USDMXN": "20.3984", "USDMYR": "4.4405", "USDNOK": "11.1541", "USDPEN": "3.6800", "USDPHP": "57.9320", "USDPKR": "279.6128", "USDPLN": "3.9394", "USDQAR": "3.6400", "USDRON": "4.7445", "USDRUB": "86.6800", "USDSAR": "3.7473", "USDSEK": "10.6568", "USDSGD": "1.3409", "USDTHB": "33.8800", "USDTRY": "36.3960", "USDTWD": "32.7830", "USDUAH": "41.7358", "USDVND": "25 535.0000", "USDZAR": "18.4293"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 27.02.2025</th></tr>';

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
