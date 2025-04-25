
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9701", "AUDJPY": "91.3640", "AUDSEK": "6.1473", "AUDUSD": "0.6405", "CADJPY": "103.0150", "CADSEK": "6.9294", "CHFAUD": "1.8874", "CHFHKD": "9.3859", "CHFJPY": "172.6470", "EURAUD": "1.7756", "EURCAD": "1.5764", "EURCHF": "0.9409", "EURCNY": "8.2957", "EURCZK": "24.9130", "EURGBP": "0.8535", "EURHKD": "8.8333", "EURILS": "4.1445", "EURJPY": "162.4500", "EURNOK": "11.8519", "EURNZD": "1.8989", "EURRUB": "94.7350", "EURSEK": "10.9332", "EURSGD": "1.4928", "EURUSD": "1.1386", "EURZAR": "21.1407", "GBPAUD": "2.0794", "GBPCAD": "1.8462", "GBPCHF": "1.1019", "GBPHKD": "10.3450", "GBPJPY": "190.2460", "GBPNOK": "13.8813", "GBPRUB": "110.9510", "GBPSEK": "12.8017", "GBPSGD": "1.7476", "GBPUSD": "1.3334", "HKDSEK": "1.2362", "HKDSGD": "0.1690", "JPYHKD": "0.0544", "JPYSEK": "0.0668", "NZDSEK": "5.7122", "NZDUSD": "0.5990", "SGDAUD": "1.1898", "SGDCHF": "0.6297", "SGDJPY": "108.6440", "USDAED": "3.6729", "USDARS": "1 174.0000", "USDBRL": "5.6815", "USDCAD": "1.3845", "USDCHF": "0.8262", "USDCLP": "931.5000", "USDCNY": "7.2898", "USDCOP": "4 254.4700", "USDCZK": "21.8740", "USDDKK": "6.5553", "USDEGP": "50.9100", "USDGBP": "0.7497", "USDHKD": "7.7581", "USDHUF": "356.5700", "USDIDR": "16 864.0000", "USDILS": "3.6241", "USDINR": "85.2850", "USDISK": "126.6000", "USDJPY": "142.6760", "USDKRW": "1 430.0300", "USDKWD": "0.3065", "USDKZT": "516.3300", "USDMXN": "19.5750", "USDMYR": "4.3700", "USDNOK": "10.3967", "USDPEN": "3.6707", "USDPHP": "56.3770", "USDPKR": "280.8600", "USDPLN": "3.7458", "USDQAR": "3.6400", "USDRON": "4.3674", "USDRUB": "83.0750", "USDSAR": "3.7480", "USDSEK": "9.5772", "USDSGD": "1.3104", "USDTHB": "33.4100", "USDTRY": "38.4052", "USDTWD": "32.4290", "USDUAH": "41.6707", "USDVND": "26 020.0000", "USDZAR": "18.7762"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 24.04.2025</th></tr>';

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
