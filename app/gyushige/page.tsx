export default function Page() {
  return (
    <div className="max-w-xs mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">NHÀ HÀNG CHAKA</h2>
        <p className="text-xs">
          <strong>74 Bùi Thị Xuân, Hai Bà Trưng, Hà Nội</strong>
        </p>
        <p className="text-sm">Tel: 0243 9981 666 - 0244 5821 666</p>
        <p className="text-sm">http://chakahanoi.com.vn</p>
      </div>

      {/* Bill details */}
      <div className="mb-6 text-sm">
        <div className="grid grid-cols-2">
          <p>
            <span className="font-bold">Số HD:</span>{" "}
          </p>
          <p>
            <span className="font-bold">Bàn:</span> Tầng 1 - A03
          </p>
          <p>
            <span className="font-bold">Ngày:</span> 26/08/2024
          </p>
          <p>
            <span className="font-bold">Giờ vào:</span> 19:44
          </p>
          <p>
            <span className="font-bold">Giờ ra:</span> 20:33
          </p>
          <p>
            <span className="font-bold">TN:</span> Thu Ngân 1
          </p>
        </div>
      </div>

      {/* Item list */}
      <table className="table-auto w-full text-left text-xs">
        <thead>
          <tr>
            <th>TT</th>
            <th>Tên món</th>
            <th>SL</th>
            <th>Đ.Giá</th>
            <th>T.Tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cá lăng mưa tuyết</td>
            <td>1.0</td>
            <td>265,000</td>
            <td>265,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Trà sâm dứa hạt é</td>
            <td>1.0</td>
            <td>45,000</td>
            <td>45,000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cá lăng mỡ chài ăn kèm qué vỉ mắm nêm</td>
            <td>1.0</td>
            <td>165,000</td>
            <td>165,000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Cá lăng nướng muối ớt</td>
            <td>1.0</td>
            <td>245,000</td>
            <td>245,000</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Khăn lạnh</td>
            <td>2.0</td>
            <td>3,000</td>
            <td>6,000</td>
          </tr>
        </tbody>
      </table>

      {/* Total */}
      <div className="text-right mt-4 text-sm">
        <p className="font-bold">Thành tiền: 726,000 VND</p>
        <p className="font-bold">VAT: 0%</p>
        <p className="font-bold text-sm">Tổng tiền thanh toán: 726,000 VND</p>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <p>Cảm ơn Quý khách và hẹn gặp lại!</p>
      </div>
    </div>
  );
}
