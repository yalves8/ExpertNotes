import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

const note = {
  date: new Date(),
  content: "Hello Word",
};
export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="Logo" />
      <form className="w-full">
        {" "}
        <input
          type="text"
          placeholder="Busque em suas notas ..."
          className="w-full bg-transparent text-2xl font-semibold tracking-tight placeholder:text-slate-500  outline-none"
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard note={note} />
        <NoteCard
          note={{
            date: new Date(2024, 1, 1),
            content: "Primeira Nota de Testes",
          }}
        />
      </div>
    </div>
  );
}
