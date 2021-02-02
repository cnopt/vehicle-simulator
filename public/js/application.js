
$(document).ready(function () {


    // Connect to socket, on the same domain as the server-side socket
    var socket = io.connect('http://localhost:3000');
    // Initialize messages array
    var messages_received = [];

    // vehicle schema to html table
    $.getJSON('./models/vehicle.json', function (data) {
        // Define variables based on their value inside the loaded JSON file
        var Vehicle                 = data
        var vehicleEngDispl         = Vehicle.Drivetrain.Engine.displacement
        var vehicleEngPower         = Vehicle.Drivetrain.Engine.power
        var vehicleEngTorq          = Vehicle.Drivetrain.Engine.maxTorque
        var vehicleEngMaxRPM        = Vehicle.Drivetrain.Engine.maxRPM
        var vehicleTransType        = Vehicle.Drivetrain.Transmission.type
        var vehicleTransSpeed       = Vehicle.Drivetrain.Transmission.speed
        var vehicleTransGear        = Vehicle.Drivetrain.Transmission.gear
        var vehicleTransPerfMode    = Vehicle.Drivetrain.Transmission.performanceMode
        var vehicleChassisFLWheelP  = Vehicle.Chassis.Wheel.Front.Left.tyrePressure
        var vehicleChassisRLWheelP  = Vehicle.Chassis.Wheel.Rear.Left.tyrePressure
        var vehicleChassisDoorFLS   = Vehicle.Chassis.Door.Front.Left.state

        // Update annotations around vehicle
        $("#anno-door p").text(vehicleChassisDoorFLS)
        $("#anno-front-left-tyre p").text(vehicleChassisFLWheelP + ' PSI')
        $("#anno-rear-left-tyre p").text(vehicleChassisRLWheelP + ' PSI')

        // Generate HTML table
        $("#side-panel-table").append(
            '<tr>' + '<td colspan="2" class="heading">Engine</td>' + '</tr>' +
            '<tr>' +
            '<td class="attr"> Displacement </td>' +
            '<td class="val engdispl">' + vehicleEngDispl + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="attr"> Power </td>' +
            '<td class="val engpwr">' + vehicleEngPower + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="attr"> Max Torque </td>' +
            '<td class="val engtrq">' + vehicleEngTorq + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="attr"> Max RPM </td>' +
            '<td class="val engrpm">' + vehicleEngMaxRPM + '</td>' +
            '</tr>' +
            '<tr>' + '<td colspan="2" class="heading">Transmission</td>' + '</tr>' +
            '<tr>' +
            '<td class="attr"> Type </td>' +
            '<td class="val transtyp">' + vehicleTransType + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="attr"> Speed </td>' +
            '<td class="val transspd">' + vehicleTransSpeed + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="attr"> Gear </td>' +
            '<td class="val transgr">' + vehicleTransGear + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="attr"> Performance Mode </td>' +
            '<td class="val perfmd">' + vehicleTransPerfMode + '</td>' +
            '</tr>' +
            '<tr>' + '<td colspan="2" class="heading">Chassis</td>' + '</tr>' +
            '<tr>' +
            '<td class="attr"> Front Left Tyre Pressure </td>' +
            '<td class="val fltp">' + vehicleChassisFLWheelP + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="attr"> Rear Left Tyre Pressure </td>' +
            '<td class="val rltp">' + vehicleChassisRLWheelP + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="attr"> Front Left Door Status </td>' +
            '<td class="val flds">' + vehicleChassisDoorFLS + '</td>' +
            '</tr>'
        )
    })



    // Listener for GET events
    socket.on('VehicleSim GET Event', function (msg) {
        console.log("Received message: " + msg.method + msg.info);
        var reqDate = moment().format("HH:mm:ss");
        var msgString = '<p>' + '<span class="date">' + reqDate + '</span>' +
            '<span class="method get">' + msg.method + '</span>' +
            '<span class="url">' + msg.info + '</span> request sent from user </p>';
        $('#log').prepend(msgString);

    })


    // Listener for POST events
    socket.on('VehicleSim POST Event', function (msg) {
        console.log("Received message: " + msg.method + msg.info);
        var reqDate = moment().format("HH:mm:ss");
        var msgString = '<p>' + '<span class="date">' + reqDate + '</span>' +
            '<span class="method post">' + msg.method + '</span>' +
            '<span class="url">' + msg.info + '</span> request sent from user </p>';
        $('#log').prepend(msgString); // add the message to the log section of the page

        // handle different posts based on which endpoint is being queried
        if (msgString.includes('/engine/displacement?')) {
            $(".engdispl").text(msg.val)
        }
        if (msgString.includes('/engine/power?')) {
            $(".engpwr").text(msg.val)
        }
        if (msgString.includes('/engine/torque?')) {
            $(".engtrq").text(msg.val)
        }
        if (msgString.includes('/engine/maxrpm?')) {
            $(".engrpm").text(msg.val)
        }
        if (msgString.includes('/transmission/type?')) {
            $(".transtyp").text(msg.val)
        }
        if (msgString.includes('/transmission/speed?')) {
            $(".transspd").text(msg.val)
        }
        if (msgString.includes('/transmission/gear?')) {
            $('.transgr').text(msg.val)
        }
        if (msgString.includes('/transmission/performancemode?')) {
            $('.perfmd').text(msg.val)
        }
        if (msgString.includes('/front/left/tyrepressure?')) {
            $('.fltp').text(msg.val)
            $("#anno-front-left-tyre p").text(msg.val + ' PSI')
        }
        if (msgString.includes('/rear/left/tyrepressure?')) {
            $('.rltp').text(msg.val)
            $("#anno-rear-left-tyre p").text(msg.val + ' PSI')
        }
        if (msgString.includes('/door/front/left/status?')) {
            $('.flds').text(msg.val)
            $("#anno-door p").text(msg.val)
        }

    })

    document.getElementById("sendReq").onclick = sendReq;



    function sendReq() {
        fetch("http://localhost:3000/vehicle")
    }

    // current frame reel is on
    // console.log($('#image').reel('frame'));


});
