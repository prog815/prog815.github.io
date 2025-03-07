
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9048", "AUDJPY": "93.5160", "AUDSEK": "6.3704", "AUDUSD": "0.6317", "CADJPY": "103.4830", "CADSEK": "7.0595", "CHFAUD": "1.7995", "CHFHKD": "8.8316", "CHFJPY": "167.6730", "EURAUD": "1.7064", "EURCAD": "1.5422", "EURCHF": "0.9522", "EURCNY": "7.8270", "EURCZK": "25.0251", "EURGBP": "0.8373", "EURHKD": "8.4058", "EURILS": "3.9188", "EURJPY": "159.6340", "EURNOK": "11.7381", "EURNZD": "1.8815", "EURRUB": "96.2770", "EURSEK": "10.9689", "EURSGD": "1.4407", "EURUSD": "1.0782", "EURZAR": "19.5916", "GBPAUD": "2.0382", "GBPCAD": "1.8418", "GBPCHF": "1.1370", "GBPHKD": "10.0130", "GBPJPY": "190.6630", "GBPNOK": "14.0162", "GBPRUB": "114.7410", "GBPSEK": "13.0444", "GBPSGD": "1.7167", "GBPUSD": "1.2876", "HKDSEK": "1.2990", "HKDSGD": "0.1711", "JPYHKD": "0.0523", "JPYSEK": "0.0679", "NZDSEK": "5.7786", "NZDUSD": "0.5730", "SGDAUD": "1.1868", "SGDCHF": "0.6614", "SGDJPY": "110.9800", "USDAED": "3.6724", "USDARS": "1 063.5000", "USDBRL": "5.7639", "USDCAD": "1.4304", "USDCHF": "0.8796", "USDCLP": "927.0500", "USDCNY": "7.2420", "USDCOP": "4 105.4700", "USDCZK": "23.1730", "USDDKK": "6.9124", "USDEGP": "50.6300", "USDGBP": "0.7761", "USDHKD": "7.7738", "USDHUF": "369.9600", "USDIDR": "16 324.0000", "USDILS": "3.6098", "USDINR": "86.9940", "USDISK": "135.7700", "USDJPY": "148.0500", "USDKRW": "1 445.6800", "USDKWD": "0.3078", "USDKZT": "497.1200", "USDMXN": "20.2854", "USDMYR": "4.4320", "USDNOK": "10.8765", "USDPEN": "3.6527", "USDPHP": "57.3430", "USDPKR": "279.7827", "USDPLN": "3.8695", "USDQAR": "3.6400", "USDRON": "4.6075", "USDRUB": "89.2260", "USDSAR": "3.7469", "USDSEK": "10.1636", "USDSGD": "1.3305", "USDTHB": "33.7900", "USDTRY": "36.4791", "USDTWD": "32.8670", "USDUAH": "41.3680", "USDVND": "25 485.0000", "USDZAR": "18.1420"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 07.03.2025</th></tr>';

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
