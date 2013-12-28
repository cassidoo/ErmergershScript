
/**
 * ErmergershScript
 *
 * Copyright (c) 2013 Cassidy Williams
 *
 *
 * @package ermergershscript
 * @author Cassidy Williams
 */

var parser = require('perser');

function main(file)
{
    var lines = file.split(/\r?\n/);
    var script = '';

    for(var i = 0; i < lines.length; i++)
    {
        script += perser(lines[i]);
    }

    return script;
}

