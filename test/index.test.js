const assert = require('assert');
const validater = require('../index');
const joi = require('joi');

describe('test to validater', () => {
    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            body: joi.object().keys({
                key: joi.string()
            }),
            params: joi.object(),
            query: joi.object()
        });

        const req = {
            body:{
                key: 'string'
            },
            params:{

            },
            query:{

            }
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
            body: joi.object().keys(),
            params: joi.object({
                key: joi.string()
            }),
            query: joi.object()
        });

        const req = {
            body:{
            },
            params:{
                key: 'string'
            },
            query:{

            }
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
            body: joi.object().keys(),
            params: joi.object(),
            query: joi.object({
                key: joi.string()
            })
        });

        const req = {
            body:{
            },
            params:{
            },
            query:{
                key: 'string'
            }
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
            body: joi.object().keys({
                key: joi.string()
            }),
            params: joi.object(),
            query: joi.object()
        });

        const req = {
            body:{
                key: 1
            },
            params:{

            },
            query:{

            }
        };

        const res = {
            json: ({ message }) => {
                assert(message);
                next();
                return res;
            },
            status: (code) => {
                assert(code === 400);
                return res;
            },
        };
        const middleware = validater(schema);

        middleware(req, res, next);
    });

    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            body: joi.object().keys(),
            params: joi.object({
                key: joi.string()
            }),
            query: joi.object()
        });

        const req = {
            body:{

            },
            params:{
                key: 1
            },
            query:{

            }
        };

        const res = {
            json: ({ message }) => {
                assert(message);
                next();
                return res;
            },
            status: (code) => {
                assert(code === 400);
                return res;
            },
        };
        const middleware = validater(schema);

        middleware(req, res, next);
    });

    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            body: joi.object().keys(),
            params: joi.object(),
            query: joi.object({
                key: joi.string()
            })
        });

        const req = {
            body:{

            },
            params:{
            },
            query:{
                key: 1
            }
        };

        const res = {
            json: ({ message }) => {
                assert(message);
                next();
                return res;
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
