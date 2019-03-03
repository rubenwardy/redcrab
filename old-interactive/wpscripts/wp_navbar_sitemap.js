function wp_navbar_sitemap(menubarid, navtree, options, styleOptions)
{
	var me = this;

	//Default options
	me.options = {
		"m_sCssClass" : "sitemapclass", 
		"m_bNoScript" : false,
		"m_bStaticScript" : false
		};
	if( options )
	{	me.options = WpNavBar.mergeOptions( me.options, options );	}
	me.styleOptions = { "m_iMaxStyleLevel" : 1 };
	if( styleOptions )
	{	me.styleOptions = WpNavBar.mergeOptions( me.styleOptions, styleOptions );	}
 
	me.write = function(s)
	{
		if( this.options.m_bNoScript===true || this.options.m_bStaticScript===true )
		{
			external.NavNoScriptWrite(s);
		}
		else
		{
			document.write(s);
		}
	};
 	
	me.WriteMenu = function(level, childArray)
	{
		var iStyleLevel = Math.min( level, this.styleOptions.m_iMaxStyleLevel-1 );
		var classname = 'level' + iStyleLevel;
		var tag = 'p';
	
		for( var index = 0; index < childArray.length; index++ )
		{
			var navbaritem = childArray[index];
			var haschildren = (navbaritem.childArray) && (navbaritem.childArray.length > 0);
			var sTarget = navbaritem.sTarget ? navbaritem.sTarget : '_self';
			if( navbaritem.bSeparator )
			{
				this.write( '<hr class="' + classname + '">\n' );
			}
			//Write the title & link
			this.write( '<' + tag + ' class="' + classname + '">' );
			if( navbaritem.sUrl !== '' )
			{
				this.write( '<a href="' + navbaritem.sUrl + '"' );	
				if( sTarget != '_self' )
				{
					this.write( ' target="' + sTarget + '"' );
				}
				this.write( '>' );
			}
			this.write( navbaritem.sTitle );
			if( navbaritem.sUrl !== '' )
			{
				this.write( '</a>');
			}
			this.write( '</' + tag + '>\n' );
			
			if( haschildren===true )
			{
				this.WriteMenu( level+1, navbaritem.childArray );
			}
		}
	};

	//We write our own DIV element
	me.write( '<div id="'+me.options.m_sId+'" class="' + me.options.m_sCssClass + '" style="position:absolute;left:'+me.options.m_iLeft+'px; top:'+me.options.m_iTop+'px; width:'+me.options.m_iWidth+'px; height:'+me.options.m_iHeight+'px;">\n' );

	me.WriteMenu(0, navtree.childArray);

	me.write( '</div>\n' );
	if( me.options.m_bNoScript===true || me.options.m_bStaticScript===true )
	{
		external.NavNoScriptComplete();
	}
}




