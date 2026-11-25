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
        { label: "Chức vụ",       value: "Trưởng phòng Hậu cần - Kỹ thuật" },
        { label: "Đơn vị",        value: "Đoàn Nghi Lễ Quân Đội" },
        { label: "Ngày gia nhập", value: "Đang cập nhật" },
        { label: "Liên hệ",       value: "Đang cập nhật" }
      ]
    },
    {
      id: "don-vi", icon: "shield",
      title: "Thông tin đơn vị",
      items: [
        { label: "Tên đơn vị",     value: "Đoàn Nghi Lễ Quân Đội" },
        { label: "Phương châm",    value: "Trung thành vô hạn, đoàn kết một lòng, năng động sáng tạo, chính quy mẫu mực" },
        { label: "Nhiệm vụ",       value: "Tham gia các buổi duyệt binh, lễ đón và nghi thức chào cờ" },
        { label: "Hợp tác cùng",   value: "Quân đội nhân dân Việt Nam" },
        { label: "Ngày thành lập", value: "Đang cập nhật" },
        { label: "Quân số",        value: "Đang cập nhật" }
      ]
    },
    {
      id: "phong-ban", icon: "briefcase",
      title: "Phòng ban đang công tác",
      items: [
        { label: "Phòng ban",  value: "Phòng Hậu cần - Kỹ thuật" },
        { label: "Trưởng phòng", value: "AzurXVMHG" },
        { label: "Nhân sự",    value: "3 thành viên" },
        { label: "Nhiệm vụ",   value: "Quản lý trang phục, trang bị, vật tư và bảo đảm kỹ thuật cho các buổi nghi lễ" }
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
        name: "Lễ phục nghi lễ (màu trắng)",
        photo: "",
        desc: "Trang phục trang trọng nhất của đoàn, mặc trong duyệt binh, lễ đón và chào cờ. Gồm mũ kê-pi trắng gắn quân hiệu, áo trắng dài tay cổ đứng cài kín cúc, quần trắng ly là sắc nét, thắt lưng da, giày da đen đánh bóng, kèm găng tay trắng, cầu vai và huy hiệu đơn vị."
      },
      {
        name: "Quân phục thường dùng",
        photo: "",
        desc: "Mặc hằng ngày khi làm việc, họp và giao ban. Gồm mũ theo quy định, bộ quân phục có cấp hiệu và phù hiệu, biển tên đeo đúng vị trí, giày da đen hoặc giày quân dụng."
      },
      {
        name: "Trang phục kỹ thuật, bảo hộ",
        photo: "",
        desc: "Dành cho công việc kiểm tra, sửa chữa, vận chuyển trang bị tại Phòng Hậu cần - Kỹ thuật. Gồm bộ đồ kỹ thuật bền, dễ vận động, găng tay bảo hộ và giày bảo hộ chống trượt. Không mặc khi vào đội hình nghi lễ."
      },
      {
        name: "Trang phục huấn luyện",
        photo: "",
        desc: "Mặc trong các buổi tập đội hình và rèn thể lực. Gồm áo thun huấn luyện của đơn vị, quần thể thao hoặc quần huấn luyện và giày thể thao; cả đội mặc đồng bộ."
      }
    ]
  },

  // Thành viên — thêm "photo" để dùng ảnh thật, ví dụ photo: "images/bao.jpg"
  // (nếu bỏ trống, trang sẽ hiện chữ cái viết tắt của tên)
  teamTitle: "Thành viên trong phòng Hậu cần - Kỹ thuật",
  members: [
    { name: "AzurXVMHG",    role: "Trưởng phòng",       photo: "" },
    { name: "Thainguyen13127real",     role: "Nhân sự",          photo: "" },
    { name: "Hayphaion",     role: "Nhân sự",          photo: "" }
  ]
};
