# validater-express
validate body, params and query in request using joi schema


# Install 

```bash
npm install validater-express-acme
```

# Usage

```js
const schema = joi.object().keys({
    body: joi.object().keys({
        key: joi.string()
    }),
    params: joi.object(),
    query: joi.object()
});
validater(schema); // return a express middleware
```

# API

## ValidaterAcme(joiSchema, optionsToJoiValidater) -> ExpressMiddleware
receive a object with body, params and query properties obtained from request object
## ValidaterAcme.body(joiSchemaForBody, optionsToJoiValidater) -> ExpressMiddleware
## ValidaterAcme.params(joiSchemaForParams, optionsToJoiValidater) -> ExpressMiddleware
## ValidaterAcme.query(joiSchemaForQuery, optionsToJoiValidater) -> ExpressMiddleware

