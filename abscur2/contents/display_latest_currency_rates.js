
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8253", "AUDJPY": "97.3490", "AUDSEK": "6.9203", "AUDUSD": "0.6198", "CADJPY": "109.4210", "CADSEK": "7.7778", "CHFAUD": "1.7675", "CHFHKD": "8.5356", "CHFJPY": "172.1760", "EURAUD": "1.6614", "EURCAD": "1.4779", "EURCHF": "0.9393", "EURCNY": "7.5495", "EURCZK": "25.2124", "EURGBP": "0.8426", "EURHKD": "8.0172", "EURILS": "3.7289", "EURJPY": "161.7170", "EURNOK": "11.7030", "EURNZD": "1.8377", "EURRUB": "105.8450", "EURSEK": "11.4965", "EURSGD": "1.4085", "EURUSD": "1.0297", "EURZAR": "19.4276", "GBPAUD": "1.9714", "GBPCAD": "1.7537", "GBPCHF": "1.1144", "GBPHKD": "9.5130", "GBPJPY": "191.8310", "GBPNOK": "13.8839", "GBPRUB": "125.5870", "GBPSEK": "13.6382", "GBPSGD": "1.6708", "GBPUSD": "1.2217", "HKDSEK": "1.4321", "HKDSGD": "0.1756", "JPYHKD": "0.0493", "JPYSEK": "0.0706", "NZDSEK": "6.2523", "NZDUSD": "0.5604", "SGDAUD": "1.1792", "SGDCHF": "0.6668", "SGDJPY": "114.7620", "USDAED": "3.6721", "USDARS": "1 040.5000", "USDBRL": "6.0686", "USDCAD": "1.4349", "USDCHF": "0.9121", "USDCLP": "1 002.2100", "USDCNY": "7.3313", "USDCOP": "4 284.4900", "USDCZK": "24.4700", "USDDKK": "7.2428", "USDEGP": "50.3800", "USDGBP": "0.8180", "USDHKD": "7.7866", "USDHUF": "398.4800", "USDIDR": "16 315.0000", "USDILS": "3.6227", "USDINR": "86.3680", "USDISK": "140.5000", "USDJPY": "156.9920", "USDKRW": "1 458.9800", "USDKWD": "0.3083", "USDKZT": "528.8300", "USDMXN": "20.4759", "USDMYR": "4.4965", "USDNOK": "11.3623", "USDPEN": "3.7748", "USDPHP": "58.5440", "USDPKR": "278.1861", "USDPLN": "4.1344", "USDQAR": "3.6400", "USDRON": "4.8266", "USDRUB": "102.7435", "USDSAR": "3.7505", "USDSEK": "11.1623", "USDSGD": "1.3678", "USDTHB": "34.6500", "USDTRY": "35.4898", "USDTWD": "32.9680", "USDUAH": "42.2692", "USDVND": "25 381.0000", "USDZAR": "18.8647"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 15.01.2025</th></tr>';

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
