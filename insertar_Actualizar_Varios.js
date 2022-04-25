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

    sequelize.sync()
    .then(() => Paises.create({
      nombre: 'Peru',
      poblacion: 30000
    }))
    .then(jane => {
      console.log(jane.toJSON());
    });
    
    sequelize.sync()
    .then(() => Paises.create({
      nombre: 'Portugal',
      poblacion: 160000
    }))
    .then(jane => {
      console.log(jane.toJSON());
    });
    
  
/* Actualiza*/
    Paises.update({ nombre: "XXXXXXX" }, {
        where: {
          poblacion: 42000
        }
      }).then(() => {
        console.log("Done");
      });
      
      Paises.update({ nombre: "XXXXXXX" }, {
        where: {
          poblacion: 30000
        }
      }).then(() => {
        console.log("Done");
      });
      
      Paises.update({ nombre: "XXXXXXX" }, {
        where: {
          poblacion: 160000
        }
      }).then(() => {
        console.log("Done");
      });
      
  