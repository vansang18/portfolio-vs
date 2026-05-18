# Portfolio Cá Nhân - Nguyễn Văn Sang

Chào mừng bạn đến với mã nguồn Portfolio cá nhân cao cấp của **Nguyễn Văn Sang**. Trang web được thiết kế hiện đại, chuyên nghiệp, thể hiện sự giao thoa độc đáo giữa hai vai trò: **Backend Developer** và **Video Editor**.

## 🌟 Tính Năng Nổi Bật

- **Thiết Kế Cực Kỳ Cao Cấp (Premium Design):** Phong cách Dark Mode chủ đạo kết hợp các vệt sáng hào quang Neon tương phản, các thẻ giao diện hiệu ứng kính mờ (Glassmorphism) vô cùng bắt mắt.
- **Hào Quang Tương Tác (Cursor Glow):** Một quầng sáng huyền ảo luôn di chuyển mượt mà bám theo con trỏ chuột của người dùng, tạo cảm giác vô cùng công nghệ và sinh động.
- **Chữ Chạy Tự Động (Typing Effect):** Phần giới thiệu bản thân hiển thị các chức danh công việc chạy mượt mà dưới dạng máy đánh chữ.
- **Lọc Dự Án Thông Minh (Smart Filtering):** Phân tách và lọc nhanh các dự án Lập trình Backend hoặc Dựng phim chỉ bằng một cú click chuột mà không cần tải lại trang.
- **Trình Xem Video Tích Hợp (Video Popup Modal):** Khi bấm vào các dự án Video Editor, một cửa sổ popup hiện đại sẽ mở ra để phát trực tiếp video nhúng (Youtube, Vimeo...) cực kỳ tiện lợi.
- **Biểu Mẫu Liên Hệ Hiện Đại (Interactive Form):** Form liên hệ với hiệu ứng nhãn nổi tự động (floating label), kiểm tra dữ liệu đầu vào và thông báo gửi thành công vô cùng cuốn hút.
- **Chế Độ Sáng/Tối (Dark/Light Theme):** Nút bật/tắt thay đổi giao diện linh hoạt, tự động ghi nhớ tùy chọn của người dùng cho lần truy cập sau.
- **Tối Ưu Hóa Di Động (Responsive Design):** Hiển thị hoàn hảo trên tất cả màn hình từ máy tính để bàn, máy tính bảng đến điện thoại di động thông minh.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
portfolio-vs/
│
├── index.html          # File cấu trúc HTML5 chính (Đã tối ưu hóa SEO)
│
├── css/
│   └── style.css       # File định kiểu CSS3 tùy biến (Glassmorphism & Neon)
│
├── js/
│   └── main.js         # Xử lý toàn bộ logic tương tác mượt mà bằng JS thuần
│
├── package.json        # Cấu hình npm (Dành cho việc mở rộng)
├── vite.config.js      # Cấu hình Vite dev server
└── README.md           # Hướng dẫn sử dụng dự án (File này)
```

---

## 🚀 Hướng Dẫn Khởi Chạy

Trang web này được xây dựng bằng công nghệ web tiêu chuẩn và cực kỳ nhẹ, cho phép bạn khởi chạy bằng nhiều cách khác nhau:

### Cách 1: Chạy Trực Tiếp (Tiện lợi & Nhanh nhất)
Bạn **không cần cài đặt bất kỳ công cụ nào**. Chỉ cần mở thư mục dự án và:
1. Tìm file `index.html`.
2. Click đúp chuột (Double click) vào file để mở trực tiếp trên trình duyệt Chrome, Edge, Safari hoặc Firefox.
3. Trang web sẽ chạy hoàn hảo với đầy đủ mọi hiệu ứng và chức năng.

### Cách 2: Chạy Dev Server bằng Node.js / Vite (Dành cho Lập trình viên)
Nếu bạn muốn phát triển hoặc chỉnh sửa dự án này một cách chuyên nghiệp với tính năng tự động tải lại (Hot Reload):
1. Cài đặt Node.js trên máy tính của bạn (nếu chưa cài đặt).
2. Mở terminal tại thư mục dự án `portfolio-vs`.
3. Chạy lệnh cài đặt các gói hỗ trợ:
   ```bash
   npm install
   ```
4. Chạy lệnh khởi động môi trường phát triển:
   ```bash
   npm run dev
   ```
5. Mở trình duyệt và truy cập địa chỉ được cung cấp (mặc định là `http://localhost:3000`).

---

## 🛠️ Hướng Dẫn Tùy Biến Thông Tin

Để thay đổi thông tin cá nhân của bạn, hãy mở các file tương ứng và chỉnh sửa:
- **Thông tin liên hệ & Văn bản:** Mở file `index.html` và chỉnh sửa các đoạn văn bản trong các thẻ HTML (như số điện thoại, địa chỉ email, danh sách dự án...).
- **Màu sắc chủ đạo & Phông chữ:** Mở file `css/style.css`, tìm phần `:root` ở trên cùng để tùy chỉnh các biến màu sắc Neon hoặc Font chữ từ Google Fonts.
- **Link Video nhúng của bạn:** Tìm đến các thẻ có thuộc tính `data-video-src` trong `index.html` (đoạn Dự án tiêu biểu) và thay thế link Youtube của bạn vào đó.

*Chúc bạn có một trang Portfolio thật ưng ý và gặt hái được nhiều thành công!*
