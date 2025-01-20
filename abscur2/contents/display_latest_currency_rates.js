
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8165", "AUDJPY": "96.7710", "AUDSEK": "6.9142", "AUDUSD": "0.6194", "CADJPY": "107.8900", "CADSEK": "7.7284", "CHFAUD": "1.7648", "CHFHKD": "8.5086", "CHFJPY": "170.4889", "EURAUD": "1.6583", "EURCAD": "1.4873", "EURCHF": "0.9394", "EURCNY": "7.5216", "EURCZK": "25.2150", "EURGBP": "0.8439", "EURHKD": "7.9922", "EURILS": "3.6598", "EURJPY": "160.4840", "EURNOK": "11.7571", "EURNZD": "1.8387", "EURRUB": "105.1300", "EURSEK": "11.5057", "EURSGD": "1.4039", "EURUSD": "1.0269", "EURZAR": "19.2622", "GBPAUD": "1.9647", "GBPCAD": "1.7616", "GBPCHF": "1.1131", "GBPHKD": "9.4720", "GBPJPY": "190.1280", "GBPNOK": "13.9329", "GBPRUB": "124.6360", "GBPSEK": "13.6221", "GBPSGD": "1.6653", "GBPUSD": "1.2167", "HKDSEK": "1.4368", "HKDSGD": "0.1759", "JPYHKD": "0.0495", "JPYSEK": "0.0711", "NZDSEK": "6.2287", "NZDUSD": "0.5584", "SGDAUD": "1.1796", "SGDCHF": "0.6676", "SGDJPY": "114.1050", "USDAED": "3.6727", "USDARS": "1 041.5000", "USDBRL": "6.0704", "USDCAD": "1.4480", "USDCHF": "0.9143", "USDCLP": "1 005.7800", "USDCNY": "7.3240", "USDCOP": "4 335.5000", "USDCZK": "24.5530", "USDDKK": "7.2646", "USDEGP": "50.3500", "USDGBP": "0.8217", "USDHKD": "7.7857", "USDHUF": "401.8700", "USDIDR": "16 359.0000", "USDILS": "3.5614", "USDINR": "86.5510", "USDISK": "140.6000", "USDJPY": "156.2760", "USDKRW": "1 456.3000", "USDKWD": "0.3083", "USDKZT": "530.2300", "USDMXN": "20.7874", "USDMYR": "4.5040", "USDNOK": "11.4441", "USDPEN": "3.7377", "USDPHP": "58.4440", "USDPKR": "278.5500", "USDPLN": "4.1485", "USDQAR": "3.6400", "USDRON": "4.8436", "USDRUB": "102.0000", "USDSAR": "3.7478", "USDSEK": "11.1934", "USDSGD": "1.3679", "USDTHB": "34.3600", "USDTRY": "35.4307", "USDTWD": "32.8870", "USDUAH": "42.1729", "USDVND": "25 315.0000", "USDZAR": "18.7328"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 19.01.2025</th></tr>';

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
