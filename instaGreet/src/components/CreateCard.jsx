
const CreateCard = () => {

const handleSubmit = (e) => {
    e.preventDefault();

}

    return(
        <>
            <p>This is the Create Card Page</p>
            <form method="post" onSubmit={handleSubmit}>
                <label> Front of Card:<input name="frontText" /></label>
                <label> Inside of Card:<input name="backText" /></label>
                <label> Background color:
                    <select name="selectedBackgroundColor">
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                </label>
                <button type="submit">Create!</button>
            </form>
            {/* I think this button should actually go on the user page? - Freddie
            <button className="newCardButton">Create your new greeting card here!</button> */}
        </>
    )
}

export default CreateCard