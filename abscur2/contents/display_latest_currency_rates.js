
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1509", "AUDJPY": "97.5153", "AUDSEK": "6.1771", "AUDUSD": "0.6613", "CADJPY": "106.3772", "CADSEK": "6.7385", "CHFAUD": "1.8926", "CHFHKD": "9.7484", "CHFJPY": "184.5557", "EURAUD": "1.7679", "EURCAD": "1.6209", "EURCHF": "0.9343", "EURCNY": "8.3262", "EURCZK": "24.3580", "EURGBP": "0.8641", "EURHKD": "9.1077", "EURILS": "3.8924", "EURJPY": "172.4200", "EURNOK": "11.5999", "EURNZD": "1.9685", "EURRUB": "98.8006", "EURSEK": "10.9201", "EURSGD": "1.4996", "EURUSD": "1.1693", "EURZAR": "20.4286", "GBPAUD": "2.0458", "GBPCAD": "1.8754", "GBPCHF": "1.0810", "GBPHKD": "10.5377", "GBPJPY": "199.4986", "GBPNOK": "13.4213", "GBPRUB": "114.3140", "GBPSEK": "12.6373", "GBPSGD": "1.7351", "GBPUSD": "1.3529", "HKDSEK": "1.1992", "HKDSGD": "0.1646", "JPYHKD": "0.0528", "JPYSEK": "0.0633", "NZDSEK": "5.5476", "NZDUSD": "0.5939", "SGDAUD": "1.1791", "SGDCHF": "0.6230", "SGDJPY": "114.9786", "USDAED": "3.6729", "USDARS": "1 423.5000", "USDBRL": "5.4084", "USDCAD": "1.3862", "USDCHF": "0.7990", "USDCLP": "962.6300", "USDCNY": "7.1200", "USDCOP": "3 923.5000", "USDCZK": "20.8310", "USDDKK": "6.3831", "USDEGP": "48.0500", "USDGBP": "0.7391", "USDHKD": "7.7890", "USDHUF": "336.0200", "USDIDR": "16 455.0000", "USDILS": "3.3294", "USDINR": "88.0340", "USDISK": "122.3700", "USDJPY": "147.4600", "USDKRW": "1 389.0700", "USDKWD": "0.3052", "USDKZT": "537.7500", "USDMXN": "18.5910", "USDMYR": "4.2100", "USDNOK": "9.9204", "USDPEN": "3.4804", "USDPHP": "57.0100", "USDPKR": "283.2100", "USDPLN": "3.6432", "USDQAR": "3.6338", "USDRON": "4.3383", "USDRUB": "84.4955", "USDSAR": "3.7516", "USDSEK": "9.3409", "USDSGD": "1.2825", "USDTHB": "31.7200", "USDTRY": "41.2528", "USDTWD": "30.2770", "USDUAH": "41.2500", "USDVND": "26 370.0000", "USDZAR": "17.4708"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 11.09.2025</th></tr>';

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
