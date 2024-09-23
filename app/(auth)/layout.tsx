export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      {/* Phần trái: Hình ảnh và nội dung */}
      <div className="lg:flex-1 bg-gradient-to-r from-blue-600 to-indigo-300 p-10 flex items-center justify-center">
        <div className="text-center">
          <img
            src="/picture.png"
            alt="Minh họa tên lửa"
            className="w-1/2 lg:w-2/3 mx-auto mb-8 drop-shadow-lg"
          />
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Đăng Nhập Để Trải Nghiệm Mua Sắm Tốt Nhất
          </h1>
          <p className="text-white text-sm lg:text-lg">
            Nếu bạn chưa có tài khoản, hãy{" "}
            <a href="/" className="text-yellow-300 font-bold underline">
              Tham gia ngay!!
            </a>
          </p>
        </div>
      </div>

      {/* Phần phải: Form đăng nhập (children) */}
      <div className="lg:flex-1 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
          {children}
        </div>
      </div>

      {/* Phần mô tả dưới (ẩn trên màn hình lớn và hiện trên màn hình nhỏ) */}
      <div className="lg:hidden bg-gray-100 p-6 text-center w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Tại sao nên chọn chúng tôi?
        </h2>
        <p className="text-gray-600">
          Chúng tôi mang đến trải nghiệm mua sắm nhanh chóng, tiện lợi với hàng
          ngàn sản phẩm chất lượng từ khắp nơi. Đăng ký và khám phá những ưu đãi
          độc quyền ngay hôm nay!
        </p>
      </div>
    </div>
  );
}
