const request = require('supertest');
const authRouter = require('./auth-router.js');

describe('auth-router.js', () => {

    it('should be true', () => {
        expect(true).toBe(true);
    });

    describe('POST /register', () => {
        it('should return 200', async () => {
            const res = await request(authRouter).post('/register');
            expect(res.status).toBe(200);
        })

        it('should return a json object', async () => {
            const res = await request(authRouter).post('/register');
            expect(res.type).toBe('application/json');
        })
    })

    describe('POST /login', () => {
        const user = {
            username: 'Alan34',
            password: 'password123'
        };

        it('should return 200', async () => {
            const res = await request(authRouter).post('/login').send(user);
            expect(res.status).toBe(200);
        })

        it('should return a json object', async () => {
            const res = await request(authRouter).post('/login').send(user);
            expect(res.type).toBe('application/json');
        })
    })
})