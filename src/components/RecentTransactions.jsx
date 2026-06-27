import { AllCommunityModule } from 'ag-grid-community';
import { AgGridProvider } from 'ag-grid-react';
import { AgGridReact } from 'ag-grid-react';
import { themeQuartz, iconSetQuartzLight } from 'ag-grid-community';
// import { expenses } from '../data/expenses';

 const myTheme = themeQuartz
    .withPart(iconSetQuartzLight)
    .withParams({
        backgroundColor: "#ffffff",
        browserColorScheme: "light",
        columnBorder: false,
        fontFamily: "Arial",
        foregroundColor: "rgb(46, 55, 66)",
        headerBackgroundColor: "#f4f4f5",
        headerFontWeight: 600,
        headerTextColor: "#919191",
        oddRowBackgroundColor:'#eff6fa',
        rowBorder: false,
        sidePanelBorder: true,
        spacing: 8,
        wrapperBorder: false,
        wrapperBorderRadius: 0,
    });


const modules = [AllCommunityModule];

const colDefs = [
 {
  field:"title",
  headerName:"Title"
 },
 {
  field:"asset",
  headerName:"Asset"
 },
 {
  field:"amount",
  headerName:"Amount"
},
{
    field:"date",
    headerName:"Date"
}
];
 const defaultColDef = {
  flex:1,
  sortable:true,
  resizable:true,
  
};

function ExpensesTable({limit ,title ,data}) {

   const recentData = data
  .sort((a,b)=> new Date(b.date) - new Date(a.date))
  .slice(0, limit);


    return (
  <AgGridProvider modules={modules}  >
    <div className='flex flex-col items-center'>
    <p className='text-center mb-2 font-bold text-text-muted'>{title}</p>
    <div className="h-66 md:w-160 mx-2 w-90 border rounded-2xl overflow-hidden border-gray-200 ">
      <AgGridReact
      theme={myTheme}
      rowData={recentData}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
      
      />
      </div>
    </div>
  </AgGridProvider>

);

}
export default ExpensesTable
