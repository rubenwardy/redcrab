//(C) 2009 Serif (Europe) Ltd.

//http://www.JSON.org/json2.js
var JSON=JSON||{};(function(){function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());


function WpNavBar()
{
}

WpNavBar.mergeOptions = function (obj1, obj2) {
  for (var p in obj2) {
	if (obj2.hasOwnProperty(p)) {
 
	    try {
	      if( obj2[p].constructor==Object ) {
	      	if( obj1[p]===undefined )
	      	{
	    	      obj1[p] = obj2[p];
	    	}
			else
			{
	        	obj1[p] = WpNavBar.mergeOptions(obj1[p], obj2[p]);
	        	}
	      } else {
	          obj1[p] = obj2[p];
	      }
	    } catch(e) {
	       	if( obj2[p] !== null )
			{
				obj1[p] = obj2[p];
			}
	    }
	}
  }
  return obj1;
};

WpNavBar.formatFlashParams = function( flashOptions ) {
	var sParams = '';
	for (var p in flashOptions) {
		if (flashOptions.hasOwnProperty(p)) {
	    	if( flashOptions[p].constructor==Array ) {
	    		for( var index = 0; index < flashOptions[p].length; ++index )
	    		{
					if( sParams!=='' )
					{	sParams += '&'; }
					sParams += p + index.toString() + '=' + flashOptions[p][index];		
	    		}
	    	}
	    	else
	    	{
				if( sParams!=='' )
				{	sParams += '&';}
				sParams += p + '=' + flashOptions[p];
			}
		}
	}
	return sParams;
};

WpNavBar.readTree = function ( navtree )
{
	try 
	{
		WpNavBar.addLinks(navtree, navtree);
	} catch(err)
	{
		navtree = null; 
	}
	return navtree;
};

WpNavBar.getErrorObj = function (msg) 
{
	var err = new Error(msg);
	// take care of IE5/5.5
	if (!err.message) 
	{
		err.message = msg;
	}
	return err;
};

WpNavBar.getRelPath = function(sFromWebPath, sToWebPath)
{
	if( !sFromWebPath )
	{	return sToWebPath;}
	var leftDirsArray = sFromWebPath.split( "/" );
	var rightDirsArray = sToWebPath.split( "/" );
	
	var i = 0;
	for( ; i < leftDirsArray.length-1 && i < rightDirsArray.length-1; i++ )
	{
		if( leftDirsArray[i] != rightDirsArray[i] )
		{	break;}	
	}
	
	var sRel = "";
	for( var j = i; j < leftDirsArray.length-1; j++ )
	{
		sRel += "../";
	}
	for( var k = i; k < rightDirsArray.length-1; k++ )
	{
		sRel += rightDirsArray[k] + "/";
	}
	sRel += rightDirsArray[rightDirsArray.length-1];
	
	return sRel;
};

WpNavBar.addLinks = function( parentitem )
{
	var leftSibling = null;
	var bSeparator = false;
	for( var index = 0; index < parentitem.childArray.length; index++ )
	{
		var item = parentitem.childArray[index];
		bSeparator = bSeparator || (item.bSeparatorBefore===true);
		item.bSeparator = ( bSeparator && index !== 0 );
		item.parent = parentitem;
		item.leftSibling = leftSibling;
		if( leftSibling !== null )
		{	leftSibling.rightSibling = item;}
		item.rightSibling = null;

		if( item.childArray )
		{	WpNavBar.addLinks( item );}
		bSeparator = (item.bSeparatorAfter===true);
		leftSibling = item;
	}
};

WpNavBar.removeLinks = function( navtree )
{
	for( var index = 0; index < navtree.childArray.length; index++ )
	{
		var item = navtree.childArray[index];
		item.parent = null;
		item.leftSibling = null;
		item.rightSibling = null;
		if( item.childArray )
		{	WpNavBar.removeLinks( item );}
	}
	return navtree;
};

WpNavBar.makeGenNavBarItem = function( childArray, item, options, sOverideTarget )
{
	var newnavbaritem = {};
	newnavbaritem.sTitle = item.sTitle;
	newnavbaritem.sDescription = item.sDescription;
	newnavbaritem.bSeparator = item.bSeparator;
	newnavbaritem.bSeparatorBefore = item.bSeparatorBefore;
	newnavbaritem.bSeparatorAfter = item.bSeparatorAfter;
	newnavbaritem.bIsAnchor = item.bIsAnchor; //don't need this?
	newnavbaritem.bIsExternal = item.bIsExternal;
	newnavbaritem.sTarget = item.sTarget;
	newnavbaritem.bIsSwrFeed = item.bIsSwrFeed;
	
	if( sOverideTarget !== null )
	{	newnavbaritem.sTarget = sOverideTarget; }

	if( !options.m_bIsCustom && item.bIsExternal !== true && ( options.m_bAbsoluteLinks === true || item.bIsWebPath === true ) )
	{
		if( options.m_sThisPageUrl && item.sUrl == options.m_sThisPageUrl )
		{	newnavbaritem.bIsCurrentPage = true;}
	}
	var sUrl = item.sUrl;
	if( options.m_bHasNavElements )
	{
		if( sUrl == '%parent%' )
		{	sUrl = options.m_sUpUrl;}
		else if( sUrl == '%child%' )
		{	sUrl = options.m_sDownUrl;}
		else if( sUrl == '%previous%' )
		{	sUrl = options.m_sLeftUrl;}
		else if( sUrl == '%next%' )
		{	sUrl = options.m_sRightUrl;}
	}
	
	var sActiveFrameUrl = null;
	var sActiveFrameId = null;
	if( !item.bOverrideNavBarTarget )
	{
		if( !newnavbaritem.sTarget || newnavbaritem.sTarget==='' )
		{	newnavbaritem.sTarget = options.m_sNavBarTarget;}
		sActiveFrameUrl = options.m_sNavbarActiveFrameUrl;
		sActiveFrameId = options.m_sNavBarActiveFrameId;
		if( item.sActiveFrameUrl )
		{
			sActiveFrameUrl = item.sActiveFrameUrl;
			sActiveFrameId  = item.sActiveFrameId;
		}
	}
	if( sActiveFrameUrl )
	{
		var relpathframetopage = (item.bIsWebPath === true) ? WpNavBar.getRelPath(sActiveFrameUrl, sUrl) : sUrl;
		if( options.m_bAbsoluteLinks !== true )
		{	sActiveFrameUrl = WpNavBar.getRelPath(options.m_sThisPageUrl,sActiveFrameUrl);} 
		newnavbaritem.sUrl = sActiveFrameUrl + "?" + sActiveFrameId + "=" + relpathframetopage;
	}
	else
	{
		if( item.bIsWebPath )
		{	newnavbaritem.sUrl = WpNavBar.getRelPath(options.m_sThisPageUrl, sUrl);}
		else
		{	newnavbaritem.sUrl = sUrl;}
	}
	if( (options.m_bIncludeChildren || options.m_bIncludeAnchors) && item.childArray )
	{
		for( var index = 0; index < item.childArray.length; index++ )
		{
			var childnavbaritem = item.childArray[index];
			if( !options.m_bIncludeAnchors && childnavbaritem.bIsAnchor === true )
			{	continue;}
			if( !options.m_bIncludeChildren && childnavbaritem.bIsAnchor !== true )
			{	continue;} 
			if( !newnavbaritem.childArray )
			{	newnavbaritem.childArray = [];}
			WpNavBar.makeGenNavBarItem(newnavbaritem.childArray,childnavbaritem,options,sOverideTarget);
		}			
	}
	
	var bInsert = true;	
	//If the item is an SWR feed, add feed items (Note: Flash navbars populate feeds internally)
	if( item.bIsSwrFeed && !options.m_bNoScript && !options.m_bFlash )
	{
		var sFeedVar = "feed_" + item.sSwrUid;
		//check whether feed loaded		
		if (eval( 'typeof(' + sFeedVar +')' ) != "undefined")
		{
			var myfeed = eval( sFeedVar );
			for( var index = 0; index < myfeed.childArray.length; index++ )
			{
				var childnavbaritem = myfeed.childArray[index];
				childnavbaritem.sActiveFrameUrl = item.sActiveFrameUrl;
				childnavbaritem.sActiveFrameId  = item.sActiveFrameId;
				childnavbaritem.sTarget = item.sTarget;

				if( item.bFeedChildren )
				{	//Add as children of the SWR item
					if( !newnavbaritem.childArray )
					{	newnavbaritem.childArray = [];}
					WpNavBar.makeGenNavBarItem(newnavbaritem.childArray,childnavbaritem,options,item.sTarget);
				}
				else
				{	//Add instead of the SWR item
					WpNavBar.makeGenNavBarItem(childArray,childnavbaritem,options,item.sTarget);
					bInsert=false;
				}
			}
		}
	}

	if( bInsert )
	{	childArray[childArray.length] = newnavbaritem;}
};

WpNavBar.makeRelLinks = function( navtree, options )
{
	if( !options.m_sThisPageUrl || (options.m_bAbsoluteLinks === true) )
	{	return;}
	for( var index = 0; index < navtree.childArray.length; index++ )
	{
		var item = navtree.childArray[index];

		if( item.bIsWebPath === true )
		{
			if( item.bIsExternal !== true && item.sUrl == options.m_sThisPageUrl )
			{	item.bIsCurrentPage = true;}
			item.sUrl = WpNavBar.getRelPath(options.m_sThisPageUrl, item.sUrl);
		}
		if( item.childArray )
		{	WpNavBar.makeRelLinks( item, options );}
	}
};

WpNavBar.findCurrentPage = function( navtree, options )
{
	if( !options.m_sThisPageUrl )
	{	return null;}
	for( var index = 0; index < navtree.childArray.length; index++ )
	{
		var item = navtree.childArray[index];
		if( item.bIsExternal !== true && item.sUrl == options.m_sThisPageUrl )
		{	return item;}

		if( item.childArray )
		{
			var result = WpNavBar.findCurrentPage( item, options );
			if( result )
			{	return result;}
		}
	}
	return null;
};


//ITERATORS*******************************************************************************

//Top-level iterator
WpNavBar.getNavTreeTopLevel = function( global_navtree, options )
{
	var navtree = {};
	navtree.childArray = [];

	var thispagesrc = WpNavBar.findCurrentPage( global_navtree, options );

	if( global_navtree && global_navtree.childArray )
	{
		for( var index = 0; index < global_navtree.childArray.length; index++ )
		{
			var item = global_navtree.childArray[index];
			if( options.m_bHideCurrent && item == thispagesrc )
			{	continue;}
			if( !options.m_bIncludeAnchors && item.bIsAnchor === true )
			{	continue;}
			WpNavBar.makeGenNavBarItem(navtree.childArray, item, options, null);
		}
	}

	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};

//Home iterator
WpNavBar.getNavTreeHome = function( global_navtree, options )
{
	var navtree = {};
	navtree.childArray = [];

	var homepage = global_navtree.childArray[0];
	
	WpNavBar.makeGenNavBarItem(navtree.childArray,homepage,options,null);
	var homepagedest = navtree.childArray[0];
	if( !options.m_bNamed && options.m_sHomeName )
	{	homepagedest.sTitle = options.m_sHomeName;}

	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};

//Parent-level iterator
WpNavBar.getNavTreeParentLevel = function( global_navtree, options )
{
	var navtree = {};
	navtree.childArray = [];

	var homepage = global_navtree.childArray[0];
	
	var thispagesrc = WpNavBar.findCurrentPage( global_navtree, options );
	var thispageparent = global_navtree;
	if( thispagesrc && thispagesrc.parent )
	{	thispageparent = thispagesrc.parent;}
	var thispagegrandparent = thispageparent;
	if( thispageparent && thispageparent.parent )
	{	thispagegrandparent = thispageparent.parent;}
	
	if( options.m_bIncludeHome )
	{	WpNavBar.makeGenNavBarItem(navtree.childArray, homepage, options, null );	}
	
	if( thispagegrandparent && thispagegrandparent.childArray )
	{
		for( var index = 0; index < thispagegrandparent.childArray.length; index++ )
		{
			var item = thispagegrandparent.childArray[index];
			if( ( options.m_bIncludeHome && item == homepage ) ||
				( !options.m_bIncludeAnchors && item.bIsAnchor === true ) )
			{	continue;}
			WpNavBar.makeGenNavBarItem(navtree.childArray, item, options, null );
		}
	}

	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};

//Same-level iterator
WpNavBar.getNavTreeSameLevel = function( global_navtree, options )
{
	var navtree = {};
	navtree.childArray = [];

	var homepage = global_navtree.childArray[0];
	
	var thispagesrc = WpNavBar.findCurrentPage( global_navtree, options );
	var thispageparent = global_navtree;
	if( thispagesrc && thispagesrc.parent )
	{	thispageparent = thispagesrc.parent;}
	
	if( options.m_bIncludeHome )
	{	WpNavBar.makeGenNavBarItem(navtree.childArray,homepage, options, null); }
	if( options.m_bIncludeParent && thispageparent && thispageparent.parent )
	{
		if( !options.m_bIncludeHome || thispageparent != homepage )
		{ 	WpNavBar.makeGenNavBarItem(navtree.childArray,thispageparent, options, null); }
	}
	
	if( thispageparent && thispageparent.childArray )
	{
		for( var index = 0; index < thispageparent.childArray.length; index++ )
		{
			var item = thispageparent.childArray[index];
			if( ( options.m_bHideCurrent && item == thispagesrc ) ||
				( options.m_bIncludeHome && item == homepage ) ||
				( options.m_bIncludeParent && item == thispageparent ) ||
				( !options.m_bIncludeAnchors && item.bIsAnchor === true ) )
			{	continue;}
			WpNavBar.makeGenNavBarItem(navtree.childArray,item, options, null);
		}
	}

	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};

//Child-level iterator
WpNavBar.getNavTreeChildLevel = function( global_navtree, options )
{
	var navtree = {};
	navtree.childArray = [];

	var homepage = global_navtree.childArray[0];
	
	var thispagesrc = WpNavBar.findCurrentPage( global_navtree, options );
	

	if( options.m_bIncludeHome )
	{	WpNavBar.makeGenNavBarItem(navtree.childArray, homepage, options, null ); }	
	if( options.m_bIncludeParent && thispagesrc && thispagesrc.parent )
	{
		if( !options.m_bIncludeHome || thispagesrc != homepage )
		{	WpNavBar.makeGenNavBarItem(navtree.childArray, thispagesrc, options, null );}
	}
	
	if( thispagesrc && thispagesrc.childArray )
	{
		for( var index = 0; index < thispagesrc.childArray.length; index++ )
		{
			var item = thispagesrc.childArray[index];
			if( ( options.m_bIncludeHome && item == homepage ) ||
				( options.m_bIncludeParent && item == thispagesrc.parent ) ||
				( !options.m_bIncludeAnchors && item.bIsAnchor === true ) )
			{	continue;}
			WpNavBar.makeGenNavBarItem(navtree.childArray, item, options, null);
		}
	}

	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};

//Breadcrumb iterator
WpNavBar.getNavTreeBreadcrumb = function( global_navtree, options )
{
	var homepage = global_navtree.childArray[0];

	var navtree = {};
	navtree.childArray = [];

	var thispagesrc = WpNavBar.findCurrentPage( global_navtree, options ); 
	if( thispagesrc && options.m_bHideCurrent )
	{
		thispagesrc = thispagesrc.parent;
	}

	var bAddHome = options.m_bIncludeHome;
	for( ;thispagesrc && thispagesrc.parent; thispagesrc = thispagesrc.parent )
	{
		WpNavBar.makeGenNavBarItem( navtree.childArray, thispagesrc, options, null );
		if( thispagesrc == homepage )
		{
			bAddHome = false;
		}
	}
	if( bAddHome )
	{
		WpNavBar.makeGenNavBarItem( navtree.childArray, homepage, options, null );
	}
	navtree.childArray.reverse();

	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};

//Anchor iterator
WpNavBar.getNavTreeAnchor = function( global_navtree, options )
{
	options.m_bIncludeAnchors = true;
	
	var navtree = {};
	navtree.childArray = [];

	var thispagesrc = WpNavBar.findCurrentPage( global_navtree, options );
	
	if( thispagesrc && thispagesrc.childArray )
	{
		for( var index = 0; index < thispagesrc.childArray.length; index++ )
		{
			var item = thispagesrc.childArray[index];
			if( item.bIsAnchor !== true )
			{	continue;}
			WpNavBar.makeGenNavBarItem(navtree.childArray, item, options, null );
		}
	}

	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};

//Prev/Next/Prev&Next iterator
WpNavBar.getNavTreePrevNext = function( global_navtree, options, bIncludePrev, bIncludeNext )
{
	var navtree = {};
	navtree.childArray = [];

	var homepage = global_navtree.childArray[0];
	var thispagesrc = WpNavBar.findCurrentPage( global_navtree, options );
	
	var iDestIndex = 0; 
	
	if( options.m_bIncludeHome )
	{
		WpNavBar.makeGenNavBarItem(navtree.childArray, homepage, options, null );
		if( !options.m_bNamed && options.m_sHomeName !== null )
		{	navtree.childArray[iDestIndex].sTitle = options.m_sHomeName;}
		iDestIndex++;
	}
	
	if( thispagesrc && thispagesrc.parent )
	{
		var prevpage = thispagesrc.leftSibling;
		if( bIncludePrev && prevpage )
		{
			if( !options.m_bIncludeHome || prevpage != homepage )
			{
				WpNavBar.makeGenNavBarItem(navtree.childArray, prevpage, options, null );
				if( !options.m_bNamed && options.m_sPrevName !== null )
				{	navtree.childArray[iDestIndex].sTitle = options.m_sPrevName;}
				iDestIndex++;
			}
		}

		if( options.m_bIncludeParent && thispagesrc.parent.parent )
		{
			if( !options.m_bIncludeHome || thispagesrc.parent != homepage )
			{ 	
				WpNavBar.makeGenNavBarItem(navtree.childArray, thispagesrc.parent, options, null); 
				if( !options.m_bNamed && options.m_sUpName !== null )
				{	navtree.childArray[iDestIndex].sTitle = options.m_sUpName;}
				iDestIndex++;
			}
		}
	
		var nextpage = thispagesrc.rightSibling;
		if( bIncludeNext && nextpage )
		{
			if( !options.m_bIncludeHome || nextpage != homepage )
			{
				WpNavBar.makeGenNavBarItem(navtree.childArray, nextpage, options, null );
				if( !options.m_bNamed && options.m_sNextName !== null )
				{	navtree.childArray[iDestIndex].sTitle = options.m_sNextName;}
				iDestIndex++;
			}
		}
	}
	
	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};

//Up iterator
WpNavBar.getNavTreeUp = function( global_navtree, options )
{
	var navtree = {};
	navtree.childArray = [];
	var homepage = global_navtree.childArray[0];

	var iDestIndex = 0;
	if( options.m_bIncludeHome )
	{
		WpNavBar.makeGenNavBarItem(navtree.childArray, homepage, options, null );
		if( !options.m_bNamed && options.m_sHomeName !== null )
		{	navtree.childArray[iDestIndex].sTitle = options.m_sHomeName;}
		iDestIndex++;
	}
	
	var thispagesrc = WpNavBar.findCurrentPage( global_navtree, options );
	if( thispagesrc && thispagesrc.parent && thispagesrc.parent.parent )
	{
		WpNavBar.makeGenNavBarItem(navtree.childArray, thispagesrc.parent, options, null );
		if( !options.m_bNamed && options.m_sUpName !== null )
		{	navtree.childArray[iDestIndex].sTitle = options.m_sUpName;}
		iDestIndex++;
	}
	
	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};

//Back iterator
WpNavBar.getNavTreeBack = function( sBackName )
{
	var navtree = {};
	navtree.childArray = [];

	navtree.childArray[0] = {};
	navtree.childArray[0].sTitle = sBackName;
	navtree.childArray[0].sUrl='javascript:history.back();';
	return navtree;
};

//Custom navtree: replace it with a generated navtree
WpNavBar.getNavTreeCustom = function( custom_navtree, options )
{
	if( !custom_navtree )
	{	return;}

	options.m_bIncludeChildren=true;
	options.m_bIncludeAnchors=true;

	var navtree = {};
	navtree.childArray = [];

	for( var index = 0; index < custom_navtree.childArray.length; index++ )
	{
		var item = custom_navtree.childArray[index];
		WpNavBar.makeGenNavBarItem(navtree.childArray, item, options, null );
	}
	WpNavBar.makeRelLinks( navtree, options );
	return navtree;
};
