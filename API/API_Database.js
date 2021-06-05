
export function getImageFromDatabase () {
    const url = 'http://10.0.2.2:80/API/getImage.php'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}