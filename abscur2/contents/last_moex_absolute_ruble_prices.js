
const lastStockPrices = [{"Ticker":"AFKS","Stock Name":"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u043e","Absolute Price":2.0841922198,"Ruble Price":7.887},{"Ticker":"AFLT","Stock Name":"\u0410\u044d\u0440\u043e\u0444\u043b\u043e\u0442","Absolute Price":8.6834736074,"Ruble Price":32.86},{"Ticker":"ALRS","Stock Name":"\u0410\u041b\u0420\u041e\u0421\u0410 \u0430\u043e","Absolute Price":5.1080810965,"Ruble Price":19.33},{"Ticker":"AQUA","Stock Name":"\u0418\u041d\u0410\u0420\u041a\u0422\u0418\u041a\u0410","Absolute Price":92.7276594292,"Ruble Price":350.9},{"Ticker":"BSPB","Stock Name":"\u0411\u0421\u041f \u0430\u043e","Absolute Price":64.0399572131,"Ruble Price":242.34},{"Ticker":"CBOM","Stock Name":"\u041c\u041a\u0411 \u0430\u043e","Absolute Price":2.9181862157,"Ruble Price":11.043},{"Ticker":"CHMF","Stock Name":"\u0421\u0435\u0432\u0421\u0442-\u0430\u043e","Absolute Price":162.7820980575,"Ruble Price":616.0},{"Ticker":"FEES","Stock Name":"\u0420\u043e\u0441\u0441\u0435\u0442\u0438","Absolute Price":0.0133925272,"Ruble Price":0.05068},{"Ticker":"GAZP","Stock Name":"\u0413\u0410\u0417\u041f\u0420\u041e\u041c \u0430\u043e","Absolute Price":22.24776759,"Ruble Price":84.19},{"Ticker":"GMKN","Stock Name":"\u0413\u041c\u041a\u041d\u043e\u0440\u041d\u0438\u043a","Absolute Price":32.6779776717,"Ruble Price":123.66},{"Ticker":"HYDR","Stock Name":"\u0420\u0443\u0441\u0413\u0438\u0434\u0440\u043e","Absolute Price":0.0903757752,"Ruble Price":0.342},{"Ticker":"IRAO","Stock Name":"\u0418\u043d\u0442\u0435\u0440\u0420\u0410\u041e\u0430\u043e","Absolute Price":0.6322340416,"Ruble Price":2.3925},{"Ticker":"LKOH","Stock Name":"\u041b\u0423\u041a\u041e\u0419\u041b","Absolute Price":1117.2771275766,"Ruble Price":4228.0},{"Ticker":"LSRG","Stock Name":"\u041b\u0421\u0420 \u0430\u043e","Absolute Price":136.6206894411,"Ruble Price":517.0},{"Ticker":"MAGN","Stock Name":"\u041c\u041c\u041a","Absolute Price":5.6313092688,"Ruble Price":21.31},{"Ticker":"MOEX","Stock Name":"\u041c\u043e\u0441\u0411\u0438\u0440\u0436\u0430","Absolute Price":40.3784165311,"Ruble Price":152.8},{"Ticker":"MSNG","Stock Name":"+\u041c\u043e\u0441\u042d\u043d\u0435\u0440\u0433\u043e","Absolute Price":0.3901749477,"Ruble Price":1.4765},{"Ticker":"MTLR","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043e","Absolute Price":9.7986366818,"Ruble Price":37.08},{"Ticker":"MTLRP","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043f","Absolute Price":9.7907089822,"Ruble Price":37.05},{"Ticker":"MTSS","Stock Name":"\u041c\u0422\u0421-\u0430\u043e","Absolute Price":47.7776028065,"Ruble Price":180.8},{"Ticker":"MVID","Stock Name":"\u041c.\u0432\u0438\u0434\u0435\u043e","Absolute Price":12.1161675259,"Ruble Price":45.85},{"Ticker":"NLMK","Stock Name":"\u041d\u041b\u041c\u041a \u0430\u043e","Absolute Price":18.7093710105,"Ruble Price":70.8},{"Ticker":"NVTK","Stock Name":"\u041d\u043e\u0432\u0430\u0442\u044d\u043a \u0430\u043e","Absolute Price":248.6390845167,"Ruble Price":940.9},{"Ticker":"PHOR","Stock Name":"\u0424\u043e\u0441\u0410\u0433\u0440\u043e \u0430\u043e","Absolute Price":1388.1401965846,"Ruble Price":5253.0},{"Ticker":"PIKK","Stock Name":"\u041f\u0418\u041a \u0430\u043e","Absolute Price":155.8321480917,"Ruble Price":589.7},{"Ticker":"PLZL","Stock Name":"\u041f\u043e\u043b\u044e\u0441","Absolute Price":308.176108368,"Ruble Price":1166.2},{"Ticker":"RNFT","Stock Name":"\u0420\u0443\u0441\u0441\u041d\u0444\u0442 \u0430\u043e","Absolute Price":21.5237043617,"Ruble Price":81.45},{"Ticker":"ROSN","Stock Name":"\u0420\u043e\u0441\u043d\u0435\u0444\u0442\u044c","Absolute Price":83.333335426,"Ruble Price":315.35},{"Ticker":"RTKM","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043e","Absolute Price":10.8239524942,"Ruble Price":40.96},{"Ticker":"RTKMP","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043f","Absolute Price":11.0062895846,"Ruble Price":41.65},{"Ticker":"RUAL","Stock Name":"\u0420\u0423\u0421\u0410\u041b \u0430\u043e","Absolute Price":6.8944560687,"Ruble Price":26.09},{"Ticker":"SBER","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a","Absolute Price":71.9993675921,"Ruble Price":272.46},{"Ticker":"SBERP","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a-\u043f","Absolute Price":72.089214854,"Ruble Price":272.8},{"Ticker":"SELG","Stock Name":"\u0421\u0435\u043b\u0438\u0433\u0434\u0430\u0440","Absolute Price":10.7711011637,"Ruble Price":40.76},{"Ticker":"TATN","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043e","Absolute Price":140.5052622357,"Ruble Price":531.7},{"Ticker":"TATNP","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043f","Absolute Price":137.1756284118,"Ruble Price":519.1},{"Ticker":"TGKA","Stock Name":"\u0422\u0413\u041a-1","Absolute Price":0.0012388352,"Ruble Price":0.004688},{"Ticker":"TRNFP","Stock Name":"\u0422\u0440\u0430\u043d\u0441\u043d\u0444 \u0430\u043f","Absolute Price":267.4805838536,"Ruble Price":1012.2},{"Ticker":"UPRO","Stock Name":"\u042e\u043d\u0438\u043f\u0440\u043e \u0430\u043e","Absolute Price":0.2592357763,"Ruble Price":0.981},{"Ticker":"VTBR","Stock Name":"\u0412\u0422\u0411 \u0430\u043e","Absolute Price":13.917076614,"Ruble Price":52.665}];

function createTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';  // Убираем промежутки между ячеек
    table.border = '1';
    table.style.width = '100%';  // Задаем ширину таблицы

    // Заголовок таблицы
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    
    // Заголовки с жирным шрифтом и отступами
    const headers = ['Тикер', 'Название акции', 'Абсолютная цена (Дата: 2026-08-22)', 'Рублевая цена (Дата: 2026-08-22)'];
    headers.forEach((text, index) => {
        const cell = headerRow.insertCell(index);
        cell.innerText = text;
        cell.style.fontWeight = 'bold';  // Жирный шрифт
        cell.style.padding = '10px';  // Отступы внутри ячеек
        cell.style.textAlign = 'center';  // Выравнивание по центру
    });

    // Заполнение таблицы данными
    const tbody = table.createTBody();
    lastStockPrices.forEach(item => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=${item.Ticker}">${item.Ticker}</a>`;
        row.insertCell(1).innerHTML = `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=${item.Ticker}">${item['Stock Name']}</a>`;
        row.insertCell(2).innerText = Number(item['Absolute Price']).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Форматируем цену до двух знаков с разделением разрядов
        row.insertCell(3).innerText = Number(item['Ruble Price']).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Форматируем цену до двух знаков с разделением разрядов
        
        // Выравнивание цен по правой стороне и отступы внутри ячеек
        for (let i = 0; i < row.cells.length; i++) {
            row.cells[i].style.textAlign = (i === 2 || i === 3) ? 'right' : 'left';
            row.cells[i].style.padding = '10px';  // Отступы внутри ячеек
        }
    });

    document.getElementById('table-container').appendChild(table);
}

createTable();
