const request = requiere('supertest');
const app = requiere('../src/app');

describe('GET/', ()=>{
    it('should return Hello, World!', async()=>{
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, Worl!');

    })
});

