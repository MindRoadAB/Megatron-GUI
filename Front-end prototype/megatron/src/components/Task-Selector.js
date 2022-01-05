const TaskSelector = () => {
    return (
        <div>
            <label htmlFor="tasks">Choose a task:</label>

            <select name="tasks" id="tasks">
                <option value="find-org">View all organizations</option>
                <option value="view-org">View organization</option>
                <option value="search-log">Search log entries</option>
                <option value="export-contacts">Export contatcs</option>
            </select>

        </div>
       
    )
}

export default TaskSelector
