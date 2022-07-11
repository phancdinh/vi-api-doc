const express = require('express');
var cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
};
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.get('/', cors(), (req, res) => {
    res.sendFile('./swagger-ui.html', { root: __dirname });
});
app.listen(port, () => console.log(`listening on port ${port}!`));