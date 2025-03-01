import { connect } from "mongoose";
import movieDb from "../model/movieModel.js";

class commentService {

        async addComment(movieId, clientId, comment) {
            const movie = await movieDb.findById(movieId);
            if(!movie) {
                throw new error(`Movie With Id ${movieId} Not Found`)
            }

            movie.comments.push({
                client: clientId,
                comment: comment,
                createdAt: new Date(),
            });

            return await movie.save();
        }

        async deleteComment(movieId, commentId, clientId) {
            
            const movie = await movieDb.findById(movieId);
            if(!movie) {
                throw new Error(`Movie With Id${movieId} Not Found`);
            }

            const commentIndex = movie.comments.findIndex(comment => comment._id.toString() === commentId && comment.client.toString() === clientId);


            if(commentIndex === -1) {
                throw new Error ('You are not authorized to delete this comment')
            }

            movie.comments.splice(commentIndex, 1);
            return await movie.save();
        }

        async updateComment(movieId, commentId, clientId, newComment) {
            const movie = await movieDb.findById(movieId);
            if(!movie) {
                throw new Error (`Movie With Id ${movieId} Not Found`)
            }

            const comment  = movie.comments.find(
                (comment) => comment._id.toString() === commentId && comment.client.toString() === clientId
            );

            if(!comment) {
                throw new Error('You Are Not Authorized To Update This Comment')
            };

            comment.comment = newComment;

            return await movie.save();


        }
}

export default new commentService();