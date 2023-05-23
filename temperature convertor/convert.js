function tocel()
{
    var t,f,k;
    t=document.getElementById('temp').value;
    var type;
    type=t.slice(-1);
    in_temp=t.slice(0,-1);
    if(type=='C')
    {
        document.getElementById('ans').innerHTML=in_temp+'C';
     // return in_temp;
    }
    else if(type=='F')
    {
        f=parseInt(in_temp);
        c=(f-32)*5/9;
        document.getElementById('ans').innerHTML=c+'C';
    }
    else if(type=='K')
    {
        k=parseInt(in_temp);
        c=k-273.15;
        document.getElementById('ans').innerHTML=c+'C';
    }
    else{
        document.getElementById('ans').innerHTML='Enter temperature in C/F/K';
    }
}

function tofah()
{
    var t,f,k;
    t=document.getElementById('temp').value;
    var type;
    type=t.slice(-1);
    in_temp=t.slice(0,-1);
    if(type=='F')
    {
       document.getElementById('ans').innerHTML=in_temp+'F';
    }
    else if(type=='C')
    {
        c=parseInt(in_temp);
        f=(c*9/5)+32;
        document.getElementById('ans').innerHTML=f+'F';
    }
    else if(type=='K')
    {
        k=parseInt(in_temp)
        f=((k-273.15)*9/5)+32
        document.getElementById('ans').innerHTML=f+'F';
    }
    else{
        document.getElementById('ans').innerHTML='Enter temperature in C/F/K';
    }
}

function tokel()
{
    var t,f,k;
    t=document.getElementById('temp').value;
    var type;
    type=t.slice(-1);
    in_temp=t.slice(0,-1);
    if(type=='K')
    {
       document.getElementById('ans').innerHTML=in_temp+'K';
    }
    else if(type=='F')
    {
        f=parseInt(in_temp);
        k=((F-32)*5/9)+273.15
        document.getElementById('ans').innerHTML=k+'K';
    }
    else if(type=='C')
    {
        c=parseInt(in_temp);
        k=c+273.15;
        document.getElementById('ans').innerHTML=k+'K';
    }
    else{
        document.getElementById('ans').innerHTML='Enter temperature in C/F/K';
    }
}
