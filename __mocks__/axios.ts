const axiosInstance = {
	get: jest.fn().mockResolvedValue({ data: [] }),
};

const axios = {
	create: jest.fn(() => axiosInstance),
};

export default axios;
