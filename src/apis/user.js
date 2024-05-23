import axiosClient from './axiosClient';

const UserAPI = {
	login: (params) => {
		const url = '/login';
		return axiosClient.post(url, {...params});
	},

	getAllUser: () => {
		const url = '/users/all';
		return axiosClient.get(url);
	},
	
	getDetailData: (id) => {
		const url = `/users/${id}`;
		return axiosClient.get(url);
	},

	postSignUp: (query) => {
		const url = `/users/signup/${query}`;
		return axiosClient.post(url);
	},

	logout: () => {
		const url = '/logout';
		return axiosClient.get(url)
	}
};

export default UserAPI;
