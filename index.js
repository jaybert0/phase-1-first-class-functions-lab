// Code your solution in this file!
const returnFirstTwoDrivers = function (driveArr) {
    return driveArr.slice(0,2)
}
const returnLastTwoDrivers = function (driverArr) {
    return driverArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(mul) {
    return function(fare) {return fare*mul}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}