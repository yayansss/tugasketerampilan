import { successResponse, errorResponse } from "../utils/response.js";
import { nanoid } from "nanoid";
import * as UserRepo from '../repository/user.js';

var barang=[]

export const addUser = async (req, res, next) => {
    let namabarang = req.body.namabarang;
    let jumlah= req.body.jumlah;
    let hargabarang = req.body.hargabarang;
    

    try {
        const result = await UserRepo.createData(namabarang,jumlah,hargabarang);
        successResponse(res, "berhasil menambahkan barang", result[0])
    } catch (error) {
        errorResponse(res, "gagal menambahkan barang: " + error.message, 500)
    }
}

export const getUser = async (req, res, next) => {

    const result = await UserRepo.getData();

    successResponse(res, "success", result[0])
}

export const getUserbyId = async (req, res, next) => {
    let id = req.query.id;
    const result = await UserRepo.getData(id);
    if (result[0].length==0){
        errorResponse(res, "barang tidak ditemukan")
    } else {
        successResponse(res, "success", result[0])
    }
    
}

export const updateUser = async (req, res, next) => {
    let id = req.query.id;
    let namabarang = req.body.namabarang;
    let jumlah = req.body.jumlah;
    let hargabarang = req.body.hargabarang;
    try {
        const result = await UserRepo.updateData(id,namabarang,jumlah,hargabarang);
        successResponse(res, "berhasil update barang", result[0])
    } catch(error) {
        errorResponse(res, "barang tidak ditemukan "+ error.message)
    }
}

export const deleteUser =  async (req, res, next) => {
    let id = req.query.id;

    try{
        const result = await UserRepo.deleteData(id);
        successResponse(res, "berhasil hapus barang", result[0]);
    } catch(error) {
        errorResponse(res, "barang tidak ditemukan")
    }
}