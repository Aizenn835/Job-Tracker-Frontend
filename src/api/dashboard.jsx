const API_URL = "http://localhost:8080";
const token = localStorage.getItem("token");

export async function getAppliedJobs(){
    const response = await fetch(`${API_URL}/api/applied-job`, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
    if(!response.ok){
        throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
}
export async function searchInCard(search){
    const response = await fetch(`${API_URL}/api/applied-job/search?key=${search}` , {
         headers: {"Authorization" : `Bearer ${token}`}
    });
    if(!response.ok){
        throw new Error(`Request failed with status: ${response.status}`)
    }
    return response.json();
}