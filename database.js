var configEnv = require('./config/config');
var stringConn = {};

switch (configEnv.DBTYPE) {
    case 'oracledb':
        stringConn = {
            client: 'oracledb',
            connection: {
              host: configEnv.DBHOST,
              user: configEnv.USERNAME,
              password: configEnv.PASSWORD,
              port: configEnv.DBPORT,
              database: configEnv.DBNAME,

            }
          };
        break;
    case 'sqlite3':
        stringConn = {
            client: 'sqlite3',
            connection: {
            filename: './dev.sqlite3'
            },
            debug: true
          };
        break;
    
    case 'pg':
        stringConn = {
            client: 'postgresql',
            connection: {
                database: configEnv.DBNAME,
                user:     configEnv.USERNAME,
                password: configEnv.PASSWORD
            },
            pool: {
                min: 2,
                max: 10
            },
            migrations: {
                tableName: 'knex_migrations'
            }
          };
        break;
    case 'mssql':
        stringConn = {
            client: 'mssql2',
            connection: {
                server : configEnv.DBHOST,
                user :   configEnv.USERNAME,
                password : configEnv.PASSWORD,
                database : configEnv.DBNAME,
                options: {
                port: configEnv.DBPORT//14831
                }
            }
        };
        break;
    default:
      break;
  }

module.exports = {
    stringConn
};