import dbPool from "../utils/db.js";

export const getData = (id) => {
    if(!id){
        const sql = "SELECT idbarang, namabarang, jumlah, hargabarang, tanggalmasuk FROM barang";
        return dbPool.query(sql)
    } else{
        const sql = "SELECT idbarang, namabarang, jumlah, hargabarang, tanggalmasuk FROM barang WHERE idbarang=?";
        const value = [id];
        return dbPool.query(sql, value)
    }
}

export const createData = (namabarang, jumlah, hargabarang, tanggalmasuk) => {
    if (!namabarang || !jumlah || !hargabarang || !tanggalmasuk) {
        throw new Error('All parameters (namabarang, jumlah, hargabarang, tanggalmasuk) are required.');
    }
    let createdAt = new Date();
    const sql = "INSERT INTO barang (namabarang, jumlah, hargabarang, tanggalmasuk) VALUE(?, ?, ?, ?, ?)";
    const value = [namabarang, jumlah, hargabarang, tanggalmasuk];
    const result = dbPool.query(sql, value);
    return result;
}

export const updateData = (id, namabarang, jumlah, hargabarang, tanggalmasuk) => {
    if (!id) {
        throw new Error('All parameters (id) are required.');
    }
    let updateAt = new Date();
    const sql = "UPDATE barang SET namabarang=?, hargabarang=?, jumlah=?, tanggalmasuk=?, update_at=? WHERE idbarang=?;";
    const value = [namabarang, hargabarang, jumlah, tanggalmasuk, id];
    const result = dbPool.query(sql, value);

    return result;

}
export const deleteData = (id) => {
    if (!id) {
        throw new Error('All parameters (id) are required.');
    }
    let createdAt = new Date();
    const sql = "DELETE FROM barang WHERE idbarang=?;";
    const value = [id];
    const result = dbPool.query(sql, value);

    return result;

}