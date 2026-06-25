
function GroupExpensesByDate(expenses){

 return expenses.reduce((acc,item)=>{

  const existingDay = acc.find(
    expense => expense.date === item.date
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

export default GroupExpensesByDate

// const chartData = groupExpensesByDate(expenses).map(item => ({
//     ...item,
//     date: new Date(item.date).toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "2-digit",
//     })
// }));