import proxy from 'http-proxy-middleware';
export default function (app) {
    app.use(proxy('/api', { target: 'http://localhost:8080/' }));
}
;
