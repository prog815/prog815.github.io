
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9620", "AUDJPY": "94.5060", "AUDSEK": "6.2512", "AUDUSD": "0.6369", "CADJPY": "106.1150", "CADSEK": "7.0192", "CHFAUD": "1.8557", "CHFHKD": "9.2128", "CHFJPY": "175.4040", "EURAUD": "1.7405", "EURCAD": "1.5500", "EURCHF": "0.9380", "EURCNY": "7.9747", "EURCZK": "24.9600", "EURGBP": "0.8416", "EURHKD": "8.6384", "EURILS": "3.9488", "EURJPY": "164.5220", "EURNOK": "11.6028", "EURNZD": "1.8932", "EURRUB": "89.8040", "EURSEK": "10.8879", "EURSGD": "1.4467", "EURUSD": "1.1088", "EURZAR": "20.2304", "GBPAUD": "2.0668", "GBPCAD": "1.8406", "GBPCHF": "1.1140", "GBPHKD": "10.2600", "GBPJPY": "195.3800", "GBPNOK": "13.7807", "GBPRUB": "106.7150", "GBPSEK": "12.9280", "GBPSGD": "1.7191", "GBPUSD": "1.3170", "HKDSEK": "1.2587", "HKDSGD": "0.1676", "JPYHKD": "0.0523", "JPYSEK": "0.0657", "NZDSEK": "5.7353", "NZDUSD": "0.5856", "SGDAUD": "1.2013", "SGDCHF": "0.6470", "SGDJPY": "113.5520", "USDAED": "3.6729", "USDARS": "1 129.0000", "USDBRL": "5.6915", "USDCAD": "1.3976", "USDCHF": "0.8453", "USDCLP": "945.9500", "USDCNY": "7.2075", "USDCOP": "4 222.9800", "USDCZK": "22.4970", "USDDKK": "6.7245", "USDEGP": "50.4500", "USDGBP": "0.7591", "USDHKD": "7.7910", "USDHUF": "365.1900", "USDIDR": "16 509.0000", "USDILS": "3.5625", "USDINR": "84.8420", "USDISK": "132.4000", "USDJPY": "148.3500", "USDKRW": "1 416.0100", "USDKWD": "0.3070", "USDKZT": "512.4300", "USDMXN": "19.6229", "USDMYR": "4.2940", "USDNOK": "10.4511", "USDPEN": "3.6517", "USDPHP": "55.7860", "USDPKR": "281.3500", "USDPLN": "3.8212", "USDQAR": "3.6386", "USDRON": "4.5978", "USDRUB": "80.8750", "USDSAR": "3.7507", "USDSEK": "9.8032", "USDSGD": "1.3059", "USDTHB": "33.3190", "USDTRY": "38.7862", "USDTWD": "30.3900", "USDUAH": "41.5470", "USDVND": "25 960.0000", "USDZAR": "18.2565"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 12.05.2025</th></tr>';

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
