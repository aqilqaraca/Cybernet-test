import MainForm from "../mainForm";
import FormList from "../formList";
const Layout = () => {
  return (
    <main className="p-10">
      <section>
        <div className="flex gap-4">
          <div className="w-1/2">
            <MainForm />
          </div>
          <div className="w-1/2">
            <FormList />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
