function write_div_for_recnum()
{
var t;
if( typeof write_div_for_recnum.counter == 'undefined' )
   write_div_for_recnum.counter = 0;
else
   write_div_for_recnum.counter++;
t = '<div class="recordnum" id="recordnum'+write_div_for_recnum.counter+'">';
document.write(t);
}


function set_recnum_visibility($val)
{
var i;
for(i=0;;i++)
   {
    var x = document.getElementById('recordnum'+i);
    if( x )
        x.style.visibility = $val;     
    else
       break;
   }
}



function send_to_printer()
{
var y, z, text;
y = document.getElementById('resultlabel');
if( document.config_prn.prn_resultlabel.checked == true )
   y.style.visibility = "visible";
else
   y.style.visibility = "hidden";
y = document.getElementById('querylabel');
if( document.config_prn.prn_querylabel.checked == true )
   y.style.visibility = "visible";
else
   y.style.visibility = "hidden";
y = document.getElementById('cntfoundtxt');
z = document.getElementById('cntfoundnum');
if( document.config_prn.prn_cntfound.checked == true )
  {
   y.style.visibility = "visible";
   z.style.visibility = "visible";
  }  
else
  {
   y.style.visibility = "hidden";
   z.style.visibility = "hidden";
  }
if( document.config_prn.prn_recordnum.checked == true )
   set_recnum_visibility('visible');
else
   set_recnum_visibility('hidden');
y = document.getElementById('paramarea');
text = y.innerHTML;
y.innerHTML = '';
y.style.visibility = "hidden";    
window.print();
y.innerHTML = text;
y.style.visibility = "visible";    
}


function configprint()
{
var s,y;
s = "<form name=\"config_prn\">";
s += "<span class=\"note\">Zaznacz to, co ma byæ drukowane</span><br/>";
s += "<input name=\"prn_resultlabel\" type=\"checkbox\" value=\"1\" checked> napis 'Wynik wyszukiwania'<br/>";
s += "<input name=\"prn_querylabel\" type=\"checkbox\" value=\"1\" checked> napis 'Zapytanie'<br/>";
s += "<input name=\"prn_cntfound\" type=\"checkbox\" value=\"1\" checked> informacja o liczbie odnalezionych rekordów<br/>";
s += "<input name=\"prn_recordnum\" type=\"checkbox\" value=\"1\" checked> numer kolejny<br/>";
s += "<input name=\"prn_btn\" type=\"button\" value=\"Drukuj\" onclick=\"send_to_printer();\">";
s += "</form>";
y = document.getElementById('paramarea');
y.innerHTML = '';
y.innerHTML = s;
}


function configrecdisp()
{
}

function proc_labels()
{
if( typeof proc_labels.counter == 'undefined' )
   proc_labels.counter = 0;
else if( proc_labels.counter == 0 )
   proc_labels.counter = 1;
else
   proc_labels.counter = 0;
var dispval;
if( proc_labels.counter == 0 )
   dispval = 'none';
else
   dispval = 'inline';
var elements = document.getElementsByTagName('span');
for(i = 0; i < elements.length; i++)
   {
    if( elements[i].className == 'label' )
       elements[i].style.display = dispval;
   }
}
