"use client";
import React, { useRef } from "react";

const items = [
  {
    name: "berry banana + oat milk",
    price: 75000,
    quantity: 2,
    total: 75000,
  },
  {
    name: "Đào Cam Sả Đá",
    price: 69000,
    quantity: 1,
    total: 69000,
  },
  {
    name: "Guava Refreshment",
    price: 69000,
    quantity: 4,
    total: 69000,
  },
  {
    name: "coconut nitacha gelato",
    price: 69000,
    quantity: 1,
    total: 69000,
  },
  {
    name: "Matcha Latte",
    price: 69000,
    quantity: 3,
    total: 69000,
  },
];

function formatThousand(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Bill = () => {
  const billRef = useRef();

  const handlePrint = () => {
    const printContent = billRef.current;
    const win = window.open("", "", "width=900,height=600");
    if (!win || !printContent) return;
    win.document.write("<html><head><title>Print Bill</title>");
    win.document.write(
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">'
    );
    win.document.write("</head><body>");
    win.document.write(printContent.outerHTML);
    win.document.write("</body></html>");
    win.document.close();
    win.print();
  };

  const total = items.reduce(
    (total, current) => current.price * current.quantity + total,
    0
  );

  return (
    <div>
      {/* Print button */}
      <div className="text-center mt-4">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
        >
          Print Bill
        </button>
      </div>

      <div className="max-w-md mx-auto mt-10 bg-white p-6">
        {/* Bill content */}
        <div ref={billRef} className="printable-content">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold"># VOU</h1>
            <p>HÀ NỘI</p>
            <p>DC: 18B Tông Đản - Hoàn Kiếm - Hà Nội</p>
            <p>SDT: 0934509337</p>
            <hr className="my-2" />
            <p className="font-semibold">HÓA ĐƠN THANH TOÁN</p>
            <p className="font-bold">Số: HD310824-0069</p>
          </div>

          {/* Bill details */}
          <div className="mb-4">
            <p>
              <span className="font-bold">Giờ vào:</span> 31/08/2024 15:38
            </p>
            <p>
              <span className="font-bold">Giờ ra:</span> 31/08/2024 15:40
            </p>
            <p>
              <span className="font-bold">Bàn:</span> B.5[A]
            </p>
            <p>
              <span className="font-bold">Thu ngân:</span> Admin
            </p>
            <p>
              <span className="font-bold">Khách hàng:</span> Khách lẻ
            </p>
          </div>

          {/* Item list */}
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">Tên hàng</th>
                <th>Đ. giá</th>
                <th>SL</th>
                <th>TT</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.name} className="border-b">
                  <td className="py-1">{item.name}</td>
                  <td>{formatThousand(item.price)}</td>
                  <td>{item.quantity}</td>
                  <td>{formatThousand(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total */}
          <div className="mt-4 text-right">
            <p className="font-bold">
              Tổng thành tiền: {formatThousand(total)} đ
            </p>
            <p className="font-bold">Tổng cộng: {formatThousand(total)} đ</p>
            <p className="font-bold text-lg">
              Tiền khách trả: {formatThousand(total)} đ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
