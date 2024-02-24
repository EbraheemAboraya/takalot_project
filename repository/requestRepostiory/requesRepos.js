const { request } = require('express');
const Req = require('../../module/reuqestsSchema/request');

const getReqById = async (_id) => {
    try {
        const req = await Req.findById(_id);
        return req;
    } 
    catch{
        return false;
    }
};



const udpateReq = async (_id, status) => {
    try {
        
        const updatedReq = await Req.findByIdAndUpdate( _id,  { status: status } );
        return updatedReq;
    } catch (error) {
        console.error("Error updating req:", error);
        throw error;
    }
};


const deleteReq = async id => {
    try {
        const req = await Req.findByIdAndDelete(id);
        return req;
    } 
    catch {
        return false;
    }
};

const gettAllReq = async _id => {
    try {
        const requests = await Req.find(_id);//
        return requests;
    } 
    catch {
        return false;
    }
};

const addReq = async reqData => {
    try {
        const newReq = new Req(reqData);
        
        await newReq.save();

        return newReq;
    } catch (error) {
        console.error("Error saving req:", error);
        throw error;    
    }
};


const getRequestByUserID = async helpseekerId => {
    try {
        const requests = await Req.find({ helpseekerId });
        return requests;
    } 
    catch{
        return false;
    }
};

const getRequestByTechID = async technicalID => {
    try {
        const requests = await Req.find({ technicalID });
        return requests;
    } 
    catch{
        return false;
    }
};






module.exports = {
    getReqById,
    addReq,
    udpateReq,
    deleteReq,
    gettAllReq,
    getRequestByUserID,
    getRequestByTechID

};