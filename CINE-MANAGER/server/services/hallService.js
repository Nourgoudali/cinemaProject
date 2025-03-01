    import hallDb from '../model/hallModel.js';
    import dotenv from 'dotenv';
    import userDb from '../model/usersModel.js';

    dotenv.config();

    class HallService {

        async addHall(hallData) {
            const { name, seats, capacity } = hallData;

            const hall = new hallDb ({
                name,
                seats,
                capacity
            });

            return await hall.save();
        }

        async updateHall(hallId, updatedData) {

            const updateHall = await hallDb.findByIdAndUpdate(hallId, updatedData);
            if(!updatedData) {
                throw new Error (`Hall with ID ${hallId} Not Found`);
            }
            return  updateHall;
        }

        async deleteHall(hallId) {
            const deleteHall = await hallDb.findByIdAndDelete(hallId);
            return deleteHall;
        }

        async getAllHall() {
            const Halls = await hallDb.find();
            return Halls;
        }


        async hallCount(){
            const countHall = await hallDb.countDocuments();
            return countHall;
        }
    }

    export default new HallService();