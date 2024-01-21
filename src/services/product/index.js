import Cookies from "js-cookie";

export const addNewProduct = async (formData) => {
  try {
    const response = await fetch("/api/admin/add-products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });
    console.log(Cookies.get("token"));

    const data = await response.json();
    console.log(response);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllAdminProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/all-products", {
      method: "GET",
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching admin products:", error);
  }
};

export const updateAProduct = async (formData) => {
  try {
    const res = await fetch("/api/admin/update-products", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteAProduct = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/admin/delete-products?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    // Check if the response status is OK (2xx)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // If the response has no content (e.g., DELETE requests)
    if (res.status === 204) {
      return {
        success: true,
        message: "Product deleted successfully",
      };
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: "An error occurred while deleting the product",
    };
  }
};

export const productByCategory = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/admin/Product-by-cat?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: "An error occurred ",
    };
  }
};

export const productById = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/admin/Product-by-id?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: "An error occurred ",
    };
  }
};
