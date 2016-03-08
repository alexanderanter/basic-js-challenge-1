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

exports.sortArr = function(data) {
    var result;
    var copiedArray = data.slice();

    result = copiedArray.sort(function(a, b) {
        if (a > b) {
            return -1;
        }

        if (a < b) {
            return 1;
        }

        // a must be equal to b
        return 0;
    });

    return result;
}
exports.getMean = function(data) {
    var result;
    var copiedArray = data.slice();
    var totalSum = 0;
    //get total sum
    copiedArray.forEach(function(key) {
        totalSum += key;
    });

    result = totalSum / copiedArray.length;

    return result;
}

exports.getMedian = function(data) {
    var result;
    var copiedArray = data.slice();
    var topHalf = 0;
    var bottomHalf = 0;

    //sort the array with highest value first
    copiedArray = exports.sortArr(copiedArray);

    //check if the length is a even number or not
    if (copiedArray.length % 2 === 0) {

        topHalf = copiedArray.length / 2;
        bottomHalf = topHalf - 1;
        result = ((topHalf + bottomHalf) / 2);

    }else {

        result = Math.round(copiedArray.length / 2);

    }

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
    var minVal = Array.min(copiedArray);
    var maxVal = Array.max(copiedArray);
    var meanVal = exports.getMean(copiedArray);
    var medianVal = exports.getMedian(copiedArray);
    var modeVal = exports.getMode(copiedArray);
    var rangeVal = exports.getRange(copiedArray);
    var result = {
        max:    maxVal,
        mean:   meanVal,
        median: medianVal,
        min:    minVal,
        mode:   modeVal,
        range:  rangeVal
    };
    console.log(result);
    console.log("max value: " + maxVal);
    console.log("min value: " + minVal);
    console.log("mean value: " + maxVal);
    console.log("median value: " + minVal);
    console.log("mode value: " + minVal);
    console.log("range value: " + minVal);

    return result;
};
