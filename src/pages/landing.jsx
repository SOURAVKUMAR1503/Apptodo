import Header from "../components/Header";
import Cards from "../components/Cards";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing() {
    const data = useLocation()

  return (
    <div className="bg-black p-10">
      <div className="bg-white p-10 border rounded-b-md">
        <Header name ={data.state.user} />
        <div className="flex justify-between gap-6 my-5 flex-wrap">
          <Cards bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />

          <Cards bgcolor={"red"} title={"September 10"} subtitle={"10.00 AM"} />

          <Cards bgcolor={"green"} title={"Built using"} subtitle={"React"} />
        </div>
        <TodoContainer></TodoContainer>
      </div>
    </div>
  );
}

export default Landing


