"use client";
import React, { useRef } from "react";

interface BillComponentProps {
  orderId: string;
  tableId: string;
  regionId: string;
  orderDate: string;
  checkinTime: string;
  checkoutTime: string;
  guessCount: number;
  orderItems: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

function formatThousand(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const BillComponentLayout = ({
  orderId,
  tableId,
  regionId,
  orderDate,
  checkinTime,
  checkoutTime,
  guessCount,
  orderItems,
}: BillComponentProps) => {
  const totalPrice = orderItems.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );
  const tax = Math.round(totalPrice * 0.08);
  const billRef = useRef<HTMLDivElement>(null);
  const handlePrint = () => {
    const printContent = billRef.current;
    const win = window.open("", "", "width=900,height=600");
    if (win == null || !printContent) return;
    win.document.write("<html><head><title>Print Bill</title>");
    win.document.write(
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">'
    ); // Linking Tailwind CSS for the print window
    win.document.write("</head><body>");
    win.document.write(printContent.outerHTML);
    win.document.write("</body></html>");
    win.document.close();
    win.print();
  };

  return (
    <div>
      <div className="text-center mb-4 mt-10">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
        >
          Print Bill
        </button>
      </div>
      <div
        ref={billRef}
        className="max-w-md mx-auto mt-10 bg-white shadow-md p-6 rounded-lg"
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold">
            Nhà Hàng Gumihogrill & Shabu - CS2
          </h1>
          <p>
            304 Thái Hà, Đống Đa, Phường Trung Liệt, Quận Đống Đa, Hà Nội, Việt
            Nam
          </p>
          <hr className="my-2" />
          <p className="font-semibold">PHIẾU TẠM TÍNH</p>
          <p className="font-bold">Số HD: 610016</p>
        </div>

        {/* Bill details */}
        <div className="mb-4 grid grid-cols-2">
          <p>
            <span className="font-bold">Mã HD:</span> #{orderId}
          </p>
          <p>
            <span className="font-bold">Bàn:</span> {tableId} - {regionId}
          </p>
          <p>
            <span className="font-bold">Ngày:</span> {orderDate}
          </p>
          <p>
            <span className="font-bold">Giờ vào:</span> {checkinTime}
          </p>
          <p>
            <span className="font-bold">Giờ ra:</span> {checkoutTime}
          </p>
          <p>
            <span className="font-bold">Số khách:</span> {guessCount}
          </p>
          <p>
            <span className="font-bold">TN:</span> Quản lý
          </p>
        </div>

        {/* Item list */}
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">STT</th>
              <th>Tên món</th>
              <th>SL</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item) => (
              <tr key={item.name} className="border-b">
                <td className="py-1">1</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{formatThousand(item.price)}</td>
                <td>{formatThousand(item.price * item.quantity)}</td>
              </tr>
            ))}
            {/* Add remaining rows as needed */}
          </tbody>
        </table>

        {/* Total */}
        <div className="mt-4 text-right">
          <p className="font-bold">Thành tiền: {formatThousand(totalPrice)}</p>
          <p className="font-bold">
            Tiền thuế (VAT 8%): {formatThousand(tax)} đ
          </p>
          <p className="font-bold text-lg">
            Tổng tiền thanh toán: {formatThousand(totalPrice + tax)} đ
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Hóa đơn nhà hàng chỉ xuất trong ngày.</p>
          <p>Cảm ơn Quý Khách</p>
          <p>Powered by IPOS.vn</p>
        </div>
      </div>
    </div>
  );
};

export default BillComponentLayout;
