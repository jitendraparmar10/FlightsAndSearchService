const {Flights} = require('../models/index');
const {Op} = require('sequelize')

class FlightRepository {

    #createfilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter,{
        //         [Op.and]: [
        //             { price:{[Op.lte]: data.minPrice} },
        //             { price:{[Op.gte]: data.maxPrice} }
        //     ]});
        // }
        let priceFilter=[];
        if(data.minPrice){
            // Object.assign(filter,{price: {[Op.gte]: data.minPrice}})
            priceFilter.push({price: {[Op.gte]: data.minPrice}})
        }
        if(data.maxPrice){
            //Object.assign(filter,{price: {[Op.lte]: data.maxPrice}})
            priceFilter.push({price: {[Op.lte]: data.maxPrice}})
        }
        Object.assign(filter,{[Op.and]:priceFilter});
        console.log(filter);
        return filter;
    }  

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }


    async getAllFlights(filter){
        try {
            const filterObject  = this.#createfilter(filter);
            const flight = await Flights.findAll({
                where:filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
     }

     async updateFlights(flightId,data){
        try {
            await Flights.update(data, {
                where:{
                    id:flightId,
                }
            });
            return true;
        } catch (error) {
            // throw new AppError(
            //     'RepositoryError',
            //     'Cannot update Booking',
            //     'There was some issue updating the  booking ,please try againg later',
            //     StatusCodes.INTERNAL_SERVER_ERROR
            // );
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
     }

}


module.exports = FlightRepository;
/**
{
    where:{
        arrivalAirportId:2,
        departureAirportId:3,
        price: {[Op.gte]: 4000}
    }

}
 */
