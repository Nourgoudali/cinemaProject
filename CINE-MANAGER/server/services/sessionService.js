import sessionDb from '../model/sessionModel.js';
import hallDb from "../model/hallModel.js";
import dotenv from 'dotenv';

dotenv.config();

class SessionService {
    async addSession(sessionData) {
        const { startTime, endTime, movieId, hallId, price } = sessionData;

        const hall = await hallDb.findById(hallId);
        if (!hall) {
            throw new Error('Hall not found');
        }


        const seats = Array.from({ length: hall.seats }, (_, index) => ({
            seatNumber: index + 1,
            isReserved: false,
        }));

        const session = new sessionDb({
            startTime,
            endTime,
            movieId,
            hallId,
            seats,
            price,
        });

        const savedSession = await session.save();

        const populatedSession = await sessionDb.findById(savedSession._id).populate('movieId').populate('hallId');
    
        return populatedSession;    
    
    }

    
    async updateSession(sessionId, updatedData) {
        const updateSession = await sessionDb.findByIdAndUpdate(sessionId, updatedData, { new: true });
        if(!updatedData) {
            throw new Error (`session with ID ${sessionId} not found`);
        }
        return updateSession;
    }

    async deleteSession(sessionId) {
        const deleteSession = await sessionDb.findByIdAndDelete(sessionId)
        return deleteSession;
    }

    async getAvailableSessions() {
        const getSessions = await sessionDb.find({ availability : true}) .populate('movieId').populate('hallId');
        return getSessions;
    }

    async getSessionById(sessionId) {
        const getSessionById = await sessionDb.findById(sessionId).populate('movieId').populate('hallId');
        return getSessionById;
    }


    async getLatestSessions() {
        const getLatestSessions = await sessionDb.find().sort({createdAt: -1}).limit(3).populate('movieId').populate('hallId');
        return getLatestSessions;
    }
}


export default new SessionService();