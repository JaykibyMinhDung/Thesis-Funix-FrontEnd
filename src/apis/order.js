import axiosClient from './axiosClient';

const OrderAPI = {
	login: (params) => {
		const url = '/login';
		return axiosClient.post(url, {...params});
	},
	register: (params) => {
		const url = '/signup';
		return axiosClient.post(url, {...params});
	},
};

export default OrderAPI;
