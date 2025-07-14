// This is just a helper — using native MongoDB
const { getDB } = require('../config/database');

async function saveContact(data) {
    const db = getDB();
    return await db.collection('contacts').insertOne(data);
}

module.exports = { saveContact };
