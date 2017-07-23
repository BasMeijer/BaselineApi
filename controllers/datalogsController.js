const allDatalogData = require('../data/json/allLogs.json');




//========================================
// Temperature Data
//========================================

/**
 * Gets the air temperature
 */
exports.getAirTemperature = function (req, res, next) {
    let data = []

    allDatalogData.forEach((datalog) => {
        if (datalog.LuchtTemp) {
            data.push(
                {
                    date: datalog.Datum,
                    time: datalog.Tijd,
                    airTemperature: parseInt(datalog.LuchtTemp)
                }
            )
        }
    })

    res.status(200).json({
        data
    });
}

/**
 * Gets the surface temperature
 */
exports.getSurfaceTemperature = function (req, res, next) {
    let data = []

    allDatalogData.forEach((datalog) => {
        if (datalog.OppTemp) {
            data.push(
                {
                    date: datalog.Datum,
                    time: datalog.Tijd,
                    surfaceTemperature: parseInt(datalog.OppTemp)
                }
            )
        }
    })

    res.status(200).json({
        data
    });
}

/**
 * Gets the depth temperature with the provided depth param
 */
exports.getDepthTemperature = function (req, res, next) {
    let data = []

    allDatalogData.forEach((datalog) => {
        if (datalog["Temp" + req.params.depth]) {
            data.push(
                {
                    date: datalog.Datum,
                    time: datalog.Tijd,
                    depthTemperature: parseInt(datalog["Temp" + req.params.depth])
                }
            )
        }
    })

    res.status(200).json({
        data
    });
}


//========================================
// Visibility Data
//========================================

/**
 * Gets the visibility in meters with the provided depth param
 */
exports.getDepthVisibility = function (req, res, next) {
    let data = []

    allDatalogData.forEach((datalog) => {
        if (datalog["Zicht" + req.params.depth]) {
            data.push(
                {
                    date: datalog.Datum,
                    time: datalog.Tijd,
                    depthVisibility: parseInt(datalog["Zicht" + req.params.depth])
                }
            )
        }
    })

    res.status(200).json({
        data
    });
}