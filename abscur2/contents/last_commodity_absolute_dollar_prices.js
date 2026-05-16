
const lastCommodityPrices = [{"Ticker":"GC=F","Commodity Name":"\u0417\u043e\u043b\u043e\u0442\u043e","Absolute Price":99938.9299458478,"Dollar Price":4555.7998046875},{"Ticker":"SI=F","Commodity Name":"\u0421\u0435\u0440\u0435\u0431\u0440\u043e","Absolute Price":1692.6529731852,"Dollar Price":77.1610031128},{"Ticker":"PL=F","Commodity Name":"\u041f\u043b\u0430\u0442\u0438\u043d\u0430","Absolute Price":43463.0614316735,"Dollar Price":1981.3000488281},{"Ticker":"CL=F","Commodity Name":"\u041d\u0435\u0444\u0442\u044c WTI","Absolute Price":2312.5603107181,"Dollar Price":105.4199981689},{"Ticker":"HG=F","Commodity Name":"\u041c\u0435\u0434\u044c","Absolute Price":137.1368936966,"Dollar Price":6.2515001297},{"Ticker":"ALI=F","Commodity Name":"\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439","Absolute Price":83172.7620032403,"Dollar Price":3791.5},{"Ticker":"ZN=F","Commodity Name":"\u0426\u0438\u043d\u043a","Absolute Price":2394.863873618,"Dollar Price":109.171875},{"Ticker":"ZW=F","Commodity Name":"\u041f\u0448\u0435\u043d\u0438\u0446\u0430","Absolute Price":13946.2174452222,"Dollar Price":635.75},{"Ticker":"ZC=F","Commodity Name":"\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430","Absolute Price":9997.6226514511,"Dollar Price":455.75},{"Ticker":"ZS=F","Commodity Name":"\u0421\u043e\u044f","Absolute Price":25819.4226237146,"Dollar Price":1177.0},{"Ticker":"KC=F","Commodity Name":"\u041a\u043e\u0444\u0435","Absolute Price":6243.1672355976,"Dollar Price":284.6000061035},{"Ticker":"SB=F","Commodity Name":"\u0421\u0430\u0445\u0430\u0440","Absolute Price":324.662242783,"Dollar Price":14.8000001907},{"Ticker":"NG=F","Commodity Name":"\u041f\u0440\u0438\u0440\u043e\u0434\u043d\u044b\u0439 \u0433\u0430\u0437","Absolute Price":64.9324485566,"Dollar Price":2.9600000381}];

function createTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';  // Убираем промежутки между ячейками
    table.border = '1';
    table.style.width = '100%';  // Задаем ширину таблицы

    // Заголовок таблицы
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    
    // Заголовки с жирным шрифтом и отступами
    const headers = ['Тикер', 'Название товара', 'Абсолютная цена (Дата: 2026-05-16)', 'Долларовая цена (Дата: 2026-05-15)'];
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
