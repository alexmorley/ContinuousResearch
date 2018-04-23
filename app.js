const express = require('express')
app = express()

app.use(express.static('./'));

var port = 3001;
app.listen(port, () => console.log('Example app listening on port '+port));
