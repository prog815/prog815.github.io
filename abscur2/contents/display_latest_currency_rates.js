
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8861", "AUDJPY": "95.3830", "AUDSEK": "6.8524", "AUDUSD": "0.6272", "CADJPY": "106.0510", "CADSEK": "7.6190", "CHFAUD": "1.7495", "CHFHKD": "8.5533", "CHFJPY": "166.9780", "EURAUD": "1.6442", "EURCAD": "1.4787", "EURCHF": "0.9392", "EURCNY": "7.5357", "EURCZK": "25.0716", "EURGBP": "0.8325", "EURHKD": "8.0337", "EURILS": "3.6724", "EURJPY": "156.8430", "EURNOK": "11.5683", "EURNZD": "1.8251", "EURRUB": "100.2010", "EURSEK": "11.2674", "EURSGD": "1.3964", "EURUSD": "1.0312", "EURZAR": "18.9956", "GBPAUD": "1.9749", "GBPCAD": "1.7722", "GBPCHF": "1.1275", "GBPHKD": "9.6580", "GBPJPY": "187.7720", "GBPNOK": "13.9300", "GBPRUB": "120.2990", "GBPSEK": "13.5719", "GBPSGD": "1.6752", "GBPUSD": "1.2404", "HKDSEK": "1.4032", "HKDSGD": "0.1738", "JPYHKD": "0.0512", "JPYSEK": "0.0717", "NZDSEK": "6.1837", "NZDUSD": "0.5662", "SGDAUD": "1.1762", "SGDCHF": "0.6704", "SGDJPY": "111.5700", "USDAED": "3.6726", "USDARS": "1 053.2500", "USDBRL": "5.7981", "USDCAD": "1.4294", "USDCHF": "0.9086", "USDCLP": "961.6300", "USDCNY": "7.2949", "USDCOP": "4 118.0000", "USDCZK": "24.3000", "USDDKK": "7.2232", "USDEGP": "50.2500", "USDGBP": "0.8062", "USDHKD": "7.7904", "USDHUF": "392.2000", "USDIDR": "16 269.0000", "USDILS": "3.5614", "USDINR": "87.5930", "USDISK": "141.7500", "USDJPY": "151.4190", "USDKRW": "1 453.4200", "USDKWD": "0.3081", "USDKZT": "510.2800", "USDMXN": "20.5570", "USDMYR": "4.4370", "USDNOK": "11.2317", "USDPEN": "3.7131", "USDPHP": "58.1100", "USDPKR": "278.8700", "USDPLN": "4.0544", "USDQAR": "3.6400", "USDRON": "4.8173", "USDRUB": "96.7500", "USDSAR": "3.7475", "USDSEK": "10.9376", "USDSGD": "1.3539", "USDTHB": "33.8600", "USDTRY": "35.9863", "USDTWD": "32.8290", "USDUAH": "41.4897", "USDVND": "25 290.0000", "USDZAR": "18.3875"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 10.02.2025</th></tr>';

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
