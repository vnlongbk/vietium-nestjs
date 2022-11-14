import { Sequelize } from 'sequelize-typescript';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'vietium',
      });
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
