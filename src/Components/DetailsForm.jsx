import { useState } from "react";
import toast from "react-hot-toast";

const DetailsForm = () => {
  const [checkedValues, setCheckedValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedValues({
      ...checkedValues,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(checkedValues).some((checked) => checked)) {
      toast.error("Please check at least one checkbox.");
      return;
    }
    toast.success("Form is submitted successfully");
  };

  return (
    <div className="">
      <div className="p-3 space-y-1 bg-[#1C66D7] text-white">
        <h1 className="text-lg font-bold">Interested in studying UX?</h1>
        <p className="text-sm">
          SG can help – fill in your details and we’ll call you back.
        </p>
      </div>
      <div className="bg-[#D9D9D9] px-3 py-5">
        <form onSubmit={handleSubmit} className="w-full space-y-6 text-sm">
          <input
            required
            type="text"
            placeholder="First Name*"
            className="w-full bg-[#D9D9D9] border-b-[1px] border-[#949392] focus:border-s-0 focus:outline-none"
          />

          <input
            required
            type="text"
            placeholder="Last Name*"
            className="w-full bg-[#D9D9D9] border-b-[1px] border-[#949392] focus:border-s-0 focus:outline-none"
          />

          <input
            required
            type="email"
            placeholder="Email Address*"
            className="w-full bg-[#D9D9D9] border-b-[1px] border-[#949392] focus:border-s-0 focus:outline-none"
          />

          <div className="flex items-center justify-between gap-5 border-b-[1px] border-[#949392]">
            <select
              required
              className="bg-[#D9D9D9] border-[#949392] focus:border-s-0 focus:outline-none"
            >
              <option value="+880">+880 (BD)</option>
              <option value="+44">+44 (UK)</option>
            </select>
            <input
              required
              type="tel"
              placeholder="Mobile Number*"
              className="w-full bg-[#D9D9D9] border-[#949392] focus:border-none focus:outline-none"
            />
          </div>

          <div className="w-full border-b-[1px] border-[#949392]">
            <label htmlFor="" className="text-[#949392]">
              Your Preferred Study Course*
            </label>
            <select
              required
              className="w-full bg-[#D9D9D9] border-[#949392] focus:border-s-0 focus:outline-none"
            >
              <option value="">Please-Select</option>
              <option value="computer-science">Computer Science</option>
              <option value="engineering">Engineering</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div className="w-full text-sm border-b-[1px] border-[#949392]">
            <label htmlFor="" className="text-[#949392]">
              Nearest SG office*
            </label>
            <select
              required
              className="w-full bg-[#D9D9D9] border-[#949392] focus:border-s-0 focus:outline-none"
            >
              <option value="please-select">Please-Select</option>
              <option value="dhaka">Dhaka</option>
              <option value="chattogram">Chattogram</option>
              <option value="khulna">Khulna</option>
            </select>
          </div>

          <div className="w-full text-sm border-b-[1px] border-[#949392]">
            <label htmlFor="" className="text-[#949392]">
              How would you fund your course?*
            </label>
            <select
              required
              className="w-full bg-[#D9D9D9] border-[#949392] focus:border-s-0 focus:outline-none"
            >
              <option value="please-select">Please-Select</option>
              <option value="self-funded">Self-funded</option>
              <option value="student-loan">Student loan</option>
              <option value="scholarship">Scholarship</option>
            </select>
          </div>

          <div className="w-full text-sm border-b-[1px] border-[#949392]">
            <label htmlFor="" className="text-[#949392]">
              Preferred Study Level*
            </label>
            <select
              required
              className="w-full bg-[#D9D9D9] border-[#949392] focus:border-s-0 focus:outline-none"
            >
              <option value="please-select">Please-Select</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="postgraduate">Postgraduate</option>
            </select>
          </div>

          <div className="pt-5 space-y-3">
            <div>
              SG will not share your details with others without your
              permission:
            </div>
            <div className="space-y-2">
              <div className="flex justify-start items-start gap-2">
                <div className="pt-1">
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    name="checkbox1"
                  />
                </div>
                <label htmlFor="">I agree to SG Terms and Privacy Policy</label>
              </div>
              <div className="flex justify-start items-start gap-2">
                <div className="pt-1">
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    name="checkbox2"
                  />
                </div>
                <label htmlFor="">
                  Please contact me by phone, email or SMS to assist with my
                  enquiry
                </label>
              </div>
              <div className="flex justify-start items-start gap-2">
                <div className="pt-1">
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    name="checkbox3"
                  />
                </div>
                <label htmlFor="">
                  I would like to receive updates and offers from IDP
                </label>
              </div>
            </div>
            <div className="text-red-500">
              {checkedValues.length === 0 ? (
                <p>Please check at least one checkbox.</p>
              ) : (
                ""
              )}
            </div>
            <button className="btn bg-[#f73b02] hover:bg-[#f73b02] focus:bg-[#FF3D00] w-full">
              Help Me Study UX
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
