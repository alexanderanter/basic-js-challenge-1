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

exports.analyze = function(data) {
    //error handling
    if (typeof data !== "object") {
        throw new TypeError("you didn't send in an array");
    }else if (data.length < 1) {
        throw new Error("the array is empty!");
    }

    var copiedArray  = data.slice();
    var result = {};
    var minVal = exports.getMin(copiedArray);
    var maxVal = exports.getMax(copiedArray);
    var meanVal = exports.getMean(copiedArray);
    var medianVal = exports.getMedian(copiedArray);
    var modeVal = exports.getMode(copiedArray);
    var rangeVal = exports.getRange(copiedArray);

    return result;
};

exports.getMin = function(data) {
    var result;
    var copiedArray = data.slice();


    return result;
}

exports.getMax = function(data) {
    var result;
    var copiedArray = data.slice();

    return result;
}

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
