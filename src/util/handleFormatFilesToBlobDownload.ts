import axios from "axios";

export const handleFormatFilesToBlobDownload = async (
  url: string,
  name: string
) => {
  const { data } = await axios.get(url, {
    responseType: "blob",
  });

  const fileurl = window.URL.createObjectURL(new Blob([data]));

  const link = document.createElement("a");
  link.href = fileurl;

  link.setAttribute("download", name);

  document.body.appendChild(link);
  link.click();
};
