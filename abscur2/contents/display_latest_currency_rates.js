
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0256", "AUDJPY": "94.7710", "AUDSEK": "6.1673", "AUDUSD": "0.6433", "CADJPY": "106.1919", "CADSEK": "6.9105", "CHFAUD": "1.9339", "CHFHKD": "9.7192", "CHFJPY": "183.2794", "EURAUD": "1.8108", "EURCAD": "1.6163", "EURCHF": "0.9365", "EURCNY": "8.3604", "EURCZK": "24.4670", "EURGBP": "0.8657", "EURHKD": "9.1021", "EURILS": "3.9668", "EURJPY": "171.6400", "EURNOK": "11.9168", "EURNZD": "2.0005", "EURRUB": "93.7853", "EURSEK": "11.1698", "EURSGD": "1.4973", "EURUSD": "1.1651", "EURZAR": "20.5745", "GBPAUD": "2.0919", "GBPCAD": "1.8669", "GBPCHF": "1.0817", "GBPHKD": "10.5130", "GBPJPY": "198.2485", "GBPNOK": "13.7639", "GBPRUB": "108.3228", "GBPSEK": "12.9012", "GBPSGD": "1.7294", "GBPUSD": "1.3457", "HKDSEK": "1.2272", "HKDSGD": "0.1645", "JPYHKD": "0.0530", "JPYSEK": "0.0651", "NZDSEK": "5.5816", "NZDUSD": "0.5822", "SGDAUD": "1.2096", "SGDCHF": "0.6255", "SGDJPY": "114.6370", "USDAED": "3.6721", "USDARS": "1 300.0000", "USDBRL": "5.4824", "USDCAD": "1.3873", "USDCHF": "0.8038", "USDCLP": "966.3300", "USDCNY": "7.1770", "USDCOP": "4 023.0000", "USDCZK": "21.0000", "USDDKK": "6.4057", "USDEGP": "48.5300", "USDGBP": "0.7431", "USDHKD": "7.8123", "USDHUF": "338.5600", "USDIDR": "16 265.0000", "USDILS": "3.4047", "USDINR": "86.9980", "USDISK": "122.9400", "USDJPY": "147.3200", "USDKRW": "1 397.6000", "USDKWD": "0.3055", "USDKZT": "538.0000", "USDMXN": "18.7422", "USDMYR": "4.2240", "USDNOK": "10.2281", "USDPEN": "3.4857", "USDPHP": "57.0700", "USDPKR": "283.0000", "USDPLN": "3.6441", "USDQAR": "3.6268", "USDRON": "4.3373", "USDRUB": "80.4955", "USDSAR": "3.7526", "USDSEK": "9.5870", "USDSGD": "1.2851", "USDTHB": "32.5200", "USDTRY": "40.9146", "USDTWD": "30.2690", "USDUAH": "41.2200", "USDVND": "26 370.0000", "USDZAR": "17.6590"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 20.08.2025</th></tr>';

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
