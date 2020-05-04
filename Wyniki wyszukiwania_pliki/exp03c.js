function sendToClipboard(str)
{
if( window.clipboardData && clipboardData.setData )
  {
   clipboardData.setData("Text", str);
  }
}


function winmax()
{
var y;
window.moveTo(0,0);
y = Math.round(0.9*screen.height);
window.resizeTo(screen.width,y);
}



function setprint(mode)
{
var i;
if( window.document.expresult.FDT != undefined )
  {
   if( window.document.expresult.ZA != undefined )
     {
      for(i=0;i<window.document.expresult.elements.length;i++)
         {
          if( window.document.expresult.elements[i].name == 'V_'+window.document.expresult.ZA.value )
             window.document.expresult.elements[i].value = window.document.expresult.elements[i].value.replace(/-/, '@');
         } 
     } 
   winmax();
   window.document.expresult.druk.value = mode;
   if( mode == '1' )
      window.document.expresult.target = 'xxxx';
   else
      window.document.expresult.target = '_self';
   window.document.expresult.submit();
   window.document.expresult.druk.value = '';
   window.document.expresult.target = '_self';
  }
else
  {
   alert('Poczekaj na zakoñczenie pobierania pliku');
  }
}


function runlink2(str)
{
window.document.explink.elements[5].value = str;
window.document.explink.submit();
}



function syg(s)
{
document.write(s.replace(/-/g, ''));
}


function p_l(s)
{
var repl = new Array("CZ","czeski","DE","niemiecki","DK","duñski",
"EN","angielski","ES","hiszpañski","FR","francuski",
"IT","w³oski","PL","polski","RU","rosyjski","UA","ukraiñski");
var su = s.toUpperCase();
for(var i = 0; i < repl.length-1; i++)
   {
    if( repl[i] == su )
      {
       document.write(repl[i+1]);
       return;
      }
   }
document.write(s);  
}


function p_c(s)
{
var repl = new Array("AR","Argentyna",
"AT","Austria",
"AU","Australia",
"BR","Brazylia",
"CA","Kanada",
"CH","Szwajcaria",
"CN","Chiny",
"CS","CS",
"CZ","Czechy",
"DE","Niemcy",
"DK","Dania",
"EE","Estonia",
"ES","Hiszpania",
"FI","Finlandia",
"FR","Francja",
"GB","Wielka Brytania",
"IT","W³ochy",
"JP","Japonia",
"NL","Holandia",
"NO","Norwegia",
"PL","Polska",
"RU","Rosja",
"SE","Szwecja",
"UA","Ukraina",
"US","USA",
"ZA","RPA");
var su = s.toUpperCase();
for(var i = 0; i < repl.length-1; i++)
   {
    if( repl[i] == su )
      {
       document.write(repl[i+1]);
       return;
      }
   }
document.write(s);  
}

function v_check(str)
{
str = trim(str," \t");
if( str.substr(0,4) != 'vtls' )
   document.location = "http://alter.bg.univ.gda.pl/cgi-bin/gw_48/chameleon?skin=default&lng=pl&inst=consortium&search=KEYWORD&function=COPVOLSCR&SourceScreen=CARDSCR&elementcount=3&t1="+str+"&u1=12&op1=0&itempos=1&rootsearch=KEYWORD";
else
   document.location = "http://alter.bg.univ.gda.pl/cgi-bin/gw_48/chameleon?search=FREEFORM&function=COPVOLSCR&SourceScreen=CARDSCR&skin=default&conf=.%2fchameleon.conf&lng=pl&itemu1=0&u1=0&t1=12101%3a"+str.substr(4);
}

function doi_search(str)
{
document.location = "http://dx.doi.org/"+str;
}

function doi_disp(str)
{
var l = '<a href="http://dx.doi.org/'+str+'">'+str+'</a>';
document.write(l);
}

function writelink2(fld,val)
{
var l,s = val.replace(/,/g," ");
s = s.replace(/  /g," ");
l = '<a href="#" onclick="runlink(\''+fld+'\',\''+s+'\');">'+s+'</a>';
document.write(l);
}
