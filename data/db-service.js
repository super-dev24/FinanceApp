import {enablePromise, openDatabase} from 'react-native-sqlite-storage';

import {
  paletteOne,
  paletteTwo,
  paletteThree,
  paletteFour,
  paletteFive,
} from '../src/helpers/palette';

enablePromise(true);

const monthYear = new Date().toLocaleDateString(undefined, {
  year: 'numeric',
  month: '2-digit',
});

export const getDBConnection = async () => {
  return openDatabase({name: 'finance-data.db', location: 'default'});
};

export const createCategoriesTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS categories (name TEXT, categoryType TEXT)`;
  await db.executeSql(query);
};

export const createCategory = async (db, fund) => {
  const {name, categoryType} = fund;
  const insertQuery = `INSERT INTO categories(name, categoryType) VALUES("${name}", "${categoryType}")`;
  db.executeSql(insertQuery);
};

export const getCategories = async db => {
  try {
    const categories = [];
    const results = await db.executeSql(
      `SELECT rowid as id, name, categoryType FROM categories`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        categories.push(result.rows.item(index));
      }
    });
    return categories;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get getCategories...');
  }
};

export const createFundsTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS funds (name TEXT, fundType TEXT)`;
  await db.executeSql(query);
};

export const createFund = async (db, fund) => {
  const {name, fundType} = fund;
  const insertQuery = `INSERT INTO funds(name, fundType) VALUES("${name}", "${fundType}")`;
  return db.executeSql(insertQuery);
};

export const createTransactionsTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS transactions(transactionDate INTEGER, summary TEXT, category_id INGEGER NOT NULL, transactionType TEXT, amount FLOAT)`;
  await db.executeSql(query);
};

export const createTransaction = async (db, transaction) => {
  const {transactionDate, summary, category, transactionType, amount} =
    transaction;
  const timeStamp = parseInt((transactionDate.getTime() / 1000).toFixed(0));
  const insertQuery = `INSERT INTO transactions(transactionDate, summary, category_id, transactionType, amount) VALUES("${timestamp}", "${summary}", "${category}", "${transactionType}", "${amount}")`;
  return db.executeSql(insertQuery);
};
