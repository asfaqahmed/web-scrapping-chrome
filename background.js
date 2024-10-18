chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "exportData") {
        exportToCSV(request.data);
    }
});

function exportToCSV(data) {
    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(row => {
        csvContent += row.join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "scraped_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
