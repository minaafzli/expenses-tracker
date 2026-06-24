import { AllCommunityModule } from 'ag-grid-community';
import { AgGridProvider } from 'ag-grid-react';
import { AgGridReact } from 'ag-grid-react';
import { themeQuartz, iconSetQuartzLight } from 'ag-grid-community';
import { expenses } from '../data/expenses';

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
        oddRowBackgroundColor: "#F9FAFB",
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
  headerName:"Category"
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
  filter:true,
  resizable:true,
  
};

function ExpensesTable() {
   
    return (
  <AgGridProvider modules={modules}  >
    <div >
    <p className='text-center mb-2 font-bold text-text-muted'>Expenses Table</p>
    <div className="h-96 w-200 border rounded-2xl overflow-hidden border-gray-200 ">
      <AgGridReact
      theme={myTheme}
      rowData={expenses}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
      
      />
      </div>
    </div>
  </AgGridProvider>

);

}
export default ExpensesTable
