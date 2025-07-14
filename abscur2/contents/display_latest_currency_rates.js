
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1635", "AUDJPY": "96.9597", "AUDSEK": "6.2779", "AUDUSD": "0.6578", "CADJPY": "107.6856", "CADSEK": "6.9724", "CHFAUD": "1.9089", "CHFHKD": "9.8565", "CHFJPY": "185.0829", "EURAUD": "1.7759", "EURCAD": "1.6000", "EURCHF": "0.9309", "EURCNY": "8.3788", "EURCZK": "24.6440", "EURGBP": "0.8657", "EURHKD": "9.1755", "EURILS": "3.8907", "EURJPY": "172.3000", "EURNOK": "11.8036", "EURNZD": "1.9436", "EURRUB": "91.1158", "EURSEK": "11.1557", "EURSGD": "1.4961", "EURUSD": "1.1689", "EURZAR": "20.9496", "GBPAUD": "2.0521", "GBPCAD": "1.8477", "GBPCHF": "1.0751", "GBPHKD": "10.5963", "GBPJPY": "198.9753", "GBPNOK": "13.6313", "GBPRUB": "105.2247", "GBPSEK": "12.8832", "GBPSGD": "1.7277", "GBPUSD": "1.3499", "HKDSEK": "1.2158", "HKDSGD": "0.1631", "JPYHKD": "0.0532", "JPYSEK": "0.0648", "NZDSEK": "5.7349", "NZDUSD": "0.6009", "SGDAUD": "1.1878", "SGDCHF": "0.6222", "SGDJPY": "115.1653", "USDAED": "3.6729", "USDARS": "1 260.0000", "USDBRL": "5.5584", "USDCAD": "1.3688", "USDCHF": "0.7964", "USDCLP": "955.9800", "USDCNY": "7.1702", "USDCOP": "3 995.5000", "USDCZK": "21.0830", "USDDKK": "6.3828", "USDEGP": "49.4400", "USDGBP": "0.7408", "USDHKD": "7.8497", "USDHUF": "341.6200", "USDIDR": "16 205.0000", "USDILS": "3.3285", "USDINR": "85.8000", "USDISK": "121.6700", "USDJPY": "147.4000", "USDKRW": "1 378.9500", "USDKWD": "0.3053", "USDKZT": "523.4000", "USDMXN": "18.6240", "USDMYR": "4.2500", "USDNOK": "10.0980", "USDPEN": "3.5525", "USDPHP": "56.4980", "USDPKR": "284.1200", "USDPLN": "3.6419", "USDQAR": "3.6367", "USDRON": "4.3430", "USDRUB": "77.9500", "USDSAR": "3.7504", "USDSEK": "9.5438", "USDSGD": "1.2799", "USDTHB": "32.3900", "USDTRY": "40.1581", "USDTWD": "29.2270", "USDUAH": "41.7500", "USDVND": "26 108.0000", "USDZAR": "17.9225"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 11.07.2025</th></tr>';

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
