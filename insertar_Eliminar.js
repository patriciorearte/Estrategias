const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  class Paises extends Sequelize.Model {}
  Paises.init({
    nombre: Sequelize.STRING,
    poblacion:Sequelize.INTEGER
  }, { sequelize, modelName: 'users' });
  
  
  /* crea Pais*/
  sequelize.sync()
    .then(() => Paises.create({
      nombre: 'Argentina',
      poblacion: 42000
    }))
    .then(jane => {
      console.log(jane.toJSON());
    });

    //elimina pais con nombre =Argentina
User.destroy({
    where: {
        nombre: 'Argentina'
    }
  }).then(() => {
    console.log("Elimine Registro");
  });
  