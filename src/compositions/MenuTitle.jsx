const MenuTitle = ({ title, avatar }) => {
  return (
    <section className="flex items-center justify-between px-4">
      <h1 className="font-stwSemibold text-t-screen">{title}</h1>
      <div className="size-12 rounded-full bg-[url('./assets/mock-avatar.png')] bg-cover"></div>
    </section>
  );
};

export { MenuTitle };
