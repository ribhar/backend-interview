const model = require('../models');

class OrderService {
    
  create(data, queryOptions) {
    return new Promise((resolve, reject) => {
      model.order
        .create(data, queryOptions)
        .then((result) => {
          result ? resolve(JSON.parse(JSON.stringify(result))) : resolve(false);
        })
        .catch((error) => {
          if (queryOptions && queryOptions.transaction) {
            queryOptions.transaction.rollback();
          }
          reject(error);
        });
    });
  }

  findByPk(queryOptions) {
    return new Promise((resolve, reject) => {
      model.order
        .findByPk(queryOptions)
        .then((result) => {
          result ? resolve(JSON.parse(JSON.stringify(result))) : resolve(false);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  findOne(queryOptions) {
    return new Promise((resolve, reject) => {
      model.order
        .findOne(queryOptions)
        .then((result) => {
          result ? resolve(JSON.parse(JSON.stringify(result))) : resolve(false);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  findAll(queryOptions) {
    return new Promise((resolve, reject) => {
      model.order
        .findAll(queryOptions)
        .then((result) => {
          result ? resolve(JSON.parse(JSON.stringify(result))) : resolve(false);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  findAndCountAll(queryOptions) {
    return new Promise((resolve, reject) => {
      model.order
        .findAndCountAll(queryOptions)
        .then((result) => {
          result ? resolve(JSON.parse(JSON.stringify(result))) : resolve(false);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  update(data, queryOptions) {
    return new Promise((resolve, reject) => {
      model.order
        .update(data, queryOptions)
        .then((result) => {
          result ? resolve(JSON.parse(JSON.stringify(result))) : resolve(false);
        })
        .catch((error) => {
          if (queryOptions && queryOptions.transaction) {
            queryOptions.transaction.rollback();
          }
          reject(error);
        });
    });
  }

  save(data, queryOptions) {
    return new Promise((resolve, reject) => {
      model.order
        .save(data, queryOptions)
        .then((result) => {
          result ? resolve(JSON.parse(JSON.stringify(result))) : resolve(false);
        })
        .catch((error) => {
          if (queryOptions && queryOptions.transaction) {
            queryOptions.transaction.rollback();
          }
          reject(error);
        });
    });
  }

  destroy(queryOptions) {
    return new Promise((resolve, reject) => {
      model.order
        .destroy(queryOptions)
        .then((result) => {
          result ? resolve(JSON.parse(JSON.stringify(result))) : resolve(false);
        })
        .catch((error) => {
          if (queryOptions && queryOptions.transaction) {
            queryOptions.transaction.rollback();
          }
          reject(error);
        });
    });
  }

  bulkCreate(data, queryOptions) {
    return new Promise((resolve, reject) => {
      model.order
        .bulkCreate(data, queryOptions)
        .then((result) => {
          result ? resolve(JSON.parse(JSON.stringify(result))) : resolve(false);
        })
        .catch((error) => {
          if (queryOptions && queryOptions.transaction) {
            queryOptions.transaction.rollback();
          }
          reject(error);
        });
    });
  }
}

module.exports = new OrderService();
