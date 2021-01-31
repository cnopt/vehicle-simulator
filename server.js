
const express   = require('express')
const app       = express()
const Vehicle   = require('./public/models/vehicle.json')
const socketIo  = require('socket.io')
const { check, validationResult } = require('express-validator');

app.use(express.json())
app.use(express.static(__dirname + '/public'));

// start server on port 3000
const server    = app.listen(3000, () => console.log('server started'))
const io        = require('socket.io')(server)


// Listen for client connect & disconnect events, and log them
io.on("connection", socket => {
    console.log("New client connected");

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});



// *** ROOTS ***

// Default root - on page load
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


// GET ROUTES

// [GET] Vehicle
// -> return data in json format
// -> emit a socket event, include the request url and method as payload
app.get('/vehicle', (req, res) => {
    res.json(Vehicle)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain
app.get('/vehicle/drivetrain', (req, res) => {
    res.json(Vehicle.Drivetrain)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Engine
app.get('/vehicle/drivetrain/engine', (req, res) => {
    res.json(Vehicle.Drivetrain.Engine)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Engine -> displacement
app.get('/vehicle/drivetrain/engine/displacement', (req, res) => {
    res.json(Vehicle.Drivetrain.Engine.displacement)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Engine -> power
app.get('/vehicle/drivetrain/engine/power', (req, res) => {
    res.json(Vehicle.Drivetrain.Engine.power)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Engine -> maxtorque
app.get('/vehicle/drivetrain/engine/maxtorque', (req, res) => {
    res.json(Vehicle.Drivetrain.Engine.maxTorque)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Engine -> maxrpm
app.get('/vehicle/drivetrain/engine/maxrpm', (req, res) => {
    res.json(Vehicle.Drivetrain.Engine.maxRPM)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Transmission
app.get('/vehicle/drivetrain/transmission', (req, res) => {
    res.json(Vehicle.Drivetrain.Transmission)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Transmission -> type
app.get('/vehicle/drivetrain/transmission/type', (req, res) => {
    res.json(Vehicle.Drivetrain.Transmission.type)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Transmission -> speed
app.get('/vehicle/drivetrain/transmission/speed', (req, res) => {
    res.json(Vehicle.Drivetrain.Transmission.speed)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Transmission -> gear
app.get('/vehicle/drivetrain/transmission/gear', (req, res) => {
    res.json(Vehicle.Drivetrain.Transmission.gear)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> Transmission -> performancemode
app.get('/vehicle/drivetrain/transmission/performancemode', (req, res) => {
    res.json(Vehicle.Drivetrain.Transmission.performanceMode)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> FuelSystem
app.get('/vehicle/drivetrain/fuelsystem', (req, res) => {
    res.json(Vehicle.Drivetrain.FuelSystem)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> FuelSystem -> fuelLevel
app.get('/vehicle/drivetrain/fuelsystem/level', (req, res) => {
    res.json(Vehicle.Drivetrain.FuelSystem.fuelLevel)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Drivetrain -> FuelSystem -> fuelWarning
app.get('/vehicle/drivetrain/fuelsystem/warning', (req, res) => {
    res.json(Vehicle.Drivetrain.FuelSystem.fuelWarning)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Body
app.get('/vehicle/body', (req, res) => {
    res.json(Vehicle.Body)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Body -> Trunk
app.get('/vehicle/body/trunk', (req, res) => {
    res.json(Vehicle.Body.Trunk)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Body -> FrontWindshield
app.get('/vehicle/body/frontwindshield', (req, res) => {
    res.json(Vehicle.Body.FrontWindshield)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Body -> FrontWindshield
app.get('/vehicle/body/frontwindshield/wipers', (req, res) => {
    res.json(Vehicle.Body.FrontWindshield.Wipers)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Body -> Mirrors
app.get('/vehicle/body/mirrors', (req, res) => {
    res.json(Vehicle.Body.Mirrors)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Body -> Mirrors -> Heating
app.get('/vehicle/body/mirrors/heating', (req, res) => {
    res.json(Vehicle.Body.Mirrors.Heating)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis
app.get('/vehicle/chassis', (req, res) => {
    res.json(Vehicle.Chassis)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis -> Wheel
app.get('/vehicle/chassis/wheel', (req, res) => {
    res.json(Vehicle.Chassis.Wheel)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis -> Wheel -> Front
app.get('/vehicle/chassis/wheel/front', (req, res) => {
    res.json(Vehicle.Chassis.Wheel.Front)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis -> Wheel -> Front -> Left
app.get('/vehicle/chassis/wheel/front/left', (req, res) => {
    res.json(Vehicle.Chassis.Wheel.Front.Left)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis -> Door
app.get('/vehicle/chassis/door', (req, res) => {
    res.json(Vehicle.Chassis.Door)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis -> Door -> Front
app.get('/vehicle/chassis/door/front', (req, res) => {
    res.json(Vehicle.Chassis.Door.Front)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis -> Door -> Front -> Left
app.get('/vehicle/chassis/door/front/left', (req, res) => {
    res.json(Vehicle.Chassis.Door.Front.Left)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis -> Sensor
app.get('/vehicle/chassis/sensor', (req, res) => {
    res.json(Vehicle.Chassis.Sensor)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis -> Sensor -> RainSensor
app.get('/vehicle/chassis/sensor/rainsensor', (req, res) => {
    res.json(Vehicle.Chassis.Sensor.RainSensor)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Chassis -> Sensor -> LowLightSensor
app.get('/vehicle/chassis/sensor/lowlightsensor', (req, res) => {
    res.json(Vehicle.Chassis.Sensor.LowLightSensor)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin
app.get('/vehicle/cabin', (req, res) => {
    res.json(Vehicle.Cabin)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> Seats
app.get('/vehicle/cabin/seats', (req, res) => {
    res.json(Vehicle.Cabin.Seats)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> Seats -> Front
app.get('/vehicle/cabin/seats/front', (req, res) => {
    res.json(Vehicle.Cabin.Seats.Front)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> Seats -> Front -> Pos1
app.get('/vehicle/cabin/seats/front/pos1', (req, res) => {
    res.json(Vehicle.Cabin.Seats.Front.Pos1)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> Seats -> Front -> Pos1 -> Seatbelt
app.get('/vehicle/cabin/seats/front/pos1/seatbelt', (req, res) => {
    res.json(Vehicle.Cabin.Seats.Front.Pos1.Seatbelt)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> SteeringWheel
app.get('/vehicle/cabin/steeringwheel', (req, res) => {
    res.json(Vehicle.Cabin.SteeringWheel)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> SteeringWheel -> position
app.get('/vehicle/cabin/steeringwheel/position', (req, res) => {
    res.json(Vehicle.Cabin.SteeringWheel.position)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> Sunroof
app.get('/vehicle/cabin/sunroof', (req, res) => {
    res.json(Vehicle.Cabin.Sunroof)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> Sunroof -> position
app.get('/vehicle/cabin/sunroof/position', (req, res) => {
    res.json(Vehicle.Cabin.Sunroof.position)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> HVAC
app.get('/vehicle/cabin/hvac', (req, res) => {
    res.json(Vehicle.Cabin.HVAC)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> HVAC -> ambientAirTemp
app.get('/vehicle/cabin/hvac/airtemp', (req, res) => {
    res.json(Vehicle.Cabin.HVAC.ambientAirTemperature)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> HVAC -> AirConditioning
app.get('/vehicle/cabin/hvac/aircon', (req, res) => {
    res.json(Vehicle.Cabin.HVAC.AirConditioning)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cabin -> HVAC -> AirConditioning -> status
app.get('/vehicle/cabin/hvac/aircon/status', (req, res) => {
    res.json(Vehicle.Cabin.HVAC.AirConditioning.status)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Identification
app.get('/vehicle/identification', (req, res) => {
    res.json(Vehicle.Identification)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Identification -> brand 
app.get('/vehicle/identification/brand', (req, res) => {
    res.json(Vehicle.Identification.brand)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Identification -> model
app.get('/vehicle/identification/model', (req, res) => {
    res.json(Vehicle.Identification.model)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Identification -> vin
app.get('/vehicle/identification/vin', (req, res) => {
    res.json(Vehicle.Identification.vin)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cosmetic
app.get('/vehicle/cosmetic', (req, res) => {
    res.json(Vehicle.Cosmetic)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cosmetic -> exteriorColour
app.get('/vehicle/cosmetic/exteriorcolour', (req, res) => {
    res.json(Vehicle.Cosmetic.exteriorColour)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})

// [GET] Vehicle -> Cosmetic -> interiorColour
app.get('/vehicle/cosmetic/interiorcolour', (req, res) => {
    res.json(Vehicle.Cosmetic.interiorColour)
    io.emit('VehicleSim GET Event',
        { 'method': 'GET ', 'info': req.url})
})




// POST ROUTES

// [POST] Vehicle -> Drivetrain -> Engine -> displacement  
// Validator is used here to check the value before emitting the socket event
// With this method, only accepted values are sent forward to the client-side to update the website         
app.post('/vehicle/drivetrain/engine/displacement', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isInt().withMessage('Must be an Integer value')
        .isLength({ min: 4, max: 4 }).withMessage('Must be exactly 4 digits')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else, the value is acceptable, so the emit event is fired
    // (the client-side socket is listening for this)
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});


// [POST] Vehicle -> Drivetrain -> Engine -> power
app.post('/vehicle/drivetrain/engine/power', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isNumeric().withMessage('Must be a numeric value')
        .isInt().withMessage('Must be an Integer value')
        .isLength({ min: 2, max: 4 }).withMessage('Must be between 2 and 4 digits')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});


// [POST] Vehicle -> Drivetrain -> Engine -> torque
app.post('/vehicle/drivetrain/engine/torque', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isNumeric().withMessage('Must be a numeric value')
        .isInt().withMessage('Must be an Integer value')
        .isLength({ min: 2, max: 3 }).withMessage('Must be between 2 and 3 digits')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});


// [POST] Vehicle -> Drivetrain -> Engine -> maxRPM
app.post('/vehicle/drivetrain/engine/maxrpm', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isNumeric().withMessage('Must be a numeric value')
        .isInt().withMessage('Must be an Integer value')
        .isLength({ min: 4, max: 4 }).withMessage('Must be exactly 4 digits')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});


// [POST] Vehicle -> Drivetrain -> Transmission -> type
app.post('/vehicle/drivetrain/transmission/type', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isAlphanumeric().withMessage('Must be an Alphanumeric String')
        .isIn('AT, MT').withMessage('Must be part of accepted values')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});


// [POST] Vehicle -> Drivetrain -> Transmission -> speed
app.post('/vehicle/drivetrain/transmission/speed', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isNumeric().withMessage('Must be a numeric value')
        .isInt({ min: 0, max: 250 }).withMessage('Must be an Integer value between 0-250')
        .isLength({ min: 1, max: 3 }).withMessage('Must be between 1 and 3 digits')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});

// [POST] Vehicle -> Drivetrain -> Transmission -> gear
app.post('/vehicle/drivetrain/transmission/gear', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isNumeric().withMessage('Must be a numeric value')
        .isInt({ min: -1, max: 8 }).withMessage('Must be an Integer value between -1-8')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});

// [POST] Vehicle -> Drivetrain -> Transmission -> performancemode
app.post('/vehicle/drivetrain/transmission/performancemode', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isAlphanumeric().withMessage('Must be an Aphanumeric String')
        .isIn('standard, sport, snow, rain, economy').withMessage('Must be part of accepted values')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});

// [POST] Vehicle -> Chassis -> Wheel -> Front -> Left -> tyrepressure
app.post('/vehicle/chassis/wheel/front/left/tyrepressure', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isNumeric().withMessage('Must be a numeric value')
        .isFloat({ min: 0, max: 99 }).withMessage('Must be a Float value between 0-99')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});

// [POST] Vehicle -> Chassis -> Wheel -> Front -> Left -> tyrepressure
app.post('/vehicle/chassis/wheel/rear/left/tyrepressure', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isNumeric().withMessage('Must be a numeric value')
        .isFloat({ min: 0, max: 99 }).withMessage('Must be a Float value between 0-99')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});

// [POST] Vehicle -> Chassis -> Door -> Front -> Left
// limitation of validator js, difficult to validate whether whether is one of the accepted values
// because isin() only checks doesn't check the complete string, so can do "clo" and itll work
app.post('/vehicle/chassis/door/front/left/status', [
    check('value')
        .not().isEmpty().withMessage('Must specify the new value')
        .isAlphanumeric().withMessage('Must be an Alphanumeric String')
        .isIn('open, closed').withMessage('Must be part of accepted values')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }

    // else
    res.send('Succesfully updated value')
    io.emit('VehicleSim POST Event',
        { 'method': 'POST', 'info': req.url, 'val': req.query.value })
});


// export this file, in order for Jest to be able to start the server on its own when testing
module.exports = server;




