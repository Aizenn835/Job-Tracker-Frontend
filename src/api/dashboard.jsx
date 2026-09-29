const API_URL = "http://localhost:8080";

export async function getAppliedJobs(){

    const response = await fetch(`${API_URL}/applied-job`);
    if(!response.ok){
        throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
}
export async function searchInCard(search){
    const response = await fetch(`${API_URL}/applied-job/search?key=${search}`);
    if(!response.ok){
        throw new Error(`Request failed with status: ${response.status}`)
    }
    return response.json();
}