const MenuTitle = ({ title, avatar }) => {
  return (
    <section className="flex items-center justify-between">
      <h1 className="font-stwSemibold text-t-screen">{title}</h1>
      <div className="size-12 rounded-full bg-mono-600 bg-cover"></div>
    </section>
  );
};

export { MenuTitle };
