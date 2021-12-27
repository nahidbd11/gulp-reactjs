// {
// 	"users": [
// 		{
// 			"username": "nahid",
// 			"password": 123,
// 			"token": ,
// 			"id": 1
// 		},
// 		{
// 			"username": "shapla",
// 			"password": 1234,
// 			"id": 2
// 		}
// 	]
// }

module.exports = () => {
	const data = { users: [] };
	// Create 1000 users
	for (let i = 0; i < 10; i++) {
		data.users.push({
			id: i,
			username: `user${i}`,
			password: `abc${i}`,
			token: `jhidldfd${i}`,
		});
	}
	return data;
};
