export const FilterSection=()=>{
    return (
        <>
        <div className="filtersearch">
            <form onSubmit={(e)=>e.preventDefault()}>
                <input 
                type="text" 
                name="text" 
                value={text} 
                onChange={updateFilterValue}/>
            </form>
        </div>
        </>
    );
}