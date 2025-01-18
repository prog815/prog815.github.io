
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8165", "AUDJPY": "96.7710", "AUDSEK": "6.9142", "AUDUSD": "0.6191", "CADJPY": "107.8900", "CADSEK": "7.7284", "CHFAUD": "1.7648", "CHFHKD": "8.5086", "CHFJPY": "170.7990", "EURAUD": "1.6583", "EURCAD": "1.4873", "EURCHF": "0.9394", "EURCNY": "7.5216", "EURCZK": "25.2335", "EURGBP": "0.8439", "EURHKD": "7.9922", "EURILS": "3.7204", "EURJPY": "160.4840", "EURNOK": "11.7571", "EURNZD": "1.8387", "EURRUB": "105.1300", "EURSEK": "11.5057", "EURSGD": "1.4039", "EURUSD": "1.0269", "EURZAR": "19.2622", "GBPAUD": "1.9648", "GBPCAD": "1.7576", "GBPCHF": "1.1116", "GBPHKD": "9.4840", "GBPJPY": "189.5900", "GBPNOK": "13.9265", "GBPRUB": "124.4650", "GBPSEK": "13.6159", "GBPSGD": "1.6662", "GBPUSD": "1.2182", "HKDSEK": "1.4337", "HKDSGD": "0.1756", "JPYHKD": "0.0497", "JPYSEK": "0.0713", "NZDSEK": "6.2345", "NZDUSD": "0.5580", "SGDAUD": "1.1822", "SGDCHF": "0.6670", "SGDJPY": "113.7200", "USDAED": "3.6728", "USDARS": "1 041.5000", "USDBRL": "6.0734", "USDCAD": "1.4426", "USDCHF": "0.9126", "USDCLP": "1 017.0800", "USDCNY": "7.3290", "USDCOP": "4 351.2000", "USDCZK": "24.5320", "USDDKK": "7.2495", "USDEGP": "50.3500", "USDGBP": "0.8208", "USDHKD": "7.7870", "USDHUF": "401.0000", "USDIDR": "16 360.0000", "USDILS": "3.5895", "USDINR": "86.5830", "USDISK": "141.1500", "USDJPY": "155.6250", "USDKRW": "1 458.2800", "USDKWD": "0.3084", "USDKZT": "530.2300", "USDMXN": "20.8250", "USDMYR": "4.5045", "USDNOK": "11.4321", "USDPEN": "3.7564", "USDPHP": "58.5950", "USDPKR": "278.8531", "USDPLN": "4.1386", "USDQAR": "3.6400", "USDRON": "4.8355", "USDRUB": "102.4375", "USDSAR": "3.7490", "USDSEK": "11.1815", "USDSGD": "1.3682", "USDTHB": "34.4500", "USDTRY": "35.5676", "USDTWD": "32.9020", "USDUAH": "42.2659", "USDVND": "25 370.0000", "USDZAR": "18.7912"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 17.01.2025</th></tr>';

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
