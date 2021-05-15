//  Lấy đường dẫn
export const parseRequestUrl = () => {
    const url = window.location.hash.toLowerCase();
    const request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
    };
};
