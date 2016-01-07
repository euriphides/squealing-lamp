/**
 * Created by patty.johnson on 1/6/2016.
 */

var express = require('express');
var app = express();
app.use('/', express.static('./'));
app.listen(8080);