function generateMenu() {
    const menuItems = [
      { url: 'index.html', title: 'ГЛАВНАЯ' },
      { url: 'about.html', title: 'О ПРОЕКТЕ' },
      { url: 'pair.html', title: 'ПАРНЫЕ ВАЛЮТНЫЕ КУРСЫ' },
      { url: 'pairs_last.html', title: 'ПОСЛЕДНИЕ ПАРНЫЕ ВАЛЮТНЫЕ КУРСЫ' },
      { url: 'abs.html', title: 'АБСОЛЮТНЫЕ ВАЛЮТНЫЕ КУРСЫ' },
      { url: 'abs_last.html', title: 'ПОСЛЕДНИЕ АБСОЛЮТНЫЕ ВАЛЮТНЫЕ КУРСЫ' },
      { url: 'reit_doh.html', title: 'РЕЙТИНГ АБСОЛЮТНОЙ ДОХОДНОСТИ ВАЛЮТ' },
      { url: 'reit_vol.html', title: 'РЕЙТИНГ АБСОЛЮТНОЙ ВОЛАТИЛЬНОСТИ ВАЛЮТ' },
      { url: 'reit_sharp.html', title: 'РЕЙТИНГ ВАЛЮТ ПО КОЭФФИЦИЕНТУ ШАРПА' },
      { url: 'best_portf_sharp.html', title: 'ЛУЧШИЕ ВАЛЮТНЫЕ ПОРТФЕЛИ ПО КОЭФФИЦИЕНТУ ШАРПА' }
      

    ];
  
    let menuHTML = '<nav><ul>';
    for (const item of menuItems) {
      menuHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
    }
    menuHTML += '</ul></nav>';
  
    return menuHTML;
  }