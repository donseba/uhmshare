uhmshare (Uhm? share!)
========

jQuery social sharing Plugin.

uhmshare (Uhm? share!) is a small plugin for sharing a page or specific content of the page with socialmedia. 

Usage
-------------
Include both the css and js file in your page. preferable in the header. but do as you please.
>     <script src="uhmshare.min.js"></script>
>     <link href="uhmshare.css" rel="stylesheet" />

Create some elements where you want the share buttons to be shown.
>     <div class="uhmshare"></div>

If You really want you can specify the Url and Title, otherwise the page Url and Title will be used.
>     <div class="uhmshare" data-url="http://sebastiano.me" data-title="Creator uf Uhm? share!"></div>

Above code will come in handy if you have muptiple acrticles on one page, wich also have their own url.

Finally you need to initialize the script. preferably at the bottom of the page just before the <code>&lt;/body&gt;</code> tag.
>     <script>
>         $(function(){
>             $('.uhmshare').uhmshare();
>         });
>     </script>

Result 
-------------
The result will be something more or less, probably exaclty like the following if you are equally popular ):
![Uhm? share!](http://sebastiano.me/wp-content/uploads/2013/01/uhmshare.png)

Supported for now
-------------
+   facebook.
+   twitter.
+   pinterest.
+   stumbleupon.

Todo List
-------------
+   Email this button . 
+   Add more Socialmedia share options. 
+   Lightbox-isch integration instead of the ugly window.popup  

Tested and working in.
-------------
+   Firefox 18
+   Safari 5
+   Ie(ek) 8 & 9
+   Opera 12.10
