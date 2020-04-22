const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());


const value_pump_loop = require('./routes/api/value_pump_loop')
const value_pump_tank = require('./routes/api/value_pump_tank')
const value_vortex = require('./routes/api/value_vortex')
const value_sub_a = require('./routes/api/value_sub_a')
const value_sub_b = require('./routes/api/value_sub_b')
const value_sub_acid = require('./routes/api/value_sub_acid')
const value_led = require('./routes/api/value_led')
const value_ph = require('./routes/api/value_ph')
const value_ec = require('./routes/api/value_ec')



app.use('/api/value_pump_loop', value_pump_loop);
app.use('/api/value_pump_tank', value_pump_tank);
app.use('/api/value_vortex', value_vortex);
app.use('/api/value_sub_a', value_sub_a);
app.use('/api/value_sub_b', value_sub_b);
app.use('/api/value_sub_acid', value_sub_acid);
app.use('/api/value_led', value_led);
app.use('/api/value_ph', value_ph);
app.use('/api/value_ec', value_ec);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));