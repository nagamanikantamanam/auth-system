export const FRONTEND_CONFIG = {
  apiUrl: import.meta.env.API_URL || 'http://localhost:3000',
};

console.log('Loaded Frontend Config:', FRONTEND_CONFIG);
