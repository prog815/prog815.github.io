
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9458", "AUDJPY": "90.7110", "AUDSEK": "6.1239", "AUDUSD": "0.6371", "CADJPY": "102.6240", "CADSEK": "6.9316", "CHFAUD": "1.9172", "CHFHKD": "9.4861", "CHFJPY": "173.8890", "EURAUD": "1.7844", "EURCAD": "1.5765", "EURCHF": "0.9305", "EURCNY": "8.3039", "EURCZK": "25.0220", "EURGBP": "0.8568", "EURHKD": "8.8277", "EURILS": "4.1820", "EURJPY": "161.8700", "EURNOK": "11.9111", "EURNZD": "1.9177", "EURRUB": "92.9110", "EURSEK": "10.9393", "EURSGD": "1.4913", "EURUSD": "1.1375", "EURZAR": "21.4623", "GBPAUD": "2.0829", "GBPCAD": "1.8379", "GBPCHF": "1.0808", "GBPHKD": "10.2970", "GBPJPY": "188.5400", "GBPNOK": "13.9196", "GBPRUB": "109.2600", "GBPSEK": "12.9355", "GBPSGD": "1.7416", "GBPUSD": "1.3232", "HKDSEK": "1.2460", "HKDSGD": "0.1720", "JPYHKD": "0.0542", "JPYSEK": "0.0676", "NZDSEK": "5.6524", "NZDUSD": "0.5932", "SGDAUD": "1.2050", "SGDCHF": "0.6229", "SGDJPY": "108.5100", "USDAED": "3.6729", "USDARS": "1 136.0000", "USDBRL": "5.8562", "USDCAD": "1.3893", "USDCHF": "0.8165", "USDCLP": "965.8000", "USDCNY": "7.3080", "USDCOP": "4 309.5900", "USDCZK": "22.0060", "USDDKK": "6.5687", "USDEGP": "51.0700", "USDGBP": "0.7556", "USDHKD": "7.7620", "USDHUF": "358.3700", "USDIDR": "16 820.0000", "USDILS": "3.6905", "USDINR": "85.4380", "USDISK": "127.5000", "USDJPY": "142.4970", "USDKRW": "1 416.1800", "USDKWD": "0.3065", "USDKZT": "523.1300", "USDMXN": "19.9210", "USDMYR": "4.4035", "USDNOK": "10.5763", "USDPEN": "3.7190", "USDPHP": "56.6680", "USDPKR": "280.0836", "USDPLN": "3.7666", "USDQAR": "3.6400", "USDRON": "4.3757", "USDRUB": "82.0300", "USDSAR": "3.7493", "USDSEK": "9.6931", "USDSGD": "1.3143", "USDTHB": "33.2890", "USDTRY": "38.1072", "USDTWD": "32.4590", "USDUAH": "41.1753", "USDVND": "25 670.0000", "USDZAR": "18.8409"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 18.04.2025</th></tr>';

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
