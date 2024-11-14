import restify from 'restify';
import path from 'path';
import { writeFileSync } from 'fs';
const server = restify.createServer();
server.listen(9958, function () {
    console.log('%s listening at %s', server.name, server.url);
});
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.get('/*', restify.plugins.serveStaticFiles('./dist'));
server.post('/update', async (req, res) => {
    const body = req.body;
    const dataList = body.dataList;
    try {
        const uid = dataList[0].uid;
        const bodyStr = dataList.map((item) => JSON.stringify(item)).join('\n');
        const filePath = path.resolve(import.meta.filename, `../../cache/${uid}.txt`);
        writeFileSync(filePath, bodyStr + '\n', { flag: 'a' });
        res.send(200, {
            code: 200,
        });
    }
    catch (error) {
        res.send(500, {
            code: 500,
            message: error.message,
        });
    }
});
