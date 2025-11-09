import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Container from "../components/container/Container";

const MyFoodRequest = () => {
  const { user, allFoodData } = useAuth();
  const axiosInstance = useAxios();
  const [myRequests, setMyRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/my-requests?email=${user?.email}`).then((res) => {
      setMyRequests(res.data);
      setLoading(false);
    });
  }, [axiosInstance, user]);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="bg-[#E9E9E9] min-h-screen py-20">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ---------- LEFT SIDE ---------- */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent">My Food Requests</h2>
            <p className="text-gray-600 leading-relaxed">
              Here you can see all the food requests you've made to different
              donors. Keep track of their current status and contact information
              for smooth coordination.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Once your request is approved or declined, it will update here
              automatically. You can also delete a request if you no longer need
              it.
            </p>
          </div>

          {/* ---------- RIGHT SIDE / TABLE ---------- */}
          <div className="lg:col-span-2 overflow-x-auto bg-white p-6 rounded-lg shadow-md">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Food Name</th>
                  <th>Donor Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {myRequests.map((req, index) => {
                  const food = allFoodData.find(
                    (data) => data._id === req.foodId
                  );
                  const donor = food?.donator;

                  return (
                    <tr key={req._id}>
                      <td>{index + 1}</td>

                      {/* ---------- Food Info ---------- */}
                      <td className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-lg h-12 w-12">
                            <img
                              src={
                                food?.food_image ||
                                "https://via.placeholder.com/80"
                              }
                              alt={food?.food_name || "Food"}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">
                            {food?.food_name || "Unknown"}
                          </div>
                        </div>
                      </td>

                      {/* ---------- Donor Info ---------- */}
                      <td>
                        <div>
                          <div className="font-semibold">
                            {donor?.name || "Anonymous"}
                          </div>
                        </div>
                      </td>

                      {/* ---------- Status ---------- */}
                      <td>
                        {req.status === "Pending" ? (
                          <span className="badge badge-warning text-xs font-semibold badge-outline">
                            {req.status}
                          </span>
                        ) : req.status === "Accepted" ? (
                          <span className="badge badge-success text-xs font-semibold badge-outline">
                            {req.status}
                          </span>
                        ) : (
                          <span className="badge badge-error text-xs font-semibold badge-outline">
                            {req.status}
                          </span>
                        )}
                      </td>

                      {/* ---------- Delete Button ---------- */}
                      <td>
                        <button className="btn btn-outline btn-error btn-xs">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {myRequests.length === 0 && (
              <p className="text-center py-6 text-gray-500">
                You haven't made any food requests yet.
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyFoodRequest;
