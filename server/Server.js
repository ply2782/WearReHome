const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 4000;
const http = require('http').createServer(app);
const router = express.Router();
const fs = require('fs');
const mime = require('mime');
const getDownloadFilename = require('./download/DownloadFileName').getDownloadFilename;

/* db 연동 */
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '',
    port: '',
    user: '',
    password: '',
    database: ''
});

conn.connect((err) => {
    if (err) console.log(err);
    else console.log('Connected to the database');
});
/*  */


app.use(express.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, '../build')));

// app.get('/', function (request, response) {
//     response.sendFile(path.join(__dirname, '../build/index.html'));
// });

// app.get('*', function (request, response) {
//     response.sendFile(path.join(__dirname, '../build/index.html'));
// });


app.get('/hello', (req, res) => {
    conn.query('SELECT * FROM test limit 10', function (err, results, fields) {
        if (err) throw err;
        res.send(results);
    });
})

app.listen(4000, function () {
    console.log('listening on 4000')
});

router.get('/:file_name', function (req, res, next) {
    var upload_folder = './download';
    var file = upload_folder + req.params.file_name; // ex) /upload/files/sample.txt

    try {
        if (fs.existsSync(file)) { // 파일이 존재하는지 체크
            var filename = path.basename(file); // 파일 경로에서 파일명(확장자포함)만 추출
            var mimetype = mime.getType(file); // 파일의 타입(형식)을 가져옴

            res.setHeader('Content-disposition', 'attachment; filename=' + getDownloadFilename(req, filename)); // 다운받아질 파일명 설정
            res.setHeader('Content-type', mimetype); // 파일 형식 지정

            var filestream = fs.createReadStream(file);
            filestream.pipe(res);
        } else {
            res.send('해당 파일이 없습니다.');
            return;
        }
    } catch (e) { // 에러 발생시
        console.log(e);
        res.send('파일을 다운로드하는 중에 에러가 발생하였습니다.');
        return;
    }
});
