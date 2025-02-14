
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9382", "AUDJPY": "96.8260", "AUDSEK": "6.8078", "AUDUSD": "0.6345", "CADJPY": "107.6560", "CADSEK": "7.5697", "CHFAUD": "1.7487", "CHFHKD": "8.6408", "CHFJPY": "169.4300", "EURAUD": "1.6508", "EURCAD": "1.4846", "EURCHF": "0.9433", "EURCNY": "7.6084", "EURCZK": "25.0295", "EURGBP": "0.8321", "EURHKD": "8.1510", "EURILS": "3.7277", "EURJPY": "159.8410", "EURNOK": "11.6469", "EURNZD": "1.8348", "EURRUB": "95.9360", "EURSEK": "11.2398", "EURSGD": "1.4043", "EURUSD": "1.0473", "EURZAR": "19.2390", "GBPAUD": "1.9838", "GBPCAD": "1.7840", "GBPCHF": "1.1336", "GBPHKD": "9.7940", "GBPJPY": "192.0930", "GBPNOK": "13.9949", "GBPRUB": "115.2930", "GBPSEK": "13.5072", "GBPSGD": "1.6875", "GBPUSD": "1.2585", "HKDSEK": "1.3773", "HKDSGD": "0.1722", "JPYHKD": "0.0507", "JPYSEK": "0.0698", "NZDSEK": "6.1256", "NZDUSD": "0.5706", "SGDAUD": "1.1752", "SGDCHF": "0.6716", "SGDJPY": "113.8270", "USDAED": "3.6728", "USDARS": "1 056.8000", "USDBRL": "5.7377", "USDCAD": "1.4178", "USDCHF": "0.9008", "USDCLP": "940.4700", "USDCNY": "7.2657", "USDCOP": "4 136.7100", "USDCZK": "23.8970", "USDDKK": "7.1246", "USDEGP": "50.5800", "USDGBP": "0.7948", "USDHKD": "7.7830", "USDHUF": "384.6200", "USDIDR": "16 255.0000", "USDILS": "3.5646", "USDINR": "86.6500", "USDISK": "140.2000", "USDJPY": "152.6660", "USDKRW": "1 440.4200", "USDKWD": "0.3088", "USDKZT": "497.6200", "USDMXN": "20.3530", "USDMYR": "4.4345", "USDNOK": "11.1236", "USDPEN": "3.7150", "USDPHP": "57.7120", "USDPKR": "279.2000", "USDPLN": "3.9763", "USDQAR": "3.6400", "USDRON": "4.7518", "USDRUB": "91.5800", "USDSAR": "3.7475", "USDSEK": "10.7390", "USDSGD": "1.3412", "USDTHB": "33.6200", "USDTRY": "36.2129", "USDTWD": "32.7170", "USDUAH": "41.7927", "USDVND": "25 440.0000", "USDZAR": "18.3694"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.02.2025</th></tr>';

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
