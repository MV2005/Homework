function checkTemp(temp) {
    console.log(temp);
    if (temp <= 20 )  {
        console.log('liiga külm')
        return -1;
    } else if  (temp > 20 && temp <41 )  {
        console.log('paras')
        return 0;
    }   else{
        console.log('liiga kuum')
        return 1;
    }
}
