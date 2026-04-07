import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <Title>Detalhes da tarefa</Title>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 bg-slate-400 text-white p-2 rounded-md cursor-pointer"
          >
            {" "}
            <ChevronLeftIcon />
          </button>
        </div>
        <div className="bg-slate-400 rounded-md p-4">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className=" text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
