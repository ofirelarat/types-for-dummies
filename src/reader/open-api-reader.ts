import axios from "axios"

const getSchemaFromOpenAPI = (apiSpecificationURL: string) => {

}

const retrieveOpenAPISpesification = async (apiSpecificationURL:string) => {
    const res = await axios.get(apiSpecificationURL);

    return res.data;
}