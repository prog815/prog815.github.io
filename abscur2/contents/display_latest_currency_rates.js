
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1242", "AUDJPY": "97.5072", "AUDSEK": "6.1956", "AUDUSD": "0.6591", "CADJPY": "107.3585", "CADSEK": "6.7763", "CHFAUD": "1.9077", "CHFHKD": "9.8191", "CHFJPY": "186.0179", "EURAUD": "1.7802", "EURCAD": "1.6183", "EURCHF": "0.9340", "EURCNY": "8.3560", "EURCZK": "24.2650", "EURGBP": "0.8716", "EURHKD": "9.1305", "EURILS": "3.9025", "EURJPY": "173.7400", "EURNOK": "11.6579", "EURNZD": "2.0048", "EURRUB": "98.0571", "EURSEK": "11.0395", "EURSGD": "1.5083", "EURUSD": "1.1744", "EURZAR": "20.3722", "GBPAUD": "2.0431", "GBPCAD": "1.8556", "GBPCHF": "1.0710", "GBPHKD": "10.4693", "GBPJPY": "199.2160", "GBPNOK": "13.3673", "GBPRUB": "112.4350", "GBPSEK": "12.6582", "GBPSGD": "1.7294", "GBPUSD": "1.3466", "HKDSEK": "1.2091", "HKDSGD": "0.1652", "JPYHKD": "0.0525", "JPYSEK": "0.0632", "NZDSEK": "5.5056", "NZDUSD": "0.5857", "SGDAUD": "1.1814", "SGDCHF": "0.6192", "SGDJPY": "115.1911", "USDAED": "3.6727", "USDARS": "1 474.5000", "USDBRL": "5.3232", "USDCAD": "1.3780", "USDCHF": "0.7953", "USDCLP": "954.0000", "USDCNY": "7.1180", "USDCOP": "3 880.5000", "USDCZK": "20.6620", "USDDKK": "6.3542", "USDEGP": "48.1200", "USDGBP": "0.7426", "USDHKD": "7.7746", "USDHUF": "332.1400", "USDIDR": "16 585.0000", "USDILS": "3.3230", "USDINR": "88.0950", "USDISK": "121.6100", "USDJPY": "147.9400", "USDKRW": "1 397.0900", "USDKWD": "0.3050", "USDKZT": "540.8000", "USDMXN": "18.3897", "USDMYR": "4.2040", "USDNOK": "9.9267", "USDPEN": "3.4980", "USDPHP": "56.9110", "USDPKR": "283.0500", "USDPLN": "3.6264", "USDQAR": "3.6358", "USDRON": "4.3191", "USDRUB": "83.4955", "USDSAR": "3.7503", "USDSEK": "9.4001", "USDSGD": "1.2843", "USDTHB": "31.8000", "USDTRY": "41.3469", "USDTWD": "30.2160", "USDUAH": "41.3814", "USDVND": "26 355.0000", "USDZAR": "17.3469"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 19.09.2025</th></tr>';

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
