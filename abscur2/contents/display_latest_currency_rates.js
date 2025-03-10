
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8821", "AUDJPY": "92.9760", "AUDSEK": "6.3877", "AUDUSD": "0.6308", "CADJPY": "102.5470", "CADSEK": "7.0117", "CHFAUD": "1.8015", "CHFHKD": "8.8591", "CHFJPY": "167.9350", "EURAUD": "1.7216", "EURCAD": "1.5627", "EURCHF": "0.9523", "EURCNY": "7.8626", "EURCZK": "24.9213", "EURGBP": "0.8393", "EURHKD": "8.4182", "EURILS": "3.9231", "EURJPY": "160.0070", "EURNOK": "11.7672", "EURNZD": "1.9011", "EURRUB": "97.7550", "EURSEK": "10.9351", "EURSGD": "1.4433", "EURUSD": "1.0859", "EURZAR": "19.8682", "GBPAUD": "2.0512", "GBPCAD": "1.8586", "GBPCHF": "1.1345", "GBPHKD": "10.0290", "GBPJPY": "190.5560", "GBPNOK": "14.0170", "GBPRUB": "113.5050", "GBPSEK": "13.0273", "GBPSGD": "1.7189", "GBPUSD": "1.2936", "HKDSEK": "1.3007", "HKDSGD": "0.1712", "JPYHKD": "0.0524", "JPYSEK": "0.0678", "NZDSEK": "5.8014", "NZDUSD": "0.5709", "SGDAUD": "1.1920", "SGDCHF": "0.6595", "SGDJPY": "110.8340", "USDAED": "3.6722", "USDARS": "1 064.7500", "USDBRL": "5.7905", "USDCAD": "1.4368", "USDCHF": "0.8771", "USDCLP": "926.3400", "USDCNY": "7.2430", "USDCOP": "4 129.9100", "USDCZK": "22.9333", "USDDKK": "6.8637", "USDEGP": "50.6300", "USDGBP": "0.7734", "USDHKD": "7.7710", "USDHUF": "365.8700", "USDIDR": "16 289.0000", "USDILS": "3.6283", "USDINR": "87.0680", "USDISK": "135.6000", "USDJPY": "147.3670", "USDKRW": "1 446.8000", "USDKWD": "0.3076", "USDKZT": "490.5800", "USDMXN": "20.2567", "USDMYR": "4.4100", "USDNOK": "10.8272", "USDPEN": "3.6530", "USDPHP": "57.4570", "USDPKR": "279.7500", "USDPLN": "3.8399", "USDQAR": "3.6385", "USDRON": "4.5913", "USDRUB": "89.7500", "USDSAR": "3.7485", "USDSEK": "10.0699", "USDSGD": "1.3291", "USDTHB": "33.7200", "USDTRY": "36.4971", "USDTWD": "32.8240", "USDUAH": "41.2742", "USDVND": "25 480.0000", "USDZAR": "18.2532"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 10.03.2025</th></tr>';

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
