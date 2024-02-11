import {api} from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils"

export const project_typesAPI = {

    search: async function (name, cancel = false) {
        const response = await api.get(`/project-types/${name}`, {
            signal: cancel ? cancelApiObject[this.search.name].handleRequestCancellation().signal : undefined,
        });
        return response.data;
    },

    // GET PROJECT TYPE (BY ID)
    get: async function (id, cancel = false) {
            const response = await api.get(`/project-types/${id}`, {
                signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
            });
        return response.data;
    },

    //GET ALL PROJECTS TYPES
    getAll: async (cancel = false) => {
        const response = await api.get(`/project-types/all`, {
            signal: cancel ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal : undefined,

        });
        return response.data;
    },

    //CREATE PROJECT TYPE
    createProjectType: async (project_type, cancel = false) => {
        const response = await api.post('/project-types', project_type, {
            signal: cancel ? cancelApiObject[this.createProjectType.name].handleRequestCancellation().signal : undefined,
        });
        return response.data;
    },

    //UPDATE PROJECT TYPE
    updateProjectType: async (id, project_type, cancel = false) => {
        const response = await api.put(`/project-types/${id}`, project_type, {
            signal: cancel ? cancelApiObject[this.updateProjectType.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },

    //DELETE PROJECT TYPE
    deleteProjectType: async (id, cancel = false) => {
        const response = await api.delete(`/project-types/${id}`, {
            signal: cancel ? cancelApiObject[this.deleteProjectType.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },
}

const cancelApiObject = defineCancelApiObject(project_typesAPI);