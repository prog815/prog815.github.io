
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8836", "AUDJPY": "94.9450", "AUDSEK": "6.8567", "AUDUSD": "0.6269", "CADJPY": "105.9190", "CADSEK": "7.6519", "CHFAUD": "1.7500", "CHFHKD": "8.5610", "CHFJPY": "166.3920", "EURAUD": "1.6466", "EURCAD": "1.4759", "EURCHF": "0.9395", "EURCNY": "7.5248", "EURCZK": "25.1010", "EURGBP": "0.8327", "EURHKD": "8.0446", "EURILS": "3.6822", "EURJPY": "156.3700", "EURNOK": "11.6058", "EURNZD": "1.8247", "EURRUB": "100.1690", "EURSEK": "11.3062", "EURSGD": "1.3988", "EURUSD": "1.0325", "EURZAR": "18.9850", "GBPAUD": "1.9770", "GBPCAD": "1.7722", "GBPCHF": "1.1282", "GBPHKD": "9.6580", "GBPJPY": "187.7720", "GBPNOK": "13.9337", "GBPRUB": "120.2990", "GBPSEK": "13.5772", "GBPSGD": "1.6777", "GBPUSD": "1.2398", "HKDSEK": "1.4032", "HKDSGD": "0.1738", "JPYHKD": "0.0512", "JPYSEK": "0.0717", "NZDSEK": "6.1837", "NZDUSD": "0.5656", "SGDAUD": "1.1762", "SGDCHF": "0.6704", "SGDJPY": "111.5700", "USDAED": "3.6726", "USDARS": "1 053.2500", "USDBRL": "5.8058", "USDCAD": "1.4294", "USDCHF": "0.9099", "USDCLP": "961.6300", "USDCNY": "7.2940", "USDCOP": "4 118.0000", "USDCZK": "24.3000", "USDDKK": "7.2232", "USDEGP": "50.2500", "USDGBP": "0.8064", "USDHKD": "7.7906", "USDHUF": "391.9500", "USDIDR": "16 269.0000", "USDILS": "3.5614", "USDINR": "87.5930", "USDISK": "141.7500", "USDJPY": "151.4190", "USDKRW": "1 453.4200", "USDKWD": "0.3081", "USDKZT": "510.2800", "USDMXN": "20.5532", "USDMYR": "4.4370", "USDNOK": "11.2316", "USDPEN": "3.7131", "USDPHP": "58.1100", "USDPKR": "278.8700", "USDPLN": "4.0544", "USDQAR": "3.6400", "USDRON": "4.7869", "USDRUB": "97.2260", "USDSAR": "3.7465", "USDSEK": "10.9481", "USDSGD": "1.3539", "USDTHB": "33.8600", "USDTRY": "35.9454", "USDTWD": "32.8290", "USDUAH": "41.4897", "USDVND": "25 290.0000", "USDZAR": "18.4015"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 08.02.2025</th></tr>';

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
