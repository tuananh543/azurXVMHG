// ============================================================
//  FILE CẤU HÌNH — sửa nội dung trang tại đây rồi lưu (Ctrl+S)
//  Muốn đổi ảnh: thay file trong thư mục images/ (giữ nguyên tên)
//  hoặc đổi đường dẫn bên dưới.
// ============================================================
const CONFIG = {
  // Ảnh (đường dẫn tính từ thư mục chứa index.html)
  cover:  "images/cover.jpg",     // ảnh bìa lớn
  avatar: "images/avatar.jpg",    // ảnh đại diện bo tròn (giữa trang)
  logo:   "images/logo.png",      // icon hợp tác thứ 1 (nhỏ, trên cùng bên trái)
  partnerIcon: "images/partner.png", // icon hợp tác thứ 2 (nhỏ, trên cùng bên phải)
  // Đuôi file có thể là .jpg .png .webp .svg ... miễn đường dẫn đúng là được

  // Thông tin chính
  name: "AzurXVMHG",
  role: "Đoàn Nghi Lễ Quân Đội",
  bio:  "Trung thành vô hạn, đoàn kết một lòng, năng động sáng tạo, chính quy mẫu mực, vì Tổ Quốc, vì nhân dân phục vụ",
  partnerText: "Hợp tác cùng Quân đội nhân dân Việt Nam",

  // Số liệu (thêm/bớt tuỳ ý)
  stats: [
    { value: "5+", label: "Năm kinh nghiệm" },
    { value: "40", label: "Dự án" },
    { value: "12", label: "Khách hàng" }
  ],

  // Mỗi khối dưới đây là MỘT TRANG riêng, tự có mục trong thanh menu bên trái.
  // Icon có sẵn: home, person, shield, briefcase, shirt, doc
  // Các khối thông tin dạng "nhãn: nội dung" — thêm/bớt/đổi tên khối tuỳ ý
  // (hiện theo đúng thứ tự bên dưới, nằm giữa phần số liệu và phần trang phục)
  infoBlocks: [
    {
      id: "ca-nhan", icon: "person",   // id = tên trang (hiện trên thanh địa chỉ), icon = biểu tượng ở thanh menu
      title: "Thông tin cá nhân",
      items: [
        { label: "Tên",           value: "AzurXVMHG" },
        { label: "Quân hàm",      value: "Thượng sĩ" },
        { label: "Chức vụ",       value: "Trưởng phòng Hậu cần - Kỹ thuật" },
        { label: "Đơn vị",        value: "Đoàn Nghi Lễ Quân Đội" },
        { label: "Ngày gia nhập", value: "13/03/2026" }
      ]
    },
    {
      id: "don-vi", icon: "shield",
      title: "Thông tin đơn vị",
      items: [
        { label: "Tên đơn vị",     value: "Đoàn Nghi Lễ Quân Đội" },
        { label: "Khẩu hiệu",      value: "Trung thành vô hạn, đoàn kết một lòng, năng động sáng tạo, chính quy mẫu mực" },
        { label: "Nhiệm vụ",       value: "Tham gia các buổi duyệt binh, nghi thức chào cờ, lễ đón nguyên thủ quốc gia và các Đoàn Đại Sứ Quán." },
        { label: "Hợp tác cùng",   value: "Quân đội nhân dân Việt Nam" },
        { label: "Ngày thành lập", value: "01/07/2025" },
        { label: "Quân số",        value: "29 thành viên tiêu binh danh dự" }
      ]
    },
    {
      id: "phong-ban", icon: "briefcase",
      title: "Phòng ban đang công tác",
      items: [
        { label: "Phòng ban",    value: "Phòng Hậu cần - Kỹ thuật" },
        { label: "Trưởng phòng", value: "AzurXVMHG" },
        { label: "Nhân sự",      value: "3 thành viên" },
        { label: "Nhiệm vụ",     value: "Quản lý trang phục, trang bị, vật tư và bảo đảm kỹ thuật cho các buổi nghi lễ" }
      ]
    }
  ],

  // Trang phục đơn vị được phép mặc — mỗi loại là một ô gồm: ảnh + tên + giới thiệu.
  // photo: đường dẫn ảnh, ví dụ "images/le-phuc.jpg" (bỏ trống hoặc sai đường dẫn thì hiện ô "Chưa có ảnh")
  // desc: giới thiệu / mô tả chi tiết (nội dung dưới là mẫu — hãy sửa cho đúng quy định đơn vị)
  uniforms: {
    id: "trang-phuc", icon: "shirt", nav: "Trang phục",   // nav = tên ngắn hiện trên thanh menu
    title: "Trang phục đơn vị được phép mặc",
    intro: "Các loại trang phục theo từng hoàn cảnh sử dụng.",
    items: [
      {
        name: "K08 Tiêu binh danh dự Lục Quân",
        photo: "images/k08-lucquan.jpg",
        desc: "Là trang phục nghi lễ, danh dự và tiêu binh thuộc hệ thống quân phục cải tiến K08 của Quân đội nhân dân Việt Nam. Sử dụng cho đội danh dự, đội nghi lễ, tiêu binh gác và các khối diễu binh, duyệt binh, đón tiếp khách cấp cao hoặc các ngày lễ lớn của đất nước và quân đội. K08 Tiêu binh danh dự Lục quân sử dụng màu xanh ô liu sẫm làm tông màu chủ đạo. "
      },
      {
        name: "K08 Tiêu binh danh dự Hải Quân",
        photo: "",
        desc: "Là trang phục nghi lễ, danh dự và tiêu binh thuộc hệ thống quân phục cải tiến K08 của Quân đội nhân dân Việt Nam. Sử dụng cho đội danh dự, đội nghi lễ, tiêu binh gác và các khối diễu binh, duyệt binh, đón tiếp khách cấp cao hoặc các ngày lễ lớn của đất nước và quân đội. K08 Tiêu binh danh dự Hải quân sử dụng màu trắng tinh khiết làm tông màu chủ đạo cho cả trang phục chính và mũ, kết hợp với các chi tiết nhận diện màu xanh đen (tím than) và màu vàng đồng đặc trưng của lực lượng Hải quân."
      },
      {
        name: "K08 Tiêu binh danh dự PK-KQ",
        photo: "images/k08-pkkq.jpg",
        desc: "Là trang phục nghi lễ, danh dự và tiêu binh thuộc hệ thống quân phục cải tiến K08 của Quân đội nhân dân Việt Nam. Sử dụng cho đội danh dự, đội nghi lễ, tiêu binh gác và các khối diễu binh, duyệt binh, đón tiếp khách cấp cao hoặc các ngày lễ lớn của đất nước và quân đội. K08 Tiêu binh danh dự PK-KQ sử dụng màu xanh hòa bình (xanh da trời nhạt / xanh dương nhạt) làm tông màu chủ đạo cho trang phục chính, kết hợp với các chi tiết nhận diện màu xanh hòa bình sẫm (xanh dương đậm) đặc trưng của lực lượng canh giữ bầu trời."
      },
      {
        name: "K16 Off-duty(thường phục)",
        photo: "images/k16-offduty.jpg",
        desc: "K16 thường phục là cách gọi bộ quân phục thường dùng (sinh hoạt, học tập, đi phép) của hạ sĩ quan, chiến sĩ và học viên trong Quân đội Nhân dân Việt Nam. Dùng cho sinh hoạt hằng ngày, học tập, lao động, đi phép và các hoạt động thường xuyên. Quần áo đồng bộ màu xanh đặc trưng của quân binh chủng, vải bền, thoáng khí và đường may chắc chắn."
      }
    ]
  },

  // Thành viên — thêm "photo" để dùng ảnh thật, ví dụ photo: "images/bao.jpg"
  // (nếu bỏ trống, trang sẽ hiện chữ cái viết tắt của tên)
  teamTitle: "Thành viên trong phòng Hậu cần - Kỹ thuật",
  members: [
    { name: "AzurXVMHG",               role: "Trưởng phòng",       photo: "" },
    { name: "Thainguyen13127real",     role: "Nhân sự",          photo: "" },
    { name: "Hayphaion",               role: "Nhân sự",          photo: "" }
  ]
};
