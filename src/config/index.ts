import dotenv from 'dotenv';

dotenv.config();

// Las variables de entorno se escriben en mayúscula
export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
