console.log("werkt mijn script?")

const doSomethingWithData = async function () {
    const data = await getData();
    console.log("Here is your data:", data);
}

doSomethingWithData();
