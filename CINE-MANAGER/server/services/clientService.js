import userDb from "../model/usersModel.js";
import minio from '../../minio.js';


class ClientService {
    
    async getAllClients() {
        return userDb.find({role: 'client'})
        .then(clients => {
            return clients;
        })
        .catch(error => {   
            throw error;
        });
    }


    async updateProfile(clientId, updatedData, file) {
        if (file) {
            const imageUrl = await this.uploadProfileImage(file, 'clients'); 
            updatedData.image = imageUrl;  
        }
    
        const updatedProfile = await userDb.findByIdAndUpdate(clientId, updatedData, { new: true });
        
        if (!updatedProfile) {
            throw new Error(`Client with Id ${clientId} not found`);
        }
        return updatedProfile;
    }

    async uploadProfileImage(file, folder) {
        const bucketName = 'cinemanager';
        const fileName = `${folder}/${file.originalname}`;
    
        const exists = await minio.bucketExists(bucketName);
        if (!exists) {
            await minio.makeBucket(bucketName, 'us-east-1');
        }
    
        await minio.fPutObject(bucketName, fileName, file.path);
        return `http://127.0.0.1:9000/${bucketName}/${fileName}`;
    }
}

export default new ClientService();