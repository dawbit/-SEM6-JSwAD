function runlink(idx,str)
{
window.document.explink.KAT.value = window.document.expresult.KAT.value;
window.document.explink.FST.value = window.document.expresult.FST.value;
window.document.explink.FDT.value = window.document.expresult.FDT.value;
window.document.explink.ekran.value = window.document.expresult.ekran.value;
window.document.explink.mask.value = '1';
window.document.explink.cond.value = window.document.expresult.cond.value;
window.document.explink.F_00.value = idx;
window.document.explink.V_00.value = str;
window.document.explink.submit();
}


function writelink(idx,str)
{
var l,s = str.replace(/-/g," ");
s = s.replace(/  /g," ");
l = '<a href="#" onclick="runlink(\''+idx+'\',\''+s+'\');">'+str+'</a>';
document.write(l);
}


function writelinkortxt(idx,str)
{
var l,s = str;
if( window.document.expview.showlinks.value.indexOf("print") != -1 || s.indexOf("'") != -1 )
  {
   l = str;
  }
else
  {
   s = s.replace(/  /g," ");
   l = '<a href="#" onclick="runlink(\''+idx+'\',\''+s+'\');">'+str+'</a>';
  }
document.write(l);
}

function url_orcid(str)
{
document.location = "http://orcid.org/"+str;
}



function proc_orcid()
{
var x = document.getElementsByClassName('orcid');
var i, j;
for(i = 0; i < x.length; i++)
   {
    var searchstring = x[i].innerHTML;
    x[i].innerHTML = '<a href="#" onclick="url_orcid(\''+searchstring+'\');return false;">'+x[i].innerHTML+'</a>';
   }
}

