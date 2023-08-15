const logger = (req, res, next) => {
    console.log(' ')
    console.log('====== START OF LOG ======')
    console.log('DATE: ' + JSON.stringify(new Date()));
    console.log('METHOD: ' + JSON.stringify(req.method));
    console.log('URL: ' + JSON.stringify(req.originalUrl));
    console.log('HOST: ' + JSON.stringify(req.hostname));
    console.log('PROTOCOL: ' + JSON.stringify(req.protocol));
    console.log('BODY: ' + JSON.stringify(req.body));
    console.log('QUERY: ' + JSON.stringify(req.query));
    console.log('PARAMS: ' + JSON.stringify(req.params));
    console.log('HEADERS: ' + JSON.stringify(req.headers));
    console.log('SECURE: ' + JSON.stringify(req.secure));
    console.log('IP: ' + JSON.stringify(req.ip));
    console.log('====== END OF LOG ======')
    next();
}

export default logger;
