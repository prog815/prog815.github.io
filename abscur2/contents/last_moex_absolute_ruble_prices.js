
const lastStockPrices = [{"Ticker":"AFKS","Stock Name":"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u043e","Absolute Price":3.3978153983,"Ruble Price":14.475},{"Ticker":"AFLT","Stock Name":"\u0410\u044d\u0440\u043e\u0444\u043b\u043e\u0442","Absolute Price":14.9902930111,"Ruble Price":63.86},{"Ticker":"ALRS","Stock Name":"\u0410\u041b\u0420\u041e\u0421\u0410 \u0430\u043e","Absolute Price":13.3471353055,"Ruble Price":56.86},{"Ticker":"BSPB","Stock Name":"\u0411\u0421\u041f \u0430\u043e","Absolute Price":87.6507267514,"Ruble Price":373.4},{"Ticker":"CHMF","Stock Name":"\u0421\u0435\u0432\u0421\u0442-\u0430\u043e","Absolute Price":284.4540725155,"Ruble Price":1211.8},{"Ticker":"GAZP","Stock Name":"\u0413\u0410\u0417\u041f\u0420\u041e\u041c \u0430\u043e","Absolute Price":33.060333036,"Ruble Price":140.84},{"Ticker":"GMKN","Stock Name":"\u0413\u041c\u041a\u041d\u043e\u0440\u041d\u0438\u043a","Absolute Price":28.4454072515,"Ruble Price":121.18},{"Ticker":"HYDR","Stock Name":"\u0420\u0443\u0441\u0413\u0438\u0434\u0440\u043e","Absolute Price":0.1337295636,"Ruble Price":0.5697},{"Ticker":"IRAO","Stock Name":"\u0418\u043d\u0442\u0435\u0440\u0420\u0410\u041e\u0430\u043e","Absolute Price":0.868291479,"Ruble Price":3.699},{"Ticker":"LKOH","Stock Name":"\u041b\u0423\u041a\u041e\u0419\u041b","Absolute Price":1683.2977009479,"Ruble Price":7171.0},{"Ticker":"LSRG","Stock Name":"\u041b\u0421\u0420 \u0430\u043e","Absolute Price":202.249239874,"Ruble Price":861.6},{"Ticker":"MAGN","Stock Name":"\u041c\u041c\u041a","Absolute Price":8.2369148412,"Ruble Price":35.09},{"Ticker":"MOEX","Stock Name":"\u041c\u043e\u0441\u0411\u0438\u0440\u0436\u0430","Absolute Price":48.1233944598,"Ruble Price":205.01},{"Ticker":"MSNG","Stock Name":"+\u041c\u043e\u0441\u042d\u043d\u0435\u0440\u0433\u043e","Absolute Price":0.5658330928,"Ruble Price":2.4105},{"Ticker":"MTLR","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043e","Absolute Price":26.42901801,"Ruble Price":112.59},{"Ticker":"MTLRP","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043f","Absolute Price":26.5956811487,"Ruble Price":113.3},{"Ticker":"MTSS","Stock Name":"\u041c\u0422\u0421-\u0430\u043e","Absolute Price":53.5199938385,"Ruble Price":228.0},{"Ticker":"MVID","Stock Name":"\u041c.\u0432\u0438\u0434\u0435\u043e","Absolute Price":24.4126287685,"Ruble Price":104.0},{"Ticker":"NLMK","Stock Name":"\u041d\u041b\u041c\u041a \u0430\u043e","Absolute Price":34.2715750019,"Ruble Price":146.0},{"Ticker":"NVTK","Stock Name":"\u041d\u043e\u0432\u0430\u0442\u044d\u043a \u0430\u043e","Absolute Price":253.9852339179,"Ruble Price":1082.0},{"Ticker":"PHOR","Stock Name":"\u0424\u043e\u0441\u0410\u0433\u0440\u043e \u0430\u043e","Absolute Price":1652.0777045421,"Ruble Price":7038.0},{"Ticker":"PIKK","Stock Name":"\u041f\u0418\u041a \u0430\u043e","Absolute Price":162.9308233479,"Ruble Price":694.1},{"Ticker":"PLZL","Stock Name":"\u041f\u043e\u043b\u044e\u0441","Absolute Price":4030.4311149456,"Ruble Price":17170.0},{"Ticker":"ROSN","Stock Name":"\u0420\u043e\u0441\u043d\u0435\u0444\u0442\u044c","Absolute Price":123.6593541848,"Ruble Price":526.8},{"Ticker":"RTKM","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043e","Absolute Price":15.4081245419,"Ruble Price":65.64},{"Ticker":"RTKMP","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043f","Absolute Price":14.2015773124,"Ruble Price":60.5},{"Ticker":"SBER","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a","Absolute Price":65.8976660978,"Ruble Price":280.73},{"Ticker":"SBERP","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a-\u043f","Absolute Price":65.8202029488,"Ruble Price":280.4},{"Ticker":"SELG","Stock Name":"\u0421\u0435\u043b\u0438\u0433\u0434\u0430\u0440","Absolute Price":9.9974409543,"Ruble Price":42.59},{"Ticker":"TATN","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043e","Absolute Price":160.5365078341,"Ruble Price":683.9},{"Ticker":"TATNP","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043f","Absolute Price":156.5694556592,"Ruble Price":667.0},{"Ticker":"TGKA","Stock Name":"\u0422\u0413\u041a-1","Absolute Price":0.001744564,"Ruble Price":0.007432},{"Ticker":"TRNFP","Stock Name":"\u0422\u0440\u0430\u043d\u0441\u043d\u0444 \u0430\u043f","Absolute Price":271.355758234,"Ruble Price":1156.0},{"Ticker":"VTBR","Stock Name":"\u0412\u0422\u0411 \u0430\u043e","Absolute Price":19.6920714172,"Ruble Price":83.89}];

function createTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';  // Убираем промежутки между ячеек
    table.border = '1';
    table.style.width = '100%';  // Задаем ширину таблицы

    // Заголовок таблицы
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    
    // Заголовки с жирным шрифтом и отступами
    const headers = ['Тикер', 'Название акции', 'Абсолютная цена (Дата: 2025-02-01)', 'Рублевая цена (Дата: 2025-01-31)'];
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
