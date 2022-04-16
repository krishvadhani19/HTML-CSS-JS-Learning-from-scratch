const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Styling Links & Buttons</title>
        <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="22.css">
    </head>
    <style>
    .container {
        border: 5px solid rgb(44, 3, 3);
        background-color: rgb(243, 236, 196);
        width: 600px;
        margin: 40px auto;
        padding: 40px;
        border-radius: 20px;
    }
    
    * {
        font-family: 'Oxygen', sans-serif;
    }
    
    .btn {
        background-color: rgb(228, 55, 55);
        padding: 5px;
        border: 3px solid black;
        border-radius: 3px;
        cursor: pointer;
        font-size: 18px;
        text-align: center;
        font-weight: bold;
    }
    
    a {
        text-decoration: none;
        color: black;
        background-color: rgb(228, 55, 55);
    }
    
    a:hover {
        color: black;
        background-color: rgb(110, 29, 29);
    }
    
    a:active {
        background-color: aqua;
    }
    
    a:visited {
        background-color: rgb(216, 200, 233);
        padding: 5px;
        border: 3px solid black;
        border-radius: 3px;
        cursor: pointer;
        font-size: 18px;
        text-align: center;
    }
    </style>
    
    <body>
        <div class="container" id="cont1">
            <h2>This is my heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam quaerat accusamus veniam repellat adipisci a unde porro? Vel, asperiores eos alias provident, culpa facilis id aperiam eum soluta saepe corporis laboriosam quos pariatur reiciendis
                quibusdam, nemo nihil exercitationem iste itaque!</p>
            <a href="http://googssqle.com" class="btn">Read More..</a>
            <button class="btn">Contact Us</button>
        </div>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});