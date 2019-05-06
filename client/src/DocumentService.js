import axios from "axios";

const url = "http://localhost:808/api/mddocs";


class DocumentService
{
    static getDocuments()
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const result = await axios.get(url);
                const data = result.data;
                resolve(data);
            }
            catch (e)
            {
                reject(e);
            }
        });
    }
}

export default DocumentService;
