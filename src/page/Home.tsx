import RichTextEditor from "./RichTextEditors";
import UserDataForm from "./UserDataForm";
import Counter from "./counter";

const Home: React.FC = () => {
  return (
    <div className=" d-flex flex-column flex-md-row h-100">
      <div className=" col-12 col-md-6 h-100">
        <Counter />
        <RichTextEditor />
      </div>
      <div className=" col-12 col-md-6 px-5">
        <UserDataForm />
      </div>
    </div>
  );
};
export default Home;
