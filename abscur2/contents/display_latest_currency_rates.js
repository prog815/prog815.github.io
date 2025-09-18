
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1726", "AUDJPY": "97.7351", "AUDSEK": "6.1780", "AUDUSD": "0.6650", "CADJPY": "106.7088", "CADSEK": "6.7453", "CHFAUD": "1.9069", "CHFHKD": "9.8634", "CHFJPY": "186.3682", "EURAUD": "1.7745", "EURCAD": "1.6267", "EURCHF": "0.9317", "EURCNY": "8.3897", "EURCZK": "24.2940", "EURGBP": "0.8667", "EURHKD": "9.1868", "EURILS": "3.9443", "EURJPY": "173.5900", "EURNOK": "11.5812", "EURNZD": "1.9804", "EURRUB": "99.2071", "EURSEK": "10.9744", "EURSGD": "1.5089", "EURUSD": "1.1812", "EURZAR": "20.5391", "GBPAUD": "2.0489", "GBPCAD": "1.8766", "GBPCHF": "1.0745", "GBPHKD": "10.5979", "GBPJPY": "200.2466", "GBPNOK": "13.3599", "GBPRUB": "114.4439", "GBPSEK": "12.6580", "GBPSGD": "1.7409", "GBPUSD": "1.3625", "HKDSEK": "1.1944", "HKDSGD": "0.1643", "JPYHKD": "0.0529", "JPYSEK": "0.0632", "NZDSEK": "5.5398", "NZDUSD": "0.5963", "SGDAUD": "1.1769", "SGDCHF": "0.6172", "SGDJPY": "115.0270", "USDAED": "3.6729", "USDARS": "1 473.0000", "USDBRL": "5.3052", "USDCAD": "1.3773", "USDCHF": "0.7886", "USDCLP": "951.3400", "USDCNY": "7.1070", "USDCOP": "3 868.5100", "USDCZK": "20.5690", "USDDKK": "6.3186", "USDEGP": "48.0900", "USDGBP": "0.7339", "USDHKD": "7.7783", "USDHUF": "329.8600", "USDIDR": "16 425.0000", "USDILS": "3.3395", "USDINR": "87.7250", "USDISK": "120.7400", "USDJPY": "146.9700", "USDKRW": "1 380.1200", "USDKWD": "0.3051", "USDKZT": "540.4700", "USDMXN": "18.2993", "USDMYR": "4.1870", "USDNOK": "9.8054", "USDPEN": "3.4740", "USDPHP": "56.6860", "USDPKR": "283.1300", "USDPLN": "3.5991", "USDQAR": "3.6420", "USDRON": "4.2847", "USDRUB": "83.9955", "USDSAR": "3.7515", "USDSEK": "9.2903", "USDSGD": "1.2777", "USDTHB": "31.8000", "USDTRY": "41.2489", "USDTWD": "30.0870", "USDUAH": "41.2131", "USDVND": "26 340.0000", "USDZAR": "17.3803"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 18.09.2025</th></tr>';

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
