const Form = () => {
  return (
    <form
      method="post"
      className="grid gap-2 border-2 border-blue-500 w-full h-auto p-6 rounded-md mb-10"
    >
      <div className="grid w-full items-center gap-1.5">
        <label>Full Name</label>
        <input
          type="text"
          className="flex w-full rounded-md border h-10 p-2"
          placeholder="Full Name"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label>Email</label>
        <input
          type="email"
          className="flex w-full rounded-md border h-10 p-2"
          placeholder="contact@email.com"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label>Company</label>
        <input
          type="email"
          className="flex w-full rounded-md border h-10 p-2"
          placeholder="Your company"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label>Tell me what you want help with</label>
        <input
          type="email"
          className="flex w-full rounded-md border h-20 p-2"
        />
      </div>
      <button className="bg-blue-200 w-auto border p-2">Submit message</button>
    </form>
  );
};

export default Form;
