const fetch = require('node-fetch');

exports.handler = async function(event) {
    const url = event.queryStringParameters.url;
    if (!url) {
        return {
            statusCode: 400,
            body: 'URL is required',
        };
    }
    
    try {
        const response = await fetch(url);
        const data = await response.text();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/html',
            },
            body: data,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: `Fetch error: ${error.message}`,
        };
    }
};
