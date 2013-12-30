
/**
 * ErmergershScript
 *
 * Copyright (c) 2013 Cassidy Williams
 *
 *
 * @package ermergershscript
 * @author Cassidy Williams
 */

function main(file)
{
    var lines = file.split(/\r?\n/);
    var script = '';

    for(var i = 0; i < lines.length; i++)
    {
        script += perse(lines[i]);  
    }

    return script;
}

