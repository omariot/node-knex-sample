const DBTYPE = process.env.DBTYPE || 'oracledb';
const DBNAME = process.env.DBNAME || 'admqa1';
const DBPORT = process.env.DBPORT || '1521';
const DBHOST = process.env.DBHOST || 'bma0038.bancoademi.local';
const USERNAME = process.env.USERNAME || 'ia';
const PASSWORD = process.env.PASSWORD || 'ia';

module.exports = {
    DBTYPE,
    DBNAME,
    DBPORT,
    DBHOST,
    USERNAME,
    PASSWORD
};

