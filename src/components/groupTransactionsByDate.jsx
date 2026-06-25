
function groupTransactionsByDate(transactions){

 return transactions.reduce((acc,item)=>{

  const existingDay = acc.find(
    transactions => transactions.date === item.date
  );


  if(existingDay){

    existingDay.total += item.amount;

  } else {

    acc.push({
      date:item.date,
      total:item.amount
    })

  }

  return acc;

 },[])

}

export default groupTransactionsByDate
