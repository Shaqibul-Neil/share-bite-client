import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Container from "../components/container/Container";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SecondaryButton from "../components/button/SecondaryButton";

const ManageMyFoods = () => {
  const { user, refresh, setRefresh } = useAuth();
  const axiosSecureInstance = useAxiosSecure();
  const [myFoods, setMyFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecureInstance.get(`/my-foods?email=${user.email}`).then((data) => {
      setMyFoods(data.data);
      setLoading(false);
    });
  }, [axiosSecureInstance, user, refresh]);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  const handleFoodDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ml-2",
        cancelButton: "btn btn-error",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecureInstance.delete(`/my-foods/${id}`).then((data) => {
            if (data.data.result.deletedCount) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });
              setRefresh(!refresh);
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your food information is safe",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="bg-[#E9E9E9] min-h-screen py-20">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent">
              My Food Donations
            </h2>
            <p className="text-primary leading-relaxed">
              Here you can see all the foods you've donated. You can update or
              remove any item you shared.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 overflow-x-auto bg-white p-6 rounded-lg shadow-md">
            {myFoods.length === 0 ? (
              <p className="text-center py-6 text-gray-500">
                No foods donated yet.
              </p>
            ) : (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Food Name</th>
                    <th>Food Quantity</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myFoods.map((food, index) => (
                    <tr key={food._id}>
                      <td>{index + 1}</td>
                      <td className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-lg h-12 w-12">
                            <img src={food.food_image} alt={food.food_name} />
                          </div>
                        </div>
                        <div className="font-bold">{food.food_name}</div>
                      </td>
                      <td>
                        {food.food_quantity < 10
                          ? `0${food.food_quantity}`
                          : food.food_quantity}{" "}
                        Servings
                      </td>
                      <td>
                        {food.food_status === "Available" ? (
                          <span className="badge badge-success text-xs font-semibold badge-outline">
                            {food.food_status}
                          </span>
                        ) : (
                          <span className="badge badge-info text-xs font-semibold badge-outline">
                            {food.food_status}
                          </span>
                        )}
                      </td>
                      <td>
                        <SecondaryButton
                          className="border-warning bg-warning hover:bg-warning/90 mr-2"
                          hoverTextColor="group-hover:text-warning"
                          onClick={() =>
                            navigate(`/update-food/${food._id}`, {
                              state: { food },
                            })
                          }
                          disabled={food.food_status === "Donated"}
                        >
                          Update
                        </SecondaryButton>

                        <SecondaryButton
                          className="border-error bg-error hover:bg-error/90"
                          hoverTextColor="group-hover:text-error"
                          onClick={() => handleFoodDelete(food._id)}
                        >
                          Delete
                        </SecondaryButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageMyFoods;
