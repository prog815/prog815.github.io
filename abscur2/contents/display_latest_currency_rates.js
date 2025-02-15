
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9405", "AUDJPY": "96.8110", "AUDSEK": "6.7825", "AUDUSD": "0.6354", "CADJPY": "107.3450", "CADSEK": "7.5354", "CHFAUD": "1.7476", "CHFHKD": "8.6519", "CHFJPY": "169.2240", "EURAUD": "1.6504", "EURCAD": "1.4869", "EURCHF": "0.9437", "EURCNY": "7.6185", "EURCZK": "25.0025", "EURGBP": "0.8334", "EURHKD": "8.1665", "EURILS": "3.7156", "EURJPY": "159.7950", "EURNOK": "11.6621", "EURNZD": "1.8308", "EURRUB": "95.8210", "EURSEK": "11.2172", "EURSGD": "1.4044", "EURUSD": "1.0489", "EURZAR": "19.3362", "GBPAUD": "1.9800", "GBPCAD": "1.7840", "GBPCHF": "1.1322", "GBPHKD": "9.7950", "GBPJPY": "191.7280", "GBPNOK": "14.0066", "GBPRUB": "114.9520", "GBPSEK": "13.4535", "GBPSGD": "1.6837", "GBPUSD": "1.2585", "HKDSEK": "1.3725", "HKDSGD": "0.1720", "JPYHKD": "0.0508", "JPYSEK": "0.0697", "NZDSEK": "6.1135", "NZDUSD": "0.5732", "SGDAUD": "1.1744", "SGDCHF": "0.6710", "SGDJPY": "113.6230", "USDAED": "3.6728", "USDARS": "1 056.0000", "USDBRL": "5.7042", "USDCAD": "1.4175", "USDCHF": "0.8996", "USDCLP": "939.2500", "USDCNY": "7.2595", "USDCOP": "4 124.1500", "USDCZK": "23.8300", "USDDKK": "7.1108", "USDEGP": "50.5900", "USDGBP": "0.7946", "USDHKD": "7.7842", "USDHUF": "383.3000", "USDIDR": "16 255.0000", "USDILS": "3.5383", "USDINR": "86.5820", "USDISK": "140.2800", "USDJPY": "152.3430", "USDKRW": "1 439.4100", "USDKWD": "0.3080", "USDKZT": "497.6800", "USDMXN": "20.2910", "USDMYR": "4.4320", "USDNOK": "11.1195", "USDPEN": "3.7150", "USDPHP": "57.7280", "USDPKR": "279.0000", "USDPLN": "3.9661", "USDQAR": "3.6395", "USDRON": "4.7407", "USDRUB": "91.1010", "USDSAR": "3.7465", "USDSEK": "10.6946", "USDSGD": "1.3384", "USDTHB": "33.6900", "USDTRY": "36.2042", "USDTWD": "32.6630", "USDUAH": "41.7996", "USDVND": "25 370.0000", "USDZAR": "18.3510"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 15.02.2025</th></tr>';

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
