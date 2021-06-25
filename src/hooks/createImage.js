export const createDownloadLinkAndDownload = (dataUrl,productName)=>{
    const link = document.createElement("a");
    link.href = dataUrl;
    link.setAttribute("download", productName);
    document.body.appendChild(link);
    link.click();
}