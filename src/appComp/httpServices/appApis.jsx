import appHttpService from "../httpServices/appHttpService";
import Swal from "sweetalert2";

export async function getTableInfo(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/getTableDetail`,
      formData
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function getCousines(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/getCuisines`,
      formData
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function getCousinesDetails(id) {
  try {
    const { data } = await appHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/getCuisineDetail/` + id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function getBuyersDetails(id) {
  try {
    const { data } = await appHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getBuyer` + "/" + id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function changeBuyerStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/changeStatus` + "/" + id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function getCartDetails(id) {
  try {
    const { data } = await appHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/getMyCart` + "/" + id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function AddInCart(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/addToCart`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function AddRatings(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/rateRestaurant`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function CheckoutItems(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/checkout`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function AllCategory() {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getCategories`
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function PaymentStart(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/payment`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function JoinWaiting(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/addToWaitingList`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function deleteCartItem(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/zitex/removeFromCart`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
