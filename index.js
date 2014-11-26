var singleLineLog = require('single-line-log').stdout,
    defaultColours = [
        'red',
        'yellow',
        'white',
        'grey'
    ],
    colors = require('colors/safe');


module.exports = function(overrideColors, timeout){
    if(!overrideColors){
        overrideColors = defaultColours;
    }

    return function(message){
        var colourIndex = 0;

        singleLineLog(colors[overrideColors[colourIndex++]](message));

        var timer = setInterval(function(){
            singleLineLog(colors[overrideColors[colourIndex++]](message));

            if(colourIndex >= overrideColors.length){
                singleLineLog.clear();
                console.log();
                clearInterval(timer);
            }
        }, timeout || 1000);
    };
};