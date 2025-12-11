
const lastCommodityPrices = [{"Ticker":"GC=F","Commodity Name":"\u0417\u043e\u043b\u043e\u0442\u043e","Absolute Price":93151.0219187307,"Dollar Price":4206.7001953125},{"Ticker":"SI=F","Commodity Name":"\u0421\u0435\u0440\u0435\u0431\u0440\u043e","Absolute Price":1332.3515958371,"Dollar Price":60.1689987183},{"Ticker":"PL=F","Commodity Name":"\u041f\u043b\u0430\u0442\u0438\u043d\u0430","Absolute Price":37535.4286374372,"Dollar Price":1695.0999755859},{"Ticker":"CL=F","Commodity Name":"\u041d\u0435\u0444\u0442\u044c WTI","Absolute Price":1289.8582677254,"Dollar Price":58.25},{"Ticker":"HG=F","Commodity Name":"\u041c\u0435\u0434\u044c","Absolute Price":116.0429565248,"Dollar Price":5.2404999733},{"Ticker":"ALI=F","Commodity Name":"\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439","Absolute Price":61918.7327232149,"Dollar Price":2796.25},{"Ticker":"ZN=F","Commodity Name":"\u0426\u0438\u043d\u043a","Absolute Price":2485.2607127339,"Dollar Price":112.234375},{"Ticker":"ZW=F","Commodity Name":"\u041f\u0448\u0435\u043d\u0438\u0446\u0430","Absolute Price":11874.4462844252,"Dollar Price":536.25},{"Ticker":"ZC=F","Commodity Name":"\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430","Absolute Price":9759.7430300427,"Dollar Price":440.75},{"Ticker":"ZS=F","Commodity Name":"\u0421\u043e\u044f","Absolute Price":24075.509040077,"Dollar Price":1087.25},{"Ticker":"KC=F","Commodity Name":"\u041a\u043e\u0444\u0435","Absolute Price":8728.9638606474,"Dollar Price":394.200012207},{"Ticker":"SB=F","Commodity Name":"\u0421\u0430\u0445\u0430\u0440","Absolute Price":324.8449937501,"Dollar Price":14.6700000763},{"Ticker":"NG=F","Commodity Name":"\u041f\u0440\u0438\u0440\u043e\u0434\u043d\u044b\u0439 \u0433\u0430\u0437","Absolute Price":101.284318696,"Dollar Price":4.5739998817}];

function createTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';  // Убираем промежутки между ячейками
    table.border = '1';
    table.style.width = '100%';  // Задаем ширину таблицы

    // Заголовок таблицы
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    
    // Заголовки с жирным шрифтом и отступами
    const headers = ['Тикер', 'Название товара', 'Абсолютная цена (Дата: 2025-12-10)', 'Долларовая цена (Дата: 2025-12-09)'];
    headers.forEach((text, index) => {
        const cell = headerRow.insertCell(index);
        cell.innerText = text;
        cell.style.fontWeight = 'bold';  // Жирный шрифт
        cell.style.padding = '10px';  // Отступы внутри ячеек
        cell.style.textAlign = 'center';  // Выравнивание по центру
    });

    // Заполнение таблицы данными
    const tbody = table.createTBody();
    lastCommodityPrices.forEach(item => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=${item.Ticker}">${item.Ticker}</a>`;
        row.insertCell(1).innerHTML = `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=${item.Ticker}">${item['Commodity Name']}</a>`;
        row.insertCell(2).innerText = Number(item['Absolute Price']).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Форматируем цену до двух знаков с разделением разрядов
        row.insertCell(3).innerText = Number(item['Dollar Price']).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Форматируем цену до двух знаков с разделением разрядов
        
        // Выравнивание цен по правой стороне и отступы внутри ячеек
        for (let i = 0; i < row.cells.length; i++) {
            row.cells[i].style.textAlign = (i === 2 || i === 3) ? 'right' : 'left';
            row.cells[i].style.padding = '10px';  // Отступы внутри ячеек
        }
    });

    document.getElementById('table-container').appendChild(table);
}

createTable();
