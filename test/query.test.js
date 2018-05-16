const assert = require('assert');
const { query:validater } = require('../index');
const joi = require('joi');

describe('test to validater', () => {
    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            key: joi.string()
        });

        const req = {
            query:{
                key: 'string'
            },
        };

        const res = {
            json: ({ message }) => {
                assert(!message);
                throw new Error();
            },
            status: (code) => {
                assert(!code);
                throw new Error();
            },
        };
        const middleware = validater(schema);

        middleware(req, res, next);
    });

    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            key: joi.string()
        });

        const req = {
            query:{
                key: 1
            },
        };

        const res = {
            json: ({ message }) => {
                assert(message);
                next();
            },
            status: (code) => {
                assert(code === 400);
                return res;
            },
        };
        const middleware = validater(schema);

        middleware(req, res, next);
    });
});
