const assert = require('assert');
const { body:validater } = require('../index');
const joi = require('joi');

describe('test to validater', () => {
    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            key: joi.string()
        });

        const req = {
            body:{
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
            body:{
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
