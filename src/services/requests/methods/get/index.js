/* 
  GET ЗАПРОСЫ
*/

const categoryMain = require('./categories/main').default;

class GETRequests {
  // Категории для генерации GET запросов
  categories = {
    main: [...categoryMain],
  };

  load(app) {
    // Автоматическая генерация GET запросов из категорий
    const categories = Object.keys(this.categories);
    categories.map((item) => {
      this.categories[item].forEach((item) => {
        app.get(item[0], (req, res) => {
          this.getRoutePath(req);
          item[1](req, res);
        });
      });
    });
  }

  getRoutePath(req) {
    console.log(`Поступил новый GET запрос по адресу: ${req.route.path}`);
  }
}

exports.default = new GETRequests();
