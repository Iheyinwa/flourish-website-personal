import PropTypes from "prop-types";
import { useState } from "react";
import { nairaBankAccounts, domBankAccounts } from "../constants/data";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import fidelity from "../assets/images/fidelity.png";
import flag from "../assets/icons/9ja.png";

const BankCard = ({ name, accountNumber, bank, bankAlt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      toast.success("Copied");

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="flex items-end px-10 py-10 w-full bg-white rounded-2xl gap-4 h-full">
      <div className="flex flex-col gap-4 w-full h-full">
        {bank && (
          <div className="w-[100px] h-fit">
            <img
              loading="lazy"
              src={bank}
              alt={bankAlt}
              className="h-10 w-auto object-contain"
            />
          </div>
        )}
        {/* <h3 className="text-[24.65px] tracking-[-1%] leading-[98%] font-stemBold">
          {name}
        </h3>{" "} */}
        <p className="tracking-[5%] leading-[143%] font-redhat uppercase">
          {name}{" "}
        </p>{" "}
        <h3 className="text-[24.65px] tracking-[-1%] leading-[98%] font-stemBold">
          {accountNumber}
        </h3>{" "}
      </div>
      <div
        onClick={handleCopy}
        className="cursor-pointer flex items-center justify-center"
      >
        {copied ? (
          <IoCheckmarkOutline size={22} className="text-green-500" />
        ) : (
          <IoCopyOutline size={22} />
        )}
      </div>
    </div>
  );
};

BankCard.propTypes = {
  name: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  bank: PropTypes.string,
  bankAlt: PropTypes.string,
};

export default function Paystack() {
  const [naira, setNaira] = useState("naira");

  return (
    <>
      <section className="flex justify-center items-center px-[20px] lg:px-[40px] xl:px-[150px] py-[60px]">
        <div className="flex justify-center flex-col gap-4 items-center w-full ">
          <div className="flex justify-between gap-4 p-3 items-center w-fit mx-auto bg-[#F8FAFF] rounded-full">
            <span
              onClick={() => setNaira("naira")}
              className={`  ${naira === "naira" ? "text-white bg-brandBlue" : ""} font-medium transition-all duration-200 mr-2 cursor-pointer rounded-full px-4 py-3 md:px-8 md:py-4`}
            >
              NAIRA ACCOUNT
            </span>
            <span
              onClick={() => setNaira("dollar")}
              className={` ${naira === "dollar" ? "text-white bg-brandBlue" : ""} cursor-pointer transition-all duration-200 font-medium rounded-full px-4 py-3 md:mr-4 md:px-8 md:py-4`}
            >
              DOMICILIARY ACCOUNT
            </span>
          </div>

          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <div className="flex items-center justify-between w-full ">
              {naira !== "naira" && (
                <div className="w-[100px] h-fit">
                  <img
                    loading="lazy"
                    src={fidelity}
                    alt={"Fidelity"}
                    className="w-fit h-10 object-contain"
                  />
                </div>
              )}
              <img
                loading="lazy"
                src={flag}
                alt={`nigeria flag`}
                className="shrink-0 w-6 aspect-square ml-auto"
              />
            </div>
            <div className=" grid grid-cols-1 gap-[22px] lg:grid-cols-2 w-full">
              {naira === "naira" ? (
                <>
                  {nairaBankAccounts.map((bankAccount, i) => (
                    <div key={i}>
                      <BankCard
                        name={bankAccount.name}
                        accountNumber={bankAccount.accountNumber}
                        bank={bankAccount.bank}
                        bankAlt={bankAccount.bankAlt}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {domBankAccounts.map((bankAccount, i) => (
                    <div key={i}>
                      <BankCard
                        name={bankAccount.name}
                        accountNumber={bankAccount.accountNumber}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <Toaster position="bottom-center" />
    </>
  );
}
