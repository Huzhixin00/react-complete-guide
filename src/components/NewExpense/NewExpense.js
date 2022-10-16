import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const newExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        const newExpenseData = {
            id: Math.random().toString(),
            ...expenseData,
        }
        console.log("In newExpense.js")
        console.log(newExpenseData);
        props.onAddExpense(newExpenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
};

export default newExpense