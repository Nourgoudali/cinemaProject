const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Category API Documentation',
            version: '1.0.0',
            description: 'Documentation de l\'API pour la gestion des catégories',
        },
        servers: [
            {
                url: 'http://localhost:2003',
            },
        ],
        tags: [
            {
                name: 'Categories',
                description: 'API endpoints for category management',
            },
        ],
    },
    apis: ['./server/routes/router.js'],
};

export default swaggerOptions