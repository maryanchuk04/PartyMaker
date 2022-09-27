export class BaseService{
    baseUrl = process.env.REACT_APP_API_PORT;

    async getData(url){
        console.log(url);
        return await fetch(this.baseUrl + url, {
            method: "get",
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials :"include",
        });
    }
    

    async setData(url, data){
        return await fetch(this.baseUrl + url,{
                method: "post",
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(data),
                credentials :"include",
            }
        );
    }

    //getData for auth user
    async getDataWithAuth(url){
        return await fetch(this.baseUrl + url,
            {
                method: "get",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }),
                credentials :"include",
            }
        );
    }

    //setData for auth user
    async setDataWithAuth(url,data){
        return await fetch(this.baseUrl + url,
            {
                method: "post",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }),
                credentials :"include",
                body: JSON.stringify(data)
            }
        );
    }
}