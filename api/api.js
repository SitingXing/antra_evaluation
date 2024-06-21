const API = (() => {
    const BASE_API = "";

    const fetchAPI = async () => {
        const response = await fetch(BASE_API);
        return response.json();
    };

    const postAPI = async (newItem) => {
        const response = await fetch(BASE_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        });
        return response.json();
    };

    const deleteAPI = async (id) => {
        const response = await fetch(`${BASE_API}/${id}`, {
            method: "DELETE",
        });
        return response.json();
    };

    // const patchAPI = async (id, updatedItem) => {
    //     const response = await fetch(`${BASE_API}/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(updatedItem),
    //     });
    //     return response.json();
    // };

    return {
        fetchAPI,
        postAPI,
        deleteAPI,
        // patchAPI,
    };
})();