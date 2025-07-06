
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1415", "AUDJPY": "94.6750", "AUDSEK": "6.2576", "AUDUSD": "0.6550", "CADJPY": "106.1850", "CADSEK": "7.0203", "CHFAUD": "1.9207", "CHFHKD": "9.8904", "CHFJPY": "181.8970", "EURAUD": "1.7970", "EURCAD": "1.6018", "EURCHF": "0.9351", "EURCNY": "8.4399", "EURCZK": "24.6270", "EURGBP": "0.8633", "EURHKD": "9.2459", "EURILS": "3.9313", "EURJPY": "170.1840", "EURNOK": "11.8710", "EURNZD": "1.9421", "EURRUB": "92.7730", "EURSEK": "11.2544", "EURSGD": "1.5007", "EURUSD": "1.1774", "EURZAR": "20.6966", "GBPAUD": "2.0819", "GBPCAD": "1.8557", "GBPCHF": "1.0831", "GBPHKD": "10.7070", "GBPJPY": "197.1170", "GBPNOK": "13.7516", "GBPRUB": "107.6270", "GBPSEK": "13.0337", "GBPSGD": "1.7373", "GBPUSD": "1.3638", "HKDSEK": "1.2159", "HKDSGD": "0.1623", "JPYHKD": "0.0540", "JPYSEK": "0.0656", "NZDSEK": "5.7738", "NZDUSD": "0.6061", "SGDAUD": "1.1971", "SGDCHF": "0.6223", "SGDJPY": "113.3670", "USDAED": "3.6728", "USDARS": "1 240.0000", "USDBRL": "5.4212", "USDCAD": "1.3603", "USDCHF": "0.7933", "USDCLP": "929.0000", "USDCNY": "7.1650", "USDCOP": "3 998.6000", "USDCZK": "20.9050", "USDDKK": "6.3334", "USDEGP": "49.3000", "USDGBP": "0.7327", "USDHKD": "7.8494", "USDHUF": "338.6500", "USDIDR": "16 180.0000", "USDILS": "3.3299", "USDINR": "85.4490", "USDISK": "120.9000", "USDJPY": "144.4430", "USDKRW": "1 362.2400", "USDKWD": "0.3051", "USDKZT": "518.9800", "USDMXN": "18.5950", "USDMYR": "4.2180", "USDNOK": "10.0704", "USDPEN": "3.5467", "USDPHP": "56.4170", "USDPKR": "283.9000", "USDPLN": "3.5970", "USDQAR": "3.6400", "USDRON": "4.2911", "USDRUB": "78.6250", "USDSAR": "3.7503", "USDSEK": "9.5533", "USDSGD": "1.2740", "USDTHB": "32.2900", "USDTRY": "39.8446", "USDTWD": "28.8990", "USDUAH": "41.8116", "USDVND": "25 980.0000", "USDZAR": "17.5700"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 04.07.2025</th></tr>';

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
