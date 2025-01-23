
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8844", "AUDJPY": "98.0550", "AUDSEK": "6.9099", "AUDUSD": "0.6270", "CADJPY": "108.6200", "CADSEK": "7.6544", "CHFAUD": "1.7561", "CHFHKD": "8.5821", "CHFJPY": "172.3250", "EURAUD": "1.6596", "EURCAD": "1.4979", "EURCHF": "0.9442", "EURCNY": "7.5818", "EURCZK": "25.1362", "EURGBP": "0.8447", "EURHKD": "8.1040", "EURILS": "3.7026", "EURJPY": "162.7080", "EURNOK": "11.7298", "EURNZD": "1.8377", "EURRUB": "102.5870", "EURSEK": "11.4661", "EURSGD": "1.4113", "EURUSD": "1.0405", "EURZAR": "19.3010", "GBPAUD": "1.9639", "GBPCAD": "1.7730", "GBPCHF": "1.1175", "GBPHKD": "9.5900", "GBPJPY": "192.5490", "GBPNOK": "13.8781", "GBPRUB": "121.4340", "GBPSEK": "13.5681", "GBPSGD": "1.6701", "GBPUSD": "1.2316", "HKDSEK": "1.4134", "HKDSGD": "0.1741", "JPYHKD": "0.0495", "JPYSEK": "0.0699", "NZDSEK": "6.2378", "NZDUSD": "0.5664", "SGDAUD": "1.1753", "SGDCHF": "0.6690", "SGDJPY": "115.2410", "USDAED": "3.6728", "USDARS": "1 046.0000", "USDBRL": "5.9537", "USDCAD": "1.4398", "USDCHF": "0.9075", "USDCLP": "991.7800", "USDCNY": "7.2880", "USDCOP": "4 258.5000", "USDCZK": "24.1300", "USDDKK": "7.1686", "USDEGP": "50.2600", "USDGBP": "0.8117", "USDHKD": "7.7897", "USDHUF": "393.5000", "USDIDR": "16 275.0000", "USDILS": "3.5626", "USDINR": "86.3790", "USDISK": "140.0000", "USDJPY": "156.3110", "USDKRW": "1 436.4700", "USDKWD": "0.3079", "USDKZT": "520.3300", "USDMXN": "20.4633", "USDMYR": "4.4415", "USDNOK": "11.2771", "USDPEN": "3.7168", "USDPHP": "58.6640", "USDPKR": "278.2012", "USDPLN": "4.0472", "USDQAR": "3.6400", "USDRON": "4.7810", "USDRUB": "98.5800", "USDSAR": "3.7479", "USDSEK": "11.0235", "USDSGD": "1.3565", "USDTHB": "34.0000", "USDTRY": "35.6550", "USDTWD": "32.7580", "USDUAH": "42.1661", "USDVND": "25 050.0000", "USDZAR": "18.5588"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 23.01.2025</th></tr>';

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
