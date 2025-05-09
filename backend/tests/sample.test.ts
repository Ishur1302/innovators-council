// Sample test (for demonstration)
import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
    it('should return welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Jedi Council Backend API');
    });
});
