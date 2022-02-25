import axios from "axios";

const Api_baseUrl = "https://dev.to/api/"


const getPost = (
	data
) => {
	return axios
		.get(Api_baseUrl + "/articles"
			
			// {
			// 	headers: authHeader(),
			// }
		)
		.then((res) => {
			const { data } = res;
			// console.log(res);

			return {
				success: true,
				details: data,
			};
		})
		.catch((e) => {
			console.log(e);
			// return { success: false, errorSource: e.response.data.errorSource };
		});
}; 
const getTags = (
	data
) => {
	return axios
		.get(Api_baseUrl + "/tags?per_page=20"
			
			// {
			// 	headers: authHeader(),
			// }
		)
		.then((res) => {
			const { data } = res;
			// console.log(res);

			return {
				success: true,
				details: data,
			};
		})
		.catch((e) => {
			console.log(e);
			// return { success: false, errorSource: e.response.data.errorSource };
		});
};

const exportedObject = {
	getPost,
	getTags,
}

export default exportedObject;