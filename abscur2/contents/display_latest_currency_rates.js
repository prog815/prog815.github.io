
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8288", "AUDJPY": "96.8200", "AUDSEK": "6.9309", "AUDUSD": "0.6198", "CADJPY": "108.5960", "CADSEK": "7.7748", "CHFAUD": "1.7666", "CHFHKD": "8.5311", "CHFJPY": "171.0630", "EURAUD": "1.6569", "EURCAD": "1.4769", "EURCHF": "0.9374", "EURCNY": "7.5399", "EURCZK": "25.2310", "EURGBP": "0.8422", "EURHKD": "8.0007", "EURILS": "3.7176", "EURJPY": "160.3940", "EURNOK": "11.6942", "EURNZD": "1.8374", "EURRUB": "105.2200", "EURSEK": "11.4830", "EURSGD": "1.4057", "EURUSD": "1.0273", "EURZAR": "19.3871", "GBPAUD": "1.9668", "GBPCAD": "1.7536", "GBPCHF": "1.1130", "GBPHKD": "9.4980", "GBPJPY": "190.4060", "GBPNOK": "13.8847", "GBPRUB": "124.9540", "GBPSEK": "13.6338", "GBPSGD": "1.6687", "GBPUSD": "1.2194", "HKDSEK": "1.4337", "HKDSGD": "0.1756", "JPYHKD": "0.0496", "JPYSEK": "0.0711", "NZDSEK": "6.2473", "NZDUSD": "0.5588", "SGDAUD": "1.1782", "SGDCHF": "0.6668", "SGDJPY": "114.0580", "USDAED": "3.6727", "USDARS": "1 040.5000", "USDBRL": "6.0271", "USDCAD": "1.4379", "USDCHF": "0.9126", "USDCLP": "1 009.4300", "USDCNY": "7.3316", "USDCOP": "4 302.4900", "USDCZK": "24.5420", "USDDKK": "7.2628", "USDEGP": "50.3500", "USDGBP": "0.8198", "USDHKD": "7.7888", "USDHUF": "401.2500", "USDIDR": "16 355.0000", "USDILS": "3.6158", "USDINR": "86.5400", "USDISK": "140.0000", "USDJPY": "156.1420", "USDKRW": "1 458.6500", "USDKWD": "0.3081", "USDKZT": "529.8300", "USDMXN": "20.6087", "USDMYR": "4.5015", "USDNOK": "11.3868", "USDPEN": "3.7613", "USDPHP": "58.5540", "USDPKR": "278.1861", "USDPLN": "4.1543", "USDQAR": "3.6400", "USDRON": "4.8409", "USDRUB": "102.4300", "USDSAR": "3.7498", "USDSEK": "11.1795", "USDSGD": "1.3685", "USDTHB": "34.6200", "USDTRY": "35.4442", "USDTWD": "32.9200", "USDUAH": "42.2734", "USDVND": "25 375.0000", "USDZAR": "18.8764"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 16.01.2025</th></tr>';

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
