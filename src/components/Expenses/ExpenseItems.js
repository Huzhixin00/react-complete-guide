import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const ExpenseItems = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            />
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            />
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            />
        </Card>
    )
};

export default ExpenseItems