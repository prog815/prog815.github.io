
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9469", "AUDJPY": "90.6610", "AUDSEK": "6.1367", "AUDUSD": "0.6376", "CADJPY": "102.6490", "CADSEK": "6.9502", "CHFAUD": "1.9200", "CHFHKD": "9.5047", "CHFJPY": "174.1200", "EURAUD": "1.7862", "EURCAD": "1.5772", "EURCHF": "0.9298", "EURCNY": "8.3150", "EURCZK": "25.0840", "EURGBP": "0.8568", "EURHKD": "8.8426", "EURILS": "4.2002", "EURJPY": "161.9910", "EURNOK": "11.9524", "EURNZD": "1.9168", "EURRUB": "93.5290", "EURSEK": "10.9710", "EURSGD": "1.4933", "EURUSD": "1.1391", "EURZAR": "21.4328", "GBPAUD": "2.0851", "GBPCAD": "1.8411", "GBPCHF": "1.0852", "GBPHKD": "10.3180", "GBPJPY": "189.0550", "GBPNOK": "13.9511", "GBPRUB": "109.1580", "GBPSEK": "12.8020", "GBPSGD": "1.7419", "GBPUSD": "1.3294", "HKDSEK": "1.2394", "HKDSGD": "0.1688", "JPYHKD": "0.0543", "JPYSEK": "0.0672", "NZDSEK": "5.6872", "NZDUSD": "0.5937", "SGDAUD": "1.1958", "SGDCHF": "0.6223", "SGDJPY": "108.4430", "USDAED": "3.6729", "USDARS": "1 136.0000", "USDBRL": "5.8067", "USDCAD": "1.3846", "USDCHF": "0.8156", "USDCLP": "965.2900", "USDCNY": "7.2990", "USDCOP": "4 304.6600", "USDCZK": "21.9460", "USDDKK": "6.5489", "USDEGP": "51.0800", "USDGBP": "0.7520", "USDHKD": "7.7618", "USDHUF": "357.7400", "USDIDR": "16 819.0000", "USDILS": "3.6828", "USDINR": "85.4090", "USDISK": "127.2000", "USDJPY": "142.1500", "USDKRW": "1 423.6100", "USDKWD": "0.3061", "USDKZT": "520.6800", "USDMXN": "19.6444", "USDMYR": "4.4100", "USDNOK": "10.4828", "USDPEN": "3.7317", "USDPHP": "56.7060", "USDPKR": "280.5000", "USDPLN": "3.7472", "USDQAR": "3.6400", "USDRON": "4.3670", "USDRUB": "81.6250", "USDSAR": "3.7489", "USDSEK": "9.6097", "USDSGD": "1.3107", "USDTHB": "33.3500", "USDTRY": "38.1743", "USDTWD": "32.5680", "USDUAH": "41.3825", "USDVND": "25 925.0000", "USDZAR": "18.8117"};

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
