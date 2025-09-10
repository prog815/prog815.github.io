
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1267", "AUDJPY": "97.0253", "AUDSEK": "6.1731", "AUDUSD": "0.6582", "CADJPY": "106.4947", "CADSEK": "6.7755", "CHFAUD": "1.9056", "CHFHKD": "9.7692", "CHFJPY": "184.8865", "EURAUD": "1.7771", "EURCAD": "1.6201", "EURCHF": "0.9333", "EURCNY": "8.3357", "EURCZK": "24.3040", "EURGBP": "0.8653", "EURHKD": "9.1177", "EURILS": "3.9085", "EURJPY": "172.5600", "EURNOK": "11.6646", "EURNZD": "1.9740", "EURRUB": "97.9740", "EURSEK": "10.9777", "EURSGD": "1.5011", "EURUSD": "1.1706", "EURZAR": "20.5083", "GBPAUD": "2.0547", "GBPCAD": "1.8689", "GBPCHF": "1.0738", "GBPHKD": "10.5538", "GBPJPY": "199.7728", "GBPNOK": "13.4918", "GBPRUB": "111.6898", "GBPSEK": "12.6544", "GBPSGD": "1.7370", "GBPUSD": "1.3543", "HKDSEK": "1.1990", "HKDSGD": "0.1646", "JPYHKD": "0.0528", "JPYSEK": "0.0633", "NZDSEK": "5.5493", "NZDUSD": "0.5939", "SGDAUD": "1.1831", "SGDCHF": "0.6182", "SGDJPY": "115.0086", "USDAED": "3.6721", "USDARS": "1 415.0000", "USDBRL": "5.4192", "USDCAD": "1.3800", "USDCHF": "0.7929", "USDCLP": "970.0300", "USDCNY": "7.1210", "USDCOP": "3 932.5000", "USDCZK": "20.6770", "USDDKK": "6.3474", "USDEGP": "48.1500", "USDGBP": "0.7384", "USDHKD": "7.7928", "USDHUF": "334.1100", "USDIDR": "16 300.0000", "USDILS": "3.3144", "USDINR": "87.9530", "USDISK": "121.7500", "USDJPY": "147.5100", "USDKRW": "1 385.0800", "USDKWD": "0.3051", "USDKZT": "533.5600", "USDMXN": "18.6548", "USDMYR": "4.2150", "USDNOK": "9.9622", "USDPEN": "3.5092", "USDPHP": "56.6460", "USDPKR": "283.2100", "USDPLN": "3.6085", "USDQAR": "3.6364", "USDRON": "4.3097", "USDRUB": "82.4705", "USDSAR": "3.7517", "USDSEK": "9.3439", "USDSGD": "1.2826", "USDTHB": "31.6500", "USDTRY": "41.2266", "USDTWD": "30.3510", "USDUAH": "41.0800", "USDVND": "26 385.0000", "USDZAR": "17.4946"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 09.09.2025</th></tr>';

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
