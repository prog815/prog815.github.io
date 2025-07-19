
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1070", "AUDJPY": "96.8456", "AUDSEK": "6.2754", "AUDUSD": "0.6508", "CADJPY": "108.4542", "CADSEK": "7.0276", "CHFAUD": "1.9176", "CHFHKD": "9.7576", "CHFJPY": "185.7107", "EURAUD": "1.7852", "EURCAD": "1.5951", "EURCHF": "0.9315", "EURCNY": "8.3440", "EURCZK": "24.6220", "EURGBP": "0.8667", "EURHKD": "9.1224", "EURILS": "3.9007", "EURJPY": "172.9900", "EURNOK": "11.8082", "EURNZD": "1.9495", "EURRUB": "91.4888", "EURSEK": "11.2095", "EURSGD": "1.4937", "EURUSD": "1.1625", "EURZAR": "20.6715", "GBPAUD": "2.0680", "GBPCAD": "1.8444", "GBPCHF": "1.0791", "GBPHKD": "10.5294", "GBPJPY": "199.3469", "GBPNOK": "13.8099", "GBPRUB": "104.6980", "GBPSEK": "13.0708", "GBPSGD": "1.7245", "GBPUSD": "1.3415", "HKDSEK": "1.2414", "HKDSGD": "0.1638", "JPYHKD": "0.0528", "JPYSEK": "0.0656", "NZDSEK": "5.7788", "NZDUSD": "0.5931", "SGDAUD": "1.1992", "SGDCHF": "0.6258", "SGDJPY": "115.5970", "USDAED": "3.6729", "USDARS": "1 272.5000", "USDBRL": "5.5436", "USDCAD": "1.3749", "USDCHF": "0.8044", "USDCLP": "962.6000", "USDCNY": "7.1770", "USDCOP": "4 021.1000", "USDCZK": "21.2350", "USDDKK": "6.4355", "USDEGP": "49.3600", "USDGBP": "0.7454", "USDHKD": "7.8490", "USDHUF": "343.8700", "USDIDR": "16 325.0000", "USDILS": "3.3568", "USDINR": "86.0200", "USDISK": "122.1500", "USDJPY": "148.6000", "USDKRW": "1 391.5400", "USDKWD": "0.3056", "USDKZT": "532.4100", "USDMXN": "18.7550", "USDMYR": "4.2420", "USDNOK": "10.2944", "USDPEN": "3.5595", "USDPHP": "57.2000", "USDPKR": "284.7500", "USDPLN": "3.6684", "USDQAR": "3.6361", "USDRON": "4.3723", "USDRUB": "78.0455", "USDSAR": "3.7509", "USDSEK": "9.7434", "USDSGD": "1.2855", "USDTHB": "32.4800", "USDTRY": "40.0481", "USDTWD": "29.4110", "USDUAH": "41.7000", "USDVND": "26 135.0000", "USDZAR": "17.8279"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 18.07.2025</th></tr>';

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
