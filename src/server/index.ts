import express from 'express';
import path from 'path';
import Bundler from 'parcel-bundler';

const app = express();
const PORT: number = parseInt(process.env.PORT) || 3000;

app.get('/api', function (req, res) {
    res.send({
        message: 'Hello World!'
    });
});

if (process.env.NODE_ENV != 'production') {
    const bundler = new Bundler('src/client/index.html', {
        bundleNodeModules: true,
        outDir: 'dist/public'
    });

    app.use(bundler.middleware());
} else {
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}

app.listen(PORT);
console.log('Listening on port ' + PORT)
