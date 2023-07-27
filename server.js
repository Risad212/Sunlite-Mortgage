import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './src/App';


const app = express();


app.get('/*', (req,res) => {
    const reactApp = renderToString(
        <h1>hello from server side</h1>
    );

    return res.send(`
        <html>
           <body>
              <div id="root">${<App />}</div>
           </body>
        </html>
    `)
})


app.listen(8000, ()=> {
    console.log('app listening port 8000');
})