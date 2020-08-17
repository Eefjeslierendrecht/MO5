// endpoint URl waar de taken staan en je ze naar toe stuurt
const apiURL = `https://wincacademydatabase.firebaseio.com/eefje/tasks`

// data ophalen van de data base (de url)
const getData = async () => {
    try {
        const result = await fetch(`${apiURL}.json`, { method: "GEt" });
        const data = await result.json();
        const tasks = Object.keys(data).map((key) => ({
            id: key,
            description: data[key].description,
            done: data[key].done,
        }));
        return tasks
    } catch (error) {
        console.log(error)
    }
}

getData();

// post data (zend data/taak toevoegen)
const postData = async (data) => {
    try {
        fetch(`${apiURL}.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Succesfull added:", data);
            })
            .catch((error) => {
                console.log("error:", error);
            });

    } catch (error) {
        console.log(error);
    }
}

// Delete data from DB 

const deleteTaskData = async (data) => {
    try {
        console.log("Dit is de data in api:", data)
        fetch(`${apiURL}/${data}.json`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data)
            })
            .catch((error) => {
                console.log("Error:", error);
            });
        console.log("Dit is verwijderde data:", data)
    } catch (error) {
        console.log(error);
    }
};
