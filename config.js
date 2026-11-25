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
      id: "ca-nhan", icon: "person",
      title: "Thông tin cá nhân",
      desc: "AzurXVMHG mang quân hàm Thượng sĩ, giữ chức vụ Trưởng phòng Hậu cần - Kỹ thuật thuộc Đoàn Nghi Lễ Quân Đội. Gia nhập đơn vị từ ngày 13/03/2026."
    },
    {
      id: "don-vi", icon: "shield",
      title: "Thông tin đơn vị",
      desc: "Đoàn Nghi Lễ Quân Đội hợp tác cùng Quân đội nhân dân Việt Nam, hoạt động theo phương châm: Trung thành vô hạn, đoàn kết một lòng, năng động sáng tạo, chính quy mẫu mực. Nhiệm vụ của đơn vị là tham gia các buổi duyệt binh, lễ đón và nghi thức chào cờ."
    },
    {
      id: "phong-ban", icon: "briefcase",
      title: "Phòng ban đang công tác",
      desc: "Phòng Hậu cần - Kỹ thuật do AzurXVMHG làm Trưởng phòng, hiện có 3 thành viên. Phòng phụ trách quản lý trang phục, trang bị, vật tư và bảo đảm kỹ thuật cho các buổi nghi lễ."
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
