
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0808", "AUDJPY": "100.8071", "AUDSEK": "6.1964", "AUDUSD": "0.6537", "CADJPY": "109.7190", "CADSEK": "6.7442", "CHFAUD": "1.8937", "CHFHKD": "9.6217", "CHFJPY": "190.9012", "EURAUD": "1.7614", "EURCAD": "1.6189", "EURCHF": "0.9304", "EURCNY": "8.2009", "EURCZK": "24.3060", "EURGBP": "0.8765", "EURHKD": "8.9523", "EURILS": "3.7394", "EURJPY": "177.6200", "EURNOK": "11.6567", "EURNZD": "2.0179", "EURRUB": "92.9503", "EURSEK": "10.9178", "EURSGD": "1.5023", "EURUSD": "1.1518", "EURZAR": "19.9349", "GBPAUD": "2.0098", "GBPCAD": "1.8465", "GBPCHF": "1.0613", "GBPHKD": "10.2114", "GBPJPY": "202.6011", "GBPNOK": "13.2962", "GBPRUB": "106.0237", "GBPSEK": "12.4534", "GBPSGD": "1.7136", "GBPUSD": "1.3138", "HKDSEK": "1.2196", "HKDSGD": "0.1678", "JPYHKD": "0.0504", "JPYSEK": "0.0615", "NZDSEK": "5.4087", "NZDUSD": "0.5706", "SGDAUD": "1.1728", "SGDCHF": "0.6193", "SGDJPY": "118.2320", "USDAED": "3.6729", "USDARS": "1 478.5000", "USDBRL": "5.3568", "USDCAD": "1.4055", "USDCHF": "0.8078", "USDCLP": "938.2400", "USDCNY": "7.1240", "USDCOP": "3 854.6400", "USDCZK": "21.1030", "USDDKK": "6.4802", "USDEGP": "47.1500", "USDGBP": "0.7611", "USDHKD": "7.7724", "USDHUF": "336.1100", "USDIDR": "16 650.0000", "USDILS": "3.2466", "USDINR": "88.6960", "USDISK": "126.0900", "USDJPY": "154.2100", "USDKRW": "1 429.9000", "USDKWD": "0.3071", "USDKZT": "525.3500", "USDMXN": "18.4920", "USDMYR": "4.1970", "USDNOK": "10.1204", "USDPEN": "3.3750", "USDPHP": "58.6380", "USDPKR": "280.8000", "USDPLN": "3.6893", "USDQAR": "3.6181", "USDRON": "4.4124", "USDRUB": "80.7000", "USDSAR": "3.7503", "USDSEK": "9.4789", "USDSGD": "1.3043", "USDTHB": "32.4100", "USDTRY": "42.0528", "USDTWD": "30.9150", "USDUAH": "41.8000", "USDVND": "26 309.0000", "USDZAR": "17.3076"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 04.11.2025</th></tr>';

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
