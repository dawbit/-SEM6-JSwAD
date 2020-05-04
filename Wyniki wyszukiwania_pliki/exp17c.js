function disp_analysis()
{
if( window.document.expresult.FDT != undefined )
  {
   document.analysis.innerHTML = '<div style="visibility: hidden; display: none">';
   document.analysis.innerHTML += document.expresult.innerHTML;
   document.analysis.innerHTML += '<input type="hidden" name="ESF" value="01">';
   document.analysis.innerHTML += '<input type="hidden" name="ESF" value="02">';
   document.analysis.innerHTML += '<input type="hidden" name="ESF" value="07">';
   document.analysis.innerHTML += '<input type="hidden" name="ESF" value="08">';
   document.analysis.innerHTML += '<input type="hidden" name="ESS" value="stat.htm">';
   document.analysis.innerHTML += '<input type="hidden" name="ESK" value="1">';
   document.analysis.innerHTML += '</div>';
   document.analysis.submit();
   document.analysis.innerHTML = '';
  }
else
  {
   alert('Poczekaj na zakoñczenie pobierania pliku');
  }
}


function dn_czasop()
{
if( window.document.expresult.FDT != undefined )
  {
   document.expconv.innerHTML = '<div style="visibility: hidden; display: none">';
   document.expconv.innerHTML += document.expresult.innerHTML;
   document.expconv.druk.value = '6';
   document.expconv.FDT.options[document.expconv.FDT.selectedIndex].value = 'czaspkt.fdt';
   document.expconv.innerHTML += '<INPUT NAME="cfsect" TYPE="HIDDEN" VALUE="EXP_CZAS">';
   document.expconv.innerHTML += '</div>';
   document.expconv.submit();
   document.expconv.innerHTML = '';
  }
else
  {
   alert('Poczekaj na zakoñczenie pobierania pliku');
  }
return false;
}

