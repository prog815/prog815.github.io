
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8874", "AUDJPY": "92.2030", "AUDSEK": "6.3288", "AUDUSD": "0.6281", "CADJPY": "101.7790", "CADSEK": "6.9854", "CHFAUD": "1.8175", "CHFHKD": "8.8182", "CHFJPY": "166.9660", "EURAUD": "1.7256", "EURCAD": "1.5640", "EURCHF": "0.9532", "EURCNY": "7.8674", "EURCZK": "25.0282", "EURGBP": "0.8416", "EURHKD": "8.4315", "EURILS": "3.9459", "EURJPY": "159.1790", "EURNOK": "11.6759", "EURNZD": "1.9022", "EURRUB": "94.8950", "EURSEK": "10.9678", "EURSGD": "1.4458", "EURUSD": "1.0844", "EURZAR": "19.8919", "GBPAUD": "2.0501", "GBPCAD": "1.8580", "GBPCHF": "1.1324", "GBPHKD": "10.0090", "GBPJPY": "189.1120", "GBPNOK": "13.8653", "GBPRUB": "112.6720", "GBPSEK": "13.0260", "GBPSGD": "1.7161", "GBPUSD": "1.2882", "HKDSEK": "1.2932", "HKDSGD": "0.1713", "JPYHKD": "0.0526", "JPYSEK": "0.0677", "NZDSEK": "5.7412", "NZDUSD": "0.5701", "SGDAUD": "1.1953", "SGDCHF": "0.6598", "SGDJPY": "110.7780", "USDAED": "3.6724", "USDARS": "1 065.2500", "USDBRL": "5.8550", "USDCAD": "1.4423", "USDCHF": "0.8790", "USDCLP": "937.5800", "USDCNY": "7.2590", "USDCOP": "4 173.4700", "USDCZK": "23.0570", "USDDKK": "6.8765", "USDEGP": "50.5500", "USDGBP": "0.7758", "USDHKD": "7.7668", "USDHUF": "368.7000", "USDIDR": "16 334.0000", "USDILS": "3.6398", "USDINR": "87.3540", "USDISK": "135.3000", "USDJPY": "146.7470", "USDKRW": "1 458.1000", "USDKWD": "0.3076", "USDKZT": "490.5800", "USDMXN": "20.3420", "USDMYR": "4.4250", "USDNOK": "10.7574", "USDPEN": "3.6688", "USDPHP": "57.4900", "USDPKR": "279.9348", "USDPLN": "3.8703", "USDQAR": "3.6400", "USDRON": "4.5855", "USDRUB": "85.5300", "USDSAR": "3.7483", "USDSEK": "10.1082", "USDSGD": "1.3329", "USDTHB": "33.8700", "USDTRY": "36.5692", "USDTWD": "32.8900", "USDUAH": "41.2127", "USDVND": "25 525.0000", "USDZAR": "18.3358"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 11.03.2025</th></tr>';

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
