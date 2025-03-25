
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9119", "AUDJPY": "94.7970", "AUDSEK": "6.3185", "AUDUSD": "0.6282", "CADJPY": "105.1270", "CADSEK": "7.0013", "CHFAUD": "1.7997", "CHFHKD": "8.8125", "CHFJPY": "170.9270", "EURAUD": "1.7189", "EURCAD": "1.5467", "EURCHF": "0.9533", "EURCNY": "7.8431", "EURCZK": "24.8717", "EURGBP": "0.8358", "EURHKD": "8.3990", "EURILS": "3.9690", "EURJPY": "162.9630", "EURNOK": "11.3280", "EURNZD": "1.8872", "EURRUB": "90.4450", "EURSEK": "10.8247", "EURSGD": "1.4455", "EURUSD": "1.0799", "EURZAR": "19.6451", "GBPAUD": "2.0562", "GBPCAD": "1.8505", "GBPCHF": "1.1406", "GBPHKD": "10.0460", "GBPJPY": "194.9860", "GBPNOK": "13.5527", "GBPRUB": "108.8800", "GBPSEK": "12.9434", "GBPSGD": "1.7299", "GBPUSD": "1.2944", "HKDSEK": "1.2847", "HKDSGD": "0.1718", "JPYHKD": "0.0515", "JPYSEK": "0.0661", "NZDSEK": "5.7447", "NZDUSD": "0.5722", "SGDAUD": "1.1880", "SGDCHF": "0.6597", "SGDJPY": "112.6680", "USDAED": "3.6727", "USDARS": "1 068.4000", "USDBRL": "5.7605", "USDCAD": "1.4324", "USDCHF": "0.8829", "USDCLP": "927.8400", "USDCNY": "7.2600", "USDCOP": "4 142.6000", "USDCZK": "23.0740", "USDDKK": "6.9065", "USDEGP": "50.5600", "USDGBP": "0.7738", "USDHKD": "7.7738", "USDHUF": "369.3600", "USDIDR": "16 549.0000", "USDILS": "3.6760", "USDINR": "85.5710", "USDISK": "133.2000", "USDJPY": "150.8840", "USDKRW": "1 465.7800", "USDKWD": "0.3080", "USDKZT": "502.8200", "USDMXN": "20.0393", "USDMYR": "4.4370", "USDNOK": "10.5193", "USDPEN": "3.6478", "USDPHP": "57.3480", "USDPKR": "280.3695", "USDPLN": "3.8621", "USDQAR": "3.6400", "USDRON": "4.6025", "USDRUB": "83.7260", "USDSAR": "3.7511", "USDSEK": "10.0937", "USDSGD": "1.3387", "USDTHB": "34.0100", "USDTRY": "37.7683", "USDTWD": "33.0110", "USDUAH": "41.5277", "USDVND": "25 430.0000", "USDZAR": "18.1609"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 25.03.2025</th></tr>';

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
