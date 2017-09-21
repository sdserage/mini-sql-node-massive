//SDS I will mark code I have changed from the original document with
//the letters "SDS".
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive'); //SDS
const dotenv = require('dotenv').config(); //SDS dotenv README says to do this as soon as possible.

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );
