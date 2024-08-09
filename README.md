# Các kiến thức học được

## NextJs

### Page and Layout

- page.js là trang UI duy nhất cho 1 tuyến ví dụ muốn có 1 tuyến login thì tạo 1 folder login và thêm file page.js
- Layout là giao diện chung khi điều hướng sẽ giữ nguyên còn phần children sẽ đc thay thế bằng các nd tương ứng

### link and navigation

- <Link href=""> giống như thẻ a nó sẽ điều hướng tới 1 link nhất định
- useRoute là 1 hook chỉ được dùng ở client component
- redirect là 1 function chỉ đc dùng ở Server component

### Loadding

- là 1 UI dự phòng trong lúc chờ dữ liệu đc tải những nd trong file loading.js sẽ đc hiển thị ra

### Route Group

- ký hiệu (name folder)
- ngăn thư mục đó được đưa vào đường dẫn URL của tuyến đường.

### Dynamic route

- ký hiệu [name folder]
- được truyền dưới dạng param, thường được sử dụng để chi tiết hóa 1 nội dung bằng cách truyền slug

### Rendering

- server component: UI có thể được render và kết lưu vào bộ nhớ trên máy chủ và sử dụng lại trong các yêu cầu tiếp
  thường được sử dụng cho các UI tĩnh như header,footer,... và các xử lý logic, api, cần bảo mật. Không sử dụng được. Ví dụ ở file page.tsx của users
  các hook như useEffect(), useState(),... Các function onClick(),... trong server component
- Client Component: là Ui mà người dùng tương tác được hiển thị trước trên máy chủ, có thể sử dụng trình lắng nghe trạng thái, hiệu ứng và sự kiện để cung cấp phản hồi ngay cho ng dùng. Ví dụ ở file page.tsx của app

### MetaData

- API siêu dữ liệu có thể được sử dụng để xác định siêu dữ liệu ứng dụng
- static : xuất dữ liệu trong layout.tsx or page.tsx
- dynamic: thường sử dụng hàm generateMetadata để fetch dữ liệu động cho siêu dữ liệu

## Thư viện Antd

- Áp dụng được 1 vài component : menu, table, model, skeleton,messon, notifica

## Tailwind

- nắm bắt đc cách sử dụng tailwind

## Redux Toolkit

- configureStore
- createSlice
- createReducer
- createAsyncThunk
