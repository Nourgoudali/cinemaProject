import crypto from 'crypto';

// Generate a random secret key
const secret = crypto.randomBytes(32).toString('hex');
console.log('Generated JWT Secret:', secret);