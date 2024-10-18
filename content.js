// Example: Extract data from table rows
let data = [];
document.querySelectorAll("table tr").forEach(row => {
    let rowData = [];
    row.querySelectorAll("td").forEach(cell => {
        rowData.push(cell.innerText);
    });
    data.push(rowData);
});

// Send data to background script
chrome.runtime.sendMessage({ action: "exportData", data });
