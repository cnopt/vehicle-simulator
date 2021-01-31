// This is the test suit that is ran with the 'node test' command 
const request = require('supertest')
const server = require('../../server')



// jest/request doesn't allow for easy monitoring of response time, so use postman

// For GET requests, simply test that a valid response is returned, by looking at
// the response's status code, and its type
describe("GET /vehicle", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/engine", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/engine")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/engine/displacement", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/engine/displacement")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/engine/power", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/engine/power")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/engine/maxtorque", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/engine/maxtorque")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/engine/maxrpm", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/engine/maxrpm")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/transmission", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/transmission")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/transmission/type", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/transmission/type")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/transmission/speed", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/transmission/speed")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/transmission/gear", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/transmission/gear")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/transmission/performancemode", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/transmission/performancemode")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/fuelsystem", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/fuelsystem")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/fuelsystem/level", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/fuelsystem/level")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/drivetrain/fuelsystem/warning", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/drivetrain/fuelsystem/warning")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/body", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/body")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/body/trunk", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/body/trunk")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/body/frontwindshield", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/body/frontwindshield")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/body/frontwindshield/wipers", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/body/frontwindshield/wipers")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/body/mirrors", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/body/mirrors")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/body/mirrors/heating", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/body/mirrors/heating")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis/wheel", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis/wheel")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis/wheel/front", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis/wheel/front")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis/wheel/front/left", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis/wheel/front/left")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis/door", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis/door")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis/door/front", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis/door/front")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis/door/front/left", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis/door/front/left")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis/sensor", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis/sensor")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis/sensor/rainsensor", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis/sensor/rainsensor")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/chassis/sensor/lowlightsensor", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/chassis/sensor/lowlightsensor")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/seats", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/seats")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/seats/front", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/seats/front")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/seats/front/pos1", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/seats/front/pos1")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/seats/front/pos1/seatbelt", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/seats/front/pos1/seatbelt")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/steeringwheel", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/steeringwheel")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/steeringwheel/position", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/steeringwheel/position")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/sunroof", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/sunroof")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/sunroof/position", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/sunroof/position")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/hvac", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/hvac")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/hvac/airtemp", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/hvac/airtemp")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/hvac/aircon", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/hvac/aircon")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cabin/hvac/aircon/status", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cabin/hvac/aircon/status")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/identification", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/identification")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/identification/brand", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/identification/brand")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/identification/model", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/identification/model")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/identification/vin", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/identification/vin")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cosmetic", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cosmetic")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cosmetic/exteriorcolour", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cosmetic/exteriorcolour")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});

describe("GET /vehicle/cosmetic/interiorcolour", () => {
    test("Valid Response", async () => {
        const response = await request(server).get("/vehicle/cosmetic/interiorcolour")
        expect(response.statusCode).toBe(200)
        expect(response.type).toEqual('application/json')
    });
});



