# App tạo bằng Create-react-app
## Demo Link https://fir-match-making.web.app/
## Cách đăng nhập Google
### Coldstart của Server
Do sử dụng Server miễn phí nên Click nút Signin sẽ thực hiện lệnh Fetch qua Server trên Replit, Server này sẽ có Coldstart nên bạn cần đợi tầm 30s để có popup báo "Đăng nập thành công"
## Cách sử dụng xếp cặp thi đấu
### Lấy danh sách thi đấu từ file Excel trên Demo link
Lấy thông tin từ File excel rất đơn giản, copy hết text, và paste vào form trong Data tại https://fir-match-making.web.app/xuatexcel
### Sử dụng App
App thiết kế để xếp cặp đấu và ghi chú nhanh chóng, kích hoạt lưu thông tin vào từng thẻ bằng cách tick vào box, sau đó chọn thắng/thua, đối thủ, các ghi chú ván đấu và Click lưu để chuyển về Server... Trên máy khác có thể bấm nút Sync để lấy thông tin từ Server về máy mình
### Hướng dẫn chi tiết
Vào Demo link và bật Guide: ON, do có tới 5 vòng đấu và App được thiết kế để chỉ vừa với màn hình điện thoại nên sẽ cần Click vào 1-2-3-4-5 để tới được thông tin các vòng đấu. Nguyên tắc sắp xếp dựa trên hạng gần nhau sẽ gặp nhau
### Kết nối với server
https://fir-match-making.web.app/xuatexcel sẽ gửi JSON text về server, server đọc JSON text và ghi vào File. Khi vào https://fir-match-making.web.app/daugiai sẽ nhận loại toàn bộ thông tin thi đấu
### Cách hoạt động
Hoạt động dựa trên React context, mỗi lần lưu thông tin thì Client sẽ gửi toàn bộ context mới về Server và khi bấm Sync, context được update và edit toàn bộ state(các thẻ)

