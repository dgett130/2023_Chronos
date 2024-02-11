import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const projectAPI = {

    search: async function (name, cancel = false) {
        const response = await api.get(`/projects/${name}`, {
            signal: cancel ? cancelApiObject[this.search.name].handleRequestCancellation().signal : undefined,
        });
        console.log("response", response.data);
        return response.data;
    },

    // GET PROJECT (BY ID)
    get: async function (id, cancel = false) {
            const response = await api.get(`/projects/${id}`, {
                signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
            });
        return response.data;
    },

    //GET PROJECT (BY ID)
    getAll: async (cancel = false) => {
        console.log(api);
        const response = await api.get(`/projects/all`, {
            signal: cancel ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal : undefined,

        });
        return response.data;
    },

    //CREATE PROJECT
    createProject: async (project, cancel = false) => {
        const response = await api.post('/projects', project, {
            signal: cancel ? cancelApiObject[this.createProject.name].handleRequestCancellation().signal : undefined,
        });
        return response.data;
    },

    //UPDATE PROJECT
    updateProject: async (id, project, cancel = false) => {
        const response = await api.put(`/projects/${id}`, project, {
            signal: cancel ? cancelApiObject[this.updateProject.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },

    //DELETE PROJECT
    deleteProject: async (id, cancel = false) => {
        const response = await api.delete(`/projects/${id}`, {
            signal: cancel ? cancelApiObject[this.deleteProject.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },
}

const cancelApiObject = defineCancelApiObject(projectAPI);
