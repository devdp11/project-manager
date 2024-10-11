export default (URL = "http://localhost:3000/") => {
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const GET = async (route, options = {}) => {
      const response = await fetch(`${URL}${route}`, {
        ...defaultOptions,
        ...options,
        method: 'GET',
      });
      return await response.json();
    };
  
    const POST = async (route, data = {}, options = {}) => {
      const response = await fetch(`${URL}${route}`, {
        ...defaultOptions,
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
      });
      return await response.json();
    };
  
    const PATCH = async (route, data = {}, options = {}) => {
      const response = await fetch(`${URL}${route}`, {
        ...defaultOptions,
        ...options,
        method: 'PATCH',
        body: JSON.stringify(data),
      });
      return await response.json();
    };
  
    const PUT = async (route, data = {}, options = {}) => {
      const response = await fetch(`${URL}${route}`, {
        ...defaultOptions,
        ...options,
        method: 'PUT',
        body: JSON.stringify(data),
      });
      return await response.json();
    };
  
    const DELETE = async (route, options = {}) => {
      const response = await fetch(`${URL}${route}`, {
        ...defaultOptions,
        ...options,
        method: 'DELETE',
      });
      return await response.json();
    };
  
    return {
      GET,
      POST,
      PATCH,
      PUT,
      DELETE,
    };
};