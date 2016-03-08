/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

/**
 * Returns the descriptive information (max, mean, median, min, mode and range) from a set of numbers.
 * @param {Array.<Number>} data The set of data to be analyzed.
 * @throws {TypeError} Argument must be an array.
 * @throws {Error} Argument can not be an empty array.
 * @returns {{max: Number, mean: Number, median: Number, min: Number, mode: Array.<Number>, range: Number}}
 */

//extending the array prototype by adding .max and .min function and apply
//max and min function invokes the math function and sends in the array.

Array.max = function(data) {
    return Math.max.apply(Math, data);
};

Array.min = function(data) {
    return Math.min.apply(Math, data);
};

exports.getMean = function(data) {
    var result;
    var copiedArray = data.slice();

    return result;
}

exports.getMedian = function(data) {
    var result;
    var copiedArray = data.slice();

    return result;
}

exports.getMode = function(data) {
    var result;
    var copiedArray = data.slice();

    return result;
}

exports.getRange = function(data) {
    var result;
    var copiedArray = data.slice();

    return result;
}

exports.analyze = function(data) {
    //error handling
    if (typeof data !== "object") {
        throw new TypeError("you didn't send in an array");
    }else if (data.length < 1) {
        throw new Error("the array is empty!");
    }

    var copiedArray  = data.slice();
    var result = {};
    var minVal = Array.min(copiedArray);
    var maxVal = Array.max(copiedArray);
    var meanVal = exports.getMean(copiedArray);
    var medianVal = exports.getMedian(copiedArray);
    var modeVal = exports.getMode(copiedArray);
    var rangeVal = exports.getRange(copiedArray);

    console.log("max value: " + maxVal);
    console.log("min value: " + minVal);
    console.log("mean value: " + maxVal);
    console.log("median value: " + minVal);
    console.log("mode value: " + minVal);
    console.log("range value: " + minVal);


    return result;
};
