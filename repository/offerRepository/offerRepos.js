const Offer = require('../../module/offersSchema/offer');

const getOfferById = async id => {
    try {
        const offer = await Offer.findById(id);
        return offer;
    } 
    catch{
        return false;
    }
};

const addOffer = async (requestID,technicalID, bid, comments) => {
    try {
        const newOffer = new Offer({requestID,technicalID, bid, comments});
        await newOffer.save();
        return newOffer;
    } 
    catch {
        return false;
    }
};


const udpateOffer = async (requestID, newData) => {
    try {
        const offer = await Offer.findOneAndUpdate({ requestID }, newData, );
        return offer;
    } 
    catch(error) {
        return false;
    }
}


const deleteOffer = async id => {
    try {
        const offer = await Offer.findOneAndDelete({ requestID, technicalID });
        return true;
    } 
    catch {
        return false;
    }
};

const gettAllOffer = async technicalID => {
    try {
        const offers = await Offer.find({technicalID});
        return offers;
    } 
    catch {
        return false;
    }
};


const getOffersByTechID = async technicalID => {
    try {
        const offers = await Offer.find({ technicalID })
        return offers;
    } 
    catch (err) {
        throw err;
    }
};


const deleteOfferbyReqId = async requestID => {
    try {
        const offers = await Offer.deleteMany({ requestID });
        console.log(offers);
        return true;
    } 
    catch {
        return false;
    }
};


const getofferByReqId = async requestID => {
    try {
        const offers = await Offer.find({ requestID });
        return offers;
    } 
    catch {
        return false;
    }
};



module.exports = {
    getOfferById,
    addOffer,
    udpateOffer,
    deleteOffer,
    gettAllOffer,
    getOffersByTechID,
    deleteOfferbyReqId,
    getofferByReqId
};