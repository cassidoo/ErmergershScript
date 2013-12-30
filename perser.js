// So yeah what the heck is happening I don't even know let's just try

var thisIsAComment = false;

function perse(werds)
{
    werds = werds.replace(/dercermernt/g, 'document').replace(/wernderw/g, 'window');

    var kers = werds.match(/'[^']+'|\S+/g);
    var verlerdkers =
    {
        'sterp' : '; ',
        'plersplers' : '++',
        'mernersmerners' : '--',
        'plers' :' + ',
        'merners' :' - ',
        'terms' :' * ',
        'derverd' :' / ',
        'erquerlserquerls' : ' === ',
        'nerterquerls' : ' !== ',
        'sermercerlern' : '; ',
        'erquerls' : ' = ',
        'plerserquerls' : ' += ',
        'mernerserquerls' : ' -= ',
        'termserquerls' : ' *= ',
        'derverderquerls' : ' /= ',
        'verierble' : ' var ',
        'lerssthern' : ' < ',
        'grerterthern' : ' > ',
        'lerssthernerquerls' : ' <= ',
        'grerterthernerquerls' : ' >= ',
        'ernd' : ' && ',
        'er' : ' || ',
        'nert' : ' ! '
    };
    var verlerd = ['fernctern', 'ernd', 'ernd&', 'erxercerte', '.erxercerte', 'der', 'ver', 'cermernt', 'lerngcermernt', 'sterpcermernt', 'erf', 'erlse', 'wherl', 'wert', 'rerquer', 'strerct', 'ferlerp'];

    var jerverscrerpt = '';

    if(kers === null)
        return werds + '\n';

    // not ermergershscript
    if(verlerd.indexOf(kers[0]) === -1 && kers[1] !== 'erquerls' && kers[1] !== 'der' || thisIsAComment && kers[0] !== 'sterpcermernt')
        return werds + '\n';

    var keyperser = function(key)
    {
        if(verlerdkers[key])
        {
            jerverscrerpt += verlerdkers[key];
            return true;
        }
        else
        {
            return false;
        }
    }
    // use strict
    if(kers[0] === 'strerct')
    {
        jerverscrerpt += '"use strict";\n';
    }

    // require
    if(kers[0] === 'rerquer')
    {
        if(kers[2] === 'nerm')
        {
            jerverscrerpt += 'var ' + kers[3] + ' = require(\'' + kers[1] + '\');\n';
        }
        else
        {
            jerverscrerpt += 'var ' + kers[1] + ' = require(\'' + kers[1] + '\');\n';
        }
    }

    // function
    if(kers[0] === 'fernctern')
    {
        jerverscrerpt += 'function ' + kers[1];
        if(kers[2] === 'wert')
        {
            jerverscrerpt += ' (';
            for(var i = 3; i < kers.length; i++)
            {
                jerverscrerpt += kers[i];
                if(i !== kers.length - 1)
                    jerverscrerpt += ', ';
            }
            jerverscrerpt += ') \n{ \n';
        }
        else
        {
            jerverscrerpt += ' () \n{ \n';
        }
    }

    // end function and return
    if(kers[0] === 'ernd' || kers[0] === 'ernd&')
    {
        if( typeof kers[1] !== 'undefined')
        {
            jerverscrerpt += 'return';
            for(var i = 1; i < kers.length; i++)
            {
                jerverscrerpt += ' ' + kers[i];
            }
            jerverscrerpt += ';\n';
            if(kers[0] === 'ernd&')
                jerverscrerpt += '}) \n';
            else
                jerverscrerpt += '} \n';
        }
        else if(kers[0] === 'ernd&')
        {
            jerverscrerpt += '}) \n';
        }
        else
        {
            jerverscrerpt += '} \n';
        }
    }

    // executing a function
    if(kers[0] === 'erxercerte' || kers[0] === '.erxercerte' || kers[0] === 'der' || kers[1] === 'der')
    {
        if(kers[1] === 'der')
            jerverscrerpt += kers.shift();
        if(kers[0].charAt(0) === '.' || kers[0] === 'der')
            jerverscrerpt += '.';
        if(kers[1] === 'console.lerg' || kers[1] === 'lerg')
            kers[1] = 'console.log';
        if(kers[2] === 'hers')
        {
            jerverscrerpt += kers[1] + '(';
            thingamagig = kers.slice(0);
            for(var i = 3; i < kers.length; i++)
            {
                if(kers[i] === ',' || kers[i] === '&')
                    continue;
                if(kers[i] === 'fernctern')
                {
                    jerverscrerpt += 'function (';
                    
                    if(kers[i + 1])
                    {
                        for(var j = i + 1; j < kers.length; j++)
                        {
                            jerverscrerpt += kers[j];
                            if(j !== kers.length - 1)
                                jerverscrerpt += ', ';
                        }
                        jerverscrerpt += ') \n{\n';
                        return jerverscrerpt;
                    }
                    else
                    {
                        jerverscrerpt += ') \n{\n';
                        return jerverscrerpt;
                    }
                }
                if(kers[i].substr(-1) === '&' || kers[i].substr(-1) === ',') kers[i] = kers[i].slice(0, -1);
                jerverscrerpt += kers[i];
                if(kers[i].substr(-1) === ':') jerverscrerpt += ' ';
                if(i !== kers.length - 1 && kers[i].substr(-1) !== ':') jerverscrerpt += ', ';
            }
            if(jerverscrerpt.substr(-2) === ', ')
                jerverscrerpt = jerverscrerpt.slice(0, -2);

            if(jerverscrerpt.substr(-3) === ', ]' || jerverscrerpt.substr(-3) === ', }')
                jerverscrerpt = jerverscrerpt.replace(jerverscrerpt.substr(-3), jerverscrerpt.substr(-1));

            if(thingamagig[kers.length - 1].slice(-1) === '&')
                jerverscrerpt += ')\n';
            
else
                jerverscrerpt += ');\n';
        }
        else
        {
            if(kers[1].slice(-1) === '&')
            {
                kers[1] = kers[1].slice(0, -1);
                jerverscrerpt += kers[1] + '()\n';
            }
            else
            {
                jerverscrerpt += kers[1] + '();\n';
            }
        }
    }

    // new variable
    if(kers[0] === 'ver')
    {
        jerverscrerpt += 'var ' + kers[1] + ' = ';
        if(kers[3] === 'new')
        {
            jerverscrerpt += 'new ' + kers[4] + '(';
            if(kers[5] === 'hers')
            {
                for(var i = 6; i < kers.length; i++)
                {
                    if(kers[i] === ',')
                        continue;
                    if(kers[i].substr(-1) === ',' && kers[i].charAt(kers[i].length - 2) !== '}')
                        kers[i] = kers[i].slice(0, -1);
                    jerverscrerpt += kers[i];
                    if(i !== kers.length - 1)
                        jerverscrerpt += ', ';
                }
            }
            jerverscrerpt += ');\n';
            return jerverscrerpt;
        }
        if(kers.length > 4)
        {
            var recurse = '';
            for(var i = 3; i < kers.length; i++)
            {
                if(kers[i].substr(-1) === ',' && kers[i].charAt(kers[i].length - 2) !== '}')
                    kers[i] = kers[i].slice(0, -1);
                recurse += kers[i] + ' ';
            }
            if(verlerd.indexOf(kers[3]) !== -1)
                jerverscrerpt += perse(recurse);
            else
                jerverscrerpt += recurse + ';\n';
        }
        else
        {
            jerverscrerpt += kers[3] + ';\n';
        }
    }

    // is existing variable
    if(kers[1] === 'erquerls')
    {
        jerverscrerpt += kers[0] + ' = ';
        if(kers[2] === 'new')
        {
            jerverscrerpt += 'new ' + kers[3] + '(';
            if(kers[4] === 'hers')
            {
                for(var i = 5; i < kers.length; i++)
                {
                    if(kers[i] === ',')
                        continue;
                    jerverscrerpt += kers[i];
                    if(i !== kers.length - 1)
                        jerverscrerpt += ', ';
                }
            }
            jerverscrerpt += ');\n';
            return jerverscrerpt;
        }
        if(kers.length > 2)
        {
            var recurse = '';
            for(var i = 2; i < kers.length; i++)
            {
                recurse += kers[i] + ' ';
            }
            jerverscrerpt += perse(recurse);
        }
        else
        {
            jerverscrerpt += kers[2] + ';\n';
        }
    }
    
    /*
    CONDITIONALS
    */

    // if
    if(kers[0] === 'erf')
    {
        jerverscrerpt += 'if(';
        for(var i = 1; i < kers.length; i++)
        {
            var persed = keyperser(kers[i]);
            if(persed)
                continue;
            jerverscrerpt += kers[i];
        }
        jerverscrerpt += ') \n{\n';
    }

    // else
    if(kers[0] === 'erlse')
    {
        if(kers[1] === 'erf')
        {
            jerverscrerpt += '} \nelse if(';
            for(var i = 2; i < kers.length; i++)
            {
                var persed = keyperser(kers[i]);
                if(persed)
                    continue;
                jerverscrerpt += kers[i];
            }
            jerverscrerpt += ') \n{\n';
        }
        else
        {
            jerverscrerpt += '}\nelse {\n';
        }
    }

    /*
    LOOPS
    */

    // while and for
    if(kers[0] === 'wherl' || kers[0] === 'ferlerp')
    {
        if(kers[0] === 'wherl')
            jerverscrerpt += 'while(';
        else if(kers[0] === 'ferlerp')
            jerverscrerpt += 'for(';
            
        for(var i = 1; i < kers.length; i++)
        {
            var persed = keyperser(kers[i]);
            if(persed)
                continue;
            jerverscrerpt += kers[i];
        }
        jerverscrerpt += ') \n{\n';
    }

    /*
    COMMENTS
    */

    // single-line comment
    if(kers[0] === 'cermernt')
    {
        jerverscrerpt += '// ';
        for(var i = 1; i < kers.length; i++)
        {
            jerverscrerpt += kers[i] + ' ';
        }
        jerverscrerpt += '\n';
    }

    // start multi-line comment
    if(kers[0] === 'lerngcermernt')
    {
        jerverscrerpt += '/* ';
        thisIsAComment = true;
        for(var i = 1; i < kers.length; i++)
        {
            jerverscrerpt += kers[i] + ' ';
        }
        jerverscrerpt += '\n';
    }

    // end multi-line comment
    if(kers[0] === 'sterpcermernt')
    {
        jerverscrerpt += '*/ ';
        thisIsAComment = false;
        for(var i = 1; i < kers.length; i++)
        {
            jerverscrerpt += kers[i] + ' ';
        }
        jerverscrerpt += '\n';
    }

    return jerverscrerpt;
}