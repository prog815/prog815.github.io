
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0327", "AUDJPY": "95.2850", "AUDSEK": "6.1894", "AUDUSD": "0.6453", "CADJPY": "106.5061", "CADSEK": "6.9183", "CHFAUD": "1.9193", "CHFHKD": "9.6594", "CHFJPY": "182.8833", "EURAUD": "1.8043", "EURCAD": "1.6147", "EURCHF": "0.9404", "EURCNY": "8.3648", "EURCZK": "24.4370", "EURGBP": "0.8633", "EURHKD": "9.0835", "EURILS": "3.9537", "EURJPY": "171.9900", "EURNOK": "11.9662", "EURNZD": "1.9761", "EURRUB": "94.0734", "EURSEK": "11.1712", "EURSGD": "1.4965", "EURUSD": "1.1646", "EURZAR": "20.5814", "GBPAUD": "2.0905", "GBPCAD": "1.8702", "GBPCHF": "1.0892", "GBPHKD": "10.5208", "GBPJPY": "199.1933", "GBPNOK": "13.8598", "GBPRUB": "108.9594", "GBPSEK": "12.9389", "GBPSGD": "1.7333", "GBPUSD": "1.3490", "HKDSEK": "1.2298", "HKDSGD": "0.1648", "JPYHKD": "0.0528", "JPYSEK": "0.0650", "NZDSEK": "5.6513", "NZDUSD": "0.5892", "SGDAUD": "1.2061", "SGDCHF": "0.6284", "SGDJPY": "114.9194", "USDAED": "3.6729", "USDARS": "1 290.0000", "USDBRL": "5.5036", "USDCAD": "1.3864", "USDCHF": "0.8074", "USDCLP": "963.0300", "USDCNY": "7.1830", "USDCOP": "4 029.5000", "USDCZK": "20.9810", "USDDKK": "6.4089", "USDEGP": "48.4000", "USDGBP": "0.7413", "USDHKD": "7.7990", "USDHUF": "337.8300", "USDIDR": "16 235.0000", "USDILS": "3.3946", "USDINR": "87.0400", "USDISK": "122.9800", "USDJPY": "147.6600", "USDKRW": "1 392.9800", "USDKWD": "0.3056", "USDKZT": "538.1300", "USDMXN": "18.8020", "USDMYR": "4.2210", "USDNOK": "10.2741", "USDPEN": "3.4930", "USDPHP": "57.1850", "USDPKR": "282.9500", "USDPLN": "3.6414", "USDQAR": "3.6267", "USDRON": "4.3424", "USDRUB": "80.7705", "USDSAR": "3.7525", "USDSEK": "9.5915", "USDSGD": "1.2849", "USDTHB": "32.5400", "USDTRY": "40.8685", "USDTWD": "30.1220", "USDUAH": "41.3442", "USDVND": "26 290.0000", "USDZAR": "17.6644"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 19.08.2025</th></tr>';

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
