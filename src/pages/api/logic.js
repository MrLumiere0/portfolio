export const handleDownload = async () => {
  try {
    const response = await fetch("/api/Resume.pdf"); // Your API route
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = "Resume.pdf";
    link.download = "Resume.pdf"; // Or obtain filename from response headers
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};
