function hasil()
{
    var jam=parseFloat (document.getElementById('jam').value);
    var upah=parseFloat(document.getElementById("upah").value);
    var anak=parseFloat(document.getElementById("anak").value);
    var gaji=jam*upah;
    document.getElementById("gaji").innerHTML=gaji;
    var tunjangan = gaji*0.1*anak;
    document.getElementById("tunjangan").innerHTML="Rp "+tunjangan;
    var total = gaji+tunjangan;
    document.getElementById("total").innerHTML="Rp "+total;
  }