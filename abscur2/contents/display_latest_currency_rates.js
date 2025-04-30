
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9521", "AUDJPY": "90.7990", "AUDSEK": "6.1393", "AUDUSD": "0.6384", "CADJPY": "102.8830", "CADSEK": "6.9533", "CHFAUD": "1.8996", "CHFHKD": "9.4150", "CHFJPY": "172.6920", "EURAUD": "1.7824", "EURCAD": "1.5735", "EURCHF": "0.9378", "EURCNY": "8.2740", "EURCZK": "24.8990", "EURGBP": "0.8490", "EURHKD": "8.8325", "EURILS": "4.1183", "EURJPY": "161.9020", "EURNOK": "11.8069", "EURNZD": "1.9191", "EURRUB": "93.3280", "EURSEK": "10.9536", "EURSGD": "1.4895", "EURUSD": "1.1385", "EURZAR": "21.0827", "GBPAUD": "2.0986", "GBPCAD": "1.8534", "GBPCHF": "1.1037", "GBPHKD": "10.3980", "GBPJPY": "190.7120", "GBPNOK": "13.9024", "GBPRUB": "109.9400", "GBPSEK": "12.8927", "GBPSGD": "1.7533", "GBPUSD": "1.3404", "HKDSEK": "1.2386", "HKDSGD": "0.1686", "JPYHKD": "0.0538", "JPYSEK": "0.0671", "NZDSEK": "5.7559", "NZDUSD": "0.5928", "SGDAUD": "1.1922", "SGDCHF": "0.6279", "SGDJPY": "108.4730", "USDAED": "3.6727", "USDARS": "1 164.0000", "USDBRL": "5.6326", "USDCAD": "1.3825", "USDCHF": "0.8233", "USDCLP": "943.8800", "USDCNY": "7.2715", "USDCOP": "4 184.2000", "USDCZK": "21.8540", "USDDKK": "6.5530", "USDEGP": "50.7500", "USDGBP": "0.7459", "USDHKD": "7.7582", "USDHUF": "354.6900", "USDIDR": "16 754.0000", "USDILS": "3.6165", "USDINR": "85.1000", "USDISK": "128.2000", "USDJPY": "142.2640", "USDKRW": "1 431.1300", "USDKWD": "0.3059", "USDKZT": "511.3300", "USDMXN": "19.5604", "USDMYR": "4.3250", "USDNOK": "10.3620", "USDPEN": "3.6660", "USDPHP": "56.0470", "USDPKR": "280.9000", "USDPLN": "3.7449", "USDQAR": "3.6395", "USDRON": "4.3686", "USDRUB": "81.8750", "USDSAR": "3.7508", "USDSEK": "9.6200", "USDSGD": "1.3077", "USDTHB": "33.4000", "USDTRY": "38.5091", "USDTWD": "32.3190", "USDUAH": "41.7441", "USDVND": "25 980.0000", "USDZAR": "18.5302"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 29.04.2025</th></tr>';

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
