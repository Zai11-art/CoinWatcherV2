import axios from "axios";

export const getAllCoinData = async (req,res) => {
    try {
        
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}