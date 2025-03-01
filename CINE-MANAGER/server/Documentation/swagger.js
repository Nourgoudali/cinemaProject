import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

// Swagger options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentation de l\'API pour la gestion des catégories, salles et films',
        },
        servers: [
            {
                url: 'http://localhost:2003',
            },
        ],
    },
    apis: ['./server/routes/router.js'], // Ensure this path is correct
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default function setupSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}