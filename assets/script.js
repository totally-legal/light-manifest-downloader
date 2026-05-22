async function getLua() {
    const appId = document.getElementById('appId').value;
    const response = await fetch(`https://api.github.com/repos/HW688/Steam-Inventory/branches/${appId}`);
    if (response.status === 200) {
        console.log("check working")
        window.open(`https://codeload.github.com/HW688/Steam-Inventory/zip/refs/heads/${appId}`, '_blank');
    } else {
        console.log("Falied to download manifest: " + response)
    }
}
