
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1070", "AUDJPY": "100.3610", "AUDSEK": "6.1831", "AUDUSD": "0.6572", "CADJPY": "109.5323", "CADSEK": "6.7481", "CHFAUD": "1.9030", "CHFHKD": "9.7185", "CHFJPY": "190.9830", "EURAUD": "1.7636", "EURCAD": "1.6171", "EURCHF": "0.9275", "EURCNY": "8.2330", "EURCZK": "24.3450", "EURGBP": "0.8790", "EURHKD": "9.0135", "EURILS": "3.7772", "EURJPY": "177.1300", "EURNOK": "11.6125", "EURNZD": "2.0120", "EURRUB": "92.7868", "EURSEK": "10.9126", "EURSGD": "1.5043", "EURUSD": "1.1599", "EURZAR": "19.9496", "GBPAUD": "2.0075", "GBPCAD": "1.8394", "GBPCHF": "1.0549", "GBPHKD": "10.2522", "GBPJPY": "201.4703", "GBPNOK": "13.2083", "GBPRUB": "105.5381", "GBPSEK": "12.4122", "GBPSGD": "1.7110", "GBPUSD": "1.3193", "HKDSEK": "1.2107", "HKDSGD": "0.1669", "JPYHKD": "0.0509", "JPYSEK": "0.0616", "NZDSEK": "5.4219", "NZDUSD": "0.5763", "SGDAUD": "1.1733", "SGDCHF": "0.6166", "SGDJPY": "117.7500", "USDAED": "3.6728", "USDARS": "1 436.0000", "USDBRL": "5.3605", "USDCAD": "1.3942", "USDCHF": "0.7996", "USDCLP": "940.5900", "USDCNY": "7.0960", "USDCOP": "3 874.5000", "USDCZK": "20.9890", "USDDKK": "6.4366", "USDEGP": "47.2500", "USDGBP": "0.7580", "USDHKD": "7.7709", "USDHUF": "334.7100", "USDIDR": "16 610.0000", "USDILS": "3.2565", "USDINR": "88.3810", "USDISK": "123.9800", "USDJPY": "152.7100", "USDKRW": "1 426.0600", "USDKWD": "0.3067", "USDKZT": "528.5400", "USDMXN": "18.4820", "USDMYR": "4.1850", "USDNOK": "10.0116", "USDPEN": "3.3896", "USDPHP": "58.6050", "USDPKR": "281.7300", "USDPLN": "3.6527", "USDQAR": "3.6269", "USDRON": "4.3813", "USDRUB": "79.9955", "USDSAR": "3.7501", "USDSEK": "9.4082", "USDSGD": "1.2969", "USDTHB": "32.3900", "USDTRY": "41.9401", "USDTWD": "30.6110", "USDUAH": "42.0058", "USDVND": "26 335.0000", "USDZAR": "17.1994"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 30.10.2025</th></tr>';

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
