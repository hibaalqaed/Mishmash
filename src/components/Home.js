// Styles
import { Title, Slogan, RestaurantImage } from "../styles";
import img from "../images/mishmash-img.jpg";

const Home = () => {
  return (
    <div>
      <RestaurantImage src={img} alt="Mishmash Logo" />
      <Title>RESTAURANT</Title>
      <Slogan>MIX. MATCH. MUNCH.</Slogan>
    </div>
  );
};

export default Home;
