const {CityService} = require('../services/index'); 

const cityService = new CityService();

/**
 * POST
 * data -> req.body
 */


const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message:'Successfully created a city',
            err:{} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to create a city',
            err: error
        });
    }
}

// DeLETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message:'Successfully deleted a city',
            err:{} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to delete  the city',
            err: error
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message:'Successfully fatched a city',
            err:{} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to get the city',
            err: error
        });
    }
}

// UPDATE -> /city/:id
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return  res.status(200).json({
            data: city,
            success: true,
            message:'Successfully updated a city',
            err:{} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
}

const getAll = async(req , res)=>{
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data: cities,
            success: true,
            message:'Successfully fatched the all cities',
            err:{} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fatch the cities',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}

 