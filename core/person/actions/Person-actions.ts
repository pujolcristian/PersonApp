import {handleError} from "../../../utils/errorUtils";
import {personApi} from "../../api/personApi";
import {Person} from "../interfaces/person.interface";
import {BaseResponse} from "../interfaces/baseResponse.interface";
import {API_ENDPOINTS} from "../../api/endpoints";

export const getAllPersons = async () => {
    try {
        const {data} = await personApi.get<BaseResponse<Person[]>>(API_ENDPOINTS.PERSON.GET_ALL);
        return data.data;
    } catch (error) {
        handleError(error, 'Error fetching persons');
        return [];
    }
}

export const updatePerson = async (id: number, personData: Person) => {
    try {
        const {data} = await personApi.put<BaseResponse<any>>(API_ENDPOINTS.PERSON.UPDATE(id), personData);
        return data.message;
    } catch (error) {
        handleError(error, 'Error updating person');
        return ''
    }
}

export const deletePerson = async (id: number) => {
    try {
        const {data} = await personApi.delete<BaseResponse<any>>(API_ENDPOINTS.PERSON.DELETE(id));
        return data.message;
    } catch (error) {
        handleError(error, 'Error deleting person');
        return ''
    }
}

export const createPerson = async (personData: Person) => {
    try {
        const {data} = await personApi.post<BaseResponse<any>>(API_ENDPOINTS.PERSON.CREATE, personData);
        return data.message;
    } catch (error) {
        handleError(error, 'Error creating person');
        return ''
    }
}
