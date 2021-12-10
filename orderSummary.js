console.log (tellimus.clientName)
console.log (tellimus.orderNumber)
for (let i=0;i < tellimus.rows.length;i+=1){
    console.log(tellimus.rows[i]['name'])
    console.log(tellimus.rows[i]['amount'])
    console.log(tellimus.rows[i]['price'] + ' €')
}
let o = 0
for (let i=0;i < tellimus.rows.length;i+=1){ 
    o += (tellimus.rows[i]['price']*tellimus.rows[i]['amount']);
}
console.log ('tellimuse kogusumma on ' + o + ' €')
