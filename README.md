#fadelog

Log to stdout that will fade colours overtime

## Usage

    var fadelog = require('fadelog')();

    fadelog("BACON!!");

This will result in something like this

![example](example.gif)


## More Advanced

The colours and the interval can be overridden


    var colours = [ // An array of available colors in the color module https://www.npmjs.org/package/colors
            'green',
            'red',
            'green',
            'red',
            'green',
            'red',
            'green',
            'red'
        ],
        fadelog = require('fadelog')(colours, 500);

    fadelog("Christmas!!");

![example](xmas.gif)


## Caveats

Multiple calls to the logger at the same time override the same line...

This can produce a cool effect but, yeah...

I will fix it at some stage.