function groupTransactionsByCategory(data){

return data.reduce((acc,item)=>{

const existing = acc.find(
x=>x.asset === item.asset
);


if(existing){

existing.amount += item.amount;

}else{

acc.push({
asset:item.asset,
amount:item.amount
})

}


return acc;


},[])

}


export default groupTransactionsByCategory;