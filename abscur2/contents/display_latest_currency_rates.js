
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0788", "AUDJPY": "95.4972", "AUDSEK": "6.2558", "AUDUSD": "0.6470", "CADJPY": "107.1740", "CADSEK": "7.0208", "CHFAUD": "1.9136", "CHFHKD": "9.7187", "CHFJPY": "182.7411", "EURAUD": "1.7875", "EURCAD": "1.5940", "EURCHF": "0.9348", "EURCNY": "8.3141", "EURCZK": "24.5700", "EURGBP": "0.8701", "EURHKD": "9.0854", "EURILS": "3.9907", "EURJPY": "170.8300", "EURNOK": "11.8520", "EURNZD": "1.9600", "EURRUB": "92.5868", "EURSEK": "11.1909", "EURSGD": "1.4899", "EURUSD": "1.1574", "EURZAR": "20.7205", "GBPAUD": "2.0555", "GBPCAD": "1.8315", "GBPCHF": "1.0742", "GBPHKD": "10.4395", "GBPJPY": "196.2932", "GBPNOK": "13.6184", "GBPRUB": "106.3860", "GBPSEK": "12.8588", "GBPSGD": "1.7120", "GBPUSD": "1.3299", "HKDSEK": "1.2317", "HKDSGD": "0.1640", "JPYHKD": "0.0532", "JPYSEK": "0.0655", "NZDSEK": "5.7057", "NZDUSD": "0.5901", "SGDAUD": "1.2006", "SGDCHF": "0.6274", "SGDJPY": "114.6586", "USDAED": "3.6727", "USDARS": "1 338.5000", "USDBRL": "5.5070", "USDCAD": "1.3772", "USDCHF": "0.8077", "USDCLP": "966.0500", "USDCNY": "7.1834", "USDCOP": "4 087.0000", "USDCZK": "21.2290", "USDDKK": "6.4462", "USDEGP": "48.3800", "USDGBP": "0.7519", "USDHKD": "7.8498", "USDHUF": "343.8400", "USDIDR": "16 375.0000", "USDILS": "3.4480", "USDINR": "87.8020", "USDISK": "123.2200", "USDJPY": "147.6000", "USDKRW": "1 386.6300", "USDKWD": "0.3054", "USDKZT": "536.9700", "USDMXN": "18.7356", "USDMYR": "4.2250", "USDNOK": "10.2402", "USDPEN": "3.5540", "USDPHP": "57.5100", "USDPKR": "283.0000", "USDPLN": "3.6975", "USDQAR": "3.6270", "USDRON": "4.3823", "USDRUB": "79.9955", "USDSAR": "3.7518", "USDSEK": "9.6690", "USDSGD": "1.2873", "USDTHB": "32.3400", "USDTRY": "40.6341", "USDTWD": "29.8960", "USDUAH": "41.6000", "USDVND": "26 225.0000", "USDZAR": "17.9026"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 05.08.2025</th></tr>';

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
