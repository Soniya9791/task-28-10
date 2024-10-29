import React, { useState } from "react";

const Home = () => {
  const [data, setdata] = useState({ fname: "", lname: "" });
  const [tdata, settdata] = useState([]);
  const handlechange = (element) => {
    console.log(element.target.name + " " + element.target.value);

    setdata({ ...data, [element.target.name]: element.target.value });
  };
  const handleSubmit = (element) => {
    element.preventDefault();
    settdata([...tdata, data]);
    setdata({ fname: "", lname: "" });
  };
  return (
    <div >
       <form onSubmit={handleSubmit}>
      <div className="bg-red-200 p-10 w-full flex justify-center gap-3 " >
        <div className="flex flex-col gap-3">
          <div className=" flex flex-row gap-2">
            <label for="fname">First name : </label>
            <input
              className="bg-black text-cyan-50"
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter name"
              value={data.fname}
              onChange={handlechange}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label for="lname">Last name : </label>
            <input
              className="bg-black text-cyan-50"
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter name"
              value={data.lname}
              onChange={handlechange}
            />
          </div>
        </div>
        <button className="bg-lime-700 rounded-3xl px-2 gap-2">Submit</button>
      </div>
      </form>

      <div className="p-40 bg-red-200 w-full">
        <table
          className="w-full text-left border border-separate rounded border-slate-200"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th
                scope="col"
                className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                First Name
              </th>
              <th
                scope="col"
                className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Last Name
              </th>
            </tr>
          </thead>
          <tbody>
            {tdata.map((data, index) => (
              <tr key={index}>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
