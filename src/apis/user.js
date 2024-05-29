import axiosClient from './axiosClient';

const UserAPI = {
	login: (params) => {
		const url = '/login';
		return axiosClient.post(url, {...params});
	},
	register: (params) => {
		const url = '/signup';
		return axiosClient.post(url, {...params});
	},
	changePassword: (id) => {
		const url = `/change-password/${id}`;
		return axiosClient.put(url);
	},
	
	resetPassword: () => {
		const url = `/reset`;
		return axiosClient.post(url);
	},

	vertifyCodePassword: (token) => {
		const url = `/resetpass/${token}`;
		return axiosClient.get(url);
	},

	logout: () => {
		const url = '/logout';
		return axiosClient.get(url)
	}
};

export default UserAPI;
