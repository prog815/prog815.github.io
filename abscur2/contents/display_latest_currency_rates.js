
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0916", "AUDJPY": "96.3968", "AUDSEK": "6.3205", "AUDUSD": "0.6487", "CADJPY": "108.0806", "CADSEK": "7.0866", "CHFAUD": "1.9164", "CHFHKD": "9.7576", "CHFJPY": "184.7340", "EURAUD": "1.7863", "EURCAD": "1.5942", "EURCHF": "0.9327", "EURCNY": "8.3289", "EURCZK": "24.6220", "EURGBP": "0.8642", "EURHKD": "9.1009", "EURILS": "3.8923", "EURJPY": "172.3000", "EURNOK": "11.9364", "EURNZD": "1.9547", "EURRUB": "90.4938", "EURSEK": "11.2975", "EURSGD": "1.4905", "EURUSD": "1.1595", "EURZAR": "20.6715", "GBPAUD": "2.0680", "GBPCAD": "1.8444", "GBPCHF": "1.0791", "GBPHKD": "10.5294", "GBPJPY": "199.3469", "GBPNOK": "13.8099", "GBPRUB": "104.6980", "GBPSEK": "13.0708", "GBPSGD": "1.7245", "GBPUSD": "1.3415", "HKDSEK": "1.2414", "HKDSGD": "0.1638", "JPYHKD": "0.0528", "JPYSEK": "0.0656", "NZDSEK": "5.7788", "NZDUSD": "0.5931", "SGDAUD": "1.1992", "SGDCHF": "0.6258", "SGDJPY": "115.5970", "USDAED": "3.6729", "USDARS": "1 272.5000", "USDBRL": "5.5436", "USDCAD": "1.3749", "USDCHF": "0.8044", "USDCLP": "962.6000", "USDCNY": "7.1832", "USDCOP": "4 021.1000", "USDCZK": "21.2350", "USDDKK": "6.4355", "USDEGP": "49.3600", "USDGBP": "0.7454", "USDHKD": "7.8490", "USDHUF": "343.8700", "USDIDR": "16 325.0000", "USDILS": "3.3568", "USDINR": "86.0200", "USDISK": "122.1500", "USDJPY": "148.6000", "USDKRW": "1 391.5400", "USDKWD": "0.3056", "USDKZT": "532.4100", "USDMXN": "18.7550", "USDMYR": "4.2420", "USDNOK": "10.2944", "USDPEN": "3.5595", "USDPHP": "57.2000", "USDPKR": "284.7500", "USDPLN": "3.6684", "USDQAR": "3.6361", "USDRON": "4.3723", "USDRUB": "78.0455", "USDSAR": "3.7509", "USDSEK": "9.7434", "USDSGD": "1.2855", "USDTHB": "32.4800", "USDTRY": "40.0481", "USDTWD": "29.4110", "USDUAH": "41.7000", "USDVND": "26 135.0000", "USDZAR": "17.8279"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 17.07.2025</th></tr>';

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
