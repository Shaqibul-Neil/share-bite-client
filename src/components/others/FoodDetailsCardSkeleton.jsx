const FoodDetailsCardSkeleton = ({ foodInfo }) => {
  const { user, food } = foodInfo;
  return (
    <div className="space-y-16">
      {/* top side */}
      <div className="max-w-6xl mx-auto p-6 animate-pulse">
        {/* Back link */}
        <div className="mb-6 h-4 w-40 bg-gray-300 rounded"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT SIDE - IMAGE */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-md h-64 bg-gray-300"></div>
          </div>

          {/* RIGHT SIDE - SINGLE TAB SKELETON */}
          <div className="bg-white px-6 py-4 space-y-4">
            {/* Food Name */}
            <div className="h-6 w-48 bg-gray-300 rounded"></div>
            <div className="h-5 w-24 bg-gray-200 rounded-full"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="h-4 w-40 bg-gray-200 rounded"></div>

            {/* Request Button */}
            <div className="h-10 w-48 bg-gray-300 rounded mt-4"></div>
          </div>
        </div>
      </div>

      {/* bottom side */}
      {user?.email === food.donator?.email && (
        <div className="space-y-12 animate-pulse">
          {/* Skeleton for heading + description */}
          <div className="space-y-4">
            <div className="h-10 w-1/3 bg-gray-300 mx-auto rounded"></div>
            <div className="space-y-2 max-w-2xl mx-auto h-12 w-full rounded bg-gray-200"></div>
          </div>

          {/* Skeleton for table */}
          <div className="overflow-x-auto bg-white p-4 rounded-lg text-accent shadow-md">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Requestor Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(4)].map((_, i) => (
                  <tr key={i}>
                    <td>
                      <div className="h-3 w-5 bg-gray-300 rounded"></div>
                    </td>

                    <td className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-lg h-12 w-12 bg-gray-300"></div>
                      </div>
                      <div className="h-4 w-32 bg-gray-300 rounded"></div>
                    </td>

                    <td>
                      <div className="h-3 w-24 bg-gray-300 rounded"></div>
                    </td>

                    <td>
                      <div className="h-5 w-20 bg-gray-300 rounded-full"></div>
                    </td>

                    <td>
                      <div className="h-6 w-16 bg-gray-300 rounded-md inline-block lg:mr-2"></div>
                      <div className="h-6 w-16 bg-gray-300 rounded-md inline-block"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetailsCardSkeleton;
