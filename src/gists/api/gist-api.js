function performRequest(request, callback){
    fetch(request)
        .then(
            function(response) {
                if (response.ok) {
                    response.json().then(json => callback(json, response.status,null));
                }
                else {
                    response.json().then(err => callback(null, response.status,  err));
                }
            })
        .catch(function (err) {
            //catch any other unexpected error, and set custom code for error = 1
            callback(null, 1, err)
        });
}

const GetGists = "https://api.github.com/users/"
const GetForks = "https://api.github.com/gists/"
const headers = {   
    'accept': 'application/vnd.github+json',
}

function getPublicGists(user,callback){
    let request = new Request(GetGists + user + "/gists", {
        method: 'GET',
        headers: headers
    });
    console.log(request.url);
    performRequest(request,callback);
}

function getForksOfGist(id,callback){
    let request = new Request(GetForks + id + "/forks", {
        method: 'GET',
        headers: headers
    });
    console.log(request.url);
    performRequest(request,callback);
}

export{
    getPublicGists,
    getForksOfGist
}