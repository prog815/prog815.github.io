
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8935", "AUDJPY": "93.0830", "AUDSEK": "6.2928", "AUDUSD": "0.6268", "CADJPY": "104.2850", "CADSEK": "7.0034", "CHFAUD": "1.7990", "CHFHKD": "8.8223", "CHFJPY": "168.7340", "EURAUD": "1.7362", "EURCAD": "1.5498", "EURCHF": "0.9549", "EURCNY": "7.8484", "EURCZK": "24.9181", "EURGBP": "0.8352", "EURHKD": "8.3995", "EURILS": "3.9925", "EURJPY": "161.4080", "EURNOK": "11.2826", "EURNZD": "1.8925", "EURRUB": "91.5300", "EURSEK": "10.7472", "EURSGD": "1.4662", "EURUSD": "1.0887", "EURZAR": "20.5591", "GBPAUD": "2.0754", "GBPCAD": "1.8554", "GBPCHF": "1.1463", "GBPHKD": "10.0554", "GBPJPY": "193.1970", "GBPNOK": "13.5643", "GBPRUB": "109.1942", "GBPSEK": "12.8552", "GBPSGD": "1.7530", "GBPUSD": "1.3031", "HKDSEK": "1.2864", "HKDSGD": "0.1727", "JPYHKD": "0.0524", "JPYSEK": "0.0666", "NZDSEK": "5.7181", "NZDUSD": "0.5715", "SGDAUD": "1.1851", "SGDCHF": "0.6575", "SGDJPY": "110.0550", "USDAED": "3.6729", "USDARS": "1 072.8001", "USDBRL": "5.6652", "USDCAD": "1.4253", "USDCHF": "0.8785", "USDCLP": "954.8000", "USDCNY": "7.2670", "USDCOP": "4 147.4702", "USDCZK": "22.8730", "USDDKK": "6.8518", "USDEGP": "50.5200", "USDGBP": "0.7692", "USDHKD": "7.7840", "USDHUF": "367.3300", "USDIDR": "16 554.0000", "USDILS": "3.7093", "USDINR": "85.4240", "USDISK": "132.4500", "USDJPY": "148.3170", "USDKRW": "1 466.0501", "USDKWD": "0.3083", "USDKZT": "500.8872", "USDMXN": "20.2439", "USDMYR": "4.4680", "USDNOK": "10.4126", "USDPEN": "3.6697", "USDPHP": "57.1400", "USDPKR": "278.8896", "USDPLN": "3.8247", "USDQAR": "3.6400", "USDRON": "4.6044", "USDRUB": "84.0000", "USDSAR": "3.7466", "USDSEK": "9.8752", "USDSGD": "1.3485", "USDTHB": "34.3400", "USDTRY": "37.8806", "USDTWD": "33.1790", "USDUAH": "41.3730", "USDVND": "25 570.0000", "USDZAR": "18.8799"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 02.04.2025</th></tr>';

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
