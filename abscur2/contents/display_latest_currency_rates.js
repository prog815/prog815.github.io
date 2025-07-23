
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1447", "AUDJPY": "96.1013", "AUDSEK": "6.2306", "AUDUSD": "0.6554", "CADJPY": "107.8003", "CADSEK": "6.9890", "CHFAUD": "1.9263", "CHFHKD": "9.9100", "CHFJPY": "185.1155", "EURAUD": "1.7927", "EURCAD": "1.5986", "EURCHF": "0.9310", "EURCNY": "8.4325", "EURCZK": "24.5980", "EURGBP": "0.8683", "EURHKD": "9.2258", "EURILS": "3.9219", "EURJPY": "172.3200", "EURNOK": "11.8322", "EURNZD": "1.9579", "EURRUB": "92.2558", "EURSEK": "11.1751", "EURSGD": "1.5023", "EURUSD": "1.1753", "EURZAR": "20.6242", "GBPAUD": "2.0641", "GBPCAD": "1.8401", "GBPCHF": "1.0716", "GBPHKD": "10.6191", "GBPJPY": "198.3611", "GBPNOK": "13.6186", "GBPRUB": "106.1887", "GBPSEK": "12.8604", "GBPSGD": "1.7291", "GBPUSD": "1.3528", "HKDSEK": "1.2111", "HKDSGD": "0.1628", "JPYHKD": "0.0535", "JPYSEK": "0.0648", "NZDSEK": "5.7039", "NZDUSD": "0.6000", "SGDAUD": "1.1937", "SGDCHF": "0.6197", "SGDJPY": "114.7160", "USDAED": "3.6729", "USDARS": "1 255.0000", "USDBRL": "5.5649", "USDCAD": "1.3602", "USDCHF": "0.7921", "USDCLP": "948.9000", "USDCNY": "7.1695", "USDCOP": "4 058.7500", "USDCZK": "20.9290", "USDDKK": "6.3494", "USDEGP": "49.0200", "USDGBP": "0.7392", "USDHKD": "7.8497", "USDHUF": "339.2500", "USDIDR": "16 305.0000", "USDILS": "3.3369", "USDINR": "86.2940", "USDISK": "121.0000", "USDJPY": "146.6300", "USDKRW": "1 380.6200", "USDKWD": "0.3048", "USDKZT": "534.2200", "USDMXN": "18.6440", "USDMYR": "4.2290", "USDNOK": "10.0670", "USDPEN": "3.5544", "USDPHP": "56.9440", "USDPKR": "284.6200", "USDPLN": "3.6152", "USDQAR": "3.6371", "USDRON": "4.3102", "USDRUB": "78.4955", "USDSAR": "3.7513", "USDSEK": "9.5065", "USDSGD": "1.2782", "USDTHB": "32.1600", "USDTRY": "40.3643", "USDTWD": "29.3790", "USDUAH": "41.7200", "USDVND": "26 120.0000", "USDZAR": "17.5480"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 22.07.2025</th></tr>';

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
