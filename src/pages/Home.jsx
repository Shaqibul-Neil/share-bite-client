import { Link, useLoaderData } from "react-router";
import Banner from "../components/banner/Banner";
import Container from "../components/container/Container";
import FoodCard from "../components/foodCard/FoodCard";
import MyButton from "../components/button/MyButton";

const Home = () => {
  const foodsData = useLoaderData();
  console.log(foodsData);
  return (
    <div>
      <title>ShareBite - Home</title>
      <Banner />
      <section className="md:py-12 py-8">
        <Container>
          <h2 className="text-center md:text-4xl text-3xl font-bold mt-10 text-accent">
            Shared with Generosity
          </h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            Every meal tells a story of kindness. Explore a community where
            generous hearts come together to share food, reduce waste, and
            nourish those in need. Join us in making every bite count.
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10">
            {foodsData.map((food) => (
              <FoodCard food={food} key={food._id} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <MyButton
              to={"/available-foods"}
              className={"py-3 bg-warning hover:bg-warning border-warning"}
            >
              {" "}
              Show All Foods
            </MyButton>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