// For POST requests, a number of additional tests are performed to ensure the API responds
// as it should. These tests often include missing or invalid data.
// These tests look at the response status code, and body, to ensure that
// the custom error messages are displayed when they should be.
describe("POST /vehicle/drivetrain/engine/displacement", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/displacement")
            .send({
                value: 1200
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/displacement")
            .send({

            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, incorrect data type", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/displacement")
            .send({
                value: "a high value"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be an Integer value')
        expect(response.body.errors[1].msg).toEqual('Must be exactly 4 digits')
    });
    test("POST with invalid data, not enough digits", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/displacement")
            .send({
                value: 170
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be exactly 4 digits')
    });
});

describe("POST /vehicle/drivetrain/engine/power", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/power")
            .send({
                value: 180
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/power")
            .send({
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, incorrect data type", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/power")
            .send({
                value: "a string value"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a numeric value')
        expect(response.body.errors[1].msg).toEqual('Must be an Integer value')
    });
    test("POST with invalid data, incorrect no. of digits", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/power")
            .send({
                value: 7
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be between 2 and 4 digits')
    });
});

describe("POST /vehicle/drivetrain/engine/torque", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/torque")
            .send({
                value: 50
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/torque")
            .send({
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, incorrect data type", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/torque")
            .send({
                value: "a string value"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a numeric value')
        expect(response.body.errors[1].msg).toEqual('Must be an Integer value')
    });
    test("POST with invalid data, incorrect number type", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/torque")
            .send({
                value: 7.25
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be an Integer value')
    });
    test("POST with invalid data, incorrect no. of digits", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/engine/torque")
            .send({
                value: 9999
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be between 2 and 3 digits')
    });
});

describe("POST /vehicle/drivetrain/transmission/type", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/type")
            .send({
                value: "AT"
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/type")
            .send({
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, incorrect data type", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/type")
            .send({
                value: 3
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be part of accepted values')
    });
    test("POST with invalid data, not part of accepted values", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/type")
            .send({
                value: "CB"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be part of accepted values')
    });
});

describe("POST /vehicle/drivetrain/transmission/speed", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/speed")
            .send({
                value: 78
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/speed")
            .send({
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, incorrect data type", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/speed")
            .send({
                value: "extremely fast"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a numeric value')
        expect(response.body.errors[1].msg).toEqual('Must be an Integer value between 0-250')
    });
    test("POST with invalid data, value too large", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/speed")
            .send({
                value: 260
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be an Integer value between 0-250')
    });
    test("POST with invalid data, value too small", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/speed")
            .send({
                value: -1
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be an Integer value between 0-250')
    });
});

describe("POST /vehicle/drivetrain/transmission/gear", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/gear")
            .send({
                value: 5
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/gear")
            .send({
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, incorrect data type", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/gear")
            .send({
                value: "four"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a numeric value')
        expect(response.body.errors[1].msg).toEqual('Must be an Integer value between -1-8')
    });
    test("POST with invalid data, incorrect number type", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/gear")
            .send({
                value: 2.5
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be an Integer value between -1-8')
    });
    test("POST with invalid data, value too large", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/gear")
            .send({
                value: 10
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be an Integer value between -1-8')
    });
    test("POST with invalid data, value too small", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/gear")
            .send({
                value: -3
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be an Integer value between -1-8')
    });
});

describe("POST /vehicle/drivetrain/transmission/performancemode", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/performancemode")
            .send({
                value: "economy"
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/performancemode")
            .send({
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, incorrect data type", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/performancemode")
            .send({
                value: 100
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be part of accepted values')
    });
    test("POST with invalid data, not part of accepted values", async () => {
        const response = await request(server)
            .post("/vehicle/drivetrain/transmission/performancemode")
            .send({
                value: "megasport"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be part of accepted values')
    });
});

describe("POST /vehicle/chassis/wheel/front/left/tyrepressure", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/front/left/tyrepressure")
            .send({
                value: 32.2
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/front/left/tyrepressure")
            .send({
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, incorrect data type", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/front/left/tyrepressure")
            .send({
                value: "a lot of pressure"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a numeric value')
    });
    test("POST with invalid data, value too large", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/front/left/tyrepressure")
            .send({
                value: 100
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a Float value between 0-99')
    });
    test("POST with invalid data, value too small", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/front/left/tyrepressure")
            .send({
                value: -1
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a Float value between 0-99')
    });
});

describe("POST /vehicle/chassis/wheel/rear/left/tyrepressure", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/rear/left/tyrepressure")
            .send({
                value: 32.2
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/rear/left/tyrepressure")
            .send({
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, incorrect data type", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/rear/left/tyrepressure")
            .send({
                value: "a lot of pressure"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a numeric value')
        expect(response.body.errors[1].msg).toEqual('Must be a Float value between 0-99')
    });
    test("POST with invalid data, value too large", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/rear/left/tyrepressure")
            .send({
                value: 100
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a Float value between 0-99')
    });
    test("POST with invalid data, value too small", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/wheel/rear/left/tyrepressure")
            .send({
                value: -1
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be a Float value between 0-99')
    });
});

describe("POST /vehicle/chassis/door/front/left/status", () => {
    test("POST with valid data, should be successful", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/door/front/left/status")
            .send({
                value: "open"
            });
        expect(response.statusCode).toBe(200)
    });
    test("POST with missing data", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/door/front/left/status")
            .send({
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must specify the new value')
    });
    test("POST with invalid data, string with spaces + not part of accepted values", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/door/front/left/status")
            .send({
                value: "upside down"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be an Alphanumeric String')
        expect(response.body.errors[1].msg).toEqual('Must be part of accepted values')
    });
    test("POST with invalid data, not part of accepted values", async () => {
        const response = await request(server)
            .post("/vehicle/chassis/door/front/left/status")
            .send({
                value: "sideways"
            });
        expect(response.statusCode).toBe(422)
        expect(response.body.errors[0].msg).toEqual('Must be part of accepted values')
    });
});






// close the connection, as using require(server) actually starts the server, which is good,
// however this means that the connection remains open and jest cannot exit successfully
// so add this after all tests to essentially close the server connection
afterAll(async done => {
    server.close();
    done();
});


