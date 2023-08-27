import dbPool from "../utils/db.js";

export const getData = () => {
    const sql = "SELECT idbarang, namabarang, jumlah, hargabarang, tanggalmasuk FROM barang LIMIT 1000";
    
    return dbPool.query(sql);
}

export const createData = (namabarang, jumlah, hargabarang) => {
    let createdAt = new Date();
    const sql = "INSERT INTO barang (namabarang, jumlah, hargabarang, tanggalmasuk) VALUE (?, ?, ?, ?)";
    const value = [namabarang, jumlah, hargabarang, createdAt];
    const result = dbPool.query(sql, value)

    return result;
}

export const updateData = (id, namabarang, jumlah) => {
    let updatedAt = new Date();

    const sql = "UPDATE barang SET namabarang = ?, jumlah=? WHERE idbarang = ?";
    const value = [namabarang, jumlah, id]
    const result = dbPool.query(sql, value)

    return result;
}

export const deleteData = (id) => {
    const sql = "DELETE FROM barang WHERE idbarang = ?";
    const result = dbPool.query(sql, [id]);

    return result;
}

export const getDataByjumlah = (jumlah) => {
    const sql = "SELECT idbarang, namabarang, jumlah, hargabarang FROM barang WHERE jumlah = ?";
    
    return dbPool.query(sql,[jumlah]);
}

export const getDataById = (id) => {
    const sql = "SELECT idbarang, namabarang, jumlah, hargabarang FROM barang WHERE idbarang = ?";
    return dbPool.query(sql, [id]);
}