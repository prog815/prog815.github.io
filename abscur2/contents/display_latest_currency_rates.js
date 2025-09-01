
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0985", "AUDJPY": "96.1364", "AUDSEK": "6.1725", "AUDUSD": "0.6539", "CADJPY": "106.9703", "CADSEK": "6.8681", "CHFAUD": "1.9111", "CHFHKD": "9.7438", "CHFJPY": "183.7291", "EURAUD": "1.7860", "EURCAD": "1.6058", "EURCHF": "0.9350", "EURCNY": "8.3312", "EURCZK": "24.4390", "EURGBP": "0.8651", "EURHKD": "9.1100", "EURILS": "3.8992", "EURJPY": "171.7800", "EURNOK": "11.7296", "EURNZD": "1.9847", "EURRUB": "93.3499", "EURSEK": "11.0291", "EURSGD": "1.4995", "EURUSD": "1.1684", "EURZAR": "20.6114", "GBPAUD": "2.0650", "GBPCAD": "1.8558", "GBPCHF": "1.0805", "GBPHKD": "10.5283", "GBPJPY": "198.5211", "GBPNOK": "13.5557", "GBPRUB": "107.8829", "GBPSEK": "12.7462", "GBPSGD": "1.7330", "GBPUSD": "1.3503", "HKDSEK": "1.2107", "HKDSGD": "0.1646", "JPYHKD": "0.0530", "JPYSEK": "0.0642", "NZDSEK": "5.5523", "NZDUSD": "0.5882", "SGDAUD": "1.1916", "SGDCHF": "0.6235", "SGDJPY": "114.5551", "USDAED": "3.6724", "USDARS": "1 345.0000", "USDBRL": "5.4299", "USDCAD": "1.3744", "USDCHF": "0.8002", "USDCLP": "966.0000", "USDCNY": "7.1300", "USDCOP": "4 007.5000", "USDCZK": "20.9170", "USDDKK": "6.3871", "USDEGP": "48.5200", "USDGBP": "0.7406", "USDHKD": "7.7970", "USDHUF": "339.1700", "USDIDR": "16 485.0000", "USDILS": "3.3372", "USDINR": "88.1440", "USDISK": "122.3900", "USDJPY": "147.0200", "USDKRW": "1 388.8100", "USDKWD": "0.3054", "USDKZT": "538.0200", "USDMXN": "18.6410", "USDMYR": "4.2220", "USDNOK": "10.0390", "USDPEN": "3.5319", "USDPHP": "57.1100", "USDPKR": "283.2500", "USDPLN": "3.6435", "USDQAR": "3.6369", "USDRON": "4.3392", "USDRUB": "79.8955", "USDSAR": "3.7521", "USDSEK": "9.4395", "USDSGD": "1.2834", "USDTHB": "32.2800", "USDTRY": "41.1005", "USDTWD": "30.5570", "USDUAH": "41.3200", "USDVND": "26 340.0000", "USDZAR": "17.6407"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 29.08.2025</th></tr>';

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
