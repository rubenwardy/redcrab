var global_navtree = WpNavBar.readTree({
"childArray" : [
{   'sTitle':'Map',
    'bIsWebPath':true,
    'sUrl':'map/map.html'
},
{   'sTitle':'About',
    'bIsWebPath':true,
    'sUrl':'map/index.html'
},
{   'sTitle':'Map 1 - Center',
    'bIsWebPath':true,
    'sUrl':'map/center/index.html',"childArray" : [
    {   'sTitle':'Cities',
        'bIsExternal':true,
        'bIsWebPath':true,
        'sUrl':'map/center/index.html',
        'sTarget':'_self',"childArray" : [
        {   'sTitle':'Spawn City',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/spawn/index.html',"childArray" : [
            {   'sTitle':'Skywards City',
                'bIsWebPath':true,
                'sUrl':'map/center/cities/spawn/skywards.html'
            }]
        },
        {   'sTitle':'Castle Town',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/spawn/castle.html'
        },
        {   'sTitle':'Nameless Town',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/nameless.html'
        },
        {   'sTitle':'Deluxe City',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/harbour.html'
        },
        {   'sTitle':'Outskirts',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/outskirts.html'
        },
        {   'sTitle':'Saren',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/saren.html'
        },
        {   'sTitle':'Ruben Villa',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/ruben.html'
        },
        {   'sTitle':'Desert Castle',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/desert_castle.html'
        },
        {   'sTitle':'Papyrus Town',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/papyrus.html'
        },
        {   'sTitle':'Fort Modesto',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/modesto.html'
        },
        {   'sTitle':'Desert City',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/desert_city.html'
        },
        {   'sTitle':'Green Vale',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/greenvale.html'
        },
        {   'sTitle':'Entrance to Underground City',
            'bIsWebPath':true,
            'sUrl':'map/center/cities/underground.html'
        }]
    },
    {   'sTitle':'Misc',
        'bIsExternal':true,
        'bIsWebPath':true,
        'sUrl':'map/center/index.html',
        'sTarget':'_self',"childArray" : [
        {   'sTitle':'Lighthouse',
            'bIsWebPath':true,
            'sUrl':'map/center/misc/lighthouse.html'
        }]
    }]
},
{   'sTitle':'Map 2 - North',
    'bIsWebPath':true,
    'sUrl':'map/north/index.html',"childArray" : [
    {   'sTitle':'Riverwood',
        'bIsWebPath':true,
        'sUrl':'map/north/cities/riverwood.html'
    }]
}]
});