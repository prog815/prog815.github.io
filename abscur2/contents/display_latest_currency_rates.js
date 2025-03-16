
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9128", "AUDJPY": "93.9840", "AUDSEK": "6.4056", "AUDUSD": "0.6323", "CADJPY": "103.4130", "CADSEK": "7.0500", "CHFAUD": "1.7864", "CHFHKD": "8.7829", "CHFJPY": "167.9510", "EURAUD": "1.7198", "EURCAD": "1.5622", "EURCHF": "0.9622", "EURCNY": "7.8765", "EURCZK": "24.9930", "EURGBP": "0.8411", "EURHKD": "8.4508", "EURILS": "3.9696", "EURJPY": "161.5760", "EURNOK": "11.5800", "EURNZD": "1.8926", "EURRUB": "93.0000", "EURSEK": "11.0255", "EURSGD": "1.4497", "EURUSD": "1.0876", "EURZAR": "19.7586", "GBPAUD": "2.0452", "GBPCAD": "1.8582", "GBPCHF": "1.1440", "GBPHKD": "10.0510", "GBPJPY": "192.2320", "GBPNOK": "13.7690", "GBPRUB": "110.5690", "GBPSEK": "13.1066", "GBPSGD": "1.7237", "GBPUSD": "1.2932", "HKDSEK": "1.3027", "HKDSGD": "0.1715", "JPYHKD": "0.0520", "JPYSEK": "0.0677", "NZDSEK": "5.8106", "NZDUSD": "0.5744", "SGDAUD": "1.1853", "SGDCHF": "0.6620", "SGDJPY": "111.4270", "USDAED": "3.6724", "USDARS": "1 065.7500", "USDBRL": "5.7452", "USDCAD": "1.4369", "USDCHF": "0.8846", "USDCLP": "928.6600", "USDCNY": "7.2350", "USDCOP": "4 098.8500", "USDCZK": "22.9730", "USDDKK": "6.8567", "USDEGP": "50.6000", "USDGBP": "0.7731", "USDHKD": "7.7726", "USDHUF": "366.6500", "USDIDR": "16 344.0000", "USDILS": "3.6451", "USDINR": "86.9210", "USDISK": "133.6900", "USDJPY": "148.6100", "USDKRW": "1 450.6000", "USDKWD": "0.3078", "USDKZT": "501.0300", "USDMXN": "19.9110", "USDMYR": "4.4430", "USDNOK": "10.6352", "USDPEN": "3.6558", "USDPHP": "57.2500", "USDPKR": "279.9800", "USDPLN": "3.8359", "USDQAR": "3.6400", "USDRON": "4.5701", "USDRUB": "85.4760", "USDSAR": "3.7464", "USDSEK": "10.1310", "USDSGD": "1.3334", "USDTHB": "33.4800", "USDTRY": "36.4496", "USDTWD": "32.9240", "USDUAH": "41.5270", "USDVND": "25 500.0000", "USDZAR": "18.1759"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 15.03.2025</th></tr>';

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
