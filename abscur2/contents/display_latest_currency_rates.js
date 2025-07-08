
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0926", "AUDJPY": "94.7378", "AUDSEK": "6.1805", "AUDUSD": "0.6488", "CADJPY": "106.7242", "CADSEK": "6.9723", "CHFAUD": "1.9441", "CHFHKD": "9.8940", "CHFJPY": "182.8908", "EURAUD": "1.8027", "EURCAD": "1.6018", "EURCHF": "0.9347", "EURCNY": "8.3991", "EURCZK": "24.6140", "EURGBP": "0.8608", "EURHKD": "9.1892", "EURILS": "3.9277", "EURJPY": "170.9900", "EURNOK": "11.8559", "EURNZD": "1.9528", "EURRUB": "92.1288", "EURSEK": "11.1557", "EURSGD": "1.4977", "EURUSD": "1.1707", "EURZAR": "20.9094", "GBPAUD": "2.0932", "GBPCAD": "1.8606", "GBPCHF": "1.0857", "GBPHKD": "10.6743", "GBPJPY": "198.5726", "GBPNOK": "13.7729", "GBPRUB": "107.0180", "GBPSEK": "12.9545", "GBPSGD": "1.7397", "GBPUSD": "1.3599", "HKDSEK": "1.2136", "HKDSGD": "0.1630", "JPYHKD": "0.0544", "JPYSEK": "0.0657", "NZDSEK": "5.7099", "NZDUSD": "0.5994", "SGDAUD": "1.2111", "SGDCHF": "0.6239", "SGDJPY": "114.1406", "USDAED": "3.6728", "USDARS": "1 260.0000", "USDBRL": "5.4872", "USDCAD": "1.3682", "USDCHF": "0.7984", "USDCLP": "942.7100", "USDCNY": "7.1750", "USDCOP": "4 046.0000", "USDCZK": "21.0250", "USDDKK": "6.3715", "USDEGP": "49.6200", "USDGBP": "0.7368", "USDHKD": "7.8493", "USDHUF": "341.4300", "USDIDR": "16 225.0000", "USDILS": "3.3551", "USDINR": "85.7500", "USDISK": "121.6600", "USDJPY": "146.0200", "USDKRW": "1 375.2100", "USDKWD": "0.3051", "USDKZT": "519.0700", "USDMXN": "18.6590", "USDMYR": "4.2300", "USDNOK": "10.1279", "USDPEN": "3.5630", "USDPHP": "56.5690", "USDPKR": "283.5000", "USDPLN": "3.6276", "USDQAR": "3.6355", "USDRON": "4.3237", "USDRUB": "78.6955", "USDSAR": "3.7492", "USDSEK": "9.5261", "USDSGD": "1.2793", "USDTHB": "32.6100", "USDTRY": "39.9589", "USDTWD": "29.0990", "USDUAH": "41.8000", "USDVND": "26 120.0000", "USDZAR": "17.8563"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 07.07.2025</th></tr>';

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
