import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";

const SalaryPage = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);
  //   console.log(searchText);

  useEffect(() => {
    fetch("salary.json")
      .then((res) => res.json())
      .then((data) => setSalary(data));
  }, [searchText]);

  const handleSearch = () => {
    const filter = salary.filter(
      (job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    console.log(filter);
    setSalary(filter);
  };
  console.log(searchText);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Estimate Salary"} path={"Salary"} />
      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full rounded bg-[#f8f0f0] shadow-2xl"
          />
          <button
            onClick={handleSearch}
            className="bg-green text-white font-semibold px-8 py-2 rounded-sm mb-4   shadow-2xl"
          >
            Search
          </button>
        </div>
      </div>

      {/* Salary display card */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center">
        {salary.map((data) => (
          <div key={data.id} className="shadow-lg px-4 py-8 rounded">
            <h4 className="font-semibold text-xl">{data.title}</h4>
            <p className="my-2 font-medium text-green text-lg">{data.salary}</p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/"
                className="hover:bg-green hover:text-white px-4 py-2 rounded-md border border-black shadow-xl hover:underline"
              >
                {data.status}
              </a>
              <a
                href="/"
                className="hover:bg-green hover:text-white px-4 py-2 rounded-md border border-black shadow-xl hover:underline"
              >
                {data.skills}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryPage;
