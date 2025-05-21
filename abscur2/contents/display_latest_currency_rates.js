
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0241", "AUDJPY": "92.7250", "AUDSEK": "6.1836", "AUDUSD": "0.6420", "CADJPY": "103.8100", "CADSEK": "6.9206", "CHFAUD": "1.8796", "CHFHKD": "9.4480", "CHFJPY": "174.3290", "EURAUD": "1.7565", "EURCAD": "1.5693", "EURCHF": "0.9345", "EURCNY": "8.1431", "EURCZK": "24.8770", "EURGBP": "0.8428", "EURHKD": "8.8299", "EURILS": "3.9675", "EURJPY": "162.9680", "EURNOK": "11.5699", "EURNZD": "1.9039", "EURRUB": "90.9420", "EURSEK": "10.8721", "EURSGD": "1.4605", "EURUSD": "1.1282", "EURZAR": "20.2059", "GBPAUD": "2.0837", "GBPCAD": "1.8624", "GBPCHF": "1.1087", "GBPHKD": "10.4730", "GBPJPY": "193.3720", "GBPNOK": "13.7255", "GBPRUB": "107.9080", "GBPSEK": "12.8969", "GBPSGD": "1.7320", "GBPUSD": "1.3385", "HKDSEK": "1.2302", "HKDSGD": "0.1654", "JPYHKD": "0.0539", "JPYSEK": "0.0662", "NZDSEK": "5.6986", "NZDUSD": "0.5920", "SGDAUD": "1.2024", "SGDCHF": "0.6392", "SGDJPY": "111.3350", "USDAED": "3.6726", "USDARS": "1 142.5000", "USDBRL": "5.6622", "USDCAD": "1.3915", "USDCHF": "0.8282", "USDCLP": "943.7500", "USDCNY": "7.2165", "USDCOP": "4 167.4600", "USDCZK": "22.0400", "USDDKK": "6.6078", "USDEGP": "49.8500", "USDGBP": "0.7470", "USDHKD": "7.8254", "USDHUF": "356.3800", "USDIDR": "16 409.0000", "USDILS": "3.5202", "USDINR": "85.5100", "USDISK": "128.5000", "USDJPY": "144.4740", "USDKRW": "1 392.7000", "USDKWD": "0.3071", "USDKZT": "511.8300", "USDMXN": "19.2600", "USDMYR": "4.2950", "USDNOK": "10.2475", "USDPEN": "3.6857", "USDPHP": "55.6390", "USDPKR": "281.7100", "USDPLN": "3.7525", "USDQAR": "3.6400", "USDRON": "4.4887", "USDRUB": "80.5000", "USDSAR": "3.7504", "USDSEK": "9.6352", "USDSGD": "1.2945", "USDTHB": "32.8600", "USDTRY": "38.7961", "USDTWD": "30.1410", "USDUAH": "41.5760", "USDVND": "25 950.0000", "USDZAR": "17.9211"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 20.05.2025</th></tr>';

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
