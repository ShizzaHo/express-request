/* 
  POST ЗАПРОСЫ
*/

const categoryMain = require('./categories/main').default;

class POSTRequests {
  // Категории для генерации POST запросов
  categories = {
    main: [...categoryMain],
  };

  load(app) {
    // Автоматическая генерация POST запросов из категорий
    const categories = Object.keys(this.categories);
    categories.map((item) => {
      this.categories[item].forEach((item) => {
        app.post(item[0], (req, res) => {
          this.getRoutePath(req);
          item[1](req, res);
        });
      });
    });
  }

  getRoutePath(req) {
    console.log(`Поступил новый POST запрос по адресу: ${req.route.path}`);
  }
}

exports.default = new POSTRequests();